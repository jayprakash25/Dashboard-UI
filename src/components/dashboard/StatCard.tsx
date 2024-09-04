type StatCardProps = {
  title: string;
  value: number;
  subtext: string;
  color: string;
  subtextColor: string;
};

export default function StatCard({
  title,
  value,
  subtext,
  color,
  subtextColor,
}: StatCardProps) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="space-y-2.5 md:w-[204px]  h-[136px] py-3 pl-5 rounded-[10px]"
    >
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div>
        <p className="text-4xl pb-2.5 font-medium">{value}</p>
        <p style={{ color: subtextColor }} className="font-normal ">
          {subtext}
        </p>
      </div>
    </div>
  );
}
