const ArrasImg = ({ imagem, arrastar }) => {
    return (
        <>
            <section id="DragImagem">  
                <div className="div-border">
                    <div>
                        <div>
                            <img src={imagem} alt="Imagem" ref={arrastar}/>
                        </div>
                    </div>
                </div>
                <h4>Imagem</h4>
            </section>
        </>
    )
};

export default ArrasImg;