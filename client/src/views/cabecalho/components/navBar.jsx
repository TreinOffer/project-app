import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './estiloNav.css';
import { corCabecalho, rotasCabecalho } from './functions/cabecalho.nav';

const NavBar = ({ cargo }) => {
    const [corNav, setCorNav] = useState(String('gray'));
    const [rotas, setRotas] = useState([]);
    const { pathname } = useLocation();

    async function renderIt() {
        const routes = await rotasCabecalho(cargo);
        setRotas(routes);
        console.log("rotas: ",rotas);

        const color = await corCabecalho(cargo);
        setCorNav(color);
        console.log(corNav);
    };

    useEffect(() => {
        renderIt();
    }, [cargo]);

    const activeStyles = useMemo(() => {
        return rotas?.reduce((acc, item) => {
            const key = item.tit ? item.tit.toLowerCase() : '';  // Usa o título da rota como chave
            if (key) {
                acc[key] = pathname === item.rota ? { borderBottom: '2px solid black' } : {};  // Define o estilo ativo se a rota corresponder ao pathname
            }
            return acc;
        }, {});
    }, [pathname, rotas]);  // Só recalcula se o pathname ou rotas mudarem
    

    return (
        <section style={{ backgroundColor: corNav }}>
            <ul className="menu">
                {
                    rotas?.map((rota, chave) => (
                        <Link key={chave} className='routes_cabecalho' to={rota.rota}>
                            <li className="navegacao" style={activeStyles[rota.tit.toLowerCase()]}>
                                <img src={rota.imagem} alt="" />
                                <span>{rota.tit}</span>
                            </li>
                        </Link>
                    ))
                }
                {/* <Link className='routes_cabecalho' to={activeStyles.inicio}>
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
                </Link> */}


                {/* <Link className='routes_cabecalho' to={urls.uparTreino}>
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
                </Link> */}
            </ul>
        </section>
    );
}

export default NavBar;
