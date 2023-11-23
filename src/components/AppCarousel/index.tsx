import { useEffect, useState, ReactNode } from 'react';
import { Carousel, CarouselProps } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type AppCarouselProps = {
    children: ReactNode;
}

type ArrowsProps = {
    onClickHandler: () => void;
    hasPrev?: boolean;
    hasNext?: boolean;
    label?: string;
}

export default function AppCarousel({ children }: AppCarouselProps) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768)
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const PrevArrow = ({ onClickHandler, hasPrev, label }: ArrowsProps) => (
        hasPrev && (
            <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className='w-10 h-10 absolute left-20 right-0 bottom-0'
            >

                <div className='-rotate-180 hover:opacity-50'>
                    <img src="/images/arrow.svg" />
                </div>
            </button>
        )
    );

    const NextArrow = ({ onClickHandler, hasNext, label }: ArrowsProps) => (
        hasNext && (
            <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className='w-10 h-10 ml-48 mt-2'
            >

                <div className='hover:opacity-50'>
                    <img src="/images/arrow.svg" />
                </div>
            </button>
        )
    );

    return (

        <Carousel
            showStatus={false}
            showIndicators={false}
            centerMode={!isMobile}
            centerSlidePercentage={50}
            emulateTouch={true}
            selectedItem={isMobile ? 0 : 1}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                <PrevArrow onClickHandler={onClickHandler} hasPrev={hasPrev} label={label} />
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                <NextArrow onClickHandler={onClickHandler} hasNext={hasNext} label={label} />
            }
        >
            {children}

        </Carousel>
    )
}