const ArrasParag = ({ mensagem, arrastar }) => {
    return(
        <>
            <section id="DragParag">  
                <div className="div-border">
                    <div>
                        <div>
                            <p ref={arrastar}>{mensagem}</p>
                        </div>
                    </div>
                </div>
                <h4>Parágrafo</h4>
            </section>
        </>
    )
};

export default ArrasParag;