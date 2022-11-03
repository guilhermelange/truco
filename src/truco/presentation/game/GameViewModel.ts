import { useReducer, useState } from "react";
import Database from "../../data/datasource/db";
import { IMatchResponse, IStartMatchResponse } from "../../data/datasource/IMatchDatasource";
import Deck from "../../domain/model/Deck";
import User from "../../domain/model/User";
import GameService from "../../domain/usecase/game/GameService";
import { delay } from "../../domain/util/Delay";

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
    let matches = {} as IStartMatchResponse; 

    async function startMatch(): Promise<void> {
        await setLoading(true);
        await setUsers(db.users)
        
        matches = await service.startMatch(db.users);

        while (matches.matchs.length > 0) {
            await handleMatch();
        }
        setInformation(`Jogador ${matches.winner} ganhou o game!`);
    }

    async function handleMatch(): Promise<void> {
        const match = matches.matchs.shift() as IMatchResponse;
        const deck = new Deck();
        await setDeck(deck);
        setMatchScore(1);

        // PLAYER 1 CARDS
        let cards = []
        for (const item of match.player1) {
            cards.push(deck.removeCard(item));
        }
        db.users[0].cards = cards;

        // PLAYER 2 CARDS
        cards = []
        for (const item of match.player2) {
            cards.push(deck.removeCard(item));
        }
        db.users[1].cards = cards;

        // JOKER
        deck.joker = deck.removeCard(match.joker);

        setLoading(false);
        setDeck(deck);
        forceReload()
        await delay(1500)

        for (const play of match.plays) {
            setMatchScore(play.point);
            setInformation("");
            const user = db.users[play.player];
            
            switch (play.type) {
                case "PLAY":
                    const card = user.removeCard(play.card);
                    deck.discardCard(card);
                    setDeck(deck);
                    break;

                case "TRUCO":
                    setInformation(`Jogador ${user.name} pediu Truco!`);
                    break;

                case "ACCEPT":
                    setInformation(`Jogador ${user.name} aceitou Truco!`);
                    break;
            
                case "RUN":
                    setInformation(`Jogador ${user.name} correu!`);
                    break;

                case "WIN":
                    setInformation(`Jogador ${user.name} ganhou a partida!`);
                    const newScore = score;
                    newScore[play.player] = (newScore[play.player] ?? 0) + match.points
                    setScore([newScore[0], newScore[1]]);
                    break;
            
                default:
                    break;
            }
            
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
        information
    }
}