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
import React, { useEffect, useState } from "react";
import axios from "axios";

// reactstrap components
import { CardGroup ,Row, Col, Navbar,NavbarBrand, Form, FormGroup,Input, Label, Button, NavbarText,Container, Card, CardBody, CardHeader} from "reactstrap";
import ModalCatalogoLibro from "../components/CatalogoLibros/ModalCatalogoLibro";
import { books } from "../components/CatalogoLibros/DataCatalogoLibros.js"
import CardCatalogoLibro from "../components/CatalogoLibros/CardCatalogoLibro";



function Icons() {

    const [libros, setLibros] = useState([]);
    const [librosCard, setLibrosCard] = useState([]);
    const [librosOrdenar, setLibrosOrdenar] = useState([]);
    const [librosFiltrados, setLibrosFiltrados] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [opcionSelect, setOpcionSelect] = useState('');
    const [opcionFilter, setOpcionFilter] = useState('');


    //funcion para filtrar la busqueda
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = librosCard.filter((elemento) => {

            if (elemento.TituloLibro.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.AutorLibro.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || parseInt(elemento.Isbn).toString().includes(terminoBusqueda)) {
                return elemento
            }
        })
        setLibros(resultadosBusqueda)
    } 
    
    //funcion para filtrar por genero
    const filtrarGenero = (terminofiltrado) => {
        var resultadoFiltrado = librosFiltrados.filter((elemento) => {

            if (parseInt(elemento.IdGenero).toString().includes(terminofiltrado)) {
                return elemento
            }
        })

        setLibros(resultadoFiltrado)

    }

    //funcion para ordenar el arreglo
    const ordenar = (terminoOrden) => {
        var arregloOrdenado = []
        console.log(terminoOrden)
        switch (terminoOrden) {
            case "1": arregloOrdenado = libros.sort((a,b)=>a.TituloLibro.localeCompare(b.TituloLibro)); break;
            case "2": arregloOrdenado = libros.sort((a, b) => a.TituloLibro.localeCompare(b.TituloLibro)).reverse(); break;
            default: arregloOrdenado = libros 
        }

            setLibros(arregloOrdenado)
        
         
    }

    //funcion que guarda en la busqueda el valor del input de entrada
    const handleChange = e => {
            setBusqueda(e.target.value)
            filtrar(e.target.value)
    }

    //funcion que guarda la seleccion del input select de ordenado
    const handleChangeSelect = (eventoSelect) => {
        setOpcionSelect(eventoSelect.target.value)
        ordenar(eventoSelect.target.value)
        
    }

    //funcion que guarda la seleccion del input select de filtrado
    const handleChangeFilter = (eventoFilter) => {
        setOpcionFilter(eventoFilter.target.value)
        filtrarGenero(eventoFilter.target.value)

    }

    useEffect(() => {
        //returnLibros()
        axios.get('http://localhost:5006/api/instancialibro/lista')
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.error(error));


        setLibros(books)
        setLibrosCard(books)
        setLibrosOrdenar(books)
        setLibrosFiltrados(books)
    }, [])
  
    //se retornan 1 componente por cada libro
    //-Falta conectar con la DB
    return (
    <>
            <div className="content">

                <Row>
                    <Col >
                        <Card
                        className="my-2"
                        color="dark"
                        inverse
                       
                    >
                        <CardHeader tag="h5">
                            Busqueda y ordenado
                        </CardHeader>
                        <CardBody>
                                <Row>
                                    <Col
                                      
                                        sm="4"
                                        xs="6"
                                    >
                                        <Label tag="h6">
                                            Busqueda
                                        </Label>
                                        <Input
                                            className="float-right"
                                            value={busqueda}
                                            placeholder="Buscar"
                                            type="text"
                                            onChange={handleChange}

                                        />
                                    </Col>
                                    <Col
                                        sm="4"
                                        xs="6"
                                    >
                                        <Label tag="h6">Ordenado</Label>
                                        <Input type="select" value={opcionSelect} onChange={handleChangeSelect}>
                                            <option value ="">Ordenar por </option>
                                            <option value="1">Nombres [A-Z]</option>
                                            <option value="2">Nombres [Z-A]</option>

                                        </Input>
                                    </Col>
                                    <Col
                                        sm="4"
                                    >
                                        <Label tag="h6">Filtrado por categorias</Label>
                                        <Input type="select" value={opcionFilter} onChange={handleChangeFilter}>
                                            <option value="">Filtrar por categorias</option>
                                            <option value="0">Fantasia</option>
                                            <option value="1">Suspenso</option>
                                        </Input>
                                    </Col>
                                </Row>
                        </CardBody>
                    </Card>   
                    </Col>
                </Row>
                     <br></br>
                <Row>
                     <Col md="12">
                        <CardGroup>
                          
                            {libros.map((item) => (
                                <Col md="4">
                                    <CardCatalogoLibro libro={item}></CardCatalogoLibro>
                                </Col> 
                            ))}

                        </CardGroup>
                    </Col>
                </Row>
             </div>
    </>
  );
}

export default Icons;
