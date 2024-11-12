import React, { useState } from 'react';

import MenuUser from "./components/menuUser";
import NavBar from './components/navBar';
import Header from './components/header';

const Cabecalho = () => {
    const [expanse, setExpanse] = useState(false);

    return (
        <>
            <MenuUser handleClick={ () => setExpanse(!expanse) } handleAside={ expanse } />
            <Header handleSecEsq={() => setExpanse(!expanse)} />
            <NavBar />
        </>
    );
}

export default Cabecalho;