

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, ListGroup, ListGroupItem, Tooltip, Label } from 'reactstrap';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function ModalCatalogoLibro({ toggle, modal, libro }) {

    const [existencia, setExistencia] = useState('');
    let color = 0;
    useEffect(() => {

        if (libro.cantidadInstanciaLibro === 0) {
            setExistencia('No hay copias disponibles')
            color = 1
        }
        else {
            setExistencia(libro.cantidadInstanciaLibro)
            color = 0;
        }
    }, [])





    const idiomas = ['Ingles', 'Español']
    const categorias = ['', 'Novela historica', 'Ciencia ficcion', 'Realismo magico lat', 'No-ficcion', 'Programacion']

    const newPrestamo = () => {

        let prestamo = { usuario: 1, libro: libro.idInstLibro }

        axios.post('http://localhost:5006/api/prestamo', prestamo)
            .then(response => {
                Swal.fire(
                    response.data,
                    'El prestamo se ha realizado con exito',
                    'success'
                )
                setExistencia(existencia - 1)
            })
            .catch(error =>
                Swal.fire({
                    icon: error,
                    title: 'Oops...',
                    text: 'No se pudo realizar el prestamo',
                })
            );
    }

    const newReserva = () => {

        let reserva = { usuario: 1, libro: libro.idInstLibro }

        axios.post('http://localhost:5006/api/reserva', reserva)
            .then(response => {
                Swal.fire(
                    response.data,
                    'La reserva se ha realizado con exito',
                    'success'
                )
            })
            .catch(error =>
                Swal.fire({
                    icon: error,
                    title: 'Oops...',
                    text: 'No se pudo realizar el prestamo',
                })
            );
    }


    return (
        <div>
            <Modal size='xl' isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Descripción de libro </ModalHeader>
                <ModalBody className="p-2 bg-dark my-1">
                    <Row >
                        <Col
                            xs="6">
                            <img className="img-fluid shadow-4 mx-auto d-block " src={libro.logoLibro} alt="logo libro" width="65%" style={{
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
                                    Titulo: {libro.tituloLibro}
                                </CardTitle>
                                <ListGroup flush>
                                    <ListGroupItem>
                                        Autor: {libro.autorLibro}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Idiomas: {idiomas[libro.idIdioma]}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Genero: {categorias[libro.idGenero]}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        ISBN: {libro.isbn}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Copias disponible: &nbsp;
                                        <Label style={{ color: color ? 'red' : 'black' }}>
                                            {existencia}
                                        </Label>
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
                        disabled={libro.CantidadInstanciaLibro === 0}

                    >
                        Prestar
                    </Button>
                    {' '}
                    <Button style={{
                        margin: "5px"
                    }} color="primary" outline
                        onClick={newReserva}

                    >
                        Reservar
                    </Button>
                    {' '}
                    <Button color="danger" outline onClick={toggle} id={`idlibro`}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
            <Toaster
                position='top-right'
                reverseOrder={false}
            />
        </div>
    );
}
export default ModalCatalogoLibro;