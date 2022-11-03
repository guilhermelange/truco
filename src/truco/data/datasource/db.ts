import nookies from 'nookies'
import User from '../../domain/model/User';

export default class Database {
    private static instance: Database;
    private _users: User[];


    private constructor() {
        this._users = [];
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
}