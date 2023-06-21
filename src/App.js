import './App.css';
import LiveTime from './LiveTime';
import Countdown from './components/CountDawn';
import CurrentTime from './components/Current';
import React, { useState } from 'react';


function App() {
  const [inputTime, setInputTime] = useState(60);
  const [timerStarted, setTimerStarted] = useState(false);

  const handleInputChange = (e) => {
    setInputTime(parseInt(e.target.value, 10));
  };

  const handleGoClick = () => {
    setTimerStarted(true);
  };

  return (
    <div className="App">
      <h1 style={{ margin: '40px', padding: '20px', fontSize: '50px', fontFamily: 'sans-serif', color: 'GrayText', backgroundImage: 'linear-gradient(144deg, #31242480, #c3cdc510 50%, #31242480)' }}>Your CountDawn Timer</h1>
      <LiveTime />
      <CurrentTime />
      {!timerStarted ? (
        <div>
          <input className='input' type="number" placeholder="Set Timer In Seconds" value={inputTime} onChange={handleInputChange} /><br/>
          <button className='btn' onClick={handleGoClick}>Go</button>
        </div>
      ) : (
        <Countdown initialTime={inputTime} />
      )}
    </div>
  );
}

export default App;
