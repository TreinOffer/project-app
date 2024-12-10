import React, { useEffect, useRef, useState } from 'react';
import './estiloTreino.css';
import Cabecalho from '../cabecalho/cabecalho';
import imgs from '../../imgs/arrayImagens';
import { useParams } from 'react-router-dom';
import { sortByOrder } from './functions/sortByOrder';

function TelaModule() {
  const flipbookRef = useRef(null);  // Referência para o flipbook
  const [modulosForm, setModulosForm] = useState([]);
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
    console.log(resposta);
    return resposta;
  }

  useEffect(() => {
    async function getModules() {
      const modulos = await fetchModules(idTreino);
      const [moduloFormatado] = modulos?.map(modulo => {
        console.log('siiiim', modulo);
        return sortByOrder(modulo);
      });
      setModulosForm(moduloFormatado || []);
    }
    getModules();
  }, [idTreino]);

  useEffect(() => {
    if (flipbookRef.current && modulosForm.length > 0) {
      class FlipBook {
        constructor(bookElem) {
          this.elems = {
            book: bookElem,
            leaves: bookElem.querySelectorAll('.leaf'),
          };
          this.currentPagePosition = 0;
          this.turnPage(0);
          this.setupEvents();
        }

        setPagePosition(page, position, index) {
          let transform = '';
          transform = 'translate3d(0,0,' + (position < 0 ? 1 : -1) * Math.abs(index) + 'px)';

          if (position < 0) {
            transform += 'rotate3d(0,1,0,-180deg)';
            page.classList.add('turned');
          } else {
            page.classList.remove('turned');
          }

          if (page.style.transform !== transform) {
            page.style.transform = transform;
          }
        }

        turnPage(delta) {
          this.currentPagePosition += delta;
          if (this.currentPagePosition < 0) {
            this.currentPagePosition = 0;
            return;
          }
          if (this.currentPagePosition >= this.elems.leaves.length) {
            this.currentPagePosition = this.elems.leaves.length - 1;
            return;
          }

          this.elems.leaves.forEach((page, index) => {
            const pageNumber = index;
            this.setPagePosition(page, pageNumber - this.currentPagePosition, index);
          });
        }

        setupEvents() {
          const pages = this.elems.book.querySelectorAll('.leaf');

          pages.forEach((page) => {
            const front = page.querySelector('.page.front');
            const back = page.querySelector('.page.back');

            front.addEventListener('click', () => {
              this.turnPage(1);
            });

            back.addEventListener('click', () => {
              this.turnPage(-1);
            });
          });
        }
      }

      new FlipBook(flipbookRef.current);
    }
  }, [modulosForm]);

  return (
    <>
      <Cabecalho />
      <section className="grid_module">
        <div className="modules-controls centered"></div>
        <div className="flipbook centered" id="flipbook" ref={flipbookRef}>
          <div className="leaf">
            <div
              className="page front title external"
              style={{
                backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
                width: '106%',
                height: '628px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img src={imgs.TreinOfferblack} alt="" style={{ width: '300px', margin: '0 auto 0 22px' }} />
              <img
                src={imgs.empresa}
                alt="Logo da capa"
                style={{
                  width: '400px',
                  height: 'auto',
                  borderRadius: '25px',
                  transition: '0.3s ease-in',
                  border: '1px solid rgba(0, 0, 0, 0.4)',
                  marginTop: '100px',
                }}
              />
            </div>
            <div
              className="page back"
              style={{
                backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div className="pageNumber">1</div>
            </div>
          </div>

          {modulosForm?.map((modulo, key) => (
            <div className="leaf" key={key}>
              <div
                className="page front"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
              />
              <div
                className="page back"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                }}
              >
                {modulo.Titulo && (
                  <div key={`titulo-${key}`}>
                    <h2>{modulo.Titulo}</h2>
                  </div>
                )}

                {modulo.Paragrafo && (
                  <div key={`paragrafo-${key}`}>
                    <p>{modulo.Paragrafo}</p>
                  </div>
                )}

                {modulo.Imagem && (
                  <div key={`imagem-${key}`}>
                    <img
                      src={`${process.env.REACT_APP_BACKEND}/imgs/${modulo.Imagem}`}
                      alt={`imagem-${key}`}
                      style={{ width: '100%', margin: '10px 0' }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default TelaModule;
