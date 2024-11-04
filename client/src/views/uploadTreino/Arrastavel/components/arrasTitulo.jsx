import React from 'react';

const ArrasTitulo = ({ mensagem, arrastar }) => {
    return (
        <section id="DragTit">
            <h4>Título</h4>
            <div className="div-border">
                <div>
                    <p ref={arrastar}>{mensagem}</p>
                </div>
            </div>
        </section>
    )
}

export default ArrasTitulo;
