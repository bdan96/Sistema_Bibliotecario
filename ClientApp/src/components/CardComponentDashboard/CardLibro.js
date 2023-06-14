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

function CardLibro() {

    const [libros, setLibros] = useState([])

    //const { createProxyMiddleware } = require('http-proxy-middleware');




    useEffect(() => {
        axios.get('http://localhost:5006/api/dashboard/popular')
            .then(response => {
                setLibros(response.data)
            })
            .catch(error => console.error(error));

    }, [])

    return (
        <CardGroup>
            {
                libros.map(({ TITULO_LIBRO, LOGO_LIBRO, NOMBRE_GENERO }, index) => {
                    if (index < 3) {
                        return (
                            <Card>
                                <CardImg
                                    alt="Card image cap"
                                    src={LOGO_LIBRO}
                                    top
                                    height="500"
                                    width="370"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {TITULO_LIBRO}
                                    </CardTitle>
                                    <br></br>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {NOMBRE_GENERO}
                                    </CardSubtitle>
                                    <CardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                    </CardText>
                                    <Button className="btn btn-dark">
                                        Ver mas
                                    </Button>
                                </CardBody>
                            </Card>)
                    }
                })
            }
        </CardGroup>
        
    );
}

export default CardLibro;