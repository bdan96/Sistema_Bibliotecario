import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
import "assets/css/tituloCarruselAdquision.css";

/*import img1 from 'img/Habitos-atomicos.jpg';
import img2 from 'img/Las-48-leyes-del-poder.jpg';
import img3 from 'img/hoy-es-importante.jpg';*/


function CarruselLibrosProximos() {

    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);

    // State for Animation
    const [animating, setAnimating] = React.useState(false);

    // Sample items for Carousel
    const items = [
        {
            caption: 'Sample Caption One', src:
                'https://cdn.culturagenial.com/es/imagenes/lejos-de-luisiana.jpg',
            altText: 'Slide One'
        },
        {
            caption: 'Sample Caption Two', src:
                'https://cdn.culturagenial.com/es/imagenes/caso-alaska.jpg',           
            altText: 'Slide Two'
        },
        {
            caption: 'Sample Caption three', src:
                'https://cdn.culturagenial.com/es/imagenes/cuando-no-queden-mas-estrellas-que-contar-cke.jpg',
            altText: 'Slide Three'
        }

    ];

    // Items array length
    const itemLength = items.length - 1

    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={item.src} alt={item.altText} height="410" width="350" />
            </CarouselItem>
        );
    });

    return (
        <div>
            <h6 className="centrarTituloCarrusel">Pr&oacute;ximos escritos</h6>
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />

            </Carousel>

        </div>
    );
}

export default CarruselLibrosProximos;
