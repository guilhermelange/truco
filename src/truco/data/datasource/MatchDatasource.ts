import User, { getAlgorithmString } from "../../domain/model/User";
import { api } from "../infra/Axios";
import IMatchDatasource, { IStartMatchResponse } from "./IMatchDatasource";

export default class MatchDatasource implements IMatchDatasource {
    async startMatch(users: User[]): Promise<IStartMatchResponse> {
        const payload = users.map((user, id) => (
            {
                id: id,
                algorithm: getAlgorithmString(user.algorithm)
            }));

        const { data } = await api.post('/match', JSON.stringify(payload));
        return data as IStartMatchResponse;
    }
}