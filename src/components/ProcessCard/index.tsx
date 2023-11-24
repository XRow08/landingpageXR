type ProcessCardProps = {
    title: string;
    text: string;
    cardNumber: string;
    mirroring?: boolean;
}

export default function ProcessCard({ title, text, cardNumber, mirroring }: ProcessCardProps) {
    return (
        <div className="lg:w-[548px] lg:h-[284px] card-gradient rounded-xl flex flex-col justify-between">
            <div className="px-6 pt-6">
                <h1 className="font-helvetica font-bold text-[22px] text-white">{title}</h1>
                <p className="mt-2 font-helvetica text-lg text-white/80">
                    {text}
                </p>
            </div>
            <div className={`flex justify-end ${mirroring ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <span className={`w-10 h-10 bg-button flex justify-center items-center font-microTecni text-white ${mirroring ? 'rounded-tr-2xl rounded-bl-2xl' : 'rounded-tl-2xl rounded-br-2xl'}`}>
                    {cardNumber}
                </span>
            </div>
        </div>
    )
}
