import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgs from '../../../imgs/arrayImagens';
import './estiloNav.css';
import { RequestToken } from '../../../components/fetchToken/token';

const NavBar = () => {
    const { pathname } = useLocation();
    const role = RequestToken();
    console.log("role: ",role);

    const urls = useMemo(() => ({
        inicio: "/",
        treinos: "/treinos",
        uparTreino: "/uploadTreino",
        tecnicos: "/tecnicos",
        colaboradores: "/colaboradores",
        fatura: "/fatura"
    }), []);

    const activeStyles = useMemo(() => {
        return Object.keys(urls).reduce((acc, key) => {
            acc[key] = pathname === urls[key] ? { borderBottom: '2px solid black' } : {};
            return acc;
        }, {});
    }, [pathname, urls]);

    // useEffect(() => { RequestToken() });

    return (
        <section style={{ backgroundColor: "hsl(200,80%,80%)" }}>
            <ul className="menu">
                <Link className='routes_cabecalho' to={urls.inicio}>
                    <li className="navegacao" style={activeStyles.inicio}>
                        <img src={imgs.home} alt="" />
                        <span>Início</span>
                    </li>
                </Link>

                <Link className='routes_cabecalho' to={urls.treinos}>
                    <li className="navegacao" style={activeStyles.treinos}>
                        <img src={imgs.livro} alt="" />
                        <span>Meus treinos</span>
                    </li>
                </Link>

                <Link className='routes_cabecalho' to={urls.uparTreino}>
                    <li className="navegacao" style={activeStyles.uparTreino}>
                        <img src={imgs.upload} alt="" />
                        <span>Enviar treinamento</span>
                    </li>
                </Link>
                
                <Link className='routes_cabecalho' to={urls.tecnicos}>
                    <li className="navegacao" style={activeStyles.tecnicos}>
                        <img src={imgs.tecnicos} alt="" />
                        <span>Técnicos</span>
                    </li>
                </Link>

                <Link className='routes_cabecalho' to={urls.colaboradores}>
                    <li className="navegacao">
                        <img src={imgs.colaboradores} alt="" />
                        <span>Colaboradores</span>
                    </li>
                </Link>

                <Link className='routes_cabecalho' to={urls.fatura}>
                    <li className="navegacao" style={activeStyles.fatura}>
                        <img src={imgs.financas} alt="" />
                        <span>Fatura</span>
                    </li>
                </Link>
            </ul>
        </section>
    );
}

export default NavBar;
