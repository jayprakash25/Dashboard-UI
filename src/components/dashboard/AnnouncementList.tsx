import { FaStar } from "react-icons/fa";
import { FiStar, FiMoreHorizontal } from "react-icons/fi";

type Announcement = {
  id: number;
  title: string;
  time: string;
};

const announcements: Announcement[] = [
  {
    id: 1,
    title: "Outing schedule for every department",
    time: "5 Minutes ago",
  },
  { id: 2, title: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
  {
    id: 3,
    title: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
  },
];

export default function AnnouncementList() {
  return (
    <div className="bg-white  p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Announcement</h3>
        <button className="text-sm text-[#686868] h-7 border border-[#EFEFEF] rounded-[4px] px-1.5">
          Today, 13 Sep 2021
        </button>
      </div>
      <ul className="space-y-4">
        {announcements.map((announcement) => (
          <li
            key={announcement.id}
            className="flex bg-[#FAFAFA] py-3 px-4 rounded-md border border-[#E0E0E0] justify-between items-start"
          >
            <div>
              <p className="font-normal pb-1 md:font-medium text-sm md:text-[16px] text-[#303030]">
                {announcement.title}
              </p>
              <p className="text-xs md:text-sm text-[#686868]">
                {announcement.time}
              </p>
            </div>
            <div className="flex space-x-2">
              {announcement.id === 1 ? (
                <FaStar color="black" className="w-5 h-5 text-yellow-400" />
              ) : (
                <FiStar className="w-5 h-5 text-gray-400" />
              )}
              <FiMoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
          </li>
        ))}
      </ul>
      <button className="mt-4  border-t border-[#E0E0E0] pt-2.5 text-[#FF5151] text-sm font-medium w-full mx-auto">
        See All Announcement
      </button>
    </div>
  );
}
