import React from 'react'
import './estilo.css'
import imgs from '../../imgs/arrayImagens'

function NavBar() {
    return (
        <>
            <aside className="nav_bar">
                <section className="logoNavBar">
                    <section className="menuNav">
                        <img src={imgs.voltar} alt="Fechar" className="escape" />
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
                <div className="menu">
                    <li className="navegacao">
                        <img src={imgs.home} alt="" />
                        <span>Início</span>
                    </li>
                    <li className="navegacao">
                        <img src={imgs.livro} alt="" />
                        <span>Meus cursos</span>
                    </li>
                    <ul className="tarefas">
                        <h3>Tarefas</h3>
                        <li className="navegacao">
                            <img src={imgs.professor} alt="" />
                            <span>Gerenciar professores</span>
                        </li>
                        <li className="navegacao">
                            <img src={imgs.estudante} alt="" />
                            <span>Gerenciar alunos</span>
                        </li>
                    </ul>
                    <ul className="financeira">
                        <h3>Financeiro</h3>
                        <li className="navegacao">
                            <img src="" alt="" />
                            <span>Pendências</span>
                        </li>
                    </ul>
                    <ul className="financeira">
                        <h3>Financeiro</h3>
                        <li className="navegacao">Pendências</li>
                    </ul>
                </div>
                <footer>
                    <a href="https://github.com/TreinOffer">
                        <div className="boxGit">
                            <img className="gitLink" src={imgs.git} alt="Github" />
                        </div>
                    </a>
                    <p>Siga-nos na página do projeto</p>
                </footer>
            </aside>
        </>
    )
}

export default NavBar
