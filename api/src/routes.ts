import * as core from "express-serve-static-core";
import { Players } from "./handlers/players";
import { Verbs } from "./handlers/verbs";

export type routeConfig = {
    verb: string,
    route: string,
    handler: (req: core.Request<any>, resp: core.Response<any>) => void
}

let routes: routeConfig[] = [
    {
        verb: 'GET',
        route: "/",
        handler: Players.getPersons
    },
    {
        verb: 'GET',
        route: '/person/:id',
        handler: Players.getPerson
    },
    {
        verb: 'GET',
        route: '/verbs',
        handler: Verbs.getAllVerbs
    },
];

export class RouteConfigurator {
    public static ConfigureRoutes(exp: core.Express): void {
        routes.map((routeCfg) => {
            switch (routeCfg.verb) {
                case 'GET': {
                    exp.get(routeCfg.route, (req, resp) => (routeCfg.handler(req, resp)))
                }
            }
        })
    }
}