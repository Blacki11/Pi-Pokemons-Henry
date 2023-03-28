import axios from "axios";
import Form from "./form/form";

/* funcion que hace el llamado al backend, y le pasa el valor inicial del estado, ademas de la funcion 
   para el llamado al backend */
const Create = () => {
  /* valor inicial del estado para crear el pokemon */
  const initialValues = {
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
  };
  /* funcion para hacer la request al backend y "crear" el nuevo pokemon */
  const handleSubmit = (form) => {
    axios
      .post("/pokemons", form)
      .then((res) =>
        alert(
          "Tu Pokemon a sido creado con exito, buscalo por su nombre, o en la home"
        )
      )
      .catch((err) => {
        const error = err;
        console.log(
          error,
          "Este error aparecera en consola, si es asi entonces completa lo que falta, en caso de que lo hayas hecho, contacta con un administrador"
        ); /* Este error es algo mas personal, para verificar si sale algo mal, pero lo termine dejando, porque si alguien que sabe entra podra solucionarlo o al menos avisar de forma mas precisa el error */
        alert("Porfavor, completa lo faltante");
      });
  };

  return <Form initialValues={initialValues} onSubmit={handleSubmit} />;
};

export default Create;
