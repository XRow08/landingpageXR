import Button from "@/components/Button"

export default function Benefits() {
    return (
        <div className="h-[987px] py-24 px-40 font-microTecni">
            <h1 className="text-white text-center text-2xl">
                QUAL A DIFERENÇA DO <span className="text-red">SITE 10X</span> <br /> PARA UM SITE COMUM?
            </h1>
            <div data-aos="fade-up" className="flex justify-center mt-9">
                <div className="card-benefits-card w-[665px] h-[402px] rounded-tl-2xl rounded-bl-2xl pt-6 pr-6 pb-9 pl-9">
                    <h1 className="text-green font-helvetica font-bold text-[28px]">Site 10X</h1>
                    <div className="border w-full border-white/30 my-4"></div>

                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center">
                            <img src="/images/checked.svg" alt="checkedIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Carregamento ultra rápido em alta resolução</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/checked.svg" alt="checkedIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Ranqueamento ‘’Classe A’’ e alta visibilidade no Google</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/checked.svg" alt="checkedIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Seu cliente tem o prazer de navegar no seu site</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/checked.svg" alt="checkedIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Alta taxa de conversão de clientes</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/checked.svg" alt="checkedIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Torna seus concorrentes obsoletos</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/checked.svg" alt="checkedIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Alta proteção e segurança de dados</span>
                        </li>
                    </ul>
                </div>
                <div className="card-benefits-card w-[665px] h-[402px] rounded-tr-2xl rounded-br-2xl pt-6 pr-6 pb-9 pl-9">
                    <h1 className="text-white font-helvetica font-bold text-[28px]">Site Comum</h1>
                    <div className="border w-full border-white/30 my-4"></div>
                    <ul className="flex flex-col gap-5">
                        <li className="flex items-center">
                            <img src="/images/x-circle.svg" alt="x-circleIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Carregamento ultra rápido em alta resolução</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/x-circle.svg" alt="x-circleIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Ranqueamento ‘’Classe A’’ e alta visibilidade no Google</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/x-circle.svg" alt="x-circleIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Seu cliente tem o prazer de navegar no seu site</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/x-circle.svg" alt="x-circleIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Alta taxa de conversão de clientes</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/x-circle.svg" alt="x-circleIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Torna seus concorrentes obsoletos</span>
                        </li>
                        <li className="flex items-center">
                            <img src="/images/x-circle.svg" alt="x-circleIcon" className="mr-2" />
                            <span className="text-white font-helvetica text-lg">Alta proteção e segurança de dados</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center mt-6">
                <div className="text-white/80 font-helvetica text-[22px]">
                    Enquanto a maioria dos sites comuns são construídos de maneira genérica, através de plataformas “pré montadas”...
                </div>

                <div className="text-white/80 font-helvetica text-[22px] my-4">
                    O <span className="text-red">“Site 10X”</span> é desenvolvido 100% de forma manual
                </div>

                <div className="text-white/80 text-center font-helvetica text-[22px]">
                    Contando com <span className="text-red">programadores de ponta</span> que possuem anos de experiência no desenvolvimento de sites, seu <br /> desempenho online aumenta em até 10 vezes, e a quantidade de clientes convertidos é multiplicada.
                </div>
            </div>
            <div className="flex justify-center mt-14">
                <Button />
            </div>
        </div>
    )
}