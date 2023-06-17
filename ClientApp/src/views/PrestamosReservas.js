import { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
    Button,
    Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input,
    Row, Table
} from "reactstrap";

function User() {

    const [prestamos, setPrestamos] = useState([])

    const mostrarPrestamos = async () => {
        const response = await fetch("http://localhost:44436/api/prestamo/lista");
        if (response.ok) {
            const data = await response.json();
            setPrestamos(data)
            console.log("datos recibidos")
        } else {
            console.log("error en la lista")
        }
    }

    useEffect(() => {
        mostrarPrestamos();
    },[])

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
                                                prestamos.map((item) => (
                                                    <tr key={item.idInstLibro}>
                                                        <td>{item.idInstLibro}</td>
                                                        <td>{item.tituloLibro}</td>
                                                        <td>{item.autorLibro}</td>
                                                        <td>{item.idIdioma}</td>
                                                        <td>{item.idGenero}</td>
                                                        <td>{item.isbn}</td>

                                                        <td>{item.cantidadInstanciaLibro}</td>
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

