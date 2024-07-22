import React, { useState } from 'react';
import './estilo.css';
import { useEffect } from "react";
// import { useState,useEffect } from "react";

const Ed = () => {

  function ImageUploader() {
    const [imagem, setImagem] = useState(null);
  
    const handleImageUpload = (event) => {
      const file = event.target.files[0]; // Acessando o primeiro arquivo selecionado
      if (file) {
        setImagem(URL.createObjectURL(file)); // Criando URL temporária para exibir a imagem
      }
    };
  
    return (
      <div>
        <h2>Upload de Imagem</h2>
        <input type="file" accept=".png, .jpg, .jpeg" onChange={handleImageUpload} />
        {imagem ? (
          <div className="func_foto">
            <h3>Imagem Carregada:</h3>
            <img src={imagem} alt="Imagem Carregada" style={{ maxWidth: '100%' }} />
          </div>
        ) : (
          <div className="func_foto">
            <h3>Imagem de Exemplo:</h3>
            <img src="caminho/para/imagem-padrao.jpg" alt="Imagem de Exemplo" style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    );
  }

}

export default Ed;
