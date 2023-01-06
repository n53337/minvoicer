const Input = ({ type, label, placeHolder, error }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} placeholder={placeHolder} />
      <span>{error && error}</span>
    </div>
  );
};

export default Input;
