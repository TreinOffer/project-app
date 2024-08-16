const ArrasParag = ({ mensagem, arrastar }) => {
    return(
        <>
            <p ref={arrastar}>{mensagem}</p>
        </>
    )
};

export default ArrasParag;