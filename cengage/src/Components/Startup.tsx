import React from "react"
import { Link } from "react-router-dom";
import { GetRoutePath } from "./../Routing/routes";

const Startup = ({ title }: { title?: string }) => {

    return (<div className="startup">
        <div className="startup--image__container">
            <img src='/assets/images/cengageLogo.png' alt='Logo' className="startup--image" />
        </div>
        <div className="startup--content startup--text">{title}</div>
        <div className="startup--content">
            <Link type="button" className="button startup--button" to={GetRoutePath('PlayerNameAndTopScores')} >Start Game</Link>
        </div>
    </div>)
}

export default Startup;