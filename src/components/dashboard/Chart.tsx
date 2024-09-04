import Image from "next/image";
import { IoIosArrowRoundUp } from "react-icons/io";

type chartCardProps = {
  title: string;
  value: string;
  men: string;
  women: string;
  percentage: string;
  pastmonth: string;
};

const Chart = ({
  title,
  value,
  men,
  women,
  percentage,
  pastmonth,
}: chartCardProps) => {
  return (
    <div className="flex  h-[190px] border border-[#E0E0E0] rounded-[10px] p-5">
      <div className="grid gap-6">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-5xl">{value}</p>

        <div className="text-xs grid gap-1 text-[#686868] font-normal">
          <p>{men} Men</p>
          <p>{women} Women</p>
        </div>
      </div>

      <div className="flex flex-col text-[#FF5151] items-center space-y-2.5 justify-center">
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium text-xs">+{percentage}%</p>
          <IoIosArrowRoundUp color="#FF5151" />
          <Image width={114} height={69} src="/images/vector3.png" alt="" />
        </div>
        <button className="bg-[#FFEFE7] rounded-[4px] px-2.5 h-6  text-xs text-[#303030]">
          +{pastmonth}% Past month
        </button>
      </div>
    </div>
  );
};

export default Chart;
