import React, { useEffect, useRef, useState } from 'react';
// import './estiloTreino.css';
import '../uploadTreino/estiloDestino.css';
import Cabecalho from '../cabecalho/cabecalho';
import { useParams } from 'react-router-dom';
import { sortByOrder } from './functions/sortByOrder';
import ImagemComponent from './components/imagem.component';
import TituloComponent from './components/titulo.component';
import ParagrafoComponent from './components/paragrafo.component';
import VideoComponent from './components/video.component';

function TelaModule() {
  const [modulosForm, setModulosForm] = useState([]);
  const [numModulo, setNumModulo] = useState(1);
  const { idTreino } = useParams();

  async function fetchModules(idTreino) {
    const token = localStorage.getItem('token');
    const request = await fetch(`${process.env.REACT_APP_BACKEND}/treino/${idTreino}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const resposta = await request.json();
    console.log("resposta: ", resposta);
    return resposta;
  }

  const handleModulo = (valor) => {
    if (!valor) {
      setNumModulo(prevModulo => (prevModulo - 1))
      console.log(numModulo);
    } else {
      setNumModulo(prevModulo => (prevModulo + 1))
      console.log(numModulo);
    }
  };

  useEffect(() => {
    async function getModules() {
      let modulos = await fetchModules(idTreino);
      modulos = modulos.map(modulo => {
        return [modulo];
      });
      console.log(modulos);

      const [moduloFormatado] = modulos[numModulo - 1] ?
      modulos[numModulo - 1].map(
        modulo => sortByOrder(modulo)) : [];
        
      console.log(moduloFormatado);
      setModulosForm(moduloFormatado || []);
    }
    getModules();
  }, [idTreino, numModulo]);

  useEffect(() => { console.log("mudou modulo: ", modulosForm) }, []);

  return (
    <>
      <Cabecalho />
      <main className="contentUpTreino">
        <div className='wrap-section-destino'>
          <div className='botao-modulo'>

            <button onClick={numModulo > 1 ? () => handleModulo(false) : null}
              type="button"> {'<'} </button>

            <span>{`Modulo ${numModulo}`}</span>

            <button onClick={() => handleModulo(true)}
              type="button"> {'>'} </button>

          </div>
          <section className='dropSection'
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {modulosForm.map((item, index) => {
              const chave = Object.keys(item)[0];
              const valor = item[chave];

              if (chave === 'tit') {
                return <TituloComponent key={index} titulo={valor} />

              } else if (chave === 'parag') {
                return <ParagrafoComponent key={index} paragrafo={valor} />;

              } else if (chave === 'imagem') {
                return <ImagemComponent key={index} imagem={valor} />

              } else if (chave === 'video') {
                return <VideoComponent key={index} url={valor} />;

              } else {
                return null; // Caso a chave não seja reconhecida
              }
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default TelaModule;
