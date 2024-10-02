import React, { useEffect, useState } from 'react';
import './Loading.css';

function Loading({ value }) {
  return (
    <div className="loading-container">
      <div 
        className="circular-progress" 
        style={{ '--progress': value }}
      />
      <div className="circular-progress-text">
        {`${Math.round(value)}%`}
      </div>
    </div>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Loading value={progress} />;
}
