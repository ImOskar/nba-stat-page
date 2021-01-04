import React from 'react';

import Directory from '../../components/directory/directory';
import Scores from '../../components/scores/scores';

import GAME_SCORES from './game-scores';

import './homepage.styles.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameData: GAME_SCORES
        };
    }

    render() {
        const {gameData} = this.state;
        return (
            <div className='homepage'>
                <Scores items={gameData}/>
                <Directory />
            </div>
        );
    }

}

export default HomePage;