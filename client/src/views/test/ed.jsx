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
    <div>
      <h1>Gerenciamento de Conteúdo</h1>

      {/* Botões de interação */}
      <button
        onClick={() =>
          addImage({ id: Date.now(), src: 'image1.jpg', alt: 'Imagem 1' })
        }
      >
        Adicionar Imagem
      </button>

      <button
        onClick={() =>
          addParagraph({ id: Date.now(), text: 'Este é um parágrafo.' })
        }
      >
        Adicionar Parágrafo
      </button>

      <button
        onClick={() =>
          addChildToImage(items[0]?.id, {
            id: Date.now(),
            src: 'child-image.jpg',
            alt: 'Imagem Filha',
          })
        }
        disabled={!items.some((item) => item.type === 'imagem')}
      >
        Adicionar Imagem Filha à Primeira Imagem
      </button>

      <button
        onClick={() =>
          setChildToParagraph(items.find((item) => item.type === 'parag')?.id, 
            'Conteúdo Filho do Parágrafo'
          )
        }
        disabled={!items.some((item) => item.type === 'parag')}
      >
        Adicionar Filho ao Parágrafo
      </button>

      {/* Renderização dos itens */}
      <div>
        <h2>Itens na Ordem de Adição:</h2>
        {items.map((item) =>
          item.type === 'imagem' ? (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} style={{ width: 100 }} />
              <div>
                <h3>Filhos:</h3>
                {item.children.map((child) => (
                  <img
                    key={child.id}
                    src={child.src}
                    alt={child.alt}
                    style={{ width: 50 }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div key={item.id}>
              <p>{item.text}</p>
              {item.child && <p>Filho: {item.child}</p>}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Ed;
