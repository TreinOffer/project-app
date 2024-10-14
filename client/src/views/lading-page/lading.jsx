import React from 'react';
import '../lading-page/lading.estilo.css';
import imgs from '../../imgs/arrayImagens';

const App = () => {
  return (
    <div className="inicial">
      <div className="navegacao">
        <div className="area_menu">            
          <img src={imgs.TreinOffer} alt="logo" />
          <div className="menu">
            <a href="#">INICIO</a>
            <a href="#">QUEM SOMOS</a>
            <a href="#">SERVIÇOS</a>
            <a href="#">CONTATO</a>
            <a href="#">JÁ TEM UMA CONTA?</a>
          </div>
        </div>
        <hr />
      </div>
      <div className="logo-central">
        <img src={imgs.TreinOffer} alt="" />
      </div>
      <div style={{ margin: '0 365px', fontSize: '25px' }}>
        <p className="justificado">
          Treinoffer é uma plataforma inovadora voltada para o desenvolvimento e aprimoramento contínuo dos colaboradores, oferecendo treinamentos personalizados e eficazes para elevar o desempenho individual e coletivo, contribuir para o crescimento profissional e garantir uma melhoria significativa nos resultados da sua empresa.
        </p>
      </div>
      <div className="linha"></div>
      <div className="o">
        <b>Quem Somos</b>
        <div style={{ margin: '0 95px', fontSize: '25px' }}>
          <p className="justificado">
            A Treinoffer oferece treinamentos personalizados e eficazes, projetados para atender às necessidades específicas de cada indivíduo e equipe. Nosso objetivo é impulsionar o desempenho tanto individual quanto coletivo, promovendo o crescimento profissional dos participantes e contribuindo de maneira significativa para os resultados da sua empresa. Na Treinoffer, nos dedicamos a criar um ambiente de aprendizado contínuo e de alta performance, garantindo que cada treinamento maximize o potencial e a eficácia dos nossos clientes.
          </p>
        </div>
      </div>
      <div className="servico">
        <div className="set">
          <div className="serv">
            <b>Serviços</b>
          </div>
          <div className="grid-container">
            <div className="grid-item">
              <img src={imgs.treino1} alt="" />
              <h1>Equipamento de proteção individual</h1>
            </div>
            <div className="grid-item">
              <img src={imgs.treino2} alt="" />
              <h1>Treinamento de Prevenção de Incêndios</h1>
            </div>
            <div className="grid-item">
              <img src={imgs.treino3} alt="" />
              <h1>Processamento de extrato de Frutas</h1>
            </div>
            <div className="grid-item">
              <img src={imgs.treino4} alt="" />
              <h1>Treinamento Primeiro Socorros</h1>
            </div>
            <div className="grid-item">
              <img src={imgs.treino5} alt="" />
              <h1>Processo de congelamento de Frutas</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="contac">
        <div className="color">
          <b>Contato</b>
        </div>
        <div className="campos">
          <label htmlFor="nome">Digite seu nome inteiro:</label>
          <input type="text" name="nome" id="nome" />
        </div>
        <div className="campos">
          <label htmlFor="telef">Digite seu número de telefone:</label>
          <input type="tel" name="telef" id="telef" placeholder="Ex: 00999999999" />
        </div>
        <div className="campos">
          <label htmlFor="email">Digite seu email:</label>
          <input type="email" name="email" id="email" placeholder="Ex: exemplo@mail.com" />
        </div>
        <div className="campos">
          <label htmlFor="gen">Qual seu gênero:</label>
          <select id="gen" name="gen">
            <option value="" hidden selected></option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="neutro">Neutro</option>
            <option value="outro">Prefiro não informar</option>
          </select>
        </div>
      </div>
      <script type="text/javascript" src="java.js"></script>
    </div>
  );
};

export default App;