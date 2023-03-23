import { Link } from "react-router-dom";
import React from "react";
import "./landingPage.css";

function Inicio() {
  return (
    <div className="cont-btn">
      <audio controls id="music1">
        <source src="kanpokem.ogg" type="audio/ogg" />
        <source src="kantopokemon.mp3" type="audio/mp3" />
        <source src="kantopok.mpeg" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Link to="home">
        <button className="btn-bubble">
          <span>Bienvenido Entrenador</span>
        </button>
      </Link>
    </div>
  );
}

export default Inicio;
