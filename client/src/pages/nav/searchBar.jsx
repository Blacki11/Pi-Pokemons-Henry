import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionSearch } from "../../Redux/actions/Actions";

export default function SearchBar(props) {
  const [pokemon, setPokemon] = useState("");
  const dispatch = useDispatch();
  // const pokemon = useSelector((state) => state.onlyPokemon);
  function change(event) {
    setPokemon(event.target.value);
  }

  const submit = (e) => {
    e.preventDefault();
    dispatch(actionSearch(pokemon));
    setPokemon("");
  };
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <input
            type="text"
            id="searchterm"
            value={pokemon}
            onChange={change}
            placeholder="Encuentra tu pokemon..."
          />
          <input type="submit" value="Find!" />
        </div>
      </form>
    </div>
  );
}
