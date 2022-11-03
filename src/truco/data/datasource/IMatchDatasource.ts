import User from "../../domain/model/User";

export default interface IMatchDatasource {
    startMatch(users: User[]): Promise<IStartMatchResponse>
}

export interface IStartMatchRequest extends Array<IUserRequest> {}

interface IUserRequest {
    id: number;
    algorithm: string;
}


export interface IStartMatchResponse {
    winner: number;
    point: number[];
    matchs: IMatchResponse[]
}

export interface IMatchResponse {
    joker: string;
    winner: number;
    points: number;
    player1: string[];
    player2: string[];
    plays: {
        type: string;
        card: string;
        point: number;
        player: number;
    }[]
}