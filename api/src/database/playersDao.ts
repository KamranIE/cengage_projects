import { DataAccess } from "./dataaccess";
import connect, { MongoError, ObjectId } from "mongodb"


export class PlayersDao {

    private static readonly PlayersCollection: string = 'PlayersNames';

    public static getAllPlayers = (): connect.Cursor<any> =>
        DataAccess.Db.collection(PlayersDao.PlayersCollection).find()

    public static getPlayerWithId = (id: number, callback: (err: MongoError, result: any) => void): void =>
        DataAccess.Db.collection(PlayersDao.PlayersCollection).findOne({ _id: new ObjectId(id) }, callback);
}   