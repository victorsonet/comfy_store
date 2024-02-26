function FormInput({ label, name, type, defaultValue, size }) {
  return (
    <label className="form-control">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder="Type here"
        className={`input input-bordered ${size}`}
      />
    </label>
  );
}
export default FormInput;
