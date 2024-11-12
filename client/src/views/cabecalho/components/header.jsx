import React from 'react';
import imgs from '../../../imgs/arrayImagens';
import './estiloCabec.css';
import { Link } from 'react-router-dom';

const Header = ({ handleSecEsq }) => {
    return (
        <section className="barPesquisar">
            <div className="secEsq">
                {/* <img className="menu" src={imgs.menu} alt="" onClick={handleMenuCabecalho} /> */}
                <div className="fundoFoto">
                    <img onClick={handleSecEsq} className="menuPerfil" src={imgs.empresa} alt="Menu" /></div>
            </div>

            <div className="secMeio">
                <Link to='/treinos'>
                    <img className="logo" src={imgs.TreinOffer} alt="TreinOffer" />
                </Link>

                <div className="gitDiv">
                    <img className="uploadTreino" src={imgs.git} alt="Git" />
                </div>
            </div>

            <div className="secDir">
                <div className="notf">
                    <img src={imgs.notificao} alt="notificacao" />
                </div>
            </div>
        </section>
    );
}

export default Header;
