import React from 'react';

import './directory-styles.scss';
import stats from '../../assets/img/stats.jpg';
import conference from '../../assets/img/east-west.jpg';
import highlights from '../../assets/img/highlights.jpeg';

import MenuItem from '../menu-item/menu-item';

class Directory extends React.Component {
    constructor() {
        super();
        
        this.state = {
            sections: [
              {
                title: 'stat leaders',
                imageUrl: stats,
                id: 1,
                linkUrl: 'players'
              },
              {
                title: 'team standings',
                imageUrl: conference,
                id: 2,
                linkUrl: 'teams'
              },
              {
                title: 'todays highlights',
                imageUrl: highlights,
                id: 3,
                linkUrl: 'highlights'
              }
            ]
        };
    }

    render() {
        return (
          <div className='directory-menu'>
            {this.state.sections.map(({ id, ...otherSectionProps }) => (
              <MenuItem key={id} {...otherSectionProps} />
            ))}
          </div>
        );
    }
}
        
export default Directory;