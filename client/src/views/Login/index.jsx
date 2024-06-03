import React from 'react'
import './estilo.css';
import imgs from '../../imgs/arrayImagens.jsx'

const msg = { // Para props
    login: 'Login',
    cadastro: 'Cadastro',
    login2: 'Logue-se',
    cadastro2: 'Cadastre-se',
    cadastre_se: "Eu nao tenho uma conta",
    logue_se: "Eu possuo uma conta"
};

function Login() {
  return (
    <>
        <main className='main_login'>
            <section className="secao_dados">
                <div className='login_dados'>
                    <h1>{msg.login}</h1>
                <table>
                    <tr className="campo_matricula">
                        <td><label htmlFor="email">Matricula:</label></td>
                        <td><input placeholder='Inserir ID' type="text" name="matricula" id="matricula" /></td>
                    </tr>
                    <tr className="campo_senha">
                        <td><label htmlFor="senha">Senha:</label></td>
                        <td><input placeholder='Inserir senha' type="password" name="senha" id="senha" /></td>
                    </tr>
                    <tr>
                        <td><input className='campo_submit' type="submit" value="Entrar" /></td>
                        <br />
                    </tr>
                </table>

                    <div className="campo_cadastrar">
                        {msg.cadastro2}
                        <div>
                            <text id="redirect" className='redirecter'>
                                {msg.cadastre_se}
                            </text>
                        </div>
                    </div>
                </div>
            </section>

            <div className="faixa"></div>

            <section className="secao_logo">
                <img id="logo" src={imgs.TreinOffer} alt="" />
            </section>
        </main>
    </>
  )
}

export default Login
