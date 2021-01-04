import React from 'react';
import './player-stats-page.styles.scss';

import NBA_DATA from './nba-stats.data';

import PlayerStats from '../../components/player-stats/player-stats';

class PlayerStatsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playerData: NBA_DATA
        };
    }

    render() {
        const {playerData} = this.state;
        return (
            <div className='player-stats-page'>
                {
                    playerData.map(({ id, ...otherplayerDataProps}) => (
                        <PlayerStats key={id} {...otherplayerDataProps} />

                    ))
                }
            </div>
        );
    }
}

export default PlayerStatsPage;