import axios from "axios";

// function validate(pokemon) {
//   const errors = {};
//   if (!pokemon.name) {
//     errors.name = `Faltan completar el campo: Nombre`;
//   }
//   if (!pokemon.life) {
//     errors.life = `Faltan completar el campo: Vida`;
//   }
//   if (!pokemon.attack) {
//     errors.attack = `Faltan completar el campo: Ataque`;
//   }
//   if (!pokemon.defense) {
//     errors.defense = `Faltan completar el campo: Defensa`;
//   }
//   if (!pokemon.image) {
//     errors.image = `Sube una imagen para poder terminar de crear tu pokemon`;
//   }
//   if (pokemon.type.length === 0) {
//     errors.type = `Faltan Seleccionr los Tipos de tu Pokemon`;
//   }
//   if (pokemon.name.length > 10) {
//     errors.name = "El maximo de caracteres del nombre es: 10";
//   }
//   if (pokemon.life > 999) {
//     errors.life = "El maximo del stat: Vida es: 999";
//   }
//   if (pokemon.defense > 999) {
//     errors.defense = "El maximo del stat: Defensa es: 999";
//   }
//   if (pokemon.attack > 999) {
//     errors.attack = "El maximo del stat: Ataque es: 999";
//   }
//   if (pokemon.height > 999) {
//     errors.height = "El maximo del stat: Altura es: 999";
//   }
//   if (pokemon.weight > 999) {
//     errors.weight = "El maximo del stat: Peso es: 999";
//   }
//   if (pokemon.speed > 999) {
//     errors.speed = "El maximo del stat: Velocidad es: 999";
//   }
//   if (pokemon.special_attack > 999) {
//     errors.special_attack = "El maximo del stat: Velocidad es: 999";
//   }
//   if (pokemon.special_defense > 999) {
//     errors.special_defense = "El maximo del stat: Velocidad es: 999";
//   }
//   if (pokemon.type.length > 3) {
//     errors.type = "El maximo de tipos que puede tener tu pokemon es: 3";
//   }
//   if (isNaN(pokemon.life) === true) {
//     errors.life = "La stat: Vida solo aceptan caracteres Numericos";
//   }
//   if (isNaN(pokemon.height) === true) {
//     errors.height = "La stat: Altura solo aceptan caracteres Numericos";
//   }
//   if (isNaN(pokemon.weight) === true) {
//     errors.weight = "La stat: Peso solo aceptan caracteres Numericos";
//   }
//   if (isNaN(pokemon.defense) === true) {
//     errors.defense = "La stat: Defensa solo aceptan caracteres Numericos";
//   }
//   if (isNaN(pokemon.attack) === true) {
//     errors.attack = "La stat: Ataque solo aceptan caracteres Numericos";
//   }
//   if (isNaN(pokemon.speed) === true) {
//     errors.speed = "La stat: Velocidad solo aceptan caracteres Numericos";
//   }
//   if (isNaN(pokemon.special_defense) === true) {
//     errors.special_defense =
//       "La stat: Defensa Especial solo aceptan caracteres Numericos";
//   }
//   if (isNaN(pokemon.special_attack) === true) {
//     errors.special_attack =
//       "La stat: Ataque Especial solo aceptan caracteres Numericos";
//   }
//   if (pokemon.image) return errors;
// }
import Form from "./form/form";

const Create = () => {
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
    type: [],
  };

  const handleSubmit = (form) => {
    axios
      .post("localhost:3001/pokemons", form)
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };

  return <Form initialValues={initialValues} onSubmit={handleSubmit} />;
};

export default Create;

// const Create = () => {
//   const [form, setForm] = useState({
//     email: "",
//     name: "",
//     phone: "",
//   });

//   const [errors, setErrors] = useState({
//     email: "",
//     name: "",
//     phone: "",
//   });

//   const changeHandler = (event) => {
//     const property = event.target.name;
//     const value = event.target.value;

//     validate({ ...form, [property]: value });

//     setForm({ ...form, [property]: value });
//   };

//   const validate = (form) => {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
//       setErrors({ ...errors, email: "" });
//     } else {
//       setErrors({ ...errors, email: "ERROR MAIL" });
//     }
//   };

//   const submitHnadler = (e) => {
//     e.preventDefault();
//     console.log(form);
//     alert("apretado el boton");
//   };

//   return (
//     <form onSubmit={submitHnadler}>
//       <div>
//         <label>Email: </label>
//         <input
//           type="text"
//           value={form.email}
//           onChange={changeHandler}
//           name="email"
//         />
//         <span>{errors.email}</span>
//       </div>

//       <div>
//         <label>Name: </label>
//         <input
//           type="text"
//           value={form.name}
//           onChange={changeHandler}
//           name="name"
//         />
//       </div>

//       <div>
//         <label>Phone: </label>
//         <input
//           type="text"
//           value={form.phone}
//           onChange={changeHandler}
//           name="phone"
//         />
//       </div>

//       <button type="submit">SUBMIT</button>
//     </form>
//   );
// };

// export default Create;

// export default function Create() {
//   const [createPok, setCreatePok] = useState({
//     name: "",
//     height: "",
//     weight: "",
//     image: "",
//     life: "",
//     attack: "",
//     defense: "",
//     speed: "",
//     special_defense: "",
//     special_attack: "",
//     type: [],
//   });
//   const [errPok, setErrPok] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrPok(validate(createPok));
//     const tieneerrores = errPok;
//     // console.log(Object.values(tieneerrores).length, "fuera del if");
//     if (Object.values(tieneerrores).length !== 0) {
//       // console.log(errPok);
//       throw alert("informacion errornea");
//     } else {
//       throw alert("funca");
//     }
//   };

//   // const changeHandle = (event) => {
//   //   const property = event.target.name;
//   //   const value = event.target.value;
//   //   setCreatePok({ ...createPok, [property]: value });
//   //   setErrPok(validate({ ...createPok, [property]: value }));
//   // };
//   const changeHandle = (event) => {
//     const { name, value } = event.target;
//     setCreatePok({ ...createPok, [name]: value });
//     setErrPok({ ...errPok, [name]: null });
//   };

//   const handleTypeChange = (e) => {
//     const { options } = e.target;
//     const type = Array.from(options)
//       .filter((option) => option.selected)
//       .map((option) => option.value);
//     setCreatePok((prevState) => ({
//       ...prevState,
//       type,
//     }));
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const errors2 = validate(createPok);
//   //   setErrPok(errors2);
//   //   console.log(errPok);
//   //   if (Object.values(errors2).length !== 0) {
//   //     throw alert("hola");
//   //   } else {
//   //     throw alert("logrado");
//   //   }
//   // };

//   return (
//     <div>
//       <h1>Creacion de pokemon</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="">
//             Nombre
//             <input
//               type="text"
//               name="name"
//               value={createPok.name}
//               onChange={changeHandle}
//             ></input>
//             <span>{errPok.name}</span>
//           </label>
//         </div>

//         <div>
//           <label htmlFor="">
//             Vida
//             <input
//               type="number"
//               name="life"
//               value={createPok.life}
//               onChange={changeHandle}
//             ></input>
//             <span>{errPok.life}</span>
//           </label>
//         </div>

//         <div>
//           <label htmlFor="">
//             Ataque
//             <input
//               type="number"
//               name="attack"
//               value={createPok.attack}
//               onChange={changeHandle}
//             ></input>
//             <span>{errPok.attack}</span>
//           </label>
//         </div>
//         <div>
//           <label htmlFor="">
//             Defense
//             <input
//               type="number"
//               name="defense"
//               value={createPok.defense}
//               onChange={changeHandle}
//             ></input>
//             <span>{errPok.defense}</span>
//           </label>
//         </div>

//         <div>
//           <label htmlFor="">
//             Altura
//             <input
//               type="number"
//               name="height"
//               value={createPok.height}
//               onChange={changeHandle}
//             ></input>
//             <span>{errPok.height}</span>
//           </label>
//         </div>

//         <div>
//           <label htmlFor="">
//             Peso
//             <input
//               type="number"
//               name="weight"
//               value={createPok.weight}
//               onChange={changeHandle}
//             ></input>
//             <span>{errPok.weight}</span>
//           </label>
//         </div>

//         <div>
//           <label htmlFor="">
//             Velocidad
//             <input
//               type="number"
//               name="speed"
//               value={createPok.speed}
//               onChange={changeHandle}
//             ></input>
//             <span>{errPok.speed}</span>
//           </label>
//         </div>

//         <div>
//           <label htmlFor="">
//             Ataque-Special
//             <input
//               type="number"
//               name="special_attack"
//               value={createPok.special_attack}
//               onChange={changeHandle}
//             ></input>
//             <span>{errPok.special_attack}</span>
//           </label>
//         </div>

//         <div>
//           <label htmlFor="">
//             Defensa-Special
//             <input
//               type="number"
//               name="special_defense"
//               value={createPok.special_defense}
//               onChange={changeHandle}
//             ></input>
//             <span>{errPok.special_defense}</span>
//           </label>
//         </div>

//         <div>
//           <label>
//             Seleciona el tipo:
//             <select name="type" multiple onChange={handleTypeChange}>
//               <option value="normal">normal</option>
//               <option value="flying">flying</option>
//               <option value="fire">fire</option>
//               <option value="grass">grass</option>
//               <option value="poison">poison</option>
//             </select>
//             <span>{errPok.type}</span>
//           </label>
//         </div>

//         <div>
//           <label>
//             Elige la imagen de tu pokemon:
//             <input
//               type="file"
//               id="image"
//               name="image"
//               title="Select image pokemon"
//               value={createPok.image}
//               onChange={changeHandle}
//             />
//             <span>{errPok.image}</span>
//           </label>
//         </div>

//         <button type="submit">ENTRAR</button>
//       </form>
//     </div>
//   );
// }
