import React, { useState } from 'react';

import imgs from '../../../imgs/arrayImagens';
import './estiloAside.css';

const MenuUser = ({ handleClick, handleAside }) => {
    const [isEditting, setIsEditting] = useState(false)
    const [user, setUser] = useState([{
        Fantasia: '',
        Senha: '', Telefone: '',
        CEP: '', Estado: '', Cidade: '', Endereco: ''
    }]);

    function onChange(tipo) {
        return (e) => (
            setUser((prev) => ({ ...prev, [tipo]: e.target.value }))
        )
    };

    async function submituser(user) {
        console.log("Empresa: ", user);
        try {
            const consulta = await fetch(`http://localhost:5000/cadastro`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            console.log(consulta);
            if (consulta.status === 409) {

                alert(`CNPJ já existe`);
            };

            console.log(consulta);
        } catch (error) {
            alert(`Erro ao cadastrar empresa: ${error}`);
        };
    };

    return (
        <aside className="nav_bar" id='nav'
            style={{ left: handleAside ? '0%' : null }} >
            <section className="logoNavBar">
                <section className="menuNav">
                    <img src={imgs.voltar} onClick={handleClick} alt="Fechar" className="escape" />
                    {/* <img src={imgs.menu} alt="Menu" className="opcoes" /> */}
                </section>
                <img className="logoTreinOffer" src={imgs.TreinOffer} alt="" />
            </section>
            <section className="secaoUser">
                <section className="user">
                    <div className="imgUser">
                        <img src={imgs.empresa} alt="N/A" />
                    </div>
                    <div className="nomeUser">
                        Agro Indústria Polpa de Fruta LTDA
                    </div>
                </section>
            </section>

            {
                !isEditting && (
                    <div style={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
                        background: 'linear-gradient(hsl(220,50%,70%),hsl(220,40%,75%)', height: '100%'
                    }} onClick={() => setIsEditting(!isEditting)}
                    >
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
                            <img src={imgs.editar} alt="" style={{ width: '24px' }} />
                            <h3 style={{ color: 'white', cursor: 'pointer' }} >Editar</h3>
                        </div>
                    </div>
                )
            }

            <article style={{ height: isEditting ? "100%" : null,transition: '0.3s ease-in-out' }}>
                {
                    isEditting && (

                        <form action="PUT" onSubmit={(e) => {
                            e.preventDefault();
                            // submitEmpresa(empresa);
                        }}
                            style={{ height: '100%',width: '100%', background: 'linear-gradient(hsl(220,50%,70%),hsl(220,40%,75%)' }}
                        >
                            <table>
                                <tbody>
                                    <tr>
                                        <td className='campo_update'><label htmlFor="nome_empresa">Nome da Empresa:</label ></td>
                                        <td><input onChange={onChange('Fantasia')} placeholder='Inserir Nome da Empresa' type="text" name="nome_empresa" id="nome_empresa" /></td>
                                    </tr>
                                    <tr>
                                        <td className='campo_update'><label htmlFor="senha">Senha:</label></td>
                                        <td><input onChange={onChange('Senha')} placeholder='Inserir senha' type="password" name="senha" id="senha" /></td>
                                    </tr>
                                    <tr>
                                        <td className='campo_update'><label htmlFor="cep">CEP:</label></td>
                                        <td><input onChange={onChange('CEP')} placeholder='Inserir CEP' type="text" name="cep" id="cep" /></td>
                                    </tr>
                                    <tr>
                                        <td className='campo_update'><label htmlFor="estados" id='estados'>Estado:</label></td>
                                        <td>
                                            <select name="estado" id="estado" onChange={onChange('Estado')} >
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
                                    <tr>
                                        <td className='campo_update'><label htmlFor="telefone">Telefone:</label></td>
                                        <td><input placeholder='Inserir Telefone' type="text" name="telefone" id="telefone" onChange={onChange('Telefone')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='campo_update'><label htmlFor="endereco">Endereço:</label></td>
                                        <td><input placeholder='Inserir Endereço' type="text" name="endereco" id="endereco" onChange={onChange('Endereco')} /></td>
                                    </tr>
                                    <tr>
                                        <td className='campo_update'><label htmlFor="cidade">Cidade:</label></td>
                                        <td><input placeholder='Inserir Cidade' type="text" name="cidade" id="cidade" onChange={onChange('Cidade')} /></td>
                                    </tr>
                                    <tr className='actions-menuUser'>
                                        <td className='campo-reset'><button style={{ background: 'none', border: 'none' }} onClick={() => setIsEditting(!isEditting)} type="button">Cancelar</button></td>
                                        <td><input className='campo_submit' type="submit" value="Atualizar" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    )
                }
            </article>

            <footer>
                <a href="https://github.com/TreinOffer">
                    <div className="boxGit">
                        <img className="gitLink" src={imgs.git} alt="Github" />
                    </div>
                </a>
                <p>Siga-nos na página do projeto</p>
            </footer>
        </aside>
    );
}

export default MenuUser;