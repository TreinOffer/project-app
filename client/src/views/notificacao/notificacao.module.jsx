import React, { useState, useEffect } from 'react';
import './estilo.notification.css'; 
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';

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
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <div className={`toast ${isActive ? 'active' : ''}`}>
        <span>Your notification message here!</span>
        <span className="close" onClick={closeToast}>
          <i className="fas fa-times"></i>
        </span>
        <div className={`progress ${isProgressActive ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default ToastNotification;
