import React, { useState } from 'react';
import './login.estilo.css';
import imgs from '../../imgs/arrayImagens.jsx';
import { Link } from 'react-router-dom';

const msg = {
    login: 'Login',
    cadastro: 'Cadastro',
    login2: 'Logue-se',
    cadastro2: 'Cadastre-se',
    cadastre_se: "Eu não tenho uma conta",
    logue_se: "Eu possuo uma conta"
};

function Login() {
    const [currentMsg, setCurrentMsg] = useState(msg.login);
    const [isEmpresa, setIsEmpresa] = useState(false);

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setIsEmpresa(selectedValue === 'empresa');
        if (selectedValue === 'empresa') {
            setCurrentMsg('Login - Empresa');
        } else if (selectedValue === 'funcionario') {
            setCurrentMsg('Login - Funcionário');
        } else {
            setCurrentMsg(msg.login);
        }
    };

    return (
        <>
            <main className='main_login'>
                <section className="secao_dados">
                    <div className='login_dados'>
                        <h1>{currentMsg}</h1>
                        <table>
                            <tbody>
                                <tr className="campo_matricula">
                                    <td><label htmlFor="matricula">{isEmpresa ? 'CNPJ:' : 'Matrícula:'}</label></td>
                                    <td>
                                        <input
                                            placeholder={isEmpresa ? 'Inserir CNPJ' : 'Inserir ID'}
                                            type="text"
                                            name="matricula"
                                            id="matricula"
                                        />
                                    </td>
                                </tr>
                                <tr className="campo_senha">
                                    <td><label htmlFor="senha">Senha:</label></td>
                                    <td><input placeholder='Inserir senha' type="password" name="senha" id="senha" /></td>
                                </tr>
                                <tr>
                                    <td><input className='campo_entrar' type="submit" value="Entrar" /></td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="campo_cadastrar">
                            <span>{msg.cadastro2}</span>
                            <Link to='/cadastro'>
                                <div className='redirecter'>Eu não tenho uma conta</div>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="faixa"></div>
                <section className="secao_logo">
                    <a href="/">
                        <img id="logo" src={imgs.TreinOffer} alt="Logo" />
                    </a>
                    <div className="opcoes_selecao_texto">
                        <strong style={{ display: 'block', marginTop: '530px', fontSize: '24px', fontWeight: 'bold' }}>Eu sou:</strong>
                    </div>
                    <div className="opcoes_selecao">
                        <label>
                            <input type="radio" name="tipo" value="empresa" onChange={handleOptionChange} />
                            Empresa
                        </label>
                        <label>
                            <input type="radio" name="tipo" value="funcionario" onChange={handleOptionChange} />
                            Funcionário
                        </label>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Login;