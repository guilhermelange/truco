import User from "../../domain/model/User";
import { api } from "../infra/Axios";
import IMatchDatasource, { IStartMatchResponse } from "./IMatchDatasource";

interface IMatchRequest {
    id: number;
    algorithm: string;
}

export default class MatchMockDatasource implements IMatchDatasource {
    async startMatch(users: User[]): Promise<IStartMatchResponse> {
        const payload = users.map((user, id) => (
            {
                id: id,
                algorithm: user.algorithm.toString().toUpperCase()
            }));

        const {data} = await api.post('/match', JSON.stringify(payload));
        return JSON.parse(data) as IStartMatchResponse;
    }
}