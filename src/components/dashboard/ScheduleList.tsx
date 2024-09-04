import { FiMoreHorizontal } from "react-icons/fi";

type ScheduleItem = {
  id: number;
  title: string;
  time: string;
  priority?: boolean;
};

const scheduleItems: ScheduleItem[] = [
  {
    id: 1,
    title: "Review candidate applications",
    time: "Today - 11:30 AM",
    priority: true,
  },
  { id: 2, title: "Interview with candidates", time: "Today - 10:30 AM" },
  {
    id: 3,
    title: "Short meeting with product designer from IT Department",
    time: "Today - 09:15 AM",
  },
];

export default function ScheduleList() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg  font-semibold">Upcoming Schedule</h3>
        <button className="text-xs md:text-sm text-[#686868] h-7 border border-[#EFEFEF] rounded-[4px] px-1.5">
          Today, 13 Sep 2021
        </button>
      </div>
      <ul className="space-y-4">
        {scheduleItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-start bg-[#FAFAFA] py-3 px-4 rounded-md border border-[#E0E0E0]"
          >
            <div>
              <p
                className={`font-medium text-[#606060] ${
                  item.priority ? "text-green-400" : ""
                }`}
              >
                {item.title}
              </p>
              <p className="text-xs text-[#686868]">{item.time}</p>
            </div>
            <FiMoreHorizontal className="w-5 h-5 text-gray-400" />
          </li>
        ))}
      </ul>
      <button className="mt-4 border-t border-[#E0E0E0] pt-2.5 text-[#FF5151] w-full mx-auto font-medium">
        Create a New Schedule
      </button>
    </div>
  );
}
