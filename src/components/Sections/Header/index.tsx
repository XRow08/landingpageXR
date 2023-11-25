import Button from "@/components/Button"

export default function Header() {
    return (
        <header className="bg-mobileHeader h-[1011px] lg:bg-headerMedium 2xl:bg-header bg-cover bg-center bg-black lg:py-44 lg:pl-24 px-4 pt-20 ">
            <div className="xl:w-[570px] xl:h-[144px] 2xl:w-[812px] flex flex-col">
                <div>
                    <img src="/images/logo.svg" className="mb-5" />
                    <p className="text-white font-microTecni lg:text-2xl 2xl:text-4xl lg:mt-[46px] mb-5 text-xl xl:text-2xl">
                        AUMENTE O
                        <span className="text-red"> FATURAMENTO </span>
                        DA SUA EMPRESA E ATRAIA MAIS CLIENTES ATRAVÉS DO
                        <span className="text-red"> SITE 10X</span>
                    </p>
                    <p className="text-white/80 font-helvetica lg:mt-7 xl:text-2xl 2xl:w-[672px] 2xl:text-xl">
                        Você não precisa ficar brigando com seus concorrentes ou baixar
                        seu preço para bater a meta de faturamento no final do mês.</p>
                </div>
                <div className="mt-10 lg:mt-16 flex md::justify-center">
                    <Button />
                </div>
            </div>
        </header>
    )
}