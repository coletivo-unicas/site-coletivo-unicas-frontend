import React from 'react';

const Input = ({
  id,
  label,
  placeholder,
  value,
  type,
  onChange,
  onBlur,
  error,
  // ...props
}) => {
  return (
    <div className="form-floating mb-3 mt-3">
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        className="form-control"
        // {...props}
      />
      <label htmlFor={id}>{label}</label>
      {/* <p>value: {value}</p> */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
