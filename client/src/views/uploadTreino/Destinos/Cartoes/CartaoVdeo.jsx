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
                    <hr />
                    <img
                        src={imgs.arrowUp}
                        alt="arrow"
                        onClick={actionExpanse}
                        style={{
                            transition: '1.6s ease-in-out',
                            transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    />
                    <div
                        className='actions'
                        style={{
                            maxHeight: isFlipped ? '200px' : '0px',
                            borderBottom: isFlipped ? '1px solid black' : '0px solid black',
                        }}
                    >
                        <div className='div-rem'>
                            <img onClick={() => deletar(index)} src={imgs.trash} alt="Remover" style={{ color: 'black' }} />
                        </div>
                        <div className='div-selecionar'>
                            <input
                                onChange={handleUploadVdo} 
                                accept='.mp4,.ogg,.webm'
                                multiple={false}
                                type="file"
                                name="VideoTreino"
                                className='buttonUpload'
                                id={`Video${index}`}
                            />
                            <h4 className='selector-text'>Selecionar</h4>
                        </div>
                        <div className="div-change-type">
                            <select onChange={actionTypeVideo} value={videoType}>
                                <option value="youtube">YouTube</option>
                                <option value="local">Video Local</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {isPopupVisible && <UparUrl setYoutubeUrl={setYoutubeUrl} setIsPopupVisible={setIsPopupVisible} />}
        </div>
    );
}

export default CartaoVdeo;
