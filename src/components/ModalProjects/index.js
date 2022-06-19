import React from "react";
import "./style.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectDetailsCarousel from "../ProjectDetailsCarousel";

const ModalProjects = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <ProjectDetailsCarousel />

                <div className="modal-projects-body">
                    <h4 className="modal-projects-title">Núcleo de Idiomas</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ModalProjects;