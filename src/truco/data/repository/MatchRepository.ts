import User from "../../domain/model/User";
import IMatchDatasource from "../datasource/IMatchDatasource";
import IMatchRepository, { IStartMatchResponse } from "../datasource/IMatchDatasource";

export default class MatchRepository {
    private datasource: IMatchDatasource;
    constructor(datasource: IMatchDatasource) {
        this.datasource = datasource;
    }

    async startMatch(users: User[]): Promise<IStartMatchResponse> {
        return this.datasource.startMatch(users);
    }
}