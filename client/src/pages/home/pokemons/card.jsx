
import { Link } from "react-router-dom"
import React from "react"


export default function Card(){
    return (
        <div>
            <h1>muestro pokemon</h1>
            <button>
            <Link to='/Detail'>aquideberia estar el nombre del pokemon</Link>
            </button>
            <hr></hr>
            <button>
                <Link to="/About">About</Link>
            </button>

        </div>
    )
}