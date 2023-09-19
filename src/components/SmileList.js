import React, { useState } from "react";
import SmileCard from "./SmileCard";
import "../App.css"; 

function SmileList() {
    const [smiles, setSmiles] = useState([
        { emoji: "🫶", votes: 0 },
        { emoji: "💀", votes: 0 },
        { emoji: "❤️", votes: 0 },
        { emoji: "🔥", votes: 0 },
        { emoji: "🥹", votes: 0 },
        { emoji: "💞", votes: 0 },
        { emoji: "🫡", votes: 0 },
        { emoji: "😭", votes: 0 },
    ]);

    const [showResults, setShowResults] = useState(false); 
    const [winner, setWinner] = useState(null); 

    const handleVote = (index) => {
        const updatedSmiles = [...smiles];
        updatedSmiles[index].votes += 1;
        setSmiles(updatedSmiles);
    };

    const findWinner = () => {
        let winner = smiles[0];
        smiles.forEach((smile) => {
            if (smile.votes > winner.votes) {
                winner = smile;
            }
        });
        return winner;
    };

    const handleShowResults = () => {
        const winner = findWinner();
        setWinner(winner);
        setShowResults(true);
    };

    return (
    <div claas='wrapper'>
        <div className="smile-list-container">
            <div className="smile-list">
                {smiles.map((smile, index) => (
                    <div className="smile-card" key={index}>
                        <SmileCard emoji={smile.emoji} votes={smile.votes} />
                        <button  className="vote-btn" onClick={() => handleVote(index)}>Vote</button>
                    </div>
                ))}
            </div>
        </div>
        <button className="winner-btn" onClick={handleShowResults}>Show Results</button>
        {showResults && winner && (
            <div className="winner">
                <h2>Winner: {winner.emoji} with {winner.votes} votes </h2>
            </div>
        )}
    </div>
    );
}

export default SmileList;