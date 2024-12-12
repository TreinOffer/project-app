import React, { useState } from 'react';
import imgs from '../../imgs/arrayImagens';
import '../lading-page/ladingEstilo.css';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    { img: imgs.crescimento, title: 'Gráfico de Performance', description: 'Os instrutores monitoram a performance dos colaboradores através do Gráfico de Performance, que exibe o progresso individual. Isso permite identificar pontos fortes e áreas a melhorar, possibilitando orientações personalizadas para maximizar o potencial de cada um.' },
    { img: imgs.certificado, title: 'Sistema de Certificação', description: 'O sistema de certificados reconhece as conquistas dos colaboradores, gerando automaticamente certificados ao final de cada conclusão de curso. Isso destaca as habilidades adquiridas, valoriza o desenvolvimento profissional e motiva o aprendizado contínuo.' },
    { img: imgs.suporte, title: 'Assistência em Tempo Real', description: 'Assistência em tempo real oferece suporte imediato aos colaboradores, resolvendo dúvidas e desafios rapidamente. Com acesso a especialistas, garante orientações precisas e soluções práticas para um aprendizado eficiente.' },
    { img: imgs.ensino, title: 'Equipe de Instrutores', description: 'A Equipe de Instrutores utiliza módulos de aprendizado que incluem uploads de vídeos de aulas. Essa abordagem interativa permite que os colaboradores aprendam de forma flexível e personalizada, garantindo um desenvolvimento profissional eficaz e enriquecedor.' },
    { img: imgs.modulos, title: 'Estrutura de Módulos', description: 'Estrutura de Módulos oferece um aprendizado organizado e flexível, onde cada módulo aborda um tema específico. Com vídeos, quizzes e materiais de apoio, colaboradores podem avançar em seu próprio ritmo, personalizando sua experiência e garantindo um desenvolvimento profissional eficaz.' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="inicial">
      <div className="navegacao">
        <div className="menu-area">
          <a href="/" rel="noopener noreferrer">
            <img
              src={imgs.TreinOfferblack}
              alt="Logo do TreinOffer"
              className="logo-treino"
              style={{ width: '300px', height: 'auto' }}
            />
          </a>
          <nav className="menu">
            <a href="/">Início</a>
            <a href="#">Quem Somos</a>
            <a href="#">Serviços</a>
            <a href="#">Contato</a>
            
            <div className="dropdown">
              <button className="dropdown-toggle">Já tem uma conta?</button>
              <div className="dropdown-content">
                <a href="/login">
                  <i className="fa fa-sign-in" aria-hidden="true"></i> Logar
                </a>
                <a href="/cadastro">
                  <i className="fa fa-user-plus" aria-hidden="true"></i> Cadastrar
                </a>
              </div>
            </div>
          </nav>
        </div>
        <hr className="hr-separador" />
      </div>
      <div className="logo-central">
        <img src={imgs.TreinOfferblack} alt="" />
      </div>
      <div style={{ margin: '0 365px', fontSize: '25px' }}>
        <p className="texto-justificado">
          Treinoffer é uma plataforma inovadora voltada para o desenvolvimento e aprimoramento contínuo dos colaboradores, oferecendo treinamentos personalizados e eficazes para elevar o desempenho individual e coletivo, contribuir para o crescimento profissional e garantir uma melhoria significativa nos resultados da sua empresa.
        </p>
      </div>
      <div className="linha-separadora"></div>
      <div className="bloqueio">
        <b className="destaque">Quem Somos</b>
        <div style={{ margin: '0 95px', fontSize: '25px' }}>
          <p className="texto-justificado">
            A Treinoffer oferece treinamentos personalizados e eficazes, projetados para atender às necessidades específicas de cada indivíduo e equipe. Nosso objetivo é impulsionar o desempenho tanto individual quanto coletivo, promovendo o crescimento profissional dos participantes e contribuindo de maneira significativa para os resultados da sua empresa. Na Treinoffer, nos dedicamos a criar um ambiente de aprendizado contínuo e de alta performance, garantindo que cada treinamento maximize o potencial e a eficácia dos nossos clientes.
          </p>
        </div>        
      </div>
      <div className="linha-separadora"></div>
      <div className="servicos">
        <h2 style={{ fontWeight: 'bold' }}>Serviços</h2>
        <div className="carousel">
          <button onClick={prevSlide} className="carousel-button">❮</button>
          <div className="carousel-item">
            {services.map((service, index) => (
              <div className={`card ${index === currentIndex ? 'active' : ''}`} key={index}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="card-image"
                />
                <h1 style={{
                  background: 'linear-gradient(to right, rgba(0, 123, 255, 0.9), rgba(0, 207, 255, 0.5))', color: 'white', fontSize: '16px', textAlign: 'left', margin: '20px 0', boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)', transform: 'translateX(-20px)', padding: '5px', borderRadius: '10px',
                }}>{service.title}</h1>
                <span style={{ display: 'block', color: '#4E4E4E', fontSize: '16px', fontFamily: 'sans-serif', textAlign: 'left', fontWeight: 'bold' }}>
                  {service.description}
                </span>
              </div>
            ))}
          </div>
          <button onClick={nextSlide} className="carousel-button">❯</button>
        </div>
        <div className="indicators">
          {services.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="linha-separadora"></div>
      <div className="contato">
        <h2 className="titulo-contato">Contato</h2>
        <form className="formulario">
          <div className="campo">
            <label htmlFor="nome">Nome completo:</label>
            <input className="input-texto" type="text" name="nome" id="nome" placeholder="Nome" required />
          </div>
          <div className="campo">
            <label htmlFor="telef">Número de telefone:</label>
            <input className="input-telefone" type="tel" name="telef" id="telef" placeholder="Número de Telefone" required />
          </div>
          <div className="campo">
            <label htmlFor="email">E-mail:</label>
            <input className="input-email" type="email" name="email" id="email" placeholder="E-mail" required />
          </div>
          <div className="campo">
            <label htmlFor="gen">Gênero:</label>
            <select className="select" id="gen" name="gen">
              <option value="" hidden>Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="neutro">Neutro</option>
              <option value="outro">Prefiro não informar</option>
            </select>
            <div className="campo">
            <label htmlFor="mensagem">Mensagem</label>
            <input className="input-mensagem" type="text" name="mensagem" id="mensagem" placeholder="Digite sua mensagem aqui.." rows="1" required />
          </div>
          </div>
          <button type="submit" className="botao-enviar">Enviar</button>
        </form>
      </div>      
      <div className="linha-separadora"></div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} TreinOffer. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
