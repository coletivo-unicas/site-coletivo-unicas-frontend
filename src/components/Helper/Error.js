import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  // return <p style={{ color: '#F28F38', margin: '1rem 0' }}>{error}</p>;
  return (
    <p
      style={{
        color: '#F28F38',
        fontSize: '0.9rem',
        fontStyle: 'italic',
        margin: '0 0 0 0.8rem',
        textAlign: 'start',
      }}
    >
      {error}
    </p>
  );
};

export default Error;
