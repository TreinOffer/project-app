import React from 'react';
import './estilo.css'
import imgs from "../../imgs/arrayImagens";

const Ed = () => {

  return (
    <>

      <form action="POST" encType='multipart/form-data'>
        <input type='file' nome='eduardo' />
        <button type="submit">Enviar</button>
        {alert("enviei")}
      </form>
    </>
  );
}

export default Ed;
