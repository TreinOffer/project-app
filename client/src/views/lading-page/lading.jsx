import React, { useState } from 'react';
import imgs from '../../imgs/arrayImagens';
import '../lading-page/ladingEstilo.css';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services = [
    { img: imgs.agropecuaria },
    { img: imgs.reuniao },
    { img: imgs.saude },
    { img: imgs.industria },
    { img: imgs.tecnologia },
  ];

  const nextSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const goToSlide = (index) => {
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  // Reset the animation state after the animation is done
  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className="inicial">
      <div className="navegacao">
        <div className="menu-area">
          <a href="/" rel="noopener noreferrer">
            <img
              src={imgs.TreinOffer}
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
        <img src={imgs.TreinOffer} alt="" />
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
      <div className="servicos">
        <h2 style={{ fontWeight: 'bold' }}>Serviços</h2>
        <div className="carousel">
          <button onClick={prevSlide} className="carousel-button">❮</button>
          <div className={`carousel-item ${isAnimating ? 'animating' : ''}`} onAnimationEnd={handleAnimationEnd}>
            {services.map((service, index) => (
              <div className={`card ${index === currentIndex ? 'active' : ''}`} key={index}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="card-image"
                />
                <h1 className="titulo-principal">{service.title}</h1>
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
          </div>
          <button type="submit" className="botao-enviar">Enviar</button>
        </form>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} TreinOffer. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;