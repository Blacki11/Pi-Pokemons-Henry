import "./input.css/formimput.css";

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
