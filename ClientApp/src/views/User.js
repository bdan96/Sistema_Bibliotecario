import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../assets/css/Usuarios.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
//import EditarUsuario from "../components/Usuarios/EditarUsuario";


function User() {

    const url = 'http://localhost:5006/api/usuarios'

    const [data, setData] = useState([])

    useEffect(() => {
        getUsers();

    }, [])

    const getUsers = async () => {
        const users = await axios.get(url);
        setData(users.data);
    };



    const renderTable = () => {
        return data.map((usuario,index) => {
            return (
                <tr>
                    <td>{usuario.idUsuario}</td>
                    <td>{usuario.nombreUsuario}</td>
                    <td>{usuario.nombres}</td>
                    <td>{usuario.apellidos}</td>
                    <td>{usuario.correo}</td>
                    <td>
                        <input type="checkbox" checked={usuario.estado} />
                    </td>
                    <td>
                        <button className="btn btn-primary" title="Editar">
                            <span class="fas fa-pen"></span>
                        </button>
                        <button className="btn btn-danger" title="Eliminar">
                            <span class="fas fa-trash"></span>
                        </button>
                    </td>
                </tr>
            )
        })
    }

  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Usuarios</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                    <th>Id</th>
                    <th>Usuario</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Correo</th>
                    <th>Activo</th>
                    <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                  {renderTable()}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>         
        </Row>
      </div>
    </>
  );
}

export default User;
   