import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionSearch } from "../../Redux/actions/Actions";
import { Link } from "react-router-dom";
import "./searchcss/search.css";
function SearchBar() {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();

  /* Esta funcion change es basicamente para guardar la palabra que se escribe en el input con id "searchterm"*/
  function change(event) {
    setPokemon(event.target.value);
  }
  /* Esta funcion submit es para hacer la busqueda 
  de la info del input anterior(en este caso busca el nombre de un pokemon), la actionsearch es
  la que basicamente hace el llamado al back o lo que llaman algunos, la conexion, y despues
  un setPokemon("") esto para limbiar lo que estaba escrito */
  const submit = (e) => {
    e.preventDefault();
    dispatch(actionSearch(pokemon));
    setPokemon("");
  };
  /* Un esquema basico de search, el form con el submit y el input con el change,
  el disabled para que no puedan darle al buscar mientras no haya nada escrito y
  el classname del LINK es para exactamente lo mismo, ahora por este LINK, se le
  agrego la funcion submit al button*/
  return (
    <div>
      <form onSubmit={submit}>
        <div className="DivSearchbar">
          <input
            type="text"
            id="searchterm"
            value={pokemon}
            onChange={change}
            placeholder="Encuentra tu pokemon..."
          />

          <button
            type="submit"
            onClick={submit}
            value="Buscar!"
            disabled={!pokemon}
          >
            <Link
              to="/Home"
              className={`${!pokemon ? "disabled-link" : "enable-link"} `}
            >
              Buscar
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
