import React from 'react';

const TextArea = ({
  id,
  label,
  placeholder,
  rows,
  value,
  type,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        rows={rows}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        // {...props}
        //onChange={({ target }) => setValue(target.value)}
        className="form-control"
      />
      {/* <p>value: {value}</p> */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default TextArea;
