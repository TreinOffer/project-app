import React from 'react';

import imgs from '../../../imgs/arrayImagens';
import './estiloCabec.css';

const Header = () => {
    return (
        <section className="barPesquisar">
            <div className="secEsq">
                {/* <img className="menu" src={imgs.menu} alt="" onClick={handleMenuCabecalho} /> */}
                <div className="fundoFoto">
                    <img className="menuPerfil" src={imgs.empresa} alt="Menu" /></div>
            </div>

            <div className="secMeio">
                <img className="logo" src={imgs.TreinOffer} alt="TreinOffer" />
                <div className="gitDiv">
                    <img className="uploadTreino" src={imgs.git} alt="Git" />
                </div>
            </div>

            <div className="secDir">
                <div className="notf">
                    <img src="" alt="notificacao" />
                </div>
            </div>
        </section>
    );
}

export default Header;
