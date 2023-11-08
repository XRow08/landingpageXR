import { CSSProperties } from 'react';
import { Carousel, } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

type ArrowsProps = {
    onClickHandler: () => void;
    hasPrev?: boolean;
    hasNext?: boolean;
    label?: string;
}

export default function Depositions() {

    const arrowStyles: CSSProperties = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
        color: 'white'
    };

    const PrevArrow = ({ onClickHandler, hasPrev, label }: ArrowsProps) => (
        hasPrev && (
            <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 400 }}
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
                style={{ ...arrowStyles, right: 530 }}
            >

                <div className='hover:opacity-50'>
                    <img src="/images/arrow.svg" />
                </div>
            </button>
        )
    );

    return (
        <div className="h-[816px] pt-24 pb-72 flex flex-col">
            <Carousel
                showStatus={false}
                showIndicators={false}
                centerMode={true}
                centerSlidePercentage={50}
                emulateTouch={true}
                selectedItem={1}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    <PrevArrow onClickHandler={onClickHandler} hasPrev={hasPrev} label={label} />
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    <NextArrow onClickHandler={onClickHandler} hasNext={hasNext} label={label} />
                }
            >
                <div data-aos="fade-right" className=" h-[374px] w-[836px] card-gradient rounded-2xl pt-6 pb-[54px] px-6 flex flex-col justify-between">
                    <div className="font-helvetica text-white text-left text-[22px]">
                        Murilo me atendeu super bem, adorei o atendimento e o resultado do meu produto. Foi pontual, didático, entregou seus serviços de acordo com o contrato e pode apostar que contatarei mais vezes!!
                    </div>
                    <div className="flex justify-between items-center">
                        <div><img src="/images/roberto.svg" alt="user" /></div>
                        <div><img src="/images/stars.svg" alt="stars" /></div>
                    </div>
                </div>
                <div data-aos="fade-up" className=" h-[374px] w-[836px] card-gradient rounded-2xl pt-6 pb-[54px] px-6 flex flex-col justify-between">
                    <div className="font-helvetica text-white text-left text-[22px]">
                        Murilo me atendeu super bem, adorei o atendimento e o resultado do meu produto. Foi pontual, didático, entregou seus serviços de acordo com o contrato e pode apostar que contatarei mais vezes!!
                    </div>
                    <div className="flex justify-between items-center">
                        <div><img src="/images/roberto.svg" alt="user" /></div>
                        <div><img src="/images/stars.svg" alt="stars" /></div>
                    </div>
                </div>
                <div data-aos="fade-left" className=" h-[374px] w-[836px] card-gradient rounded-2xl pt-6 pb-[54px] px-6 flex flex-col justify-between">
                    <div className="font-helvetica text-white text-left text-[22px]">
                        Murilo me atendeu super bem, adorei o atendimento e o resultado do meu produto. Foi pontual, didático, entregou seus serviços de acordo com o contrato e pode apostar que contatarei mais vezes!!
                    </div>
                    <div className="flex justify-between items-center">
                        <div><img src="/images/roberto.svg" alt="user" /></div>
                        <div><img src="/images/stars.svg" alt="stars" /></div>
                    </div>
                </div>

            </Carousel>
        </div>
    )
}