import React from 'react';

import './player-stat-item.styles.scss';

const PlayerStatItem = ({ id, name, perGame, stat, rank, imageUrl}) => (
    <div className='player-stat-item'>
        <div className='rank-header'>
            <span className='rank'>{rank}.</span>
        </div>
        {/* <div 
            className='image' 
            style={{backgroundImage: `url(${imageUrl})`}} 
        /> */}
        <div className='player-stat-footer'>
            <span className='name'>{name}</span>
            <span className='per-game'>{perGame} {stat}</span>
        </div>
    </div>
)

export default PlayerStatItem;