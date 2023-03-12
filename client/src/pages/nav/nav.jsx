import React from "react";
import { Link, Route, Routes } from "react-router-dom";

export default function Nav(props) {
    return (
      <div>
        <ul>
        <button>
          <Link to="/About">About</Link>
        </button>
        <button>
        <Link to="/Home">Home</Link>
        </button>
        <button>
        <Link to="/Create">Crear Pokemon</Link>
        </button>
        </ul>
      </div>
    );
  }