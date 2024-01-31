import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type AppCarouselProps = {
  children: any;
  centerSlidePercentage?: number;
};

type ArrowsProps = {
  onClickHandler: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  label?: string;
};

export default function AppCarousel({
  children,
  centerSlidePercentage,
}: AppCarouselProps) {
  const PrevArrow = ({ onClickHandler, hasPrev, label }: ArrowsProps) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="w-10 h-10 absolute left-20 right-0 bottom-0 xl:bottom-44 xl:left-[200px] xl:z-10"
      >
        <div className="-rotate-180 hover:opacity-50">
          <img src="/images/arrow.svg" />
        </div>
      </button>
    );

  const NextArrow = ({ onClickHandler, hasNext, label }: ArrowsProps) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className="w-10 h-10 ml-48 mt-2 xl:absolute xl:bottom-44 xl:right-[200px] xl:z-10"
      >
        <div className="hover:opacity-50">
          <img src="/images/arrow.svg" />
        </div>
      </button>
    );

  return (
    <div>
      <Carousel
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
        showThumbs={false}
        emulateTouch={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <PrevArrow
            onClickHandler={onClickHandler}
            hasPrev={hasPrev}
            label={label}
          />
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <NextArrow
            onClickHandler={onClickHandler}
            hasNext={hasNext}
            label={label}
          />
        )}
      >
        {children}
      </Carousel>
    </div>
  );
}
