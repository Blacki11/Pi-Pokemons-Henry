import { useState } from "react";
import FormInput from "../formImput";
import "./form.css";

const Form = ({ initialValues, onSubmit }) => {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({
    name: "",
    life: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    specialattack: "",
    specialdefense: "",
    image: "",
    type: [],
  });

  const validate = (form) => {
    if (form.name === "") {
      setErrors({ ...errors, name: "Error Nombre" });
    } else {
      setErrors({ ...errors, name: "" });
    }
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    validate({ ...form, [property]: value });

    setForm({ ...form, [property]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Nombre</label>
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
        label="Defensa Espspecialdefense"
        value={form.specialdefense}
        onChange={changeHandler}
        name="specialdefense"
        error={errors.specialdefense}
      />

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
