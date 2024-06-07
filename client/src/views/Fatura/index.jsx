import React from 'react'
// import "./estilo.css"
import cabecalho from '../cabecalho'

function Fatura() {
  return (
    <>

    {cabecalho()}

    <div class = "invoice-wrapper" id = "print-area">
            <div class = "invoice">
                <div class = "invoice-container">
                    <div class = "invoice-head">
                        <div class = "invoice-head-top">
                            <div class = "invoice-head-top-left text-start">
                                <img src = "../aymar/imgs/logoTreinOffer.png"/>
                            </div>
                        </div>
                        <div class = "hr"></div>
                        <div class = "invoice-head-middle">
                            <div class = "invoice-head-middle-left text-start">
                                <p><span class = "text-bold">Data</span>: 05/07/2025</p>
                            </div>
                            <div class = "invoice-head-middle-right text-end">
                                
                            </div>
                        </div>
                        <div class = "hr"></div>
                        <div class = "invoice-head-bottom">
                            <div class = "invoice-head-bottom-left">
                                <ul>
                                    <li style={{textalign: "left"}}  class = 'text-bold'>Dados do pagador:</li>
                                    <li>AGRO INDUSTRIA POLPA DE FRUTA LTDA</li>
                                    <li>CARAUARI - AM</li>
                                    <li>10.949.370/0001-23</li>
                                    <li>Estrada Gaviao, S/N</li>
                                </ul>
                            </div>
                            <div class = "invoice-head-bottom-right">
                                <ul class = "text-end">
                                    <li style={{textalign: "right"}}   class = 'text-bold'>Dados do recebedor:</li>
                                    <li>TreinOffer Inc.</li>
                                    <li>2705 ES. Vitória</li>
                                    <li>12.799.082/0001-65</li>
                                    <li>TreinOffer@senai.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class = "overflow-view">
                        <div class = "invoice-body">
                            <table>
                                <thead>
                                    <tr>
                                        <td class = "text-bold">Custos</td>
                                        <td class = "text-bold">Descrição</td>
                                        <td class = "text-bold">Valor</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Instrutores</td>
                                        <td style={{textalign: "center"}}>Instrutores experientes para treinamento de excelência. <br/> (Opcional)</td>
                                        <td class = "text-end">R$0,00</td>
                                    </tr>
                                    <tr>
                                        <td>Manutenção</td>
                                        <td style={{textalign: "center"}}>Manutenção especializada para garantir operações sem interrupções. <br/> (Obrigatório)</td>
                                        <td class = "text-end">R$3000</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class = "invoice-body-bottom">
                                <div class = "invoice-body-info-item border-bottom">
                                    <div style={{textalign: "right"}} class = "info-item-td text-end text-bold">Multas à pagar:</div>
                                    <div class = "info-item-td text-end">R$0</div>
                                </div>
                                <div class = "invoice-body-info-item">
                                    <div style={{textalign: "right"}} class = "info-item-td text-end text-bold">Total à pagar:</div>
                                    <div class = "info-item-td text-end">R$3000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class = "invoice-foot text-center">
                        <p><span class = "text-bold text-center">NOTA:&nbsp;</span>Este é um recibo gerado por computador e não requer assinatura física.</p>

                        <div class = "invoice-btns">
                            <button type = "button" class = "invoice-btn" onclick="printInvoice()">
                                <span>
                                    <i class="fa-solid fa-print"></i>
                                </span>
                                <span>imprimir</span>
                            </button>
                            <button type = "button" class = "invoice-btn">
                                <span>
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </span>
                                <span> <a href="./pagamentos.html">Pagar</a></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Fatura