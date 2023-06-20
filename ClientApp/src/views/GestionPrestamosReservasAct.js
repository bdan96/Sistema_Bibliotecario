
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

    const [reservaNue, setReservaNue] = useState([])

    const mostrarPrestamos = async () => {
        axios.get('http://localhost:5006/api/gestionprestamosreservasactivas/lista')
            .then(response => {
                setLibros(response.data)
            })
            .catch(error => console.error(error));

    }

    const mostrarReservas = async () => {
        axios.get('http://localhost:5006/api/gestionprestamosreservasactivas/listareserva')
            .then(response => {
                setReservaNue(response.data)
            })
            .catch(error => console.error(error));

    }




    const [editar, setEditar] = useState(null)


    useEffect(() => {
        mostrarPrestamos();
        mostrarReservas();

    }, [])


    const [mostrarModal, setMostrarModal] = useState(false);

    const enviarDatos = (libro) => {
        setEditar(libro)
        setMostrarModal(!mostrarModal)
    }

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
                                <CardTitle tag="h4">Prestamos activos</CardTitle>
                                {/*<Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                    size="lg"
                                    onClick={() => setMostrarModal(!mostrarModal)}
                                >
                                    Agregar libro
                                </Button>*/}
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr style={{ textAlign: "center" }}>
                                            <th>ID</th>
                                            <th>NOMBRE</th>
                                            <th>APELLIDO</th>
                                            <th>TITULO LIBRO</th>
                                            <th>FECHA PRESTAMO</th>
                                            <th>FECHA VENCIMIENTO PRESTAMO</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: "center" }}>
                                        {
                                            (
                                                libros.map((item) => (
                                                    <tr key={item.idPrestamo}>
                                                        <td>{item.idPrestamo}</td>
                                                        <td>{item.idUsuarioNavigation.nombres}</td>
                                                        <td>{item.idUsuarioNavigation.apellidos}</td>
                                                        <td>{item.idInvInstNavigation.idInstLibroNavigation.tituloLibro}</td>
                                                        <td>{formatDate(item.fechaPrestamo)}</td>
                                                        <td>{formatDate(item.fechaEntrega)}</td>


                                                        <td><Button color="primary">Devolver</Button>{"   "}

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
                                {/*<Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                    size="lg"
                                    onClick={() => setMostrarModal(!mostrarModal)}
                                >
                                    Agregar libro
                                </Button>*/}
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr style={{ textAlign: "center" }}>
                                            <th>ID</th>
                                            <th>NOMBRE</th>
                                            <th>APELLIDO</th>
                                            <th>CORREO</th>

                                            <th>FECHA VENCIMIENTO</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: "center" }}>
                                        {
                                            (
                                                reservaNue.map((item) => (
                                                    <tr key={item.idreservalibro}>
                                                        <td>{item.idreservalibro}</td>
                                                        <td>{item.idUsuarioNavigation.nombres}</td>
                                                        <td>{item.idUsuarioNavigation.apellidos}</td>
                                                        <td>{item.idUsuarioNavigation.correo}</td>
                                                        <td>{item.fechaVencimientoreserva}</td>

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
