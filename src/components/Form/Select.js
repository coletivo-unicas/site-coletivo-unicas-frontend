import React from 'react';

const Select = ({ id, label, options, value, setValue, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>{' '}
      <br />
      <select
        value={value}
        onChange={({ target }) => setValue(target.value)}
        className="custom-select"
        {...props}
      >
        <option value="" disabled>
          Selecione uma opção...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {/* <p>value: {value}</p> */}
    </div>
  );
};

export default Select;
