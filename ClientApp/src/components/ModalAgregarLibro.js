import { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloLibro = {
    idInstLibro: 0,
    idLibro: "",
    tituloLibro: "",
    autorLibro: "",
    idGenero: "",
    idIdioma: "",
    isbn: "",
    logoLibro: "",
    cantidadInstanciaLibro: ""
}
const ModalAgregarLibro = ({mostrarModal, setMostrarModal, guardarLibro, editar, setEditar, editarLibro}) => {

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
        else {
            editarLibro(libro)
        }
        setLibro(modeloLibro)
    }

    useEffect(() => {
        if (editar != null) {
            setLibro(editar)
        } else {
            setLibro(modeloLibro)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {libro.idInstLibro==0? "Nuevo Libro" : "Editar Libro"}
            
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        
                        <Label>codigo libro</Label>
                        <Input name="idLibro" onChange={(e) => actualizarDato(e)} value={libro.idLibro} />
                        <Label>Titulo</Label>
                        <Input name="tituloLibro" onChange={(e) => actualizarDato(e)} value={libro.tituloLibro} />
                        <Label>Autor</Label>
                        <Input name="autorLibro" onChange={(e) => actualizarDato(e)} value={libro.autorLibro} />
                        <Label>ISBN</Label>
                        <Input name="isbn" onChange={(e) => actualizarDato(e)} value={libro.isbn} />
                        <Label>Idioma</Label>
                        <Input name="idIdioma" onChange={(e) => actualizarDato(e)} value={libro.idIdioma} />
                        <Label>Genero</Label>
                        <Input name="idGenero" onChange={(e) => actualizarDato(e)} value={libro.idGenero} />
                        <Label>Imagen (URL)</Label>
                        <Input name="logoLibro" onChange={(e) => actualizarDato(e)} value={libro.logoLibro} />
                        <Label>Cantidad</Label>
                        <Input name="cantidadInstanciaLibro" onChange={(e) => actualizarDato(e)} value={libro.cantidadInstanciaLibro} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={enviarDatos}>Guardar</Button>{"   "}
                <Button color="danger" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalAgregarLibro;