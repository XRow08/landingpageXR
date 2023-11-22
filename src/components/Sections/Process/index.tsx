import Button from "@/components/Button"
import ProcessCard from "@/components/ProcessCard"

export default function Process() {
    return (
        <div className="h-[1020px] flex flex-col justify-center items-center lg:bg-process bg-red bg-cover bg-center">
            <h1 className="font-microTecni text-[28px] text-white">
                COMO É O PROCESSO DE CRIAÇÃO DE UM <span className="text-red">SITE 10X</span>
            </h1>
            <div className="lg:flex gap-6 mt-4">
                <div className="flex flex-col gap-6">
                    <ProcessCard
                        title="BRIEFING E PESQUISA"
                        text="Fazemos uma reunião para identificar cada detalhe do seu negócio e entender quais são as necessidades. Depois disso, realizamos uma pesquisa profunda de mercado, para entender o cenário atual do seu segmento e traçar um plano completo de diferenciação"
                        cardNumber="1"
                    />
                    <ProcessCard
                        title="APRESENTAÇÃO"
                        text="Depois disso, nos reuniremos novamente para apresentar a interface visual do site, onde você verá em primeira mão como o projeto está ficando e nos dará um feedback sincero (aprovando ou solicitando qualquer tipo de alteração pertinente)"
                        cardNumber="3"
                    />
                </div>
                <div className="flex flex-col gap-6">
                    <ProcessCard
                        title="CONSTRUÇÃO"
                        text="Nosso time gráfico realizará a construção de toda a parte visual do website, focando 100% na navegabilidade e experiência do usuário"
                        cardNumber="2"
                        mirroring
                    />
                    <ProcessCard
                        title="IMPLEMENTAÇÃO"
                        text="Depois de aprovado, faremos a implementação do seu site na internet. Com algumas das técnicas mais avançadas, aumentaremos a performance e a visibilidade do seu site. Deixaremos seu carregamento no maior potencial possível e otimizarmos a navegabilidade dos usuários"
                        cardNumber="4"
                        mirroring
                    />
                </div>
            </div>
            <div className="mt-14">
                <Button />
            </div>
        </div>
    )
}