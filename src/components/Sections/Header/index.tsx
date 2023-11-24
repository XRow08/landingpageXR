import Button from "@/components/Button"

export default function Header() {
    return (
        <header className="bg-mobileHeader md:bg-headerMedium bg-cover bg-center w-full lg:h-screen lg:bg-header lg:pt-44 lg:pl-40 px-4 pt-20 h-[1011px]">
            <div className="xl:w-[570px] xl:h-[144px] flex flex-col">
                <div>
                    <img src="/images/logo.svg" className="mb-5" />
                    <p className="text-white font-microTecni lg:text-2xl lg:mt-[46px] mb-5 text-xl xl:text-2xl">
                        AUMENTE O
                        <span className="text-red"> FATURAMENTO </span>
                        DA SUA EMPRESA E ATRAIA MAIS CLIENTES ATRAVÉS DO
                        <span className="text-red"> SITE 10X</span>
                    </p>
                    <p className="text-white/80 font-helvetica lg:mt-7 xl:text-2xl">
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