import React from 'react';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';

const Select = ({
  id,
  label,
  options,
  // placeholderOption,
  value,
  setValue,
  ...props
}) => {
  return (
    <div className="form-group">
      <FloatingLabel
        // controlId={id}
        label={label}
        className="mb-3"
        style={{ color: '#F2BBBB', fontSize: '0.9rem' }}
      >
        {/* <label htmlFor={id} className="form-label">
        {label}
      </label>{' '}
      <br /> */}
        <Form.Select
          value={value}
          onChange={({ target }) => setValue(target.value)}
          className="custom-select"
          style={{
            color: '#D9D3EF',
            fontWeight: 400,
            backgroundColor: 'transparent',
            borderColor: '#F2BBBB',
            borderWidth: 1,
          }}
          {...props}
        >
          <option value="" disabled>
            {/* {placeholderOption} */}
            Selecione uma opção...
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      {/* <p>value: {value}</p> */}
    </div>
  );
};

export default Select;
