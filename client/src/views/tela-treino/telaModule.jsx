import React, { useEffect } from 'react';
import './estiloTreino.css';
import Cabecalho from '../cabecalho/cabecalho';
import imgs from '../../imgs/arrayImagens';

function TelaModule() {
  useEffect(() => {
    class FlipBook {
      constructor(bookElem) {
        this.elems = {
          book: bookElem,
          leaves: bookElem.querySelectorAll(".leaf"),
          buttons: {
            next: document.getElementById("nextPage"),
            prev: document.getElementById("prevPage"),
          },
        };
        this.setupEvents();
        this.currentPagePosition = 0;
        this.turnPage(0);
      }
      setPagePosition(page, position, index) {
        var transform = "";
        transform =
          "translate3d(0,0," + (position < 0 ? 1 : -1) * Math.abs(index) + "px)";

        if (position < 0) {
          transform += "rotate3d(0,1,0,-180deg)";
          page.classList.add("turned");
        } else {
          page.classList.remove("turned");
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
        if (this.currentPagePosition > this.elems.leaves.length) {
          this.currentPagePosition = this.elems.leaves.length;
          return;
        }
        this.elems.leaves.forEach((page, index) => {
          var pageNumber = index;
          this.setPagePosition(page, pageNumber - this.currentPagePosition, index);
        });

        if (this.currentPagePosition === 0) {
          this.elems.buttons.prev.setAttribute("disabled", "disabled");
        } else if (this.currentPagePosition === this.elems.leaves.length) {
          this.elems.buttons.next.setAttribute("disabled", "disabled");
        } else {
          this.elems.buttons.next.removeAttribute("disabled");
          this.elems.buttons.prev.removeAttribute("disabled");
        }
      }
      setupEvents() {
        document.getElementById("nextPage").addEventListener("click", () => {
          this.turnPage(1);
        });
        document.getElementById("prevPage").addEventListener("click", () => {
          this.turnPage(-1);
        });
      }
    }

    const flipBookElem = document.getElementById("flipbook");
    if (flipBookElem) {
      new FlipBook(flipBookElem);
    }
  }, []);

  return (
    <>
      <Cabecalho />
      <section className="grid_module">
        <div className="modules-controls centered">
          <button id="module1" className="module-button">Módulo 1</button>
          <button id="module2" className="module-button">Módulo 2</button>
          <button id="module3" className="module-button">Módulo 3</button>
        </div>
        <div className="flipbook centered" id="flipbook">
          <div className="leaf">
            <div
              className="page front title external"
              style={{
                backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
                width: '106%',
                height: '628px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
              }}
            >
              <img src={imgs.TreinOffer} alt="" style={{ width: '300px', height: 'auto' }} />
              <img
                src={imgs.empresa}
                alt="Logo da empresa"
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
            <div className="page back" style={{
              backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="pageNumber">1</div>
            </div>
          </div>
          <div className="leaf">
            <div className="page front" style={{
              backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="pageNumber">2</div>
            </div>
            <div className="page back" style={{
              backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="pageNumber">1</div>
            </div>
          </div>
          <div className="leaf">
            <div className="page front" style={{
              backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="pageNumber">3</div>
            </div>
            <div className="page back" style={{
              backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="pageNumber">4</div>
            </div>
          </div>
          <div className="leaf">
            <div className="page front" style={{
              backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="pageNumber">5</div>
            </div>
            <div className="page back" style={{
              backgroundImage: 'linear-gradient(to right, rgb(163, 218, 245), white)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}>
              <div className="pageNumber">6</div>
            </div>
          </div>
        </div>
        <div className="controls centered">
          <button id="prevPage" className="pagination-button prev-button">
            &lt; Previous
          </button>
          <button id="nextPage" className="pagination-button next-button">
            Next &gt;
          </button>
        </div>
      </section>
    </>
  );
}

export default TelaModule;
