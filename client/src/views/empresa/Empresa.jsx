import React, { useState } from 'react';
import './empresa.css'; 
import imgs from '../../imgs/arrayImagens.jsx';
import { Link, useNavigate } from 'react-router-dom';

const msg = {
    login: 'Login - Empresa',  
    cadastro: 'Cadastro',
    login2: 'Logue-se',
    cadastro2: 'Cadastre-se',
    cadastre_se: "Eu não tenho uma conta",
    logue_se: "Eu possuo uma conta"
};

const logar_se = (login, senha) => {
    try {        
    } catch (error) {
        throw new Error(`Erro na API: ${error}`);
    }
};

function Login() {
    const [currentMsg] = useState(msg.login);  
    const navigate = useNavigate();

    return (
        <>
            <main className='main_login'>
                <section className="secao_dados">
                    <div className='login_dados'>
                        <h1>{currentMsg}</h1>  
                        <table>
                            <tbody>
                                <tr className="campo_cnpj">
                                    <td><label htmlFor="cnpj">CNPJ:</label></td>
                                    <td>
                                        <input
                                            placeholder="Inserir CNPJ"
                                            type="text"
                                            name="cnpj"
                                            id="cnpj"
                                        />
                                    </td>
                                </tr>
                                <tr className="campo_pass">
                                    <td><label htmlFor="pass">Senha:</label></td>
                                    <td><input placeholder='Inserir senha' type="password" name="senha" id="pass" /></td>
                                </tr>
                                <tr>
                                    <td><input onClick={logar_se} className='campo_entrar' type="submit" value="Entrar" /></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="campo_cadastrar">
                            <span>{msg.cadastro2}</span>
                            <Link to='/cadastro'>
                                <div className='redirecter'>{msg.cadastre_se}</div>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="faixa"></div>
                <section className="secao_logo">
                    <a href="/">
                        <img id="logo" src={imgs.TreinOfferblack} alt="Logo" />
                    </a>
                </section>
            </main>
        </>
    );
}

export default Login;