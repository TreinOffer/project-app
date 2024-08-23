import React from 'react'
import "./estilo.css"

function Pagamento() {
  return (
    <>
    <div className="wrapper">
        <h2>Formas de Pagamento</h2>
        <form action="" method="post">
            <h4>Conta</h4>
            <div className="input_group">
                <div className="input_box">
                    <input type="text" placeholder="Matricula" required className="name"/>
                    <i className="fa fa-user icon"></i>
                </div>
            </div>
            <div className="input_group">
                <div className="input_box">
                    <input type="password" placeholder="Senha" required className="name"/>
                    <i className="fa fa-lock icon"></i>
                </div>
            </div>
            <div className="abc">
                <div className="input_box">
                    <h4>Detalhes do Pagamento</h4>
                    <input type="radio" name="pay" className="radio" id="bc1" checked/>
                    <label id="btCredit" for="bc1"><span>
                            <i className="fa fa-cc-visa"></i> Cartão de crédito</span></label>
                    <input type="radio" name="pay" className="radio" id="bc2"/>
                    <label id="btPix" for="bc2"><span>
                            <i className="fa fa-cc-paypal"></i> Pix</span></label>
                </div>
            </div>
            <div className="input_group" id="CardName">
                <div className="input_box">
                    <input type="tel" name="" className="name" placeholder="Nome do titular" required/>
                    <i className="bi bi-person-square icon"></i>
                </div>
            </div>
            <div className="input_group" id="CardNumber">
                <div className="input_box">
                    <input type="tel" name="" className="name" placeholder="Número do cartão" required/>
                    <i className="fa fa-credit-card icon"></i>
                </div>
            </div>
            <div className="input_group" id="CardCVV">
                <div className="input_box">
                    <input type="tel" name="" className="name" placeholder="CVV" required/>
                    <i className="fa fa-user icon"></i>
                </div>
            </div>
            <div className="input_group" id="CardMes">
                <div className="input_box">
                    <div className="input_box">
                        <input type="number" placeholder="Mês" required className="name"/>
                        <i className="fa fa-calendar icon" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="input_group" id="CardAno">
                    <div className="input_box">
                        <input type="number" placeholder="Ano" required className="name"/>
                        <i className="fa fa-calendar-o icon" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="input_group">
                <div className="input_box">
                    <button type="submit">Enviar</button>
                </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default Pagamento