import User from "../../domain/model/User";
import IMatchDatasource, { IStartMatchResponse } from "./IMatchDatasource";

export default class MatchMockDatasource implements IMatchDatasource {
    async startMatch(users: User[]): Promise<IStartMatchResponse> {
        const json = `{
            "winner": 1,
            "points": [3,12],
            "matchs": [
                {
                    "joker": "2_PAUS",
                    "winner": 2,
                    "points": 3,
                    "player1": [
                        "1_COPAS",
                        "2_COPAS",
                        "3_COPAS"
                    ],
                    "player2": [
                        "1_ESPADAS",
                        "2_ESPADAS",
                        "3_ESPADAS"
                    ],
                    "plays": [
                        {
                            "type": "PLAY",
                            "card": "1_COPAS",
                            "player": 0,
                            "point": 1
                        },
                        {
                            "type": "PLAY",
                            "card": "1_ESPADAS",
                            "player": 1,
                            "point": 1
                        },
                        {
                            "type": "PLAY",
                            "card": "2_COPAS",
                            "player": 0,
                            "point": 1
                        },
                        {
                            "type": "TRUCO",
                            "player": 0,
                            "point": 1
                        },
                        {
                            "type": "ACCEPT",
                            "player": 1,
                            "point": 3
                        },
                        {
                            "type": "RUN",
                            "player": 0,
                            "point": 3
                        },
                        {
                            "type": "WIN",
                            "player": 1,
                            "point": 3
                        }
                    ]
                },
                {
                    "joker": "2_PAUS",
                    "winner": 2,
                    "points": 3,
                    "player1": [
                        "1_COPAS",
                        "2_COPAS",
                        "3_COPAS"
                    ],
                    "player2": [
                        "1_ESPADAS",
                        "2_ESPADAS",
                        "3_ESPADAS"
                    ],
                    "plays": [
                        {
                            "type": "PLAY",
                            "card": "1_COPAS",
                            "player": 0,
                            "point": 1
                        },
                        {
                            "type": "PLAY",
                            "card": "1_ESPADAS",
                            "player": 1,
                            "point": 1
                        },
                        {
                            "type": "PLAY",
                            "card": "2_COPAS",
                            "player": 0,
                            "point": 1
                        },
                        {
                            "type": "TRUCO",
                            "player": 0,
                            "point": 1
                        },
                        {
                            "type": "ACCEPT",
                            "player": 1,
                            "point": 3
                        },
                        {
                            "type": "RUN",
                            "player": 0,
                            "point": 3
                        },
                        {
                            "type": "WIN",
                            "player": 1,
                            "point": 3
                        }
                    ]
                }
            ]
        }`

        return JSON.parse(json) as IStartMatchResponse;
    }
}