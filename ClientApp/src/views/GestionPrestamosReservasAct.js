
import ModalAgregarLibro from "components/ModalAgregarLibro";
import { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
    Button,
    Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input,
    Row, Table
} from "reactstrap";


function GestionPrestamosReservasActivos() {

    const [libros, setLibros] = useState([])

    const mostrarPrestamos = async () => {
        axios.get('http://localhost:5006/api/gestionprestamosreservasactivas/lista')
            .then(response => {
                setLibros(response.data)
            })
            .catch(error => console.error(error));

    }




    const [editar, setEditar] = useState(null)


    useEffect(() => {
        mostrarPrestamos();

    }, [])


    const [mostrarModal, setMostrarModal] = useState(false);

    const enviarDatos = (libro) => {
        setEditar(libro)
        setMostrarModal(!mostrarModal)
    }


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Prestamos activos</CardTitle>
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
                                            <th>IDUSUARIO</th>
                                            <th>USUSARIO</th>
                                            <th>FECHA ENTREGA</th>
                                            <th>FECHA PRESTAMOS</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (
                                                libros.map((item) => (
                                                    <tr key={item.idPrestamo}>
                                                        <td>{item.idPrestamo}</td>
                                                        <td>{item.idUsuario}</td>
                                                        <td>{item.idUsuario}</td>
                                                        <td>{item.fechaEntrega}</td>
                                                        <td>{item.fechaPrestamo}</td>

                                                        <td><Button color="primary" onClick={() => enviarDatos(item)}>Devolver</Button>{"   "}

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
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Reservas activas</CardTitle>
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
                                            <th>IDUSUARIO</th>
                                            <th>USUSARIO</th>
                                            <th>FECHA ENTREGA</th>
                                            <th>FECHA PRESTAMOS</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (
                                                libros.map((item) => (
                                                    <tr key={item.idPrestamo}>
                                                        <td>{item.idPrestamo}</td>
                                                        <td>{item.idUsuario}</td>
                                                        <td>{item.idUsuario}</td>
                                                        <td>{item.fechaEntrega}</td>
                                                        <td>{item.fechaPrestamo}</td>

                                                        <td><Button color="primary" onClick={() => enviarDatos(item)}>Entregar</Button>{"   "}

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
                <ModalAgregarLibro
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    
                    editar={editar}
                    setEditar={setEditar}
                     />
            </div>
        </>
    );
}

export default GestionPrestamosReservasActivos;
