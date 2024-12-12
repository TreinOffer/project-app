const ArrasImg = ({ imagem, arrastar }) => {
    return (
        <>
            <section id="DragImagem">
                <h4>Imagem</h4>
                <div className="div-border">
                    <div>
                        <img src={imagem} alt="Imagem" ref={arrastar} />
                    </div>
                </div>
            </section>
        </>
    )
};

export default ArrasImg;