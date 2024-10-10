import React from 'react';

import imgs from '../../../imgs/arrayImagens';
import './estiloAside.css';

const MenuUser = () => {
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

                
                
                <footer>
                    <a href="https://github.com/TreinOffer">
                        <div className="boxGit">
                            <img className="gitLink" src={imgs.git} alt="Github" />
                        </div>
                    </a>
                    <p>Siga-nos na página do projeto</p>
                </footer>
            </aside>
    );
}

export default MenuUser;