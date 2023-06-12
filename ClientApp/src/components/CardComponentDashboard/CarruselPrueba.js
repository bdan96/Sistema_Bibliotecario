/*import React, { useState,useContext } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
//import "assets/css/Carrusel2.css";
import { Slideshow, Slide, TextoSlide } from './Slideshow.js'
import 'assets/css/estilosCarrusel.css';
import styled from 'styled-components';

const items = [
    {
        src: require("img/Las48leyes.jpg"),
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: "https://www.elsolucionario.org/wp-content/archivos/2012/08/fisica-universitaria-con-fisica-moderna-vol1-sears-11-edicion-elsolucionario-blogspot-com-.jpg",
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: "https://www.elsolucionario.org/wp-content/archivos/2012/08/fisica-universitaria-con-fisica-moderna-vol1-sears-11-edicion-elsolucionario-blogspot-com-.jpg",
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];

function CarruselPrueba1(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}

            >
                <img src={item.src} alt={item.altText} height="500" width="370" />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

    return (
        <div className="justify-content-center align-items-center h-100">


            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {slides}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </div>
    );
}

const CarruselPrueba = () => {
    return (
        <main>
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
        </main>
    );
}

const Titulo = styled.p`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 10px;
`;

export default CarruselPrueba;*/

