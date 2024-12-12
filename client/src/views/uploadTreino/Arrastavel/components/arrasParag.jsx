const ArrasParag = ({ mensagem, arrastar }) => {
    return (
        <section id="DragParag">
            <h4>Parágrafo</h4>
            <div className="div-border">
                <div>
                    <p ref={arrastar}>{mensagem}</p>
                </div>
            </div>
        </section>
    )
};

export default ArrasParag;