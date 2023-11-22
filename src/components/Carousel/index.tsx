import { Carousel } from 'react-responsive-carousel'
import Card from '../Card'

export default function CardCarousel() {
    return (
        <div className='pt-4'>
            <Carousel
                showIndicators={false}
                showStatus={false}
                showArrows={false}
                autoPlay={true}
                interval={1500}
                infiniteLoop={true}
            >
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
            </Carousel>
        </div>
    )
}