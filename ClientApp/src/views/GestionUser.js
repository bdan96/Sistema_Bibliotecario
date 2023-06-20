import ModalAgregarUsuario from "components/ModalAgregarUsuario";
import { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
    Button,
    Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input,
    Row, Table
} from "reactstrap";

function GestionUser() {

    const [instanciaLibros, setInstanciaLibro] = useState([])

    const [usuarios, setUsuarios] = useState([])

    const mostrarUsuarios = async () => {
        axios.get('http://localhost:5006/api/hacerusuario/lista')
            .then(response => {
                setUsuarios(response.data)
            })
            .catch(error => console.error(error));

    }

    const [editar, setEditar] = useState(null)


    useEffect(() => {
        mostrarUsuarios();

    }, [])


    const [mostrarModal, setMostrarModal] = useState(false);

    const guardarUser = async (user) => {
        const response = await fetch("http://localhost:5006/api/instancialibro/guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal);

        }
        mostrarUsuarios();
    }

    const editarUsuarios = async (user) => {
        const response = await fetch("http://localhost:5006/api/instancialibro/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal);

        }
        mostrarUsuarios();
    }

    const eliminarUser = async (id) => {
        var respuesta = window.confirm("Desea eliminar el Usuario?")
        if (!respuesta) {
            return
        }
        const response = await fetch("http://localhost:5006/api/instancialibro/Eliminar/" + id, {
            method: 'DELETE',
        })
        if (response.ok) {

        }
        mostrarUsuarios();
    }

    const enviarDatos = (user) => {
        setEditar(user)
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
                                <CardTitle tag="h4">Gestion de Usuarios</CardTitle>
                                <Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                    size="lg"
                                    onClick={() => setMostrarModal(!mostrarModal)}
                                >
                                    Agregar Usuario
                                </Button>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr style={{ textAlign: "center" }}>
                                            <th>ID</th>
                                            <th>TIPO USER</th>
                                            <th>USER</th>
                                            <th>NOMBRE</th>
                                            <th>APELLIDOS</th>
                                            <th>FECHA NACIMIENTO</th>
                                            <th>CORREO</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ textAlign: "center" }}>
                                        {
                                            (
                                                usuarios.map((item) => (
                                                    <tr key={item.idUsuario}>
                                                        <td>{item.idUsuario}</td>
                                                        <td>{item.idTipoUsuario}</td>
                                                        <td>{item.nombreUsuario}</td>
                                                        <td>{item.nombres}</td>
                                                        <td>{item.apellidos}</td>
                                                        <td>{formatDate(item.fechaNacimiento)}</td>
                                                        <td>{item.correo}</td>


                                                        <td><Button color="primary" onClick={() => enviarDatos(item)}>Editar</Button>{"   "}
                                                            <Button color="danger" onClick={() => eliminarUser(item.idUsuario)}>Eliminar</Button>
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
                <ModalAgregarUsuario
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarUser={guardarUser}
                    editar={editar}
                    setEditar={setEditar}
                    editarUsuarios={editarUsuarios} />
            </div>
        </>
    );
}

export default GestionUser;
