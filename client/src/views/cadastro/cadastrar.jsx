import React from 'react';
import './estilo.css';
import imgs from '../../imgs/arrayImagens.jsx';
import { Link } from 'react-router-dom';

const msg = {
    cadastro: 'Cadastro',
    logue_se: "Eu já tenho uma conta",
};

function Cadastro() {
    return (
        <>
            <main className='main_login'>
                <section className="secao_dados">
                    <div className='cadastro_dados'>
                        <h1>{msg.cadastro}</h1>
                        <table>
                            <tbody>
                                <tr className="campo_cnpj">
                                    <td><label htmlFor="cnpj">CNPJ:</label></td>
                                    <td><input placeholder='Inserir CNPJ' type="text" name="cnpj" id="cnpj" /></td>
                                </tr>
                                <tr className="campo_senha">
                                    <td><label htmlFor="senha">Senha:</label></td>
                                    <td><input placeholder='Inserir senha' type="password" name="senha" id="senha" /></td>
                                </tr>
                                <tr className="campo_cep">
                                    <td><label htmlFor="cep">CEP:</label></td>
                                    <td><input placeholder='Inserir CEP' type="text" name="cep" id="cep" /></td>
                                </tr>
                                <tr className="campo_telefone">
                                    <td><label htmlFor="telefone">Telefone:</label></td>
                                    <td><input placeholder='Inserir Telefone' type="text" name="telefone" id="telefone" /></td>
                                </tr>
                                <tr className="campo_endereco">
                                    <td><label htmlFor="endereco">Endereço:</label></td>
                                    <td><input placeholder='Inserir Endereço' type="text" name="endereco" id="endereco" /></td>
                                </tr>
                                <tr>
                                    <td><input className='campo_submit' type="submit" value="Cadastrar" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="campo_logar">
                            <span>{msg.logue_se}</span>
                            <Link to='/Login'>
                                <div className='redirecter'>
                                    Logue-se
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <div className="faixa"></div>
                <section className="secao_logo">
                    <a href="/">
                        <img id="logo" src={imgs.TreinOffer} alt="Logo" />
                    </a>                    
                </section>
            </main>
        </>
    );
}

export default Cadastro;