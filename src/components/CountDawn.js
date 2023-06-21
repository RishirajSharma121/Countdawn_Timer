import React from 'react';
import { useState, useEffect } from 'react';
import './CountDawn.css';

const live = new Date().toLocaleDateString();
const Countdown = ({ initialTime }) => {
    const [time, setTime] = useState(initialTime);
    const [isActive, setIsActive] = useState(false);
    
  useEffect(() => {
    let intervalId;

    if (isActive && time > 0) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalId);
      alert('Countdown reached zero!');
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, time]);

  const hStart = () => {
    setIsActive(true);
  };

  const hSTOP = () => {
    setIsActive(false);
  };
  
  const hRestart = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
      <div>
           <div className="contain"><h1 >Date: {live}</h1></div>
      <h1  className='Time'>{formatTime(time)}</h1>
        {!isActive ? (
        <button className='button' onClick={hStart}>Start</button>
      ) : (
        <button className='button' onClick={hSTOP}>Stop</button>
      )}
          <button className='button' onClick={hRestart}>Restart</button>
        <button >HOME</button>
    </div>
  );
};

export default Countdown;
