import React from "react";

const Input = ({ label, id, name, value, onChange, error }) => {
  return (
    <div>
      <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} value={value} onChange={onChange} />
      </div>
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;
