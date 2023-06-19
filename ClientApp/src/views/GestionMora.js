import ModalAgregarMora from "components/ModalAgregarMora";
import { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
    Button,
    Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input,
    Row, Table
} from "reactstrap";


function GestionMora() {

    const [instanciaLibros, setInstanciaLibro] = useState([])

    const [moras, setMoras] = useState([])

    const mostrarMoras = async () => {
        axios.get('http://localhost:5006/api/mora/lista')
            .then(response => {
                setMoras(response.data)
            })
            .catch(error => console.error(error));

    }




    const [editar, setEditar] = useState(null)


    useEffect(() => {
        mostrarMoras();

    }, [])


    const [mostrarModal, setMostrarModal] = useState(false);

    const guardarMora = async (mora) => {
        const response = await fetch("http://localhost:5006/api/mora/guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(mora)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal);

        }
        mostrarMoras();
    }

    const editarMora = async (mora) => {
        const response = await fetch("http://localhost:5006/api/mora/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(mora)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal);

        }
        mostrarMoras();
    }

    const eliminarMora = async (id) => {
        var respuesta = window.confirm("Desea eliminar la Mora?")
        if (!respuesta) {
            return
        }
        const response = await fetch("http://localhost:5006/api/mora/Eliminar/" + id, {
            method: 'DELETE',
        })
        if (response.ok) {

        }
        mostrarMoras();
    }

    const enviarDatos = (mora) => {
        setEditar(mora)
        setMostrarModal(!mostrarModal)
    }


    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Gestion de Moras</CardTitle>
                                <Button
                                    className="btn-round"
                                    color="primary"
                                    type="submit"
                                    size="lg"
                                    onClick={() => setMostrarModal(!mostrarModal)}
                                >
                                    Agregar Mora
                                </Button>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>ID</th>
                                            <th>USUARIO</th>
                                            <th>DIAS</th>
                                            <th>TOTAL_MORA</th>
                                            <th>ACCIONES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            (
                                                moras.map((item) => (
                                                    <tr key={item.idMora}>
                                                        <td>{item.idMora}</td>
                                                        <td>{item.idRegistro}</td>
                                                        <td>{item.dias}</td>
                                                        <td>{item.totalMora}</td>
                                                        <td>{item.pagoMora}</td>

                                                        <td><Button color="primary" onClick={() => enviarDatos(item)}>Editar</Button>{"   "}
                                                            <Button color="danger" onClick={() => eliminarMora(item.idMora)}>Eliminar</Button>
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
                <ModalAgregarMora
                    mostrarModal={mostrarModal}
                    setMostrarModal={setMostrarModal}
                    guardarMora={guardarMora}
                    editar={editar}
                    setEditar={setEditar}
                    editarLMora={editarMora} />
            </div>
        </>
    );
}

export default GestionMora;