import { IStartMatchResponse } from "../../../data/datasource/IMatchDatasource";
import MatchDatasource from "../../../data/datasource/MatchDatasource";
import MatchRepository from "../../../data/repository/MatchRepository";
import User from "../../model/User";
import { delay } from "../../util/Delay";

export default class GameService {
    private repository: MatchRepository

    constructor() {
        this.repository = new MatchRepository(new MatchDatasource());
    }

    async startMatch(users: User[]):  Promise<IStartMatchResponse> {
        const data = await this.repository.startMatch(users);
        return data;
    }
}