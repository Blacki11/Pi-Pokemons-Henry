const FormInput = ({ label, value, onChange, name, error }) => {
  return (
    <div>
      <label>{label}: </label>
      <input type="number" value={value} onChange={onChange} name={name} />
      <span>{error}</span>
    </div>
  );
};

export default FormInput;
