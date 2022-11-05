import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useReducer, useState, useRef } from "react";
import Database from "../../data/datasource/db";
import { IMatchResponse, IStartMatchResponse } from "../../data/datasource/IMatchDatasource";
import Deck from "../../domain/model/Deck";
import User from "../../domain/model/User";
import GameService from "../../domain/service/game/GameService";
import { delay } from "../../domain/util/Delay";

let finished = false;

export default function GameViewModel() {
    const service = new GameService();
    const db = Database.getInstance();
    const [users, setUsers] = useState([] as User[]);
    const [deck, setDeck] = useState(new Deck() as Deck);
    const [score, setScore] = useState([0, 0] as number[]);
    const [loading, setLoading] = useState(true);
    const [matchScore, setMatchScore] = useState(1);
    const [, forceReload] = useReducer(x => x + 1, 0);
    const [information, setInformation] = useState("");
    const [canStart, setCanStart] = useState(true);
    let matches = {} as IStartMatchResponse; 
    const toast = useToast()
    const router = useRouter();

    async function startMatch(): Promise<void> {
        console.log('passo1')
        setLoading(true);
        setCanStart(false);
        setUsers(db.users)
        setScore([0, 0])
        finished = false;
        
        try {
            console.log('passo2: ' + JSON.stringify(db.users))
            matches = await service.startMatch(db.users);
            console.log('passo3: ' + JSON.stringify(matches))

            while (matches.matches.length > 0) {
                if (finished) {
                    return;
                }
                console.log('passo4')
                await handleMatch();
            }
            if (finished) {
                setInformation('Partida finalizada')
            } else {
                setInformation(`Jogador ${matches.winner} ganhou o game!`);
            }
            forceReload();
        } catch (error) {
            toast({
                title: 'Erro!',
                description: ""+error,
                status: 'error',
                duration: 3000,
                isClosable: true
            })
            setTimeout(() => {
                router.push('/');
            }, 3000)
        }
    }

    async function stopMatch(): Promise<void> {
        finished = true;
        setScore([0, 0]);
        setMatchScore(1);
        setInformation("");
        setCanStart(true);
    }

    async function handleMatch(): Promise<void> {
        console.log('Entrou match')
        const match = matches.matches.shift() as IMatchResponse;
        const deck = new Deck();

        // PLAYER 1 CARDS
        let cards = []
        for (const item of match.player_1) {
            cards.push(deck.removeCard(item));
        }
        db.users[0].cards = cards;

        // PLAYER 2 CARDS
        cards = []
        for (const item of match.player_2) {
            cards.push(deck.removeCard(item));
        }
        db.users[1].cards = cards;

        // JOKER
        deck.joker = deck.removeCard(match.joker);

        setLoading(false);
        setDeck(deck);
        forceReload()
        await delay(1500)

        let points = 1
        setMatchScore(points);
        for (const play of match.plays) {
            if (finished) {
                return;
            }
            setInformation("");
            const user = db.users[play.player];
            
            switch (play.type) {
                case "PLAY":
                    const card = user.removeCard(play.card!);
                    deck.discardCard(card);
                    //setDeck(deck);
                    break;

                case "TRUCO":
                    setInformation(`Jogador ${user.name} pediu Truco!`);
                    break;

                case "ACCEPT":
                    setInformation(`Jogador ${user.name} aceitou Truco!`);
                    points = (points === 1) ? 3 : points + 3;
                    break;
            
                case "RUN":
                    setInformation(`Jogador ${user.name} correu!`);
                    break;

                case "WIN":
                    setInformation(`Jogador ${user.name} ganhou a partida!`);
                    const newScore = score;
                    newScore[play.player] = (newScore[play.player] ?? 0) + points
                    setScore([newScore[0], newScore[1]]);
                    break;
            
                default:
                    break;
            }
            
            setMatchScore(points);
            forceReload()
            await delay(1500)
        }
    }

    return {
        startMatch,
        users,
        deck,
        score,
        loading,
        matchScore,
        information,
        stopMatch,
        canStart
    }
}