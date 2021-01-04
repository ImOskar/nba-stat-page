import React from 'react';

import PlayerStatItem from '../player-stat-item/player-stat-item';

import './player-stats.styles.scss';

const PlayerStats = ({ title, items }) => (
    <div className='player-stats-container'>
        <div className='conference-bar'>
            <h1 className='title'>{title.toUpperCase()}</h1>
        </div>
        <div className='player-stats'>
            {items
                .map(({ id, ...otherItemProps}) => (
                    <PlayerStatItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>

)

export default PlayerStats;