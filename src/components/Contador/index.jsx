import { useState, useEffect } from 'react';
import './Contador.css'

// eslint-disable-next-line react/prop-types
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div className="countdown-timer">
      {Object.keys(timeLeft).length ? (
        Object.entries(timeLeft).map(([interval, value]) => (
          <div key={interval} className="time-square">
            <div className="time-number">{value}</div>
            <div className="time-label">{interval}</div>
          </div>
        ))
      ) : (
        <span>¡Tiempo completado!</span>
      )}
    </div>
  );
};

export default CountdownTimer;