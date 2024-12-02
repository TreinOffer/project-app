import React from 'react';
import './estilo.css'
import imgs from "../../imgs/arrayImagens";

import { useState } from 'react';

const Ed = () => {
  // Estado inicial: armazena imagens e parágrafos no mesmo array
  const [items, setItems] = useState([]);

  // Função para adicionar uma nova imagem
  const addImage = (newImage) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newImage, type: 'imagem', children: [] },
    ]);
  };

  // Função para adicionar um novo parágrafo
  const addParagraph = (newParagraph) => {
    setItems((prevItems) => [
      ...prevItems,
      { ...newParagraph, type: 'parag', child: null },
    ]);
  };

  // Função para adicionar um filho a uma imagem específica
  const addChildToImage = (imageId, childImage) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === imageId && item.type === 'imagem'
          ? { ...item, children: [...item.children, childImage] }
          : item
      )
    );
  };

  // Função para definir ou substituir o filho de um parágrafo
  const setChildToParagraph = (paragId, childContent) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === paragId && item.type === 'parag'
          ? { ...item, child: childContent }
          : item
      )
    );
  };

  // Função para remover um item pelo ID
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Exibe o estado atual dos itens no console
  console.log('Current Items:', items);

  return (
    <>

      <form action="POST" encType='multipart/form-data'>
        <input type='file' nome='eduardo' />
        <button type="submit">Enviar</button>
        {alert("enviei")}
      </form>
    </>
  );
};

export default Ed;
