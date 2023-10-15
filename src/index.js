import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Particles from "particlesjs";

window.onload = function () {
  Particles.init({
    selector: ".background",
    connectParticles: true,
    color: ["#03dac6", "#ff0266", "#ffa500"],
  });
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
