﻿

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, ListGroup, ListGroupItem, Tooltip, Label } from 'reactstrap';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function ModalCatalogoLibro({ toggle, modal, libro }) {

    let existencias = '';
    let color = 0;
    if (libro.CantidadInstanciaLibro === 0) {
        existencias = '  No hay copias disponibles'
        color = 1
    }
    else {
        existencias = libro.CantidadInstanciaLibro
        color = 0;
    }



    const idiomas = ['Ingles', 'Español']
    const categorias = ['Fantasia', 'Suspenso']

    const newPrestamo = () => {

        let prestamo = { usuario: 1, libro: 2 }

        axios.post('http://localhost:5006/api/prestamo', prestamo)
            .then(response => {
                Swal.fire(
                    response.data,
                    'El prestamo se ha realizado con exito',
                    'success'
                )
            })
            .catch(error =>
                Swal.fire({
                    icon: error,
                    title: 'Oops...',
                    text: 'No se pudo realizar la reserva',
                })
            );
    }

    const newReserva = () => {

        let reserva = { usuario: 1, libro: 3 }

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
                            <img className="img-fluid shadow-4 mx-auto d-block " src={libro.LogoLibro} alt="logo libro" width="65%" style={{
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
                                <ListGroup flush>
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
                                    <ListGroupItem >
                                        Copias disponible: &nbsp;
                                        <Label style={{ color: color ? 'red' : 'black' }}>
                                            {existencias}
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
                        onClick={() => {
                            toast.success("Se ha prestado el libro", {

                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff',
                                },
                            })
                        }}
                    >
                        Prestar
                    </Button>
                    {' '}
                    <Button style={{
                        margin: "5px"
                    }} color="primary" outline
                        onClick={newReserva}
                        onClick={() => {
                            toast.success("Se ha reservado el libro", {

                                style: {
                                    borderRadius: '10px',
                                    background: '#333',
                                    color: '#fff',
                                },
                            })
                        }}
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