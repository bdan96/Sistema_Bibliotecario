import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import "assets/css/Carrusel2.css";

const items = [
    {
        src: "https://www.elsolucionario.org/wp-content/archivos/2012/08/fisica-universitaria-con-fisica-moderna-vol1-sears-11-edicion-elsolucionario-blogspot-com-.jpg",
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: "https://covers.alibrate.com/b/59872e8acba2bce50c1a6d96/b0bf30dd-8585-4a46-9229-c72a94282fbe/share",
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: "https://m.media-amazon.com/images/I/81pSlQ1HGkL.jpg",
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
];

function Carrusel2(args) {
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
                    id="carruselPrev"
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                    id="carruselNext"
                />
            </Carousel>
        </div>
    );
}

export default Carrusel2;