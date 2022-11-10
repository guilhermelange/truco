import Database from "../../../data/datasource/db";
import User, { getAlgorithm } from "../../model/User";

export interface IUserStartMatch {
    name: string,
    algorithm: string
}

export default class FormService {
    startMatch(data: IUserStartMatch[]) {
        if (data.length != 2) {
            throw new Error("Selecione 2 jogadores");
        }

        const users = [] as User[];
        for (const user of data) {
            if (!user.name) {
                throw new Error("Nome inválido!");
            }

            if (!user.algorithm) {
                throw new Error("Algoritmo inválido");
            }

            users.push(new User(user.name, getAlgorithm(user.algorithm)))
            
        }
        const db = Database.getInstance();
        db.users = users;
        db.globalScore = [0, 0];
    }
}