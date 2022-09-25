import Database from "../../db/db";
import User, { getAlgorithm } from "../../model/User";
import IFormController, { IUserStartMatch } from "./IFormController";
import IFormObserver from "./IFormObserver";

export default class FormController implements IFormController {
    private obs: IFormObserver[];
    private db: Database;
    

    constructor() {
        this.db = Database.getInstance();
        this.obs = [];
    }

    startMatch(data: IUserStartMatch[]): void {
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

        this.db.users = users;
    }
    addObserver(obs: IFormObserver): void {
        this.obs.push(obs);
    }
    removeObserver(obs: IFormObserver): void {
        this.obs = this.obs.filter(item => item != item);
    }
}