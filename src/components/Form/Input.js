import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import Error from '../Helper/Error';

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
    <>
      {/* // <div className="form-floating mb-3 mt-3"> */}
      {/* <input */}
      <FloatingLabel
        label={label}
        className="mb-3"
        style={{ color: '#F2BBBB', fontSize: '0.9rem' }}
      >
        <Form.Control
          id={id}
          name={id}
          placeholder={placeholder}
          value={value}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          className="form-control"
          style={{
            color: '#F2BBBB',
            fontWeight: 400,
            backgroundColor: 'transparent',
            borderColor: '#F2BBBB',
            borderWidth: 1,
          }}
          // {...props}
        />
        {/* <label htmlFor={id}>{label}</label> */}
        {/* <p>value: {value}</p> */}
        <Error error={error} />
        {/* {error && <p className="text-bg-warning">{error}</p>} */}
        {/* </div> */}
      </FloatingLabel>
    </>
  );
};

export default Input;
