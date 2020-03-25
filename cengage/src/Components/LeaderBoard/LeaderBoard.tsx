import React from "react";
import NamesAndScores from "./NamesAndScores";
import { NameAndScore } from "./../../Models/NameAndScore";

const LeaderBoard = ({ caption, namesAndScores, displayNamesLimit }: { caption: string, namesAndScores: NameAndScore[], displayNamesLimit: number }) => {

    return (
        <div className="leaderboard--grid__container">
            <div className="leaderboard--grid__heading">{caption}</div>
            <NamesAndScores namesAndScores={namesAndScores} displayNamesLimit={displayNamesLimit} />
        </div>)
}

export default LeaderBoard