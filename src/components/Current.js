import React, { useState, useEffect } from 'react';
import './Current.css'
const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className='ctime'>-:Time : {currentTime.toLocaleTimeString()} :-</div>;
};

export default CurrentTime;
