import React from 'react';
import './estCerti.css';




function Certificado() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="certificado-container">,
        <div className="certificado">
          <h1>Certificado</h1>
          <p className="subtitulo">Este certificado é concedido a:</p>
          <h2 className="nome-participante">Nome do Participante</h2>
          <p className="subtitulo">Por ter concluído com sucesso o curso:</p>
          <h3 className="titulo-curso">Título do Curso</h3>
          <p className="data">Data: <strong>DD/MM/AAAA</strong></p>
          <div className="assinaturas">
            <p>________________________</p>
            <p>Nome do Instrutor</p>
            <p>Assinatura</p>
          </div>
          <button className="btn-imprimir" onClick={handlePrint}>Imprimir Certificado</button>
        </div>
      </div>
    </>
  );
}

export default Certificado;