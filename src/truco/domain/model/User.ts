import Card from "./Card";

export default class User {
    private _cards: Card[];
    private _name: string;
    private _algorithm: Algorithm;

    constructor(name: string, algorithm: Algorithm) {
        this._algorithm = algorithm;
        this._cards = [] as Card[];
        this._name = name;
    }

    public get cards(): Card[] {
        return this._cards;
    }
    public set cards(value: Card[]) {
        this._cards = value;
    }
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    
    public get algorithm(): Algorithm {
        return this._algorithm;
    }
    public set algorithm(value: Algorithm) {
        this._algorithm = value;
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
}

export enum Algorithm {
    RANDOM, BASELINE1, MONTE_CARLO
}

export function getAlgorithm(data: string): Algorithm {
    data = data.toUpperCase();

    const map = new Map();
    map.set('RANDOM', Algorithm.RANDOM);
    map.set('BASELINE1', Algorithm.BASELINE1);
    map.set('MONTE_CARLO', Algorithm.MONTE_CARLO);
 
    return map.get(data) ?? Algorithm.RANDOM;
}

export function getAlgorithmString(alg: Algorithm): string {
    const map = new Map();
    map.set(Algorithm.BASELINE1, "BASELINE1");
    map.set(Algorithm.MONTE_CARLO, "MONTE_CARLO");
    map.set(Algorithm.RANDOM, "RANDOM");
 
    return map.get(alg) ?? "RANDOM";
}

export enum UserDirection {
    TOP, BOTTOM, RIGHT, LEFT
}