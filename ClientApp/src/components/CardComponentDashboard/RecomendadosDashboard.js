﻿import React, { useState, useEffect } from "react";
import CardAll from "./CardAll";
//import axios from "axios"
import hoyEsImportante from "assets/imgDashboard/hoyEsImportante.jpg";
import Las48leyes from "assets/imgDashboard/Las48leyes.jpg";
import Mate4 from "assets/imgDashboard/Mate4.jpg";
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

const cards = [
    {
        id: 1,
        title: "Mate 4",
        image: Mate4,
        url: "https://youtube.com/fazttech",
    },
    {
        id: 2,
        title: "Hoy Es Importante",
        image: hoyEsImportante,
        url: "https://blog.faztweb.com",
    },
    {
        id: 3,
        title: "Las 48 Leyes",
        image: Las48leyes,
        url: "https://youtube.com/fazttech",
    },

];

function RecomendadosLibros() {

    const [libros, setLibros] = useState([])

    //const { createProxyMiddleware } = require('http-proxy-middleware');




    useEffect(() => {
        axios.get('http://localhost:5006/api/dashboard/recomendados')
            .then(response => {
                setLibros(response.data)
            })
            .catch(error => console.error(error));

    }, [])






    return (
        /*<CardGroup>*/
        <CardGroup>
            {
                libros.map(({ TITULO_LIBRO, LOGO_LIBRO, NOMBRE_GENERO }, index) => {
                    if (index >=14 && index <= 17) {
                        return (
                            <Card className="rounded-3">
                                <CardImg
                                    alt="Card image cap"
                                    src={LOGO_LIBRO}
                                    top
                                    className="rounded-3"
                                    height="500"
                                    width="370"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {TITULO_LIBRO}
                                    </CardTitle>
                                   
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        {NOMBRE_GENERO}
                                    </CardSubtitle>
                                    <CardText>
                                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.                                      
                                    </CardText>
                                    <br></br>
                                    <Button className="btn btn-dark recomendadosCa">
                                        IR AL LIBRO
                                    </Button>
                                </CardBody>
                            </Card>)
                    }
                })
            }
        </CardGroup>


    );
}


export default RecomendadosLibros;
