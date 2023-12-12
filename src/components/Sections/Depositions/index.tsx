import { useEffect, useState } from 'react';

import AppCarousel from '@/components/AppCarousel';
import DepostionsCard from '@/components/DepositionsCard';

export default function Depositions() {

    const [windowSize, setWindowSize] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setIsMobile(window.innerWidth < 768);

            } else {
                setWindowSize(window.innerWidth);
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize]);

    console.log("isMobile")


    return (
        <div className='px-4 bg-depositions bg-cover bg-center lg:pt-56'>
            <div className='pt-16'>
                <h1 className='font-microTecni text-white text-center text-xl lg: sm:mr-16'>DEPOINMENTOS</h1>
            </div>
            <div className="h-[816px] pt-4 lg:pt-4 pb-72 flex flex-col bg-depositions bg-cover bg-center relative">

                <div className="hidden xl:block absolute top-0 bottom-0 left-0 w-44 bg-gradient-to-r from-black/90 to-transparent z-10"></div>
                <div className="hidden xl:block absolute top-0 bottom-0 right-0 w-44 bg-gradient-to-r from-transparent to-black/90 z-10"></div>

                <AppCarousel centerSlidePercentage={windowSize >= 1920 ? 50 : (windowSize >= 1440 ? 65 : (isMobile ? 50 : 0))}>
                    <DepostionsCard
                        deposition='Murilo me atendeu super bem, adorei o atendimento e o resultado do meu produto. Foi pontual, didático, entregou seus serviços de acordo com o contrato e pode apostar que contatarei mais vezes!!'
                        reporterImage='/images/roberto.svg'
                    />
                    <DepostionsCard
                        deposition='Murilo me atendeu super bem, adorei o atendimento e o resultado do meu produto. Foi pontual, didático, entregou seus serviços de acordo com o contrato e pode apostar que contatarei mais vezes!!'
                        reporterImage='/images/roberto.svg'
                    />
                    <DepostionsCard
                        deposition='Murilo me atendeu super bem, adorei o atendimento e o resultado do meu produto. Foi pontual, didático, entregou seus serviços de acordo com o contrato e pode apostar que contatarei mais vezes!!'
                        reporterImage='/images/roberto.svg'
                    />
                </AppCarousel>
            </div>
        </div>
    )
}