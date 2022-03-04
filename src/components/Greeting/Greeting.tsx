import React from "react";
import "./Greeting.css";
import Buttons from "../Buttons/Buttons";

function Greeting() {
  return (
    <div className="greeting">
      <div className="greeting__title-container">
        <p className="greeting__title">
          <span className="greeting__title_span-1">Добро</span>{" "}
          <span className="greeting__title_span-2">Пожаловать!</span>
        </p>
      </div>
      <Buttons
        link1="./time"
        link2="./weather"
        button1="Время"
        button2="Погода"
        color1="2"
        color2="1"
      />
    </div>
  );
}

export default Greeting;
