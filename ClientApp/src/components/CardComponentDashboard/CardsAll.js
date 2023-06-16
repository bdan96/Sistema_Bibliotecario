import React, { useState, useEffect } from "react";
import CardAll from "./CardAll";
//import axios from "axios"
import hoyEsImportante from "assets/imgDashboard/hoyEsImportante.jpg";
import Las48leyes from "assets/imgDashboard/Las48leyes.jpg";
import Mate4 from "assets/imgDashboard/Mate4.jpg";
import axios from "axios";


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

function CardsAll() {

    const [libros, setLibros] = useState([])


    //const { createProxyMiddleware } = require('http-proxy-middleware');




    useEffect(() => {
        axios.get('http://localhost:5006/api/dashboard')
            .then(response => {
                setLibros(response.data)
            })
            .catch(error => console.error(error));

    }, [])






    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {/*{cards.map(({ title, image, url, id }) => (
                    <div className="col-md-4" key={id}>
                        {<CardAll imageSource={image} title={title} url={url} />}

                    </div>
                ))}*/}
                {libros.map(({ TITULO_LIBRO, LOGO_LIBRO, AUTOR_LIBRO, NOMBRE_GENERO }) => (
                    <div className="col-md-4">
                        {
                            <CardAll imageSource={LOGO_LIBRO} title={TITULO_LIBRO} url={AUTOR_LIBRO} text={NOMBRE_GENERO} />
                        }

                    </div>
                ))}





            </div>
            {/*<div className="row">
                {
                    libros.map((libro, index) => (
                        <h4 key={index}>
                            {libro}
                        </h4>
                    ))
                }
            </div>*/}
        </div>
    );
}

export default CardsAll;