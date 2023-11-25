import useIsLargeScreen from '@/hooks/isLargeScreen';

import Card from "../../Card"
import Button from "../../Button"
import AppCarousel from '@/components/AppCarousel';

export default function Cards() {

    const isLargeScreen = useIsLargeScreen()

    return (
        <div className="bg-black">
            <div>
                <h1 className="text-white font-microTecni lg:text-[28px] text-center lg:mb-10 mb-10">
                    O QUE UM <span className="text-red">SITE 10X</span> PODE FAZER POR VOCÊ?
                </h1>
            </div>

            {isLargeScreen ? (
                <div className="lg:px-40">
                    <div className="xl:gap-6 xl:flex flex-row justify-between">
                        <Card
                            text="Levar clientes altamente qualificados para o seu negócio"
                            icon='/images/cardIcon1.svg'
                        />
                        <Card
                            text="Aumentar o ticket dos seus produtos/serviços"
                            icon='/images/cardIcon2.svg'
                        />
                        <Card
                            text="Te proporcionar maior previsibilidade de caixa"
                            icon='/images/cardIcon3.svg'
                        />
                    </div>
                    <div className="xl:gap-6 xl:flex flex-row justify-between mt-10">
                        <Card
                            text="Abrir as portas da sua empresa para novas oportunidades de crescimento"
                            icon='/images/cardIcon4.svg'
                        />
                        <Card
                            text="Aumentar a visibilidade do seu negócio online"
                            icon='/images/cardIcon5.svg'
                        />
                        <Card
                            text="Te destacar de todos seus concorrentes"
                            icon='/images/cardIcon6.svg'
                        />
                    </div>
                </div>
            ) : (
                <div className='p-4'>
                    <AppCarousel>
                        <Card
                            text="Levar clientes altamente qualificados para o seu negócio"
                            icon='/images/cardIcon1.svg'
                        />
                        <Card
                            text="Aumentar o ticket dos seus produtos/serviços"
                            icon='/images/cardIcon2.svg'
                        />
                        <Card
                            text="Te proporcionar maior previsibilidade de caixa"
                            icon='/images/cardIcon3.svg'
                        />
                        <Card
                            text="Abrir as portas da sua empresa para novas oportunidades de crescimento"
                            icon='/images/cardIcon4.svg'
                        />
                        <Card
                            text="Aumentar a visibilidade do seu negócio online"
                            icon='/images/cardIcon5.svg'
                        />
                        <Card
                            text="Te destacar de todos seus concorrentes"
                            icon='/images/cardIcon6.svg'
                        />
                    </AppCarousel>
                </div>
            )}
            <div className="mt-14 flex justify-center">
                <Button />
            </div>
        </div>
    )
}