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
                libros.map(({ TITULO_LIBRO, LOGO_LIBRO, NOMBRE_GENERO }) =>                
            (<Card>
                <CardImg
                    alt="Card image cap"
                    src={LOGO_LIBRO}
                    top                   
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                            { TITULO_LIBRO}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                            { NOMBRE_GENERO}
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button className="btn btn-dark">

                        Ver mas
                    </Button>
                </CardBody>
                </Card>))}
            {/*<Card>
                <CardImg
                    alt="Card image cap"
                    src={require("assets/imgDashboard/hoyEsImportante.jpg")}
                    top                 
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Las 48 leyes del poder
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Descripcion
                    </CardSubtitle>
                    <CardText>
                        This card has supporting text below as a natural lead-in to additional content.
                        <br></br>
                        <br></br>
                    </CardText>
                    <Button className="btn btn-dark">
                        Ver mas
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src={require("assets/imgDashboard/Mate4.jpg")}
                    bottom
                    width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as. This card has even longer content than the first to show that equal height action.
                    </CardText>
                    <Button className="btn btn-dark">
                        Ver mas
                    </Button>
                </CardBody>
            </Card>*/}
         </CardGroup>
    );
}

export default CardLibro;