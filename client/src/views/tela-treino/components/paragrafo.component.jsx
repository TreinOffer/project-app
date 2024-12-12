import React from 'react';

import '../../uploadTreino/Destinos/Cartoes/CartaoParag.css';

const ParagrafoComponent = ({ paragrafo }) => {
    return (
        <p style={{ fontSize: '1.4em', padding: '4%', textAlign: 'center' }}>
            {paragrafo}
        </p>
    );
}

export default ParagrafoComponent;
