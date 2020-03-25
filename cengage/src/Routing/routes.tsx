import React from "react"
import Startup from "../Components/Startup";
import PlayerNameAndTopScores from "../Components/PlayerNameAndTopScores/PlayerNameAndTopScores";
import {
    Switch,
    Route
} from "react-router-dom";

export type routeConfig = {
    key: number,
    path: string,
    component: any,
    componentName: string,
    props: any
}

export const routes: routeConfig[] = [
    {
        key: 1,
        path: "/",
        component: Startup,
        componentName: "Startup",
        props: {
            title: "Italian verb conjugation game in japan"
        }
    },
    {
        key: 2,
        path: "/ViewTopScores",
        component: PlayerNameAndTopScores,
        componentName: "PlayerNameAndTopScores",
        props: { caption: "test" }
    }
]

const RouteConfig = () => {
    return (<Switch>
        {
            routes.map((route, index) => {
                return (
                    <Route key={index} path={route.path} exact
                        render={props => (
                            <route.component {...props} {...route.props} />
                        )}
                    />
                )
            })
        }
    </Switch>
    )
}

export const GetRoutePath = (componentName: string) => {
    let route = routes.find((route) => route.componentName === componentName);
    if (route) {
        return route.path;
    }
    return '/';
};

export default RouteConfig;