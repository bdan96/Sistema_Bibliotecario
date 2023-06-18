import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Card,
    CardGroup,
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from "reactstrap";
import "assets/css/recomendadosCard.css";
import ModalDashboard from './ModalDashboard'

function Destacados() {

    const [libros, setLibros] = useState([])

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    useEffect(() => {
        axios.get('http://localhost:5006/api/dashboard/destacados')
            .then(response => {
                setLibros(response.data)
            })
            .catch(error => console.error(error));

    }, [])

    return (
        /*<CardGroup>*/
        <CardGroup>
        
            {
                libros.map((item, index) => {
                    if (index >= 3 && index <= 5) {
                        return (
                            <Card>
                                <CardImg
                                    alt="Card image cap"
                                    src={item.LOGO_LIBRO}
                                    top
                                    height="500"
                                    width="370"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {item.TITULO_LIBRO}
                                    </CardTitle>

                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {item.NOMBRE_GENERO}
                                    </CardSubtitle>
                                    <CardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </CardText>
                                    <br></br>
                                    <Button className="btn btn-dark recomendadosCa" onClick={toggle}>
                                        IR AL LIBRO
                                    </Button>
                                </CardBody>
                                <ModalDashboard toggle={toggle} modal={modal} libro={item}></ModalDashboard>
                            </Card>)
                    }
                })
                }
                
            
        </CardGroup>


    );
}

export default Destacados;