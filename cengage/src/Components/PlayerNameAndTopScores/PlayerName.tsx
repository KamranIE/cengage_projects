import React from "react";

const PlayerName = ({ playerName }: { playerName: string }) => {
    return (
        <div>
            <div className="playerNameAndTopScores--name__caption">Your name is</div>
            <div className="playerNameAndTopScores--name">{playerName}</div>
        </div>
    )
}

export default PlayerName;