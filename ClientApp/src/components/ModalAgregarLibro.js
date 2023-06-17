import { useState } from "react"
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"
import toast, { Toaster } from 'react-hot-toast';

const modeloLibro = {
    idInstLibro: 0,
    idLibro: 0,
    titulo: "",
    autor: "",
    genero: "",
    idioma: "",
    isbn: "",
    logo: "",
    cantidad: 0
}
const ModalAgregarLibro = ({ mostrarModal, setMostrarModal, guardarLibro }) => {

    const [libro, setLibro] = useState(modeloLibro);

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

        if (libro.idInstLibro == 0) {
            guardarLibro(libro)
        }
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                Nuevo Libro
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>ID libro</Label>
                        <Input name="idInstLibro" onChange={(e) => actualizarDato(e)} value={libro.idInstLibro} />
                        <Label>codigo libro</Label>
                        <Input name="idLibro" onChange={(e) => actualizarDato(e)} value={libro.idLibro} />
                        <Label>Titulo</Label>
                        <Input name="titulo" onChange={(e) => actualizarDato(e)} value={libro.titulo} />
                        <Label>Autor</Label>
                        <Input name="autor" onChange={(e) => actualizarDato(e)} value={libro.autor} />
                        <Label>ISBN</Label>
                        <Input name="isbn" onChange={(e) => actualizarDato(e)} value={libro.isbn} />
                        <Label>Idioma</Label>
                        <Input name="idioma" onChange={(e) => actualizarDato(e)} value={libro.idioma} />
                        <Label>Genero</Label>
                        <Input name="genero" onChange={(e) => actualizarDato(e)} value={libro.genero} />
                        <Label>Imagen (URL)</Label>
                        <Input name="logo" onChange={(e) => actualizarDato(e)} value={libro.logo} />
                        <Label>Cantidad</Label>
                        <Input name="cantidad" onChange={(e) => actualizarDato(e)} value={libro.cantidad} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={enviarDatos}
                    >Guardar</Button>{"   "}
                <Button color="danger" onClick={() => setMostrarModal(!mostrarModal)}>Cerrar</Button>
            </ModalFooter>
            <Toaster
                position='top-right'
                reverseOrder={false}
            />
        </Modal>

    )
}

export default ModalAgregarLibro;