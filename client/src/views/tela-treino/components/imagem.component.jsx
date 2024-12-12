import React from 'react';

import '../../uploadTreino/Destinos/Cartoes/CartaoImg.css';

const ImagemComponent = ({ imagem }) => {
    return (
        <div className='cartaoImagem'>
            <div className='div-imagem'>
                <img
                    style={{ height: '100%' }}
                    src={`${process.env.REACT_APP_BACKEND}/imgs/${imagem}`}
                    alt={'imagem'}
                />
            </div>
        </div>
    );
};

export default ImagemComponent;
