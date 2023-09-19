import React from 'react';
import '../App.css';

function SmileCard({ emoji, votes }) {
    return (
    <div className="smile-card">
        <span className="emoji">{emoji}</span>
        <span className="votes">Votes: {votes}</span>
    </div>
    );
}

export default SmileCard;
