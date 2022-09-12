import User from "./User";
import Card, { Naipe } from "./Card";

export default class Deck {    
    private _cards: Card[];
    private _joker: Card;

    constructor() {
        this._cards = this.generateCards();
        this._joker = this._cards[this.cards.length -1];
    }

    public get cards(): Card[] {
        return this._cards;
    }
    public set cards(value: Card[]) {
        this._cards = value;
    }

    public get joker(): Card {
        return this._joker;
    }
    public set joker(value: Card) {
        this._joker = value;
    }

    public generateCards(): Card[] {
        const validNumbers = [1,2,3,4,5,6,7,10,11,12];
        const validNaipes = [Naipe.MOLES, Naipe.ESPADAS, Naipe.COPAS, Naipe.PAUS];
        const cards = [] as Card[];

        for (const number of validNumbers) {
            for (const naipe of validNaipes) {
                const card = new Card(number, naipe);
                cards.push(card);
            }
        }
        return cards;
    }

    public distributeCards(users: User[]) {
        for (let index = 0; index < 3; index++) {
            for (const user of users) {
                user.cards.push(this.cards.pop() as Card);
            }
        }
        this._joker = this.cards.pop() as Card;
    }

    public shuffleCards() {
        this.cards = this.cards.sort(() => Math.random() - 0.5);
    }
}