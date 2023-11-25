import AppCarousel from '@/components/AppCarousel';
import DepostionsCard from '@/components/DepositionsCard';

export default function Depositions() {
    return (
        <div className='px-4 bg-depositions bg-cover bg-center'>
            <div className='pt-16'>
                <h1 className='font-microTecni text-white text-center text-xl'>DEPOINMENTOS</h1>
            </div>
            <div className="h-[816px] pt-24 pb-72 flex flex-col bg-depositions bg-cover bg-center relative">

                <div className="hidden xl:block absolute top-0 bottom-0 left-0 w-44 bg-gradient-to-r from-black/90 to-transparent z-10"></div>
                <div className="hidden xl:block absolute top-0 bottom-0 right-0 w-44 bg-gradient-to-r from-transparent to-black/90 z-10"></div>

                <AppCarousel >
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