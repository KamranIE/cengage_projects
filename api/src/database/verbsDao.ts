
import { DataAccess } from "./dataaccess";
import connect, { MongoError, ObjectId } from "mongodb";

export class VerbsDao {
    private static readonly VerbsCollection: string = 'Verbs';

    public static getAllVerbs = (): connect.Cursor<any> => DataAccess.Db.collection(VerbsDao.VerbsCollection).find()
}