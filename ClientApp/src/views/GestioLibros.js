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
// reactstrap components
import {
    Button,
    Card, CardBody, CardHeader, CardTitle, Col, Form, FormGroup, Input,
    Row, Table
} from "reactstrap";



const guardarLibro = async (libro) => {

}

function User() {

    const [instanciaLibros, setInstanciaLibro] = useState([])

    const mostrarInstanciaLibros = async () => {
        const response = await fetch("http://localhost:44436/api/instancialibro/Lista");

        if (response.ok) {
            const data = await response.json();
            setInstanciaLibro(data)
            console.log("datos recibidos")
        } else {
            console.log("error en la lista")
        }

    }

    useEffect(() => {

        mostrarInstanciaLibros();
    },[])


    const [mostrarModal, setMostrarModal] = useState(false);

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
                                                  instanciaLibros.map((item) => (
                                                      <tr key={item.idInstLibro}>
                                                          <td>{item.idInstLibro}</td>
                                                          <td>{item.titulo}</td>
                                                          <td>{item.autor}</td>
                                                          <td>{item.idGenero}</td>
                                                          <td>{item.isbn}</td>
                                                          <td>{item.logoLibro}</td>
                                                          <td>{item.CantidadInstanciaLibro}</td>
                                                          <td><Button color="primary">Editar</Button>{"   "}
                                                              <Button color="danger">Editar</Button>
                                                          </td>
                                                      </tr>
                                              ))
                                               
                                          )
                                      }
                                      
                                  </tbody>
                              </Table>
                          </CardBody>
                      </Card>
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Gestionar Libro</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="8">
                      <FormGroup>
                        <label>Ingrese ID del libro</label>
                        <Input
                          defaultValue="ID libro"
        
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                                      </Col>
                                      <Col className="update ml-auto mr-auto" md="4">
                                         
                                              <Button
                                                  className="btn-round"
                                                  color="primary"
                                              type="submit"
                                              size="lg"
                                              >
                                                  Buscar
                                              </Button>
                             
                                      </Col>
                             
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Titulo</label>
                        <Input
                          defaultValue=""
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Autor</label>
                        <Input
                          defaultValue=""
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>Genero</label>
                        <Input
                          defaultValue=""
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Idioma</label>
                        <Input
                          defaultValue="Australia"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>ISBN</label>
                                              <Input placeholder=""
                                                  type="text" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          type="textarea"
                          defaultValue="Oh so, your weak rhyme You doubt I'll bother, reading into it"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        size="lg"
                      >
                        ACTUALIZAR
                      </Button>
                      <Button
                        className="btn-round"
                        color="danger"
                        type="submit"
                        size="lg"
                       >
                       ELIMINAR
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
              </Row>
              <ModalAgregarLibro
                  mostrarModal={mostrarModal}
              setMostrarModal = {setMostrarModal}
              guardarLibro = {guardarLibro}/>
      </div>
    </>
  );
}

export default User;
