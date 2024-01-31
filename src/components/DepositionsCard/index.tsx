type DepostionsCardProps = {
  deposition: string;
  reporterImage: string;
  name: string;
};

export default function DepostionsCard({
  deposition,
  reporterImage,
  name,
}: DepostionsCardProps) {
  return (
    <div className="w-[328px] h-[526px] lg:h-[374px] lg:w-[836px] card-gradient rounded-2xl pt-6 pb-[54px] px-10 flex flex-col justify-between">
      <div className="font-helvetica text-white text-left text-[22px]">
        {deposition}
      </div>
      <div className="lg:flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-helvetica text-white">{name}</div>
        </div>
        <div className="w-36 h-6 pt-2">
          <img src="/images/stars.svg" alt="stars" />
        </div>
      </div>
    </div>
  );
}
