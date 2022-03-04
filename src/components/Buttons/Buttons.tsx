import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

function Buttons(props: {
  link1: string;
  button1: string;
  link2: string;
  button2: string;
  color1: string;
  color2: string;
}) {
  function changeColor(num: number) {
    if (num === 1) {
      switch (props.color1) {
        case "1":
          return "buttons__item_color1";
        case "2":
          return "buttons__item_color2";
        case "3":
          return "buttons__item_color3";
        default:
          return "";
      }
    } else if (num === 2) {
      switch (props.color2) {
        case "1":
          return "buttons__item_color1";
        case "2":
          return "buttons__item_color2";
        case "3":
          return "buttons__item_color3";
        default:
          return "";
      }
    }
  }

  return (
    <div className="buttons">
      <Link to={`${props.link1}`} className={`buttons__item ${changeColor(1)}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.button1}
      </Link>
      <Link to={`${props.link2}`} className={`buttons__item ${changeColor(2)}`}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.button2}
      </Link>
    </div>
  );
}

export default Buttons;
