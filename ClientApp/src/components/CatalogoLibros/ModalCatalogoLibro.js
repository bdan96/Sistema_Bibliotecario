

import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Col, Row, Card,CardBody,CardFooter,CardHeader,CardText,CardTitle,ListGroup,ListGroupItem} from 'reactstrap';
import axios from 'axios'

function ModalCatalogoLibro({ toggle,modal, libro}) {


    const idiomas = ['Ingles', 'Español']
    const categorias = ['Fantasia', 'Suspenso']

    const newPrestamo = () => {

        let prestamo = {usuario:1, libro: 1}

        //fetch("/api/prestamo", {

        //    method: "POST",
        //    body: JSON.stringify(prestamo)

        //})
        // .then((response)=> response.json())
        //    .then((json) => console.log(json))
        //.catch((error) => console.log(error))

        axios.post('http://localhost:5006/api/prestamo',prestamo)
            .then(response => {
                alert(response.data)
            })
            .catch(error => console.error(error));
    }


    return (
        <div>
            <Modal size ='xl' isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Descripción de libro </ModalHeader>
                <ModalBody className="p-2 bg-dark my-1">
                    <Row >
                        <Col
                            xs="6">
                            <img className="img-fluid shadow-4 mx-auto d-block " src={libro.LogoLibro} alt="logo libro" width="65%"  style={{
                                height: 400,
                                alignContent: "center"
                            }}  ></img>
                        </Col>
                        <Col
                            xs="5">
                            <br></br>
                            <br></br>
                            <Card body>
                                <CardTitle tag="h5">
                                    Titulo: {libro.TituloLibro}
                                </CardTitle>
                                <ListGroup flush tag = "h6">
                                    <ListGroupItem>
                                        Autor: {libro.AutorLibro}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Idiomas: {idiomas[libro.IdIdioma]}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        categorias: {categorias[libro.IdGenero]}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        ISBN: {libro.Isbn}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Copias disponible: {libro.CantidadInstanciaLibro}
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button style={{
                        margin: "5px",

                    }} color="success" outline
                        onClick={newPrestamo}
                    >
                        Prestar
                    </Button>
                    {' '}
                    <Button style={{
                        margin: "5px"
                    }} color="primary" outline>
                        Reservar
                    </Button>
                    {' '}
                    <Button color="danger" outline onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default ModalCatalogoLibro;