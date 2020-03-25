import connect, { MongoError } from "mongodb"

export class DataAccess {
    private _db?: connect.Db = undefined;
    private static _this: DataAccess;
    private constructor(onDbConnected: (err?: MongoError) => void) {
        this.connect(onDbConnected);
    }

    public static Create = (onDbConnected: (err?: MongoError) => void): DataAccess => {
        if (!DataAccess._this) {
            DataAccess._this = new DataAccess(onDbConnected);
        }
        return DataAccess._this;
    }

    public static get Db(): connect.Db {
        if (!DataAccess._this) {
            throw new Error("Database accessor not created");
        } else if (!DataAccess._this._db) {
            throw new Error("Database not connected");
        }
        return DataAccess._this._db;
    }

    private connect = (onDbConnected: (err?: MongoError) => void) => {
        let client: connect.MongoClient = new connect.MongoClient(process.env.mongourl ? process.env.mongourl : "",
            { native_parser: true });
        let dbName: string = process.env.database || "";

        if (client && dbName) {
            client.connect((err: MongoError, client: connect.MongoClient): void => {
                if (err) {
                    if (onDbConnected) {
                        onDbConnected(err);
                    } else {
                        throw new Error(`${err.errmsg} - ${err.message}`);
                    }
                }

                this._db = client.db(dbName);
                console.log('database connected');
                if (onDbConnected) {
                    onDbConnected(undefined);
                }
            });
        }
    }
}
