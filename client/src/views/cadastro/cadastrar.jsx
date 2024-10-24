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
                                <tr className="campo_nome_empresa">
                                    <td><label htmlFor="nome_empresa">Nome da Empresa:</label></td>
                                    <td><input placeholder='Inserir Nome da Empresa' type="text" name="nome_empresa" id="nome_empresa" /></td>
                                </tr>
                                <tr className="campo_senha">
                                    <td><label htmlFor="senha">Senha:</label></td>
                                    <td><input placeholder='Inserir senha' type="password" name="senha" id="senha" /></td>
                                </tr>
                                <tr className="campo_cep">
                                    <td><label htmlFor="cep">CEP:</label></td>
                                    <td><input placeholder='Inserir CEP' type="text" name="cep" id="cep" /></td>
                                </tr>
                                <tr className="campo_estado">
                                    <td><label htmlFor="estados" id='estados'>Estado:</label></td>
                                    <td>
                                        <select name="estado" id="estado">
                                            <option value="" id='select'>Selecionar Estado</option>
                                            <option value="AC">Acre</option>
                                            <option value="AL">Alagoas</option>
                                            <option value="AP">Amapá</option>
                                            <option value="AM">Amazonas</option>
                                            <option value="BA">Bahia</option>
                                            <option value="CE">Ceará</option>
                                            <option value="DF">Distrito Federal</option>
                                            <option value="ES">Espírito Santo</option>
                                            <option value="GO">Goiás</option>
                                            <option value="MA">Maranhão</option>
                                            <option value="MT">Mato Grosso</option>
                                            <option value="MS">Mato Grosso do Sul</option>
                                            <option value="MG">Minas Gerais</option>
                                            <option value="PA">Pará</option>
                                            <option value="PB">Paraíba</option>
                                            <option value="PR">Paraná</option>
                                            <option value="PE">Pernambuco</option>
                                            <option value="PI">Piauí</option>
                                            <option value="RJ">Rio de Janeiro</option>
                                            <option value="RN">Rio Grande do Norte</option>
                                            <option value="RS">Rio Grande do Sul</option>
                                            <option value="RO">Rondônia</option>
                                            <option value="RR">Roraima</option>
                                            <option value="SC">Santa Catarina</option>
                                            <option value="SP">São Paulo</option>
                                            <option value="SE">Sergipe</option>
                                            <option value="TO">Tocantins</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr className="campo_telefone">
                                    <td><label htmlFor="telefone">Telefone:</label></td>
                                    <td><input placeholder='Inserir Telefone' type="text" name="telefone" id="telefone" /></td>
                                </tr>
                                <tr className="campo_endereco">
                                    <td><label htmlFor="endereco">Endereço:</label></td>
                                    <td><input placeholder='Inserir Endereço' type="text" name="endereco" id="endereco" /></td>
                                </tr>
                                <tr className="campo_cidade">
                                    <td><label htmlFor="cidade">Cidade:</label></td>
                                    <td><input placeholder='Inserir Cidade' type="text" name="cidade" id="cidade" /></td>
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