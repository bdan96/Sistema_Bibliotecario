import { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"
import toast, { Toaster } from 'react-hot-toast';

const modeloUsuario = {
    idUsuario: 0,
    idTipoUsuario: "",
    responsable: "",
    nombreUsuario: "",
    contra: "",
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    correo: "",
    estado: "",
    sexo: "",
    avatar: ""
}
const ModalAgregarUsuario = ({ mostrarModal, setMostrarModal, guardarUser, editar, setEditar, editarUsuarios }) => {

    const [libro, setLibro] = useState(modeloUsuario);

    const actualizarDato = (e) => {

        console.log(e.target.name + " : " + e.target.value)
        setLibro(
            {
                ...libro,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (libro.idUsuario == 0) {
            guardarUser(libro)
        }
        else {
            editarUsuarios(libro)
        }
        setLibro(modeloUsuario)
    }

    useEffect(() => {
        if (editar != null) {
            setLibro(editar)
        } else {
            setLibro(modeloUsuario)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {libro.idUsuario == 0 ? "Nuevo Usuario" : "Editar Usuario"}

            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>

                        <Label>codigo usuario</Label>
                        <Input name="idUsuario" onChange={(e) => actualizarDato(e)} value={libro.idUsuario} />
                        <Label>tipo usuario</Label>
                        <Input name="idTipoUsuario" onChange={(e) => actualizarDato(e)} value={libro.idTipoUsuario} />
                        <Label>user</Label>
                        <Input name="nombreUsuario" onChange={(e) => actualizarDato(e)} value={libro.nombreUsuario} />
                        <Label>nombre</Label>
                        <Input name="nombres" onChange={(e) => actualizarDato(e)} value={libro.nombres} />
                        <Label>apellidos</Label>
                        <Input name="apellidos" onChange={(e) => actualizarDato(e)} value={libro.apellidos} />
                        <Label>fecha nacimiento</Label>
                        <Input name="fechaNacimiento" onChange={(e) => actualizarDato(e)} value={libro.fechaNacimiento} />
                        <Label>correo</Label>
                        <Input name="correo" onChange={(e) => actualizarDato(e)} value={libro.correo} />

                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={enviarDatos}>Guardar</Button>{"   "}
                <Button color="danger" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
            <Toaster
                position='top-right'
                reverseOrder={false}
            />
        </Modal>

    )
}

export default ModalAgregarUsuario;
