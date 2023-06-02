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
import React from "react";

// reactstrap components
import { CardGroup ,Row, Col } from "reactstrap";
import ModalCatalogoLibro from "../components/CatalogoLibros/ModalCatalogoLibro";
import { books } from "../components/CatalogoLibros/DataCatalogoLibros.js"
import CardCatalogoLibro from "../components/CatalogoLibros/CardCatalogoLibro";

function Icons() { 

    console.log(books);

    //se retornan 4 componentes con el arreglo libro
    //-Falta mapear el arreglo para que genere los componentes de manera dinamico
    return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
                        <CardGroup>
                            <Col md="4">
                                <CardCatalogoLibro libro={books}></CardCatalogoLibro>
                            </Col>
                            <Col md="4">
                                <CardCatalogoLibro libro={books}></CardCatalogoLibro>
                            </Col>
                            <Col md="4">
                                <CardCatalogoLibro libro={books}></CardCatalogoLibro>
                            </Col>
                            <Col md="4">
                                <CardCatalogoLibro libro={books}></CardCatalogoLibro>
                            </Col>
                        </CardGroup>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
