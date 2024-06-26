import React from 'react';
import './estiloNav.css';
import './estiloAside.css';
import imgs from '../../imgs/arrayImagens'
import {Link} from 'react-router-dom'

const cabecalho = () => {

    const handleMenuCabecalho = () => {
        const nav = document.getElementById("nav");
        if (nav){
            nav.style.left = "0%";
        };
    };

    const handleMenu = () => {
        const nav = document.getElementById("nav");
        if (nav){
            nav.style.left = "calc(0% - 414px)";
        };
    };

    return (
        <>
            <aside className="nav_bar" id='nav'>
                <section className="logoNavBar">
                    <section className="menuNav">
                        <img src={imgs.voltar} alt="Fechar" className="escape" onClick={handleMenu} />
                        <img src={imgs.menu} alt="Menu" className="opcoes" />
                    </section>
                    <img className="logoTreinOffer" src={imgs.TreinOffer} alt="" />
                </section>
                <section className="secaoUser">
                    <section className="user">
                        <div className="imgUser">
                            <img src={imgs.empresa} alt="N/A" />
                        </div>
                        <div className="nomeUser">
                            Agro Indústria Polpa de Fruta LTDA
                        </div>
                    </section>
                </section>
                <ul className="menu">
                    <li className="navegacao">
                        <img src={imgs.home} alt="" />
                        <span>Início</span>
                    </li>
                    <ul className="tarefas">
                        <h3>Treinamentos</h3>
                        <li className="navegacao">
                            <img src={imgs.livro} alt="" />
                            <Link className='routes_cabecalho' to="/CursosEmpresa">Meus treinos</Link>
                        </li>
                        <li className='navegacao'>
                            <img src={imgs.upload} alt="" />
                            <Link className='routes_cabecalho' to="/uploadCurso">Enviar treinamento</Link>
                        </li>
                    </ul>
                    <ul className="tarefas">
                        <h3>Tarefas</h3>
                        <li className="navegacao">
                            <img src={imgs.tecnicos} alt="" />
                            <Link className='routes_cabecalho' to="/tecnicos">Tecnicos</Link>
                        </li>
                        <li className="navegacao">
                            <img src={imgs.colaboradores} alt="" />
                            <Link className='routes_cabecalho' to="/colaboradores">Colaboradores</Link>
                        </li>
                    </ul>
                    <ul className="financeira">
                        <h3>Financeiro</h3>
                        <li className="navegacao">
                            <img src={imgs.financas} alt="" />
                            <Link className='routes_cabecalho' to="/Fatura">Fatura</Link>
                        </li>
                    </ul>
                </ul>
                <footer>
                    <a href="https://github.com/TreinOffer">
                        <div className="boxGit">
                            <img className="gitLink" src={imgs.git} alt="Github" />
                        </div>
                    </a>
                    <p>Siga-nos na página do projeto</p>
                </footer>
            </aside>

            <section className="barPesquisar">

                <div className="secEsq">
                    <img className="menu" src={imgs.menu} alt="" onClick={handleMenuCabecalho} />
                    <img className="logo" src={imgs.TreinOffer} alt="TreinOffer" />
                </div>

                <div className="secMeio">
                    <input type="text" placeholder="Buscar cursos" />
                    <button className="btPesquisar">
                        <img src={imgs.buscar} alt="Lupa" />
                    </button>
                </div>

                <div className="secDir">
                    <img className="uploadTreino" src={imgs.upload} alt="Upload" />
                    <img className="menuPerfil" src={imgs.empresa} alt="Menu" />
                </div>
            </section>
        </>
    );
}

export default cabecalho;