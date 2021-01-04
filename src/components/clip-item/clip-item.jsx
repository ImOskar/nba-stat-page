import React from 'react';

import './clip-item.styles.scss';

const ClipItem = ({ description, url }) => (
    <div className='frame-div'>
        <iframe 
            title='videoPlayer' 
            className='frame' 
            src={url}
            frameBorder='0' 
            allowFullScreen >
        </iframe>
        <span className='description'>{description}</span>
    </div>
);

export default ClipItem;