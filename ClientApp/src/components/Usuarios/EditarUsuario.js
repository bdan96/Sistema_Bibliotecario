import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Col, Row, Card,CardBody,CardFooter,CardHeader,CardText,CardTitle,ListGroup,ListGroupItem} from 'reactstrap';
import axios from 'axios'

function EditarUsuario({ toggle, modal, usuario }) {


   


    return (
        <div>
            <Modal size ='xl' isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Editar Usuario </ModalHeader>
                <ModalBody className="p-2 bg-dark my-1">
                    <Row >
                        <Col >
                           
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                   
                    <Button style={{
                        margin: "5px"
                    }} color="primary" outline>
                        Guardar
                    </Button>
                    {' '}
                    <Button color="danger" outline onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
export default EditarUsuario;   