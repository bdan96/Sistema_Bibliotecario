/*import React, { useState, useEffect } from "react";
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

function consumirApiRecomendados() {

    const [libros, setLibros] = useState([])

    useEffect(() => {
        axios.get('https://www.etnassoft.com/api/v1/get/?category=libros_programacion&criteria=most_viewed')
            .then(response => {
                setLibros(response.data)
            })
            .catch(error => console.error(error));

    }, [])

    return ( 
        <CardGroup>
        {
            libros.map(({ title, author, content, cover }) =>
            (<Card className="rounded-3">
                <CardImg
                    alt="Card image cap"
                    className="rounded-3"
                    src={cover}
                    top
                    height="400"
                    width="270"
                />
                <CardBody>
                    <CardTitle tag="h5">
                        {title}
                    </CardTitle>
                    <br></br>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {author}
                    </CardSubtitle>
                    <CardText>
                        {content}
                    </CardText>
                    <Button className="btn btn-dark">

                        Ver mas
                    </Button>
                </CardBody>
            </Card>))
            }
        </CardGroup>
    );
}

//{ title, author, content, cover }

export default consumirApiRecomendados;*/
