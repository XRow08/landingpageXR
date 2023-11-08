import Button from "../../Button";

export default function Team() {
    return (
        <div className="h-[1120px] bg-murilao bg-cover bg-cnter flex items-center px-40">
            <div className="w-[788px] h-[511]">
                <h1 className="text-white font-microTecni text-[28px] mb-4">Murillo Augusto</h1>
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
                <div className="mt-[72px]">
                    <Button />
                </div>
            </div>
        </div>
    )
}