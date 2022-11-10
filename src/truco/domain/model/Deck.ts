import User from "./User";
import Card, { Naipe } from "./Card";

export default class Deck {    
    private _cards: Card[];
    private _discard: Card[];
    private _joker: Card;

    constructor() {
        this._cards = this.generateCards();
        this._joker = {} as Card; //this._cards[this.cards.length -1];
        this._discard = [] as Card[];
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

    public get discard(): Card[] {
        return this._discard;
    }
    public set discard(value: Card[]) {
        this._discard = value;
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

    public discardCard(card: Card) {
        const top = 180;
        const bottom = 70;
        card.rotate = Math.floor(Math.random() * ( 1 + top - bottom ) ) + bottom;
        this.discard.push(card);
    }


    public removeCard(desc: string): Card {
        let index = 0
        for (let idx = 0; idx < this.cards.length; idx++) {
            const card = this.cards[idx];
            if (card.getMask() === desc)
                index = idx;
        }

        return this.cards.splice(index, 1)[0];
    }

    public isJoker(card: Card): boolean {
        let jokerNum = 0;
        if (this.joker) {
            if (this.joker.number == 12) {
                jokerNum = 1
            } else if (this.joker.number == 7) {
                jokerNum = 10
            } else {
                jokerNum = this.joker.number + 1
            }
        }

        if (card.number == jokerNum) {
            return true;
        }

        return false;
    }
}