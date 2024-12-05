const ArrasVideo = ({ imagem, arrastar }) => {
    return(
        <>
            <section id="DragVideo">  
                <div className="div-border">
                    <div>
                        <div >
                            <img src={imagem} alt="video" />
                        </div>
                    </div>
                </div>
                <h4>Vídeo</h4>
            </section>
        </>
    )
};

export default ArrasVideo