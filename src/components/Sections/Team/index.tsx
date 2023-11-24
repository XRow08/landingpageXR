import useIsLargeScreen from "@/hooks/isLargeScreen";

import Button from "../../Button";

export default function Team() {

    const isLargeScreen = useIsLargeScreen()

    return (
        <div className="lg:h-[1120px] lg:bg-murilao bg-cover bg-center lg:flex items-center px-4 pt-32 lg:px-40">
            <div className="lg:w-[788px] lg:h-[511] xl:w-[548px]">
                <h1 className="text-white font-microTecni lg:text-[28px] mb-4">Murillo Augusto</h1>
                <p className="font-helvetica text-xl text-white/80">
                    Murillo Augusto é programador Full Stack e especialista no desenvolvimento de sites de alta performance.
                </p>
                <p className="font-helvetica text-xl text-white/80 my-5">
                    Já atendeu diversas grandes empresas nacionais e internacionais, e com sua metodologia única, já gerou mais de 1 milhão de reais para seus clientes.
                </p>
                <p className="font-helvetica text-xl text-white/80">
                    Agora, com o novo <span className="text-red">“Site 10X”</span>, seu objetivo é ajudar você (empresário), a alcançar o próximo nível com seu negócio e multiplicar seus resultados em um curto espaço de tempo.
                </p>
                <p className="font-helvetica text-lg text-white/80 mt-[42px]">
                    Senioridade <br />
                    <span className="font-helvetica font-bold text-[32px] text-white">Dev Sênior</span>
                </p>
                <div className="mt-[72px] flex justify-center xl:justify-start">
                    <Button />
                </div>
            </div>
            {isLargeScreen ? (
                null
            ) : (
                <div>
                    <img src="/mobileAssets/murilaoMobile.png" className="w-[360px] h-[408px]" />
                </div>
            )}
        </div>
    )
}