import React from "react";
import "./Preloader.css";

function Preloader(props: { active: boolean }) {
  return (
    <div className={` ${props.active ? "preloader" : "preloader_inactive"}`}>
      <div className="preloader__item"></div>
      <div className="preloader__item"></div>
      <div className="preloader__item"></div>
      <div className="preloader__item"></div>
      <div className="preloader__item"></div>
    </div>
  );
}

export default Preloader;
