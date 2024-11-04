const ArrasVideo = ({ imagem, arrastar }) => {
    return (
        <>
            <section id="DragVideo">
                <h4>Vídeo</h4>
                <div className="div-border">
                    <div >
                        <img src={imagem} alt="video" ref={arrastar}/>
                    </div>
                </div>
            </section>
        </>
    )
};

export default ArrasVideo