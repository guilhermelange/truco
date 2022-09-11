import Card, { Naipe } from "./Card";

export default class Deck {    
    private _cards: Card[];

    constructor() {
        this._cards = this.generateCards();
    }

    public get cards(): Card[] {
        return this._cards;
    }
    public set cards(value: Card[]) {
        this._cards = value;
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

    public shuffleCards() {
        this.cards = this.cards.sort(() => Math.random() - 0.5);
    }
}