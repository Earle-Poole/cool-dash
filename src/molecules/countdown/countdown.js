import react from "react";
import "./countdown.css";

const Countdown = () => {
  const currentTime = Number;
  const newDate = "Feb 5, 2022 08:30:15";
  const timeLeft = newDate - currentTime;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div>
      <h1>The Countdown Is On</h1>
      <div className='countdownWidget'>{ Countdown }</div>
      <div className='countdownEventTitle'> till my 'countdownEventName'</div>
    
   </div>
  );
};

export default Countdown;
