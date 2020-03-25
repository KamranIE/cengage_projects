import * as core from "express-serve-static-core";
import { VerbsDao } from "../database/verbsDao";
export class Verbs {

    public static getAllVerbs = (req: core.Request<any>, resp: core.Response<any>): void => {
        try {
            VerbsDao.getAllVerbs().toArray((err, result) => {
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