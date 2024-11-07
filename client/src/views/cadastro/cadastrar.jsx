import React, { useState } from 'react';
import './estilo.cadastro.css';
import imgs from '../../imgs/arrayImagens.jsx';
import { Link } from 'react-router-dom';

const msg = {
    cadastro: 'Cadastro',
    logue_se: "Eu já tenho uma conta",
};

function Cadastro() {
    // Mudar o estado de empresa para objetos simples
    const [empresa, setEmpresa] = useState({
        CNPJ: '', Fantasia: '', Senha: '', Telefone: '',
        CEP: '', Estado: '', Cidade: '', Endereco: ''
    });

    const onChange = (tipo) => (e) => {
        setEmpresa(prev => ({ ...prev, [tipo]: e.target.value }));
    };

    const submitEmpresa = async (empresa) => {
        console.log("Empresa: ", empresa);
        try {
            const consulta = await fetch(`http://localhost:5000/cadastro`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(empresa)
            });

            if (consulta.status === 409) {
                alert(`CNPJ já existe`);
            }

            console.log(consulta);
        } catch (error) {
            alert(`Erro ao cadastrar empresa: ${error}`);
        }
    };

    return (
        <main className='main_login'>
            <section className="secao_dados">
                <div className='cadastro_dados'>
                    <h1>{msg.cadastro}</h1>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        submitEmpresa(empresa);
                    }} style={{ width: '100%' }}>
                        <table>
                            <tbody>
                                <tr className="campo_cnpj">
                                    <td><label htmlFor="cnpj">CNPJ:</label></td>
                                    <td><input onChange={onChange('CNPJ')} placeholder='Inserir CNPJ' type="text" name="cnpj" id="cnpj" /></td>
                                </tr>
                                <tr className="campo_nome_empresa">
                                    <td><label htmlFor="nome_empresa">Nome da Empresa:</label></td>
                                    <td><input onChange={onChange('Fantasia')} placeholder='Inserir Nome da Empresa' type="text" name="nome_empresa" id="nome_empresa" /></td>
                                </tr>
                                <tr className="campo_senha">
                                    <td><label htmlFor="senha">Senha:</label></td>
                                    <td><input onChange={onChange('Senha')} placeholder='Inserir senha' type="password" name="senha" id="senha" /></td>
                                </tr>
                                <tr className="campo_cep">
                                    <td><label htmlFor="cep">CEP:</label></td>
                                    <td><input onChange={onChange('CEP')} placeholder='Inserir CEP' type="text" name="cep" id="cep" /></td>
                                </tr>
                                <tr className="campo_estado">
                                    <td><label htmlFor="estado">Estado:</label></td>
                                    <td>
                                        <select name="estado" id="estado" onChange={onChange('Estado')}>
                                            <option value="">Selecionar Estado</option>
                                            <option value="SP">São Paulo</option>
                                            {/* ...outros estados */}
                                        </select>
                                    </td>
                                </tr>
                                <tr className="campo_telefone">
                                    <td><label htmlFor="telefone">Telefone:</label></td>
                                    <td><input placeholder='Inserir Telefone' type="text" name="telefone" id="telefone" onChange={onChange('Telefone')} /></td>
                                </tr>
                                <tr className="campo_endereco">
                                    <td><label htmlFor="endereco">Endereço:</label></td>
                                    <td><input placeholder='Inserir Endereço' type="text" name="endereco" id="endereco" onChange={onChange('Endereco')} /></td>
                                </tr>
                                <tr className="campo_cidade">
                                    <td><label htmlFor="cidade">Cidade:</label></td>
                                    <td><input placeholder='Inserir Cidade' type="text" name="cidade" id="cidade" onChange={onChange('Cidade')} /></td>
                                </tr>
                                <tr>
                                    <td><input className='campo_submit' type="submit" value="Cadastrar" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                    <div className="campo_logar">
                        <span>{msg.logue_se}</span>
                        <Link to='/Login'>
                            <div className='redirecter'>Logue-se</div>
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
    );
}

export default Cadastro;