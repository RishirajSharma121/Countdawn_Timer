import React, { useState, useEffect } from 'react';

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

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
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
      <h1>{formatTime(time)}</h1>
      {!isActive ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handlePause}>Pause</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

const App = () => {
  const [inputTime, setInputTime] = useState(60);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleInputChange = (e) => {
    setInputTime(parseInt(e.target.value, 10));
  };

  const handleGoClick = () => {
    setTimerStarted(true);
  };

  return (
    <div>
      {!timerStarted ? (
        <div>
          <input type="number" placeholder="Set Timer" value={inputTime} onChange={handleInputChange} />
          <button onClick={handleGoClick}>Go</button>
        </div>
      ) : (
        <Countdown initialTime={inputTime} />
      )}
    </div>
  );
};

export default App;
