import { IStartMatchResponse } from "../../../data/datasource/IMatchDatasource";
import MatchDatasource from "../../../data/datasource/MatchDatasource";
import MatchMockDatasource from "../../../data/datasource/MatchMockDatasource";
import MatchRepository from "../../../data/repository/MatchRepository";
import Deck from "../../model/Deck";
import User from "../../model/User";

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