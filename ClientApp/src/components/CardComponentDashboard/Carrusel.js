import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';


/*import img1 from 'img/Habitos-atomicos.jpg';
import img2 from 'img/Las-48-leyes-del-poder.jpg';
import img3 from 'img/hoy-es-importante.jpg';*/


function Carrusel() {

    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);

    // State for Animation
    const [animating, setAnimating] = React.useState(false);

    // Sample items for Carousel
    const items = [
        {
            caption: 'Sample Caption One', src:
                'https://olcovers2.blob.core.windows.net/coverswp/2013/06/Introduccion-a-la-programacion-con-C-sharp-OpenLibra.gif',
            altText: 'Slide One'
        },
        {
            caption: 'Sample Caption Two', src:
                'https://www.loqueleo.com/co/uploads/2021/01/la-odisea-1.JPG',
            altText: 'Slide Two'
        },
        {
            caption: 'Sample Caption three', src:
                'https://m.media-amazon.com/images/I/51HmK4PEYtL.jpg',
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

export default Carrusel;