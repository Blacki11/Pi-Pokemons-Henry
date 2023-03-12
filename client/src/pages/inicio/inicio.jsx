import { Link } from "react-router-dom";
import React from "react";

export default function Inicio(){
    return (
        <div>
            <button>
                <Link to='home'>Bienvenido</Link>
            </button>
        </div>
    )
}