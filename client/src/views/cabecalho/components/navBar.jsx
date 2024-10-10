import React from 'react';
import { Link } from 'react-router-dom';

import imgs from '../../../imgs/arrayImagens';
import './estiloNav.css';

const NavBar = () => {
    return (
        <section style={{ backgroundColor: "hsl(200,80%,80%)" }}>
            <ul className="menu">
                <Link className='routes_cabecalho' to="/">
                    <li className="navegacao">
                        <img src={imgs.home} alt="" />
                        <span>Início</span>
                    </li>
                </Link>

                <ul className="tarefas">
                    {/* <h3>Treinamentos</h3> */}

                    <Link className='routes_cabecalho' to="/treinos">
                        <li className="navegacao">
                            <img src={imgs.livro} alt="" />
                            <span>Meus treinos</span>
                        </li>
                    </Link>

                    <Link className='routes_cabecalho' to="/uploadTreino">
                        <li className="navegacao">
                            <img src={imgs.upload} alt="" />
                            <span>Enviar treinamento</span>
                        </li>
                    </Link>
                </ul>
                <ul className="tarefas">
                    {/* <h3>Tarefas</h3> */}
                    <Link className='routes_cabecalho' to="/tecnicos">
                        <li className="navegacao">
                            <img src={imgs.tecnicos} alt="" />
                            <span>Técnicos</span>
                        </li>
                    </Link>

                    <Link className='routes_cabecalho' to="/colaboradores">
                        <li className="navegacao">
                            <img src={imgs.colaboradores} alt="" />
                            <span>Colaboradores</span>
                        </li>
                    </Link>

                </ul>
                <ul className="financeira">
                    {/* <h3>Financeiro</h3> */}
                    <Link className='routes_cabecalho' to="/fatura">
                        <li className="navegacao">
                            <img src={imgs.financas} alt="" />
                            <span>Fatura</span>
                        </li>
                    </Link>
                </ul>
            </ul>
        </section>
    );
}

export default NavBar;
