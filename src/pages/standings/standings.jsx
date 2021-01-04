import React from 'react';

import TeamStandings from '../../components/team-standing/team-standing'

import TEAM_DATA from './team-standings.data.js';


class StandingsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            teamData: TEAM_DATA
        }
    }

    render() {
        const {teamData} = this.state;
        return(
            <div >
                {
                    teamData
                    .map(({ id, ...otherTeamDataProps}) => (
                        <TeamStandings key={id} {...otherTeamDataProps} />
                    ))
                }

            </div>

        );
    }
}

export default StandingsPage;