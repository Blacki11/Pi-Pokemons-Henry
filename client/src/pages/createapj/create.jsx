export default function Create() {
  return (
    <div>
      <h1>Creacion de pokemon</h1>
      <form>
        <label htmlFor="">
          Nombre
          <input type="text" name="name"></input>
        </label>
        <hr></hr>
        <label htmlFor="">
          Vida
          <input type="number" name="life"></input>
        </label>
        <hr></hr>
        <label htmlFor="">
          Altura
          <input type="number" name="height"></input>
        </label>
        <hr></hr>
        <label htmlFor="">
          Peso
          <input type="number" name="weight"></input>
        </label>
        <hr></hr>
        <label htmlFor="">
          Velocidad
          <input type="number" name="speed"></input>
        </label>
        <hr></hr>
        <label htmlFor="">
          Ataque
          <input type="number" name="attack"></input>
        </label>
        <hr></hr>
        <label htmlFor="">
          Defense
          <input type="number" name="defense"></input>
        </label>
        <hr></hr>
        <label htmlFor="">
          Ataque-Special
          <input type="number" name="special-attack"></input>
        </label>
        <hr></hr>
        <label htmlFor="">
          Defensa-Special
          <input type="number" name="special-defense"></input>
        </label>
        <hr></hr>
        <label>
          Seleciona el tipo:
          <select name="type" multiple={true}>
            <option value="normal">normal</option>
            <option value="flying">flying</option>
            <option value="fire">fire</option>
            <option value="grass">grass</option>
            <option value="poison">poison</option>
          </select>
        </label>
        <hr></hr>
        <label>
          Elige la imagen de tu pokemon:
          <input
            type="file"
            id="image"
            name="image"
            title="Select image pokemon"
          />
        </label>
        <hr></hr>
        <button type="submit">ENTRAR</button>
      </form>
    </div>
  );
}

// Nombre.
// Imagen.
// Vida.
// Ataque.
// Defensa.
// Velocidad (si tiene).
// Altura (si tiene).
// Peso (si tiene).
// Posibilidad de seleccionar/agregar varios tipos en simultáneo.
// Botón para crear el nuevo pokemon.
