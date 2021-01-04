import React from 'react';

import './directory-styles.scss';

import MenuItem from '../menu-item/menu-item';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
              {
                title: 'stat leaders',
                imageUrl: 'https://img.bleacherreport.net/img/images/photos/003/793/665/hi-res-ec1bc40b78d9dcfd36123bd09b0457f6_crop_north.jpg?1551316657&w=3072&h=2048',
                id: 1,
                linkUrl: 'players'
              },
              {
                title: 'team standings',
                imageUrl: 'https://pm1.narvii.com/6443/37a27db2c9496339e341e71ff841da6a7344d3e5_hq.jpg',
                id: 2,
                linkUrl: 'teams'
              },
              {
                title: 'todays highlights',
                imageUrl: 'https://image.cnbcfm.com/api/v1/image/106384981-1581436693869gettyimages-1196398279.jpeg?v=1581436778&w=630&h=354',
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