/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import ModalAgregarLibro from "components/ModalAgregarLibro";
import { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import {
    Button,
    Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input,
    Row, Table
} from "reactstrap";


function User() {

    const [instanciaLibros, setInstanciaLibro] = useState([])

    const [libros, setLibros] = useState([])

    const mostrarInstanciaLibros = async () => {
        axios.get('http://localhost:5006/api/instancialibro/lista')
            .then(response => {
                setLibros(response.data)
            })
            .catch(error => console.error(error));

    }

    const [editar, setEditar] = useState(null)

    
    useEffect(() => {
        mostrarInstanciaLibros();

        }, [])


    const [mostrarModal, setMostrarModal] = useState(false);

    const guardarLibro = async (libro) => {
        const response = await fetch("http://localhost:5006/api/instancialibro/guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(libro)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal);
            
        }
        mostrarInstanciaLibros();
    }

    const editarLibro = async (libro) => {
        const response = await fetch("http://localhost:5006/api/instancialibro/Editar", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(libro)
        })
        if (response.ok) {
            setMostrarModal(!mostrarModal);

        }
        mostrarInstanciaLibros();
    }

    const eliminarLibro = async (id) => {
        var respuesta = window.confirm("Desea eliminar el Libro?")
        if (!respuesta) {
            return
        }
        const response = await fetch("http://localhost:5006/api/instancialibro/Eliminar/" + id, {
            method: 'DELETE',
        })
        if (response.ok) {

        }
        mostrarInstanciaLibros();
    }

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
                              <CardTitle tag="h4">Gestion de Libros</CardTitle>
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
                                          <th>TITULO</th>
                                          <th>AUTOR</th>
                                          <th>IDIOMA</th>
                                          <th>GENERO</th>
                                          <th>ISBN</th>
                                          <th>CANTIDAD</th>
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
              <ModalAgregarLibro
                  mostrarModal={mostrarModal}
                  setMostrarModal={setMostrarModal}
                  guardarLibro={guardarLibro}
                  editar={editar}
                  setEditar={setEditar}
                  editarLibro={editarLibro} />
      </div>
    </>
  );
}

export default User;
