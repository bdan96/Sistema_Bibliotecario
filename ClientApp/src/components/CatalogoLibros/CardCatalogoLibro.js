
import { Card, CardBody, CardImg, CardTitle, Button, CardFooter } from 'reactstrap'
import ModalCatalogoLibro from './ModalCatalogoLibro';
import { useState } from 'react';

const CardCatalogoLibro = (props) => {

    //se reciben los libros y se tiene el hook de estado del modal
    const { libro } = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    //se retorna un card que tiene la imagen y el titulo del libro
    //- falta destructurar el objeto
    //- cambiar el array por un objeto
    return (
        <>
            <Card className="text-center" onClick={toggle} >
                <CardImg
                    alt="Card image cap"
                    src={libro.logoLibro}
                    style={{
                        height: 400
                    }}
                    width="100%"


                />
                <CardBody>
                    <CardTitle tag="h5">
                        {libro.tituloLibro}
                    </CardTitle>
                   
                </CardBody>
            </Card>
            { /*Este es el componente que se muestra cuando se clickea en el card*/}
            <ModalCatalogoLibro toggle={toggle} modal={modal} libro={libro}></ModalCatalogoLibro>

        </>
        
    )
}
export default CardCatalogoLibro;