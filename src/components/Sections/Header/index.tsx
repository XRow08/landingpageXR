import Button from "@/components/Button"

export default function Header() {
    return (
        <header className="bg-cover bg-center w-full h-screen bg-headerMedium pt-44 pl-40 xl:bg-header xl:bg-black">
            <div data-aos="fade-right" className="w-[812px] h-[493px] flex flex-col">
                <div>
                    <img src="/images/logo.svg" />
                    <p className="text-white font-microTecni text-4xl mt-[46px]">
                        AUMENTE O
                        <span className="text-red"> FATURAMENTO </span>
                        DA SUA EMPRESA E ATRAIA MAIS CLIENTES ATRAVÉS DO
                        <span className="text-red"> SITE 10X</span>
                    </p>
                    <p className="text-white/80 font-helvetica mt-7">
                        Você não precisa ficar brigando com seus concorrentes ou baixar <br />
                        seu preço para bater a meta de faturamento no final do mês.</p>
                </div>
                <div className="mt-16">
                    <Button />
                </div>
            </div>
        </header>
    )
}