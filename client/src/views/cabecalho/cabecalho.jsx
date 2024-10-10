import React from 'react';

import MenuUser from "./components/menuUser";
import NavBar from './components/navBar';
import Header from './components/header';

const Cabecalho = () => {
    return (
        <>
            <MenuUser />
            <Header />
            <NavBar />
        </>
    );
}

export default Cabecalho;