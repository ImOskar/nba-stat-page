import React from 'react';

import ClipItem from '../clip-item/clip-item';

import './clips.styles.scss';

class Clips extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clips: [
        {
          id: '1',
          description: 'Kristaps Porzingis drills the three from the logo',
          url: 'https://streamable.com/s/ka0ly/cvpnob'
        },
        {
          id: '2',
          description: 'Kawhi hits the 3 and Porzingis answers from the logo at the buzzer',
          url: 'https://streamable.com/s/44udp/ftzkej'
        },
        {
          id: '3',
          description: 'Dwight Powell shows Kawhi who\'s boss with the layup plus the foul!',
          url: 'https://streamable.com/s/0oa5e/ndxmlx'
        },
        {
          id: '4',
          description: 'Montrezl Harrell with a crazy two-handed slam!',
          url: 'https://streamable.com/s/f752j/pnbzae'
        },
        {
          id: '5',
          description: 'Kawhi overpowers Finney-Smith in the post',
          url: 'https://streamable.com/s/g34pn/whxxer'
        },
        {
          id: '6',
          description: 'Paul George takes flight for 17 points of the quarter',
          url: 'https://streamable.com/s/s9dxz/bgqfpr'
        },
        {
          id: '7',
          description: 'Refs with the extreme phantom call against the Kings',
          url: 'https://streamable.com/s/1xqjt/ruwqrd'
        },
        {
          id: '8',
          description: 'Marcus Smart with a no-look dime in transition',
          url: 'https://streamable.com/s/b2shs/vvmysr'
        },

      ]
    };
  }

  render() {
    return (
      <div className='clips-container'>
        <div className='conference-bar clip-title'>
            <h1 className='title'>HIGHLIGHTS</h1>
        </div>
        <div className='clips'>
            {
            this.state.clips.map(({ id, ...otherClipsProps}) => (
                            <ClipItem key={id} {...otherClipsProps} />
                        ))
            }
        </div>
      </div>
    );
  }
}

export default Clips;