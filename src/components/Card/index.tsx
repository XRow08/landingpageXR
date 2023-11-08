type CardProps = {
    icon: string;
    text: string;
}

export default function Card({ icon, text }: CardProps) {
    return (
        <div className="w-[513px] h-[257px] card-gradient rounded-2xl pl-5">
            <div className="w-[77px] h-[77px] border-2 rounded-[14px] border-red relative bottom-4 left-[-0.5rem] card-icon-gradient flex items-center, justify-center p-2">
                <img src={icon} />
            </div>
            <span className="font-helvetica text-[22px] text-white">{text}</span>
        </div>
    )
}