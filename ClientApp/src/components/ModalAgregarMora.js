import { useEffect, useState } from "react"
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloMora = {
    idMora: 0,
    idRegistro: "",
    idPrestamo: "",
    dias: "",
    totalMora: "",
    pagoMora: ""   
}
const ModalAgregarMora = ({ mostrarModal, setMostrarModal, guardarMora, editar, setEditar, editarMora }) => {

    const [mora, setMora] = useState(modeloMora);

    const actualizarDato = (e) => {

        console.log(e.target.name + " : " + e.target.value)
        setMora(
            {
                ...mora,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (mora.idMora == 0) {
            guardarMora(mora)
        }
        else {
            editarMora(mora)
        }
        setMora(modeloMora)
    }

    useEffect(() => {
        if (editar != null) {
            setMora(editar)
        } else {
            setMora(modeloMora)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {mora.idMora == 0 ? "Nueva Mora" : "Editar Mora"}

            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>

                        <Label>id mora</Label>
                        <Input name="idMora" onChange={(e) => actualizarDato(e)} value={mora.idMora} />
                        <Label>id registro</Label>
                        <Input name="idRegistro" onChange={(e) => actualizarDato(e)} value={mora.idRegistro} />
                        <Label>id prestamo</Label>
                        <Input name="idPrestamo" onChange={(e) => actualizarDato(e)} value={mora.idPrestamo} />
                        <Label>Dias</Label>
                        <Input name="dias" onChange={(e) => actualizarDato(e)} value={mora.dias} />
                        <Label>Total mora</Label>
                        <Input name="totalMora" onChange={(e) => actualizarDato(e)} value={mora.totalMora} />
                        <Label>Pago mora</Label>
                        <Input name="pagoMora" onChange={(e) => actualizarDato(e)} value={mora.pagoMora} />                       
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

export default ModalAgregarMora;
