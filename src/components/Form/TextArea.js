import React from 'react';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import Error from '../Helper/Error';

const TextArea = ({
  id,
  label,
  placeholder,
  // rows,
  value,
  type,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div className="form-group">
      <FloatingLabel
        // controlId={id}
        label={label}
        className="mb-3"
        style={{ color: '#F2BBBB', fontSize: '0.9rem' }}
      >
        {/* <label htmlFor={id}>{label}</label> */}
        <Form.Control
          as="textarea"
          id={id}
          name={id}
          placeholder={placeholder}
          // rows={rows}
          value={value}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          // {...props}
          //onChange={({ target }) => setValue(target.value)}
          className="form-control"
          style={{
            height: '10rem',
            color: '#D9D3EF',
            fontWeight: 400,
            backgroundColor: 'transparent',
            borderColor: '#F2BBBB',
            borderWidth: 1,
            // placeholder: '#F2BBBB',
          }}
        />
        {/* <p>value: {value}</p> */}
        <Error error={error} />
        {/* {error && <p>{error}</p>} */}
      </FloatingLabel>
    </div>
  );
};

export default TextArea;
