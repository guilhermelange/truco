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
    const [, forceReload] = useReducer(x => x + 1, 0);
    const deck = useRef(new Deck() as Deck);
    const users = useRef([] as User[]);
    const [loading, setLoading] = useState(false);
    const matchScore = useRef(1);
    const score = useRef([0, 0] as number[]);
    const information = useRef('');
    const canStart = useRef(true);
    const matchId = useRef('');
    //const truco = useRef([false, false] as boolean[]);
    const status = useRef(["", ""] as string[]);
    let matches = {} as IStartMatchResponse; 
    const toast = useToast()
    const router = useRouter();

    async function startMatch(): Promise<void> {
        setLoading(true);
        canStart.current = false;
        users.current = db.users
        score.current = [0, 0]
        finished = false;
        status.current = ["", ""]

        try {
            matches = await service.startMatch(db.users);
            
            while (matches.matches.length > 0) {
                if (finished) {
                    return;
                }
                await handleMatch();
            }

            db.globalScore[matches.winner] += 1;

            if (finished) {
                information.current = 'Partida finalizada'
            } else {
                information.current = `Jogador ${db.users[matches.winner].name} ganhou o game!`
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
        status.current = ["", ""];
        score.current = [0, 0];
        matchScore.current = 1;
        information.current = '';
        canStart.current = true;
        forceReload()
    }

    async function handleMatch(): Promise<void> {
        const match = matches.matches.shift() as IMatchResponse;
        const currentDeck = new Deck();
        matchId.current = match.match_id ?? '';

        // PLAYER 1 CARDS
        let cards = []
        for (const item of match.player_1) {
            cards.push(currentDeck.removeCard(item));
        }
        db.users[0].cards = cards;

        // PLAYER 2 CARDS
        cards = []
        for (const item of match.player_2) {
            cards.push(currentDeck.removeCard(item));
        }
        db.users[1].cards = cards;

        // JOKER
        currentDeck.joker = currentDeck.removeCard(match.joker);

        setLoading(false);
        deck.current = currentDeck;
        forceReload()
        await delay(db.sleep)

        let points = 1
        matchScore.current = points
        for (const play of match.plays) {
            if (finished) {
                return;
            }
            information.current = ''
            const user = db.users[play.player];
            
            switch (play.type) {
                case "PLAY":
                    const card = user.removeCard(play.card!);
                    deck.current.discardCard(card);
                    //setDeck(deck);
                    break;

                case "TRUCO":
                    status.current[play.player] = "Truco!!";
                    information.current = `Jogador ${user.name} pediu Truco!`;
                    break;

                case "TIE":
                    information.current = `Rodada empatada!`;
                    break;

                case "ACCEPT":
                    status.current[play.player] = "Aceito!!";
                    information.current = `Jogador ${user.name} aceitou Truco!`;
                    points = (points === 1) ? 3 : points + 3;
                    break;
            
                case "RUN":
                    status.current[play.player] = "Corri!!";
                    information.current = `Jogador ${user.name} correu!`;
                    break;

                case "WIN":
                    status.current[play.player] = "Ganhei!!";
                    information.current = `Jogador ${user.name} ganhou a partida!`
                    const newScore = score.current;
                    newScore[play.player] = (newScore[play.player] ?? 0) + points
                    score.current = [newScore[0], newScore[1]];
                    break;
            
                default:
                    break;
            }

            matchScore.current = points;
            forceReload()
            await delay(db.sleep)
            status.current = ["", ""];
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
        canStart,
        matchId,
        status
    }
}