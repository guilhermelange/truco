import nookies from 'nookies'
import User from '../../domain/model/User';

export default class Database {
    private static instance: Database;
    private _users: User[];
    private _sleep: number;
    private _globalScore: number[];

    private constructor() {
        this._users = [];
        this._sleep = 1500;
        this._globalScore = [0, 0];
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public get users(): User[] {
        return this._users;
    }

    public set users(users: User[]) {
        this._users = users;

        nookies.set(null, 'dados', JSON.stringify(this._users), {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        })
    }
    
    public get sleep(): number {
        return this._sleep;
    }

    public set sleep(sleep: number) {
        this._sleep = sleep;
    }

    public get globalScore(): number[] {
        return this._globalScore;
    }

    public set globalScore(_globalScore: number[]) {
        this._globalScore = _globalScore;
    }
}