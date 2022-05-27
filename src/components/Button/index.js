import React from 'react';
import './style.css';

const Button = ({ handlerButton, disabled, title, width, ...rest }) => {
    return (
        <>
            <button onClick={handlerButton} disabled={disabled} {...rest}>{title}</button>
        </>
    );
}
export default Button;