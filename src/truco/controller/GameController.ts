import User from "../model/User";
import Deck from "../model/Deck";
import IGameController from "./IGameController";
import IGameObserver from "./IGameObserver";
import Database from "../db/db";

export default class GameController implements IGameController {
    private obs: IGameObserver[];
    public users: User[];
    public deck: Deck;
    public score: number[];
    private db: Database;

    constructor() {
        this.obs = [] as IGameObserver[];
        this.users = [] as User[];
        this.deck = new Deck();
        this.score = [0, 0];
        this.db = Database.getInstance();
    }

    startMatch(): void {
        this.score = [0, 0];
        this.deck.shuffleCards();
        this.users = this.db.users;
        this.deck.distributeCards(this.users);
    }

    addObserver(obs: IGameObserver): void {
        this.obs.push(obs);
    }

    removeObserver(obs: IGameObserver): void {
        this.obs = this.obs.filter(item => item != item);
    }
}