import React from 'react';
import TeamItem from '../team-standing-item/team-standing-item';

import './team-standing.styles.scss';

const TeamStanding = ({ title, items }) => (
    <div className='team'>
        <div className='conference-bar'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='bar-details'>
                <h1>
                    <span className='wins'>W - L</span>
                </h1>
                <h1>
                    <span className='winlose'>W/L%</span>
                </h1>
                <h1>
                    <span className='games-behind'>GB</span>
                </h1>
            </div>
        </div>
        <div className='team'>
            {items
                .map(({ id, ...otherItemProps}) => (
                    <TeamItem key={id} {...otherItemProps} />
                ))}
        </div>
    </div>

)

export default TeamStanding;