import React from 'react'
import "./estilo.css"

function Pagamento() {
  return (
    <>
    <div class="wrapper">
        <h2>Formas de Pagamento</h2>
        <form action="" method="post">
            <h4>Conta</h4>
            <div class="input_group">
                <div class="input_box">
                    <input type="text" placeholder="Login" required class="name"/>
                    <i class="fa fa-user icon"></i>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <input type="email" placeholder="Senha" required class="name"/>
                    <i class="fa fa-envelope icon"></i>
                </div>
            </div>
            <div class="abc">
                <div class="input_box">
                    <h4>Detalhes do Pagamento</h4>
                    <input type="radio" name="pay" class="radio" id="bc1" checked/>
                    <label id="btCredit" for="bc1"><span>
                            <i class="fa fa-cc-visa"></i> Cartão de crédito</span></label>
                    <input type="radio" name="pay" class="radio" id="bc2"/>
                    <label id="btPix" for="bc2"><span>
                            <i class="fa fa-cc-paypal"></i> Pix</span></label>
                </div>
            </div>
            <div class="input_group" id="CardName">
                <div class="input_box">
                    <input type="tel" name="" class="name" placeholder="Nome do titular" required/>
                    <i class="bi bi-person-square icon"></i>
                </div>
            </div>
            <div class="input_group" id="CardNumber">
                <div class="input_box">
                    <input type="tel" name="" class="name" placeholder="Número do cartão" required/>
                    <i class="fa fa-credit-card icon"></i>
                </div>
            </div>
            <div class="input_group" id="CardCVV">
                <div class="input_box">
                    <input type="tel" name="" class="name" placeholder="CVV" required/>
                    <i class="fa fa-user icon"></i>
                </div>
            </div>
            <div class="input_group" id="CardMes">
                <div class="input_box">
                    <div class="input_box">
                        <input type="number" placeholder="Mês" required class="name"/>
                        <i class="fa fa-calendar icon" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="input_group" id="CardAno">
                    <div class="input_box">
                        <input type="number" placeholder="Ano" required class="name"/>
                        <i class="fa fa-calendar-o icon" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="input_group">
                <div class="input_box">
                    <button type="submit">Enviar</button>
                </div>
            </div>

        </form>
    </div>
    </>
  )
}

export default Pagamento