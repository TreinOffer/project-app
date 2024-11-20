import React, { useState } from 'react';
import './login.estilo.css';
import imgs from '../../imgs/arrayImagens.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { popUp } from "../../components/popUp/services/popUp.classes.js";

const msg = {
    login: 'Login',
    cadastro: 'Cadastro',
    login2: 'Logue-se',
    cadastro2: 'Cadastre-se',
    cadastre_se: "Eu não tenho uma conta",
    logue_se: "Eu possuo uma conta"
};

function Login() {
    const [popState, setPopState] = useState(null);

    // const [currentMsg, setCurrentMsg] = useState(msg.login);
    // const [isEmpresa, setIsEmpresa] = useState(false);
    const navigate = useNavigate();

    const [login, setLogin] = useState();
    const [senha, setSenha] = useState();

    const logar_se = async () => {
        const dados = { login, senha };
        setPopState(null);
        // console.log("seis lados: ", dados);

        try {
            const request = await fetch(`http://localhost:5000/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            });
            console.log("request é: ", request);
            if (request.status === 203) {

                setPopState(
                    popUp.erro("CNPJ ou Matrícula inexistente")
                );

            } else if (request.status === 202) {
                const { token } = await request.json();
                console.log("sim ", token);
                localStorage.setItem('token', token);
                navigate('/treinos');

            } else {

                setPopState(
                    popUp.erro("Não foi possível processar sua solicitação")
                );

            };
        } catch (error) {

            setPopState(
                popUp.erro("Não foi possível conectar ao servidor")
            );
        }
    };

    // const handleOptionChange = (event) => {
    //     const selectedValue = event.target.value;
    //     setIsEmpresa(selectedValue === 'empresa');
    //     if (selectedValue === 'empresa') {
    //         setCurrentMsg('Login - Empresa');
    //         navigate('/login/empresa');
    //     } else if (selectedValue === 'funcionario') {
    //         setCurrentMsg('Login - Funcionário');
    //         navigate('/login/funcionario');
    //     } else {
    //         setCurrentMsg(msg.login);
    //     }
    // };

    return (
        <>
            {true && popState}
            <main className='main_login'>
                <section className="secao_dados">
                    <div className='login_dados'>
                        <h1>{msg.login}</h1>
                        <table>
                            <tbody>
                                <tr className="campo_matricula">
                                    <td><label htmlFor="matricula">Nome:</label></td>
                                    <td>
                                        <input
                                            placeholder='Inserir nome'
                                            type="text"
                                            name="nome"
                                            id="matricula"
                                            onChange={(e) => setLogin(e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr className="campo_pass">
                                    <td><label htmlFor="pass">Senha:</label></td>
                                    <td><input
                                        placeholder='Inserir senha'
                                        type="password"
                                        name="senha"
                                        id="pass"
                                        onChange={(e) => setSenha(e.target.value)} /></td>
                                </tr>
                                <tr>
                                    <td><input onClick={logar_se} className='campo_entrar' type="submit" value="Entrar" /></td>
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
                        <img id="logo" src={imgs.TreinOfferblack} alt="Logo" />
                    </a>
                    {/* <div className="opcoes_selecao_texto">
                        <strong style={{ display: 'block', marginTop: '530px', fontSize: '24px', fontWeight: 'bold' }}>Eu sou:</strong>
                    </div>
                    <div className="opcoes_selecao">
                        <label>
                            <input type="radio" name="tipo" value="empresa"onChange={handleOptionChange} />
                            Empresa
                        </label>
                        <label>
                            <input type="radio" name="tipo" value="funcionario" onChange={handleOptionChange} />
                            Funcionário
                        </label>
                    </div> */}
                </section>
            </main>
        </>
    );
}

export default Login;