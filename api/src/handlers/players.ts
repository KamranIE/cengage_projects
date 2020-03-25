import * as core from "express-serve-static-core";
import { PlayersDao } from "../database/playersDao";
import { MongoError } from "mongodb";

export class Players {
    public static getPerson = (req: core.Request<any>, resp: core.Response<any>): void => {
        PlayersDao.getPlayerWithId(req.params.id, (err: MongoError, result: any): void => {
            if (err) {
                throw new Error(`${err.errmsg} - ${err.message} - ${err.stack}`);
            }
            console.log(`Kamran - ${req.params.id} - ${result}`);
            resp.send(JSON.stringify(result));
        })
    }

    public static getPersons = (req: core.Request<any>, resp: core.Response<any>): void => {
        try {
            PlayersDao.getAllPlayers().toArray((err, result) => {
                if (err) {
                    throw new Error(`${err.errmsg} - ${err.message} - ${err.stack}`);
                }

                resp.send(JSON.stringify(result));
            });
        } catch (err) {
            console.log('ERROR ENCOUNTERED');
            console.log(err);
        }
    }
}