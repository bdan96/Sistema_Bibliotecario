import React from 'react'
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

    return (
        <CardGroup>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src={require("img/Las48leyes.jpg")}
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
                        Libro sobre autoayuda
                    </CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    <Button className="btn btn-dark">

                        Ver mas
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardImg
                    alt="Card image cap"
                    src={require("img/hoyEsImportante.jpg")}
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
                    src={require("img/Mate4.jpg")}
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
            </Card>
         </CardGroup>
    );
}

export default CardLibro;