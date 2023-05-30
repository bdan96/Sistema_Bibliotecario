import React from "react";
import CardAll from "./CardAll";

import hoyEsImportante from "assets/imgDashboard/hoyEsImportante.jpg";
import Las48leyes from "assets/imgDashboard/Las48leyes.jpg";
import Mate4 from "assets/imgDashboard/Mate4.jpg";

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
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards.map(({ title, image, url, id }) => (
                    <div className="col-md-4" key={id}>
                        <CardAll imageSource={image} title={title} url={url}  />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardsAll;