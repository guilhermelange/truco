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
    matches: IMatchResponse[]
}

export interface IMatchResponse {
    joker: string;
    match_id?: number;
    winner: number;
    points?: number;
    player_1: string[];
    player_2: string[];
    plays: {
        type: string;
        card?: string;
        point?: number;
        player: number;
    }[]
}