import React from 'react'
 import "./estilo.css"
import cabecalho from '../cabecalho'

function CursosEmpresa() {
  return (
    <>

      {cabecalho()}

      <section className="barPesquisar">

        <div className="secEsq">
          <img className="menu" src="../aymar/imgs/menuIcon.png" alt="" />
          <img className="logo" src="../aymar/imgs/logoTreinOffer.png" alt="TreinOffer" />
        </div>

        <div className="secMeio">
          <input type="text" placeholder="Buscar cursos" />
          <button className="btPesquisar">
            <img src="../aymar/imgs/searchIcon.png" alt="Lupa" />
          </button>
        </div>

        <div className="secDir">
          <button className="logar">Login</button>
          <img src="../aymar/imgs/logOutIcon.png" alt="Sair" />
          <img src="../aymar/imgs/settingsIcon.png" alt="Config" />
        </div>
      </section>

      {/*<section>
<div className="search">
    <span className="search-icon material-symbols-outlined">search</span>
    <input className="search-input" type="search" placeholder="Buscar cursos">
</div>

</section> */}

      <div id="cursoEmpresa" className="container">
        <div className="one">

          <img src="img/pedreiro.png" alt="" />
          <div className="string">Administração em Agronegócio</div>
          <i className="fa fa-download iconCurso"></i>

        </div>
        <div className="one">
          <div>
            <img src="img/imagem.png" alt="" />
            <div className="string">Cadeias Produtivas Agrícolas</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/pintor.png" alt="" />
            <div className="string">Economia Rural</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/amor.png" alt="" />
            <div className="string">Fundamentos de Zootecnia</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/celebrelo.png" alt="" />
            <div className="string">Gestão de Custos</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/industrial.png" alt="" />
            <div className="string">Logística</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/mecanica.png" alt="" />
            <div className="string">Mecanica Industrial</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/farmacia.png" alt="" />
            <div className="string">Técnico em soldagem</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/eletrotecnica.jpg" alt="" />
            <div className="string">Eletrotecnica</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/logistica.png" alt="" />
            <div className="string">Política Agrícola</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/alimento.png" alt="" />
            <div className="string">Produção Vegetal</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
        <div className="one">
          <div>
            <img src="img/maquinapesada.png" alt="" />
            <div className="string">Operador de Máquinas</div>
            <i className="fa fa-download iconCurso"></i>
          </div>
        </div>
      </div>

    </>
  )
}

export default CursosEmpresa