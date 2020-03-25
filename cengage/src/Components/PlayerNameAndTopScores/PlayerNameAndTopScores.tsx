import React, { useState } from "react";
import LeaderBoard from "./../LeaderBoard/LeaderBoard";
import { NameAndScore } from "./../../Models/NameAndScore";
import PlayerName from "./PlayerName";
import { CengageConstants } from "./../../Models/CengageConstants";

const PlayerNameAndTopScores = () => {
    let namesAndScores: NameAndScore[] = [{ Name: "John Travolta junior 1", Score: "1200pts" },
    { Name: "Peter McDermote", Score: "1300pts" },
    { Name: "Michael Jackson", Score: "1100pts" },
    { Name: "Bravo", Score: "1000pts" },
    { Name: "Adeel Eijaz", Score: "1300pts" },
    { Name: "Ryan Gosling", Score: "1100pts" },
    { Name: "James Cameron", Score: "121100pts" },
    { Name: "Imran Khan", Score: "1331100pts" },
    { Name: "Aravinda Sametha Veera Raghava", Score: "121100pts" },
    { Name: "Shishi Tharoor", Score: "821100pts" },
    { Name: "11th Name", Score: "111100pts" }];

    const [clickableText, setClickableText] = useState(CengageConstants.viewOnMinViewLeaderboardText);
    const [leaderboardCount, setLeaderboardCount] = useState(CengageConstants.minLeaderboardCount);

    const flipText = () => {
        if (clickableText === CengageConstants.viewOnMinViewLeaderboardText && leaderboardCount === CengageConstants.minLeaderboardCount) {
            setClickableText(CengageConstants.viewOnMaxViewLeaderboardText)
            setLeaderboardCount(CengageConstants.maxLeaderboardCount);
        } else {
            setClickableText(CengageConstants.viewOnMinViewLeaderboardText)
            setLeaderboardCount(CengageConstants.minLeaderboardCount);
        }
    }

    return (
        <div className="playerNameAndTopScores--container">
            <PlayerName playerName="Andrew Breese" />
            <div className="playerNameAndTopScores--buttonContainer">
                <a type="button" href="#" className="button startup--button">OK, Let's Play!</a>
            </div>
            <div className="playerNameAndTopScores--leaderboardsContainer">
                <LeaderBoard caption="Not too bad" namesAndScores={namesAndScores} displayNamesLimit={leaderboardCount} />
                <LeaderBoard caption="Pretty tough" namesAndScores={namesAndScores} displayNamesLimit={leaderboardCount} />
                <LeaderBoard caption="I am a legend at this" namesAndScores={namesAndScores} displayNamesLimit={leaderboardCount} />
            </div>
            <div className="playerNameAndTopScores--buttonContainer">
                <a type="button" href="#" className="playerNameAndTopScores--clickableText" onClick={flipText}>{clickableText}</a>
            </div>
        </div>
    )
}

export default PlayerNameAndTopScores;