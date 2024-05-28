import React from 'react'

const msg = {
    login: 'Login',
    cadastro: 'Cadastro',
    cadastre_se: "Eu nao tenho uma conta",
    logue_se: "Eu possuo uma conta"
};

function Login() {
  return (
    <>
        <main>
            <section className="secao_dados">
                <div className='login_dados'>
                    <h1>{msg}</h1>
                <table>
                    <tr className="campo_matricula"></tr>
                        <td><label htmlFor="email">Matricula:</label></td>
                        <td><input placeholder='Inserir ID' type="text" name="matricula" id="matricula" /></td>
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
                        {msg}
                        <div>
                            <text id="redirect" className='redirecter'>
                            {msg}
                            </text>
                        </div>
                    </div>
                </div>
            </section>

            <div className="faixa"></div>

            <section className="secao_logo">
                <img src="/aymar/imgs/logoTreinOffer.png" alt="" />
            </section>
        </main>
    </>
  )
}

export default Login
