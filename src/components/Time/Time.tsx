import React from "react";
import "./Time.css";
import Buttons from "../Buttons/Buttons";

function Time() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    let start = setInterval(tick, 1000);
    return function clean() {
      clearInterval(start);
    };
  });

  function tick() {
    setTime(new Date());
  }

  return (
    <div className="time">
      <h1 className="time__counter">{time.toLocaleTimeString()}</h1>
      <Buttons
        link1="/weather/"
        link2="/weather/weather-forecast"
        button1="Главная"
        button2="Погода"
        color1="3"
        color2="1"
      />
    </div>
  );
}

export default Time;
