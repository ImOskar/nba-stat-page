import React from 'react';

import ScoresItem from '../scores-item/scores-item';

import './scores-styles.scss';

const Scores = ({ items }) => (
    <div className='scores-container'>
        <div className='conference-bar'>
            <h1 className='title'>YESTERDAYS SCORES</h1>
        </div>
        <div className='game-scores'>
            {items
                .map(({ i, ...ItemProps}) => (
                    <ScoresItem {...ItemProps} />
                ))}
        </div>
    </div>

)

export default Scores;