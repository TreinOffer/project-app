import React from 'react';
import './estilo.css';
import Cabecalho from '../cabecalho/cabecalho.jsx';
import imgs from '../../imgs/arrayImagens.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Fatura() {
  return (
    <>
      <Cabecalho />
      <div className="invoice-wrapper" id="print-area">
        <div className="invoice">
          <div className="invoice-container">
            <div className="invoice-head">
              <div className="invoice-head-top">
                <div className="invoice-head-top-left text-start">
                  <img id="faturalogo" src={imgs.TreinOfferblack} alt="" />
                </div>
              </div>
              <div className="hr"></div>
              <div className="invoice-head-middle">
                <div className="invoice-head-middle-left text-start">
                  <p><span className="text-bold">Data</span>: 05/12/2024</p>
                </div>
                <div className="invoice-head-middle-right text-end"></div>
              </div>
              <div className="hr"></div>
              <div className="invoice-head-bottom">
                <div className="invoice-head-bottom-left">
                  <ul>
                    <li style={{ textAlign: "left" }} className="text-bold">Dados do pagador:</li>
                    <li>AGRO INDUSTRIA POLPA DE FRUTA LTDA</li>
                    <li>CARAUARI - AM</li>
                    <li>10.949.370/0001-23</li>
                    <li>Estrada Gaviao, S/N</li>
                  </ul>
                </div>
                <div className="invoice-head-bottom-right">
                  <ul className="text-end">
                    <li style={{ textAlign: "right" }} className="text-bold">Dados do recebedor:</li>
                    <li>TreinOffer Inc.</li>
                    <li>2705 ES. Vitória</li>
                    <li>12.799.082/0001-65</li>
                    <li>TreinOffer@senai.com</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="overflow-view">
              <div className="invoice-body">
                <table>
                  <thead>
                    <tr>
                      <td className="text-bold">Custos</td>
                      <td className="text-bold">Descrição</td>
                      <td className="text-bold">Valor</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Instrutores</td>
                      <td style={{ textAlign: "center" }}>Instrutores experientes para treinamento de excelência. <br /> (Opcional)</td>
                      <td className="text-end">R$0,00</td>
                    </tr>
                    <tr>
                      <td>Manutenção</td>
                      <td style={{ textAlign: "center" }}>Manutenção especializada para garantir operações sem interrupções. <br /> (Obrigatório)</td>
                      <td className="text-end">R$3000</td>
                    </tr>
                  </tbody>
                </table>
                <div className="invoice-body-bottom">
                  <div className="invoice-body-info-item border-bottom">
                    <div style={{ textAlign: "right" }} className="info-item-td text-end text-bold">Multas à pagar:</div>
                    <div className="info-item-td text-end">R$0</div>
                  </div>
                  <div className="invoice-body-info-item">
                    <div style={{ textAlign: "right" }} className="info-item-td text-end text-bold">Total à pagar:</div>
                    <div className="info-item-td text-end">R$3000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="invoice-foot text-center">
              <p><span className="text-bold text-center">NOTA:&nbsp;</span>Este é um recibo gerado por computador e não requer assinatura física.</p>

              <div className="invoice-btns">
                {/* Botão Imprimir */}
                <button type="button" className="invoice-btn" onClick={() => window.print()}>
                  <span>
                    <i className="fa-solid fa-print"></i>
                  </span>
                  <span>Imprimir</span>
                </button>

                {/* Botão Pagar */}
                <button type="button" className="invoice-btn">
                  <span>
                    <i className="fa-solid fa-credit-card"></i> {/* Ícone de Cartão de Crédito */}
                  </span>
                  <span>
                    <Link to='/pagamento'>
                      <a href="">Pagar</a>
                    </Link>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fatura;
