import React  from 'react';
import { Slideshow, Slide, TextoSlide } from './Slideshow.js'
import 'assets/css/estilosCarrusel.css';
import styled from 'styled-components';
import img1 from 'assets/imgDashboard/Las48leyes.jpg';
import img2 from 'assets/imgDashboard/Las-48-leyes-del-poder.jpg';
import img3 from 'assets/imgDashboard/hoy-es-importante.jpg';
import img4 from 'assets/imgDashboard/senior-de-los-anillos.png';

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;       
`;

const CarruselNew = () => {


    
    
    return (
        <>
            <Titulo>Test de carrusel</Titulo>
            <p>Hola mundo</p>
        </>
    )
    /*return (
        <>
            <Titulo>Productos Destacados</Titulo>
            <Slideshow controles={true}>
                <Slide>
                    <a href="https://www.twitter.com">
                        <img src={img1} alt="" />
                    </a>
                    <TextoSlide>
                        <p>15% descuento en productos Apple</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="https://www.twitter.com">
                        <img src={img2} alt="" />
                    </a>
                    <TextoSlide>
                        <p>15% descuento en productos Apple</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="https://www.twitter.com">
                        <img src={img3} alt="" />
                    </a>
                    <TextoSlide>
                        <p>15% descuento en productos Apple</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="https://www.twitter.com">
                        <img src={img4} alt="" />
                    </a>
                    <TextoSlide>
                        <p>15% descuento en productos Apple</p>
                    </TextoSlide>
                </Slide>
            </Slideshow>

            <Titulo>Productos Destacados</Titulo>
            <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
                <Slide>
                    <a href="https://www.falconmaters.com">
                        <img src={img1} alt="" />
                    </a>
                    <TextoSlide colorFondo="black">
                        <p>15% descuento en productos Apple</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="https://www.falconmaters.com">
                        <img src={img2} alt="" />
                    </a>
                    <TextoSlide>
                        <p>15% descuento en productos Apple</p>
                    </TextoSlide>
                </Slide>
            </Slideshow>
        </>
    );*/
}


export default CarruselNew;