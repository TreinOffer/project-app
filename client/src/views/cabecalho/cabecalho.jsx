import React, { useEffect, useState } from 'react';
import MenuUser from "./components/menuUser";
import NavBar from './components/navBar';
import Header from './components/header';
import { popUp } from "../../components/popUp/services/popUp.classes";
import { RequestToken } from '../../components/fetchToken/token.function';
import { useNavigate } from 'react-router-dom';


const Cabecalho = () => {
    const [expanse, setExpanse] = useState(false);
    const navegar = useNavigate();
    const [pop, setPop] = useState(null);

    async function Sessao() {
        const sessao = await RequestToken();
        console.log(sessao);
        if (!sessao || sessao.status === 403) {
            setPop(
                popUp.erro("Acesso negado")
            );
            setTimeout(() => {
                navegar('/');
            }, 1500);
        };
    };

    useEffect(() => {
        Sessao();
    }, []);

    return (
        <>
            {true && pop}
            <MenuUser handleClick={() => setExpanse(!expanse)} handleAside={expanse} />
            <Header handleSecEsq={() => setExpanse(!expanse)} />
            <NavBar />
        </>
    );
};

export default Cabecalho;