import User, { UserDirection, UserStatus } from "../model/User";
import Deck from "../model/Deck";
import IGameController from "./IGameController";
import IGameObserver from "./IGameObserver";

export default class GameController implements IGameController {
    private obs: IGameObserver[];
    public users: User[];
    public deck: Deck;
    public score: number[];

    constructor() {
        this.obs = [] as IGameObserver[];
        this.users = [] as User[];
        this.deck = new Deck();
        this.score = [0, 0];
    }

    startMatch(): void {
        this.score = [0, 0];
        this.deck.shuffleCards();
        this.users = [
            new User("Guilherme Lange", UserStatus.ONLINE, UserDirection.BOTTOM),
            new User("Guilherme Lange", UserStatus.ONLINE, UserDirection.RIGHT),
            new User("Guilherme Lange", UserStatus.ONLINE, UserDirection.TOP),
            new User("Guilherme Lange", UserStatus.ONLINE, UserDirection.LEFT)
        ];
        this.deck.distributeCards(this.users);
    }

    addObserver(obs: IGameObserver): void {
        this.obs.push(obs);
    }

    removeObserver(obs: IGameObserver): void {
        this.obs = this.obs.filter(item => item != item);
    }
}