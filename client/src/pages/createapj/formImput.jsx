import "./input.css/formimput.css";
/* Funcion html, simplemente para facilitar la creacion de los stats, recibe el nombre, value, error y
   su respectiva funcion*/
const FormInput = ({ label, value, onChange, name, error }) => {
  return (
    <div className="DivConainerValoresNumericos">
      <div>
        <label>{label}:</label>
        <input type="number" value={value} onChange={onChange} name={name} />
      </div>
      <span>{error}</span>
    </div>
  );
};

export default FormInput;
