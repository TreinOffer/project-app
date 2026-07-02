import React, { useState } from 'react';
import imgs from '../../../../imgs/arrayImagens';
import './CartaoVdeo.css';
import UparUrl from "../../../../components/popUpurl/uparUrl";

const CartaoVdeo = ({ deletar, index, url, setItens, isFlipped, isUrl, handleVideo }) => {
    const [newVideo, setNewVideo] = useState(null); 
    const [videoType, setVideoType] = useState('local');
    const [isPopupVisible, setIsPopupVisible] = useState(false); 
    const [youtubeUrl, setYoutubeUrl] = useState(''); 

    function actionExpanse() {
        setItens[1](prevItens => {
            const itens = [...prevItens];
            itens[setItens[0]].map((item, i) =>
                i === index ? item.isOpen = !isFlipped : item
            )
            return itens;
        });
    }

    function actionTypeVideo(e) {
        const selectedType = e.target.value;
        setVideoType(selectedType);
        if (selectedType === 'youtube') {
            setIsPopupVisible(true); 
        } else {
            setIsPopupVisible(false); 
        }
    }

    const handleUploadVdo = (e) => {
        const file = e.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file); 
            setNewVideo(videoUrl); 
            handleVideo(index, videoUrl); 
        }
    }

    return (
        <div className='cartaoVideo'>
            <div className='div-video'>
                {videoType === 'youtube' ? (
                    <iframe width="100%" height="100%" src={youtubeUrl} frameBorder="0" allowFullScreen></iframe>
                ) : (

                    !newVideo ? (
                        <img 
                            src={imgs.upVideo} 
                            alt="Vídeo" 
                            className="video-thumbnail" 
                        />
                    ) : (

                        <video width="100%" height={isFlipped ? 'calc((100% + 500px) - 200px)' : '100%'} controls>
                            <source src={newVideo} type="video/mp4" />
                            <source src={newVideo} type="video/ogg" />
                        </video>
                    )
                )}

                <div className='btn-expanse'>
                    <button type='button' className='toggle-actions' onClick={actionExpanse} aria-expanded={isFlipped}>
                        <img
                            src={imgs.arrowUp}
                            alt=""
                            aria-hidden="true"
                            style={{
                                transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                        />
                    </button>
                    <div
                        className={`actions actions-video ${isFlipped ? 'is-open' : ''}`}
                    >
                        <button type='button' className='div-rem' onClick={() => deletar(index)} aria-label='Remover vídeo'>
                            <img src={imgs.trash} alt="" aria-hidden="true" />
                        </button>
                        <label className='div-selecionar' htmlFor={`Video${index}`}>
                            <input
                                onChange={handleUploadVdo}
                                accept='.mp4,.ogg,.webm'
                                multiple={false}
                                type="file"
                                name="VideoTreino"
                                className='buttonUpload'
                                id={`Video${index}`}
                            />
                            <span className='selector-text'>Selecionar vídeo</span>
                        </label>
                        <div className="div-change-type">
                            <select onChange={actionTypeVideo} value={videoType}>
                                <option value="youtube">YouTube</option>
                                <option value="local">Video local</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {isPopupVisible && <UparUrl handleUrl={handleVideo} index={index}
                setYoutubeUrl={setYoutubeUrl} setIsPopupVisible={setIsPopupVisible} />}
        </div>
    );
}




  


export default CartaoVdeo;
