import useIsLargeScreen from '@/hooks/isLargeScreen';

import { Carousel } from 'react-responsive-carousel';

export default function Brands() {

    const isLargeScreen = useIsLargeScreen()

    return (
        <div className="h-[216px] 2xl:h-full bg-black lg:px-40 a 2xl:py-6 2xl:px-40 2xl:bg-brands bg-cover bg-center ">
            <div className="text-white lg:text-[24px] text-xl font-microTecni text-center 2xl:pb-10">
                ALGUMAS GRANDES EMPRESAS QUE UTILIZAM O SITE <span className="text-red">10x</span>
            </div>
            {isLargeScreen ? (
                <div className="flex justify-between">
                    <img className='xl:w-28 2xl:w-48' src="/images/ifood.svg" />
                    <img className='xl:w-28 2xl:w-48' src="/images/coke.svg" />
                    <img className='xl:w-28 2xl:w-48' src="/images/nike.svg" />
                    <img className='xl:w-28 2xl:w-48' src="/images/spotify.svg" />
                    <img className='xl:w-28 2xl:w-48' src="/images/chevrolet.svg" />
                    <img className='xl:w-20' src="/images/apple.svg" />
                    <img className='xl:w-28 2xl:w-48' src="/images/smartfit.svg" />
                    <img className='xl:w-28 2xl:w-48' src="/images/johnsons.svg" />
                </div>
            ) : (

                <div className='mt-12'>
                    <Carousel
                        showIndicators={false}
                        showStatus={false}
                        showArrows={false}
                        autoPlay={true}
                        showThumbs={false}
                        interval={1000}
                        infiniteLoop={true}
                    >
                        <div>
                            <img src="/images/ifood.svg" className='h-16' />
                        </div>
                        <div>
                            <img src="/images/coke.svg" className='h-16' />
                        </div>
                        <div>
                            <img src="/images/nike.svg" className='h-16' />
                        </div>
                        <div>
                            <img src="/images/spotify.svg" className='h-16' />
                        </div>
                        <div>
                            <img src="/images/chevrolet.svg" className='h-16' />
                        </div>
                        <div>
                            <img src="/images/apple.svg" className='h-16' />
                        </div>
                        <div>
                            <img src="/images/smartfit.svg" className='h-16' />
                        </div>
                        <div>
                            <img src="/images/johnsons.svg" className='h-16' />
                        </div>
                    </Carousel>
                </div>
            )}
        </div>
    )
}