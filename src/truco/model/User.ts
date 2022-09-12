import Card from "./Card";

export default class User {
    private _status: UserStatus;
    private _direction: UserDirection;
    private _cards: Card[];
    private _name: string;

    constructor(name: string, status: UserStatus, direction: UserDirection) {
        this._status = status;
        this._direction = direction;
        this._cards = [] as Card[];
        this._name = name;
    }

    public get direction(): UserDirection {
        return this._direction;
    }
    public set direction(value: UserDirection) {
        this._direction = value;
    }
    
    public get status(): UserStatus {
        return this._status;
    }
    public set status(value: UserStatus) {
        this._status = value;
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
}

export enum UserStatus {
    ONLINE, OFFLINE
}

export enum UserDirection {
    TOP, BOTTOM, RIGHT, LEFT
}