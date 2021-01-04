import React from 'react';

import './team-standing-item.styles.scss';

const TeamItem = ({ id, teamName, rank, wins, losses, wlpct, gb, imageUrl}) => (
    <div className='standing-item'>     
        <div className='team-detail'>
            <span className='rank text'>
                {rank}.
            </span>
            <div 
                className='image' 
                style={{backgroundImage: `url(${imageUrl})`}} 
            />
                <span className='name text'>{teamName}</span>
        </div>
        <div className='wins-losses'>
                <span className='wins text'>{wins} - {losses}</span>
                <span className='winlose text'>{wlpct}</span>
                <span className='games-behind text'>{gb}</span>
        </div>
    </div>
    
)

export default TeamItem;