import { useState } from "react";
import FormInput from "../formImput";
import "./form.css";
import { validatenumber } from "./formfunctionvalidate";

const Form = ({ initialValues, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [form, setForm] = useState(initialValues);

  const [errors, setErrors] = useState({});
  console.log(form.image);

  const validate = (form) => {
    const nombrePokemon = /^[a-z0-9]{3,10}$/i;
    nombrePokemon.test(form.name)
      ? setErrors({ ...errors, name: "" })
      : setErrors({
          ...errors,
          name: "El nombre debe tener entre 3 y 10 caracteres",
        });

    setErrors(validatenumber(form));
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });

    setForm({ ...form, [property]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const pokemonC = {
      name: form.name,
      weight: form.weight,
      height: form.height,
      life: form.life,
      attack: form.attack,
      defense: form.defense,
      Speed: form.speed,
      SpecialAttack: form.specialattack,
      SpecialDefense: form.specialdefense,
      Image: form.image,
      type: selected,
    };
    console.log(pokemonC, "SUBMITHANDLER FORM");
    validate(form);
    const primero = Object.values(errors);
    const err = primero.filter((e) => e.toString() !== "");
    if (err.length !== 0) throw alert("Completa lo que Falta");
    else onSubmit(pokemonC);
  };

  const handleOptionClick = (e) => {
    const value = e.target.value;
    const index = selected.indexOf(value);

    if (index === -1) {
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Nombre: </label>
        <input name="name" value={form.name} onChange={changeHandler}></input>
        <span>{errors.name}</span>
      </div>
      <FormInput
        label="Vida"
        value={form.life}
        onChange={changeHandler}
        name="life"
        error={errors.life}
      />
      <FormInput
        label="Ataque"
        value={form.attack}
        onChange={changeHandler}
        name="attack"
        error={errors.attack}
      />
      <FormInput
        label="Defensa"
        value={form.defense}
        onChange={changeHandler}
        name="defense"
        error={errors.defense}
      />
      <FormInput
        label="Velocidad"
        value={form.speed}
        onChange={changeHandler}
        name="speed"
        error={errors.speed}
      />
      <FormInput
        label="Altura"
        value={form.height}
        onChange={changeHandler}
        name="height"
        error={errors.height}
      />
      <FormInput
        label="Peso"
        value={form.weight}
        onChange={changeHandler}
        name="weight"
        error={errors.weight}
      />
      <FormInput
        label="Ataque Especial"
        value={form.specialattack}
        onChange={changeHandler}
        name="specialattack"
        error={errors.specialattack}
      />
      <FormInput
        label="Defensa Espspecial"
        value={form.specialdefense}
        onChange={changeHandler}
        name="specialdefense"
        error={errors.specialdefense}
      />

      <div>
        <label htmlFor="image">Imagen Pokemon: </label>
        <input
          id="image"
          accept="image/*"
          name="image"
          value={form.image}
          type="file"
          onChange={changeHandler}
        />
        <span>{errors.image}</span>
      </div>

      <div className="multiselect">
        <div className="multiselect-header" onClick={toggleOptions}>
          <span>Eligue el tipo de tu pokemon: </span>
          <span>{selected.join(", ") || ""}</span>
          <span>{errors.type}</span>
        </div>

        <ul className={`multiselect-options ${isOpen ? "open" : ""}`}>
          <li>
            <label>
              <input
                type="checkbox"
                value="normal"
                onClick={handleOptionClick}
              />
              Normal
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="fighting"
                onClick={handleOptionClick}
              />
              Lucha
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="flying"
                onClick={handleOptionClick}
              />
              Volador
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="poison"
                onClick={handleOptionClick}
              />
              Veneno
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="ground"
                onClick={handleOptionClick}
              />
              Tierra
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" value="rock" onClick={handleOptionClick} />
              Roca
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" value="bug" onClick={handleOptionClick} />
              Bicho
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="ghost"
                onClick={handleOptionClick}
              />
              Fantasma
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="steel"
                onClick={handleOptionClick}
              />
              Acero
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" value="fire" onClick={handleOptionClick} />
              Fuego
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="water"
                onClick={handleOptionClick}
              />
              Agua
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="grass"
                onClick={handleOptionClick}
              />
              Planta
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="electric"
                onClick={handleOptionClick}
              />
              Electrico
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="psychic"
                onClick={handleOptionClick}
              />
              Psiquico
            </label>
          </li>
          <li>
            <label>
              <input type="checkbox" value="ice" onClick={handleOptionClick} />
              Hielo
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                value="dragon"
                onClick={handleOptionClick}
              />
              Dragon
            </label>
          </li>
        </ul>
      </div>

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
