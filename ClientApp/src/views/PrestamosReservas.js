import { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
    Button,
    Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input,
    Row, Table
} from "reactstrap";

function User() {



    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Prestamos</CardTitle>
                                <Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                    size="lg"
                                    onClick={() => setMostrarModal(!mostrarModal)}
                                >
                                    Agregar libro
                                </Button>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>ID</th>
                                            <th>USUARIO</th>
                                            <th>AUTOR</th>
                                            <th>LIBRO</th>
                                            <th>FECHA DE ENTREGA</th>
                                            <th>FECHA DE PRESTAMO</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (
                                                libros.map((item) => (
                                                    <tr key={item.idInstLibro}>
                                                        <td>{item.idInstLibro}</td>
                                                        <td>{item.tituloLibro}</td>
                                                        <td>{item.autorLibro}</td>
                                                        <td>{item.idIdioma}</td>
                                                        <td>{item.idGenero}</td>
                                                        <td>{item.isbn}</td>

                                                        <td>{item.cantidadInstanciaLibro}</td>
                                                        <td><Button color="primary" onClick={() => enviarDatos(item)}>Editar</Button>{"   "}
                                                            <Button color="danger" onClick={() => eliminarLibro(item.idInstLibro)}>Eliminar</Button>
                                                        </td>
                                                    </tr>
                                                ))

                                            )
                                        }

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
            </div>
        </>
    )
}

export default User;

