import { useState } from "react";
import FormInput from "../formImput";
import "./form.css";
import { validateImage, validatenumber } from "./formfunctionvalidate";
import { validateType } from "./formfunctionvalidate";

/* Funcion para vlidar y crear el pokemon, el initualvalue, son el nombre, imagen y stats
   mientras que el onSubmit, es la funcion para hacer la request al back */

const Form = ({ initialValues, onSubmit }) => {
  const [isOpen, setIsOpen] =
    useState(false); /* Estao para ver si la lista de tipos esta abierta o no */
  const [selected, setSelected] = useState(
    []
  ); /* Guarda los tipos seleccionados */
  const [form, setForm] =
    useState(initialValues); /* Guarda el resto de la informacion */
  const [errors, setErrors] = useState(
    {}
  ); /* Guarda los errores del nombre, imagen y stats del pokemon */
  const [errorsType, setErrorsType] = useState(
    {}
  ); /* Guarda los errores del typo */

  /* Validate, simplemente para validar algunas cosas del formulario, esta funcion expecto por el name
   llama a otra funciones que validan tanto las imagenes y los stats del pokemon */

  const validate = (form) => {
    const nombrePokemon = /^[a-z0-9]{3,10}$/i;
    nombrePokemon.test(form.name)
      ? setErrors({ ...errors, name: "" })
      : setErrors({
          ...errors,
          name: "El nombre debe tener entre 3 y 10 caracteres",
        });
    setErrors(validateImage(form));
    setErrors(validatenumber(form));
  };

  /* Esta funcion es igual a la de arriba, solo que llama a la funcion validatetype para validar los
tipos pokemons, esto para facilitar(al usar dos estados distintos para tipos y otro para el resto) */

  const validatefortype = (selected) => {
    setErrorsType(validateType(selected));
  };

  /* Toma los valores de los inputs y lo envia al estado que manega los stats, nombre e imagen, por otro
   lado, tambien llama a la funcion validate descripta lineas anteriores */

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });

    setForm({ ...form, [property]: value });
  };

  /* Como el de arriba, este toma los valores de los tipos pokemon y los manda al estado, ademas tambien
   de llamar a su funcion validate descripta anteriormente */

  const handleOptionClick = (e) => {
    const value = e.target.value;
    const index = selected.indexOf(value);

    if (index === -1) {
      validatefortype([...selected, value]);
      setSelected([...selected, value]);
    } else {
      setSelected(selected.filter((item) => item !== value));
    }
  };

  /* opcion para cambiar el estado de la lista de tipos pokemon, al hacer click cambiara de false a true
  o de true a false(true esta abierto, false esta cerrado) */

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  /* El submit, estare explicando las lineas de esta funcion, pero basicamente es la que hace el trabajo
     de alertar si hay algun tipo de error o en caso de no haber, hacer la request al backend */

  const submitHandler = (e) => {
    e.preventDefault();

    /* Creo un nuevo objeto con la informacion de los tipos, stats, nombre e imagenes del pokemon
       Esto porque los tipos estan en estado distinto al resto */
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

    validate(
      form
    ); /* llamado a la funcion, para terminar de verificar que no haya errores */
    validatefortype(selected); /* lo mismo pero para la validacion de tipos */

    /* Este pequeño fragmento de codigo con constantes, es porque las funciones devuelven un objeto
       asique las transformo en arrays, para despues hacerles un filtro y vaciarlas totalemtente
       para lograr lo que prosigue en el if */
    const primero = Object.values(errors);
    const err = primero.filter((e) => e.toString() !== "");
    const segundo = Object.values(errorsType);
    const errtype = segundo.filter((e) => e.toString() !== "");

    /* Esta ultima parte de la funcion es la que verifica los errores y decide que sucedera
       el primer IF, verifica que no haya errores en la stats, nombre e imagen, caso que encuentre
       errores mandara un alert, la siguiente condicion, es comprobar lo mismo pero con los tipos,
       por ultimo si no hay errores, entonces manda la funcion que conecta al backend y limpia el estado */
    if (err.length !== 0) {
      throw alert(
        "Tienes que completar todos los campos antes de poder crear tu pokemon"
      );
    } else if (errtype.length !== 0) {
      throw alert("Tienes que elegir entre 1 y 3 Tipos pokemons");
    } else {
      onSubmit(pokemonC);
      setSelected([]);
      setForm(initialValues);
    }
  };

  /* No hay mucho que explicar, inputs con su value, su css y funciones respectivamentes
     el elemento <FormInput/> sera explicado en su respectivo codigo */

  return (
    <form onSubmit={submitHandler} className="foto">
      <div className="gridcontainer">
        <div className="nombre">
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
            <span>{selected.join(" - ") || ""}</span>
          </div>
          <span>{errorsType.type}</span>
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
                <input
                  type="checkbox"
                  value="rock"
                  onClick={handleOptionClick}
                />
                Roca
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  value="bug"
                  onClick={handleOptionClick}
                />
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
                <input
                  type="checkbox"
                  value="fire"
                  onClick={handleOptionClick}
                />
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
                <input
                  type="checkbox"
                  value="ice"
                  onClick={handleOptionClick}
                />
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
        <button className="subMitbuttomform" type="submit">
          SUBMIT
        </button>
      </div>
      <div className="divVacio"></div>
      <footer>asdsd</footer>
    </form>
  );
};

export default Form;
