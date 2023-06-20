
import ModalAgregarLibro from "components/ModalAgregarLibro";
import { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
    Button,
    Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input,
    Row, Table
} from "reactstrap";
import Swal from 'sweetalert2';


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

    const newDevolverLibro = ({ item }) => {

        const libro10 = { item }

        let prestamo = { usuario: 1, id: libro10.idPrestamo }

        axios.post('http://localhost:5006/api/gestionprestamosreservasactivas', prestamo)
            .then(response => {
                Swal.fire(
                    response.data,
                    'El libro se ha devuelto con exito',
                    'success'
                )
            })
            .catch(error =>
                Swal.fire({
                    icon: error,
                    title: 'Oops...',
                    text: 'No se pudo realizar la devolucion',
                })
            );
    }

    /*const newReserva = () => {

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
    }*/


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


                                                        <td><Button color="primary" onClick={newDevolverLibro}>Devolver</Button>{"   "}

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
                                                        <td>{formatDate(item.fechaVencimientoreserva)}</td>

                                                        <td><Button color="primary" >Entregar</Button>{"   "}

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
