import React from "react";
import "./App.css";
import Greeting from "../../components/Greeting/Greeting";
import Time from "../../components/Time/Time";
import Weather from "../../components/Weather/Weather";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/time" element={<Time />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
}

export default App;
