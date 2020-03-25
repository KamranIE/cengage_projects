import React from "react";
import { NameAndScore } from "./../../Models/NameAndScore";


const NamesAndScores = ({ namesAndScores, displayNamesLimit }: { namesAndScores: NameAndScore[], displayNamesLimit: number }) => {
    if (!namesAndScores) return <div></div>;

    return (
        <>
            {namesAndScores.slice(0, displayNamesLimit).map((namesAndScore, index) => (
                <>
                    <div key={`${index}_Name`} className="leaderboard--grid__item leaderboard--grid__item-name">{namesAndScore.Name}</div>
                    <div key={`${index}_Score`} className="leaderboard--grid__item leaderboard--grid__item-score">{namesAndScore.Score}</div>
                </>)
            )}
        </>)
}

export default NamesAndScores;