import React, { useState } from 'react';
import imgs from '../../../imgs/arrayImagens';
import './estiloCabec.css';
import { Link, useNavigate } from 'react-router-dom';
import { popUp } from '../../../components/popUp/services/popUp.classes';

const Header = ({ handleSecEsq }) => {
    const [pop, setPop] = useState(null);
    const navegar = useNavigate();

    async function logOut() {
        setPop(
            popUp.aviso("Encerrando sessão")
        );

        const exit = setTimeout(() => {
            localStorage.removeItem('token');
            navegar("/login");
        }, 2000);

        return exit;
    };

    return (
        <>
            {true && pop}
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
                    <div className='notf'>
                        <img src={imgs.sair} alt="sair" onClick={() => logOut()} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
