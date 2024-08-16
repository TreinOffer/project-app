const ArrasImg = ({id,imagem,arrastar}) => {
    return (
        <>
            <div>
                <img id={id} src={imagem} alt="Imagem" ref={arrastar}/>
            </div>
        </>
    )
};

export default ArrasImg;