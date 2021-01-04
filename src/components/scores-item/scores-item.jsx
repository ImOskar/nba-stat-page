import React from 'react';

import './scores-item-styles.scss';

const ScoresItem = ({ winner, winnerPts, loser, loserPts}) => (
    <div className='scores-item'>
        <div className='scores'>
            <span className='team'>{winner}</span>
            <span className='points winner'>{winnerPts}</span>
        </div>
        <div className='scores'>
            <span className='team'>{loser}</span>
            <span className='points'>{loserPts}</span>
        </div>
    </div>
)

export default ScoresItem;