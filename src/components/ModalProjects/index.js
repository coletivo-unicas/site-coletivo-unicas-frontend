import React from "react";
import "./style.css";

const ModalProjects = props => {
    const { className, modalRef } = props;

    return (
        <div ref={modalRef} className={`${className} modal`}>
            {/* <p>Meu modal!</p> */}
        </div>
    )
}

export default ModalProjects;