import React, { useState, useEffect } from 'react';
import './estilo.notificacao.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ToastNotification = () => {
  const [isActive, setIsActive] = useState(false);
  const [isProgressActive, setIsProgressActive] = useState(false);
  let timer1, timer2;

  const showToast = () => {
    setIsActive(true);
    setIsProgressActive(true);

    timer1 = setTimeout(() => {
      setIsActive(false);
    }, 5000); 

    timer2 = setTimeout(() => {
      setIsProgressActive(false);
    }, 5300);
  };

  const closeToast = () => {
    setIsActive(false);
    clearTimeout(timer1);
    clearTimeout(timer2);

    setTimeout(() => {
      setIsProgressActive(false);
    }, 300);
  };

  useEffect(() => {
    showToast();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className='box-notf'>
      <div className={`toast ${isActive ? 'active' : ''}`}>
        <span>Logado com sucesso!</span>
        <span className="close" onClick={closeToast}>
          <FontAwesomeIcon icon={faCheck} /> 
        </span>
        <div className={`progress ${isProgressActive ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default ToastNotification;