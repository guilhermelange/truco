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
}

export enum Algorithm {
    RANDOM, BASELINE1, MONTE_CARLO
}

export function getAlgorithm(data: string): Algorithm {
    data = data.toUpperCase();
    if (data == 'RANDOM') {
        return Algorithm.RANDOM
    }

    if (data == 'BASELINE1') {
        return Algorithm.BASELINE1
    }

    if (data == 'MONTE_CARLO') {
        return Algorithm.BASELINE1
    }

    return Algorithm.RANDOM
}

export enum UserDirection {
    TOP, BOTTOM, RIGHT, LEFT
}