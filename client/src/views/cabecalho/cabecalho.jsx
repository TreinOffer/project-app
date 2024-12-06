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
    const [role, setRole] = useState(null);

    async function Sessao() {
        const sessao = await RequestToken();
        console.log(sessao);
        if (!sessao || sessao.status === 403) {
            setPop(
                popUp.erro("Acesso negado")
            );
            return setTimeout(() => {
                navegar('/');
            }, 1500);
        }else if(sessao.status === 401){
            setPop(
                popUp.aviso("Sessão expirada")
            )
            return setTimeout(() => {
                navegar('/login');
            }, 1500);
        };
            
        const cargo = sessao.cargo;
        console.log("SESSAO::: ",cargo);
        return cargo;
    };

    
    // useEffect(() => {
    //     const getRole = async() => {
    //         const cargo = await Sessao();
    //         // console.log("SESSAO DEPOIS::: ",cargo);
    //         setRole(cargo);
    //         // console.log("SECTION STATE::: ",role)
    //     };
    //     getRole();
    //     // console.log("getRole: ",getRole);
    //     // console.log("SECTION STATE DEPOIS::: ",role);
    // }, []);
    
    // if (role === null) {
    //     return <div>Loading...</div>;
    // }

    // O problema é que aqui está retornando um valor null
    return (
        <>
            {true && pop}
            <MenuUser handleClick={() => setExpanse(!expanse)} handleAside={expanse} />
            <Header handleSecEsq={() => setExpanse(!expanse)} />
            <NavBar cargo={ role }/>
        </>
    );
};

export default Cabecalho;