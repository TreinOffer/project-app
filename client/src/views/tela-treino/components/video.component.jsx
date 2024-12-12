import React from 'react';

import '../../uploadTreino/Destinos/Cartoes/CartaoVdeo.css';

const VideoComponent = ({ url }) => {
    return (
        <iframe width="60%" height="60%" src={url} frameBorder="0" allowFullScreen></iframe>
    );
}

export default VideoComponent;