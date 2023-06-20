﻿import { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
    Button,
    Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input,
    Row, Table
} from "reactstrap";

function User() {

    const [prestamos, setPrestamos] = useState([])

    const [reservas, setReservas] = useState([])

    const mostrarPrestamos = async () => {
        axios.get('http://localhost:5006/api/prestamoview/lista')
            .then(response => {
                setPrestamos(response.data)
            })
            .catch(error => console.error(error));
    }

    const mostrarReservas = async () => {
        axios.get('http://localhost:5006/api/reservalibro/lista')
            .then(response => {
                setReservas(response.data)
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        mostrarPrestamos();
        mostrarReservas();
    }, [])


    const formatDate = (string) => {
        let options = { year: 'numeric', month: 'long', day: 'numeric' };
        let fecha = new Date(string).toLocaleDateString("es-PE", options);
        let hora = new Date(string).toLocaleTimeString();
        return fecha + " | " + hora
    }


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Prestamos</CardTitle>

                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr style={{ textAlign: "center" }}>
                                            <th>ID</th>
                                            <th>USUARIO</th>
                                            <th>LIBRO</th>
                                            
                                            <th>FECHA DE PRESTAMO</th>
                                            <th>FECHA DE ENTREGA</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: "center" }}>
                                        {
                                            (
                                                prestamos.map((item) => (
                                                    <tr key={item}>
                                                        <td>{item.idPrestamo}</td>
                                                        <td>{item.idUsuario}</td>
                                                        <td>{item.idInvInst}</td>
                                                        <td>{formatDate(item.fechaPrestamo)}</td>
                                                        <td>{formatDate(item.fechaEntrega)}</td>
                                                        
                                                        <td><Button color="primary" >Editar</Button>{"   "}
                                                        </td>
                                                    </tr>
                                                ))
                                            )
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Reservas</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr style={{ textAlign: "center" }}>
                                            <th>ID</th>
                                            <th>USUARIO</th>
                                            <th>LIBRO</th>
                                            <th>FECHA VENCIMIENTO</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: "center" }}>
                                        {
                                            (
                                                reservas.map((item) => (
                                                    <tr key={item}>
                                                        <td>{item.idreservalibro}</td>
                                                        <td>{item.idUsuario}</td>
                                                        <td>{item.idInvInst}</td>
                                                        <td>{item.fechaVencimientoreserva}</td>
                                                        <td><Button color="primary" >Editar</Button>{"   "}
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

