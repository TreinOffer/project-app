import React from 'react';
import './estiloTreino.css';  
import Cabecalho from '../cabecalho/cabecalho';

function TelaModule() {        
  return (
    <>
      <Cabecalho />
      <div className="book-container">
      <div className="book">
        <div className="book-cover front"></div>
        <div className="book-cover back"></div>
        <div className="book-pages">
          <div className="page"></div>
          <div className="page"></div>
          <div className="page"></div>
        </div>
      </div>
    </div>
    </>
  );  
}

export default TelaModule;
