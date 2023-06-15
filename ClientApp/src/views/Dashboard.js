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
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    CardImg,
    CardSubtitle,
    CardText,
    Button,
} from "reactstrap";
// core components
import {
    dashboard24HoursPerformanceChart,
    dashboardEmailStatisticsChart,
    dashboardNASDAQChart,
} from "variables/charts.js";

//import CarruselNew from 'components/CarruselNew.js'
import Carrusel from 'components/CardComponentDashboard/Carrusel'
import Carrusel2 from 'components/CardComponentDashboard/Carrusel2'
import CardLibro from 'components/CardComponentDashboard/CardLibro'
import CardsAll from 'components/CardComponentDashboard/CardsAll'
import Destacados from 'components/CardComponentDashboard/libroRecomendadosDestacadosCard'
import RecomendadosLibros from 'components/CardComponentDashboard/RecomendadosDashboard'
import CarruselLibrosProximos from 'components/CardComponentDashboard/CarruselLibrosProximos'
//import CarruselNew  from "components/CardComponentDashboard/CarruselNew";



function Dashboard() {
    return (
        <>

            <div className="content">


                <Row>
                    <Col md="12" style={{ alignItems: 'center' }}>
                        <Carrusel2 />
                        <br></br>

                    </Col>

                </Row>

                <Row>
                    <Col md="3">
                        <Carrusel />


                    </Col>
                    <Col md="9">
                        <Card>

                            <CardBody>
                                <Row>
                                    <Col md="4">
                                        <div>
                                            <img src="https://www.lavanguardia.com/libros/images/posters/2007/5/9788478290857-image.jpg?v=1" height="410" width="350"></img>
                                        </div>
                                    </Col>
                                    <Col md="8">
                                        <div className="numbers" >
                                            <CardTitle>Fundamentos de sistemas de base de datos</CardTitle>

                                            <h4 className="card-description">Autor: Ramez Elmasri</h4>
                                            <br></br>

                                            <p className="card-description" style={{ textAlign: "justify" }}>Este libro introduce los conceptos fundamentales para modelar,
                                                utilizar e implementar sistemas y aplicaciones de bases de datos,  se presenta la terminolog&iacute;a b&aacute;sica y los principios del modelado conceptual de una base de datos.


                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>

                        </Card>
                    </Col>


                </Row>

                <Row>
                    <Col md="12">
                        <Card className="my-2"
                            color="dark"
                            inverse
                            style={{ borderRadius: "15px" }}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    Libros Nuevos
                                </CardTitle>
                            </CardBody>
                        </Card>
                        <br></br>
                    </Col>
                    <Col>
                        <CardsAll />
                    </Col>


                </Row>

                <Row>
                    <Col md="12">
                        <Card className="my-2"
                            color="dark"
                            inverse>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Libros M&aacute;s Populares
                                </CardTitle>
                            </CardBody>
                        </Card>
                        <br></br>
                    </Col>
                    <Col md="1">

                    </Col>
                    <Col md="10">
                        <CardLibro />
                    </Col>
                    <Col md="1">
                        <br></br>
                    </Col>
                </Row>

                <Row>
                    <Col md="12">
                        <br></br>
                        <Card className="my-2"
                            color="dark"
                            inverse>

                            <CardBody>
                                <CardTitle tag="h5">
                                    Libros Destacados
                                </CardTitle>
                            </CardBody>
                        </Card>
                        <br></br>
                    </Col>

                    <Col md="1">
                    </Col>
                    <Col md="10">
                        <Destacados />
                    </Col>
                    <Col md="1">

                    </Col>

                </Row>

                <Row>

                    <Col md="12">
                        <br></br>
                        <Card className="my-2"
                            color="dark"
                            inverse>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Libros Recomendados
                                </CardTitle>
                            </CardBody>
                        </Card>
                        <br></br>
                    </Col>

                    <Col md="12">
                        <RecomendadosLibros />
                    </Col>
                </Row>

                <Row>
                    <br></br>
                </Row>

                <Row>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">

                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-globe text-warning" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Vistas</p>
                                            <CardTitle tag="p">50</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="fas fa-sync-alt" /> Update Now
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-money-coins text-success" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Mora</p>
                                            <CardTitle tag="p">$ 2.00</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-calendar" /> Day a day
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-vector text-danger" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Advertencias</p>
                                            <CardTitle tag="p">23</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-clock" /> In the last hour
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col lg="3" md="6" sm="6">
                        <Card className="card-stats">
                            <CardBody>
                                <Row>
                                    <Col md="4" xs="5">
                                        <div className="icon-big text-center icon-warning">
                                            <i className="nc-icon nc-favourite-28 text-primary" />
                                        </div>
                                    </Col>
                                    <Col md="8" xs="7">
                                        <div className="numbers">
                                            <p className="card-category">Libros favoritos</p>
                                            <CardTitle tag="p">+5</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="fas fa-sync-alt" /> Update now
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        <br></br>
                        <Card className="my-2"
                            color="dark"
                            inverse>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Pr&oacute;ximos libros
                                </CardTitle>
                            </CardBody>
                        </Card>
                        <br></br>
                    </Col>
                    <Col md="9">
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md="4">
                                        <div>
                                            <img src="https://m.media-amazon.com/images/I/41xShlnTZTL._AC_UF1000,1000_QL80_.jpg" height="410" width="350"></img>
                                        </div>
                                    </Col>
                                    <Col md="8">
                                        <div className="numbers" >
                                            <CardTitle>Clean Code</CardTitle>
                                            <h4 className="card-description">Autor: Robert Cecil Martin</h4>
                                            <br></br>
                                            <p className="card-description" style={{ textAlign: "justify" }}>Filosof&iacute;a del desarrollo del software que re&uacute;ne un conjunto de ideas que pretenden conseguir que el coiacute;digo que implementemos est&eacute; bien estructurado,
                                                y sea comprensible, mantenible, extensible y  robusto.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <CarruselLibrosProximos/>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Dashboard;
