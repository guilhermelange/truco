import User from "../model/User";

export default class Database {
    private static instance: Database;
    public users: User[];

    private constructor() { 
        this.users = [];
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }

        return Database.instance;
    }
}