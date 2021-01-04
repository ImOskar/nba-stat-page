import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assets/NBA_logo.svg'

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
            <span className='logo-title'>NBA STATS</span>
        </Link>
        <div className='options'>
            <Link className='option' to='/players'>PLAYERS</Link>
            <Link className='option' to='/teams'>TEAMS</Link>
            <Link className='option' to='/highlights'>HIGHLIGHTS</Link>
        </div>
    </div>
)

export default Header;