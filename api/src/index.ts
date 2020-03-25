import express, { Application } from "express";
import { RouteConfigurator } from "./routes";
import { MongoError } from "mongodb";
import { DataAccess } from "./database/dataaccess";


class Server {

    /**
     *
     */
    constructor() {

        DataAccess.Create(this.onDbConnected);
    }

    private onDbConnected = (err?: MongoError) => {
        if (err) {
            console.log(`Database cannot be connected - ${err.errmsg} - ${err.message} - ${err.stack}`);
            return;
        }

        console.log(`Database connected. initializing the server...`);
        let app = this.initializeApp();
        console.log(`Server initialized`);

        this.startListening(app);

    }

    private initializeApp = (): Application => {
        const app = express();
        RouteConfigurator.ConfigureRoutes(app);
        return app;
    }

    private startListening = (app: Application) => {
        var port = process.env.PORT || 3000;
        app.listen(port, () => { console.log(`Listening on port ${port}`) });
    }
}

new Server();

