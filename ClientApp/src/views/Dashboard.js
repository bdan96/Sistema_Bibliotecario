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
                        <br></br>
                    </Col>
                    <Col md="9">
                        <Card>

                            <CardBody>
                                <Row>
                                    <Col md="5">
                                        <div>
                                            <img src="https://pearson.es/images/default-source/espa%C3%B1a/fundamentos-de-sistemas-de-bases-de-datos_9788478290857.jpg?sfvrsn=6c7d04b2_0" height="410" width="350"></img>
                                        </div>
                                    </Col>
                                    <Col md="7">
                                        <div className="numbers">
                                            <CardTitle>La divina comedia</CardTitle>

                                            <h4 className="card-description">Autor: Danta alighieri</h4>
                                            <br></br>

                                            <p className="card-description">Descripcion del libro
                                                <br></br>
                                                <br></br>

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
                                    Libros Destacados
                                </CardTitle>
                            </CardBody>
                        </Card>
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
                                    Libros M&aacute;s Populares
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="3">
                        <Card className="rounded-3">
                            <CardImg
                                alt="Card image cap"
                                className="rounded-3"
                                src={require("assets/imgDashboard/Las48leyes.jpg")}
                                top
                                height="400"
                                width="270"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src={require("assets/imgDashboard/Las48leyes.jpg")}
                                top
                                height="400"
                                width="270"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="https://www.elsolucionario.org/wp-content/archivos/2012/08/fisica-universitaria-con-fisica-moderna-vol1-sears-11-edicion-elsolucionario-blogspot-com-.jpg"
                                top
                                height="400"
                                width="270"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src={require("assets/imgDashboard/Las48leyes.jpg")}
                                top
                                height="400"
                                width="270"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                <Row>
                    <Col md="12">
                        <Card className="my-2"
                            color="dark"
                            inverse>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Libros M&aacute;s Gustados
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="3">
                        <Card className="rounded-3">
                            <CardImg
                                alt="Card image cap"
                                className="rounded-3"
                                src={require("assets/imgDashboard/Las48leyes.jpg")}
                                top
                                height="400"
                                width="270"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src={require("assets/imgDashboard/Las48leyes.jpg")}
                                top
                                height="400"
                                width="270"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src="https://www.elsolucionario.org/wp-content/archivos/2012/08/fisica-universitaria-con-fisica-moderna-vol1-sears-11-edicion-elsolucionario-blogspot-com-.jpg"
                                top
                                height="400"
                                width="270"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card >
                            <CardImg
                                alt="Card image cap"
                                src={require("assets/imgDashboard/Las48leyes.jpg")}
                                top
                                height="400"
                                width="270"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
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
                                            <p className="card-category">Capacity</p>
                                            <CardTitle tag="p">150GB</CardTitle>
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
                                            <p className="card-category">Revenue</p>
                                            <CardTitle tag="p">$ 1,345</CardTitle>
                                            <p />
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="far fa-calendar" /> Last day
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
                                            <p className="card-category">Errors</p>
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
                                            <p className="card-category">Followers</p>
                                            <CardTitle tag="p">+45K</CardTitle>
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

                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Users Behavior</CardTitle>
                                <p className="card-category">24 Hours performance</p>
                            </CardHeader>
                            <CardBody>
                                <Line
                                    data={dashboard24HoursPerformanceChart.data}
                                    options={dashboard24HoursPerformanceChart.options}
                                    width={400}
                                    height={100}
                                />
                            </CardBody>
                            <CardFooter>
                                <hr />
                                <div className="stats">
                                    <i className="fa fa-history" /> Updated 3 minutes ago
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">Email Statistics</CardTitle>
                                <p className="card-category">Last Campaign Performance</p>
                            </CardHeader>
                            <CardBody style={{ height: "266px" }}>
                                <Pie
                                    data={dashboardEmailStatisticsChart.data}
                                    options={dashboardEmailStatisticsChart.options}
                                />
                            </CardBody>
                            <CardFooter>
                                <div className="legend">
                                    <i className="fa fa-circle text-primary" /> Opened{" "}
                                    <i className="fa fa-circle text-warning" /> Read{" "}
                                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                                    <i className="fa fa-circle text-gray" /> Unopened
                                </div>
                                <hr />
                                <div className="stats">
                                    <i className="fa fa-calendar" /> Number of emails sent
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="8">
                        <Card className="card-chart">
                            <CardHeader>
                                <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                                <p className="card-category">Line Chart with Points</p>
                            </CardHeader>
                            <CardBody>
                                <Line
                                    data={dashboardNASDAQChart.data}
                                    options={dashboardNASDAQChart.options}
                                    width={400}
                                    height={100}
                                />
                            </CardBody>
                            <CardFooter>
                                <div className="chart-legend">
                                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                                </div>
                                <hr />
                                <div className="card-stats">
                                    <i className="fa fa-check" /> Data information certified
                                </div>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>


            </div>
        </>
    );
}

export default Dashboard;
