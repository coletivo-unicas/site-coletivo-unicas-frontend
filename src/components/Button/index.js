import React from 'react';
import './style.css';

const Button = (
    { handlerButton,
        title,
        width,
        color,
        border,
        margin
    }
) => {
    return (
        <>
            <button onClick={handlerButton}
                style={{
                    backgroundColor: color,
                    border,
                    width,
                    margin
                }}>{title}</button>
        </>
    );
}
export default Button;