import React, { useState } from "react";
import PropTypes from "prop-types";
//import ModalDashboard from './ModalDashboard'
import "assets/css/CardAllDashboard.css";
import ModalDashboard from './ModalDashboard'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Label,
    Form,
    FormGroup,
} from 'reactstrap';

const CardAll = (props) => {

    const { libro } = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp" style={{ borderRadius: "20px" }}>
            <div className="overflow">
                <img src={libro.LOGO_LIBRO} alt="a wallpaper" className="card-img-top" style={{ borderRadius: "20px 20px 0px 0px" }} />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{libro.TITULO_LIBRO}</h4>

                <p className="card-text text-secondary">
                    {libro.NOMBRE_GENERO
                        ? libro.NOMBRE_GENERO
                        : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam."}
                </p>             
                <a

                    onClick={toggle}

                    className="btn btn-outline-secondary border-0"
                    rel="noreferrer"
                >
                    Go to the book
                </a>

            </div>
            <ModalDashboard toggle={toggle} modal={modal} libro={libro}></ModalDashboard>
        </div>
    );
}

CardAll.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    url: PropTypes.string,
    imageSource: PropTypes.string
};

export default CardAll;
