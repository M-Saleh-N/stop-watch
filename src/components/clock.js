import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds) => {
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(seconds)}</h2>
      <div>
        <button onClick={() => setIsRunning(true)} disabled={isRunning}>Start</button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Stop</button>
        <button onClick={() => { setIsRunning(false); setSeconds(0); }}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;

