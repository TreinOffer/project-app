import React, { useState } from 'react';
import './style.css';
import imgs from '../../imgs/arrayImagens';

function UparUrl({ setYoutubeUrl, setIsPopupVisible, handleUrl, index }) {
    const [url, setUrl] = useState('');

    const convertToEmbedUrl = (url) => {
        const videoId = url.split("v=")[1]?.split("&")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();  
        
        if (url) {
            const youtubeEmbedUrl = convertToEmbedUrl(url);
            setYoutubeUrl(youtubeEmbedUrl);
            setIsPopupVisible(false);
            handleUrl(index, [youtubeEmbedUrl]);
        }
    };

    return (
        <div className="popupUrl">
            <div className="telinhaUrl" style={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around" }}>
                <img src={imgs.TreinOfferblack} alt="logo_TreinOffer" className='logo-trein' style={{ transform: 'scale(1.2)', margin: '0 auto', paddingLeft: '34px' }}/>
                <button className='close-red' onClick={() => setIsPopupVisible(false)}>X</button>
                <input
                    type="url"
                    placeholder="Insira a URL do YouTube"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="url-input"
                />
                <button className="submit-btn" onClick={handleSubmit}>Salvar</button>
            </div>
        </div>
    );
}

export default UparUrl;
