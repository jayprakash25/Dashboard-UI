// import Image from 'next/image'
// import Link from 'next/link'
// import { IconType } from 'react-icons'
// import { FiGrid, FiUsers, FiCalendar, FiUser, FiFolder, FiHeadphones, FiSettings } from 'react-icons/fi'

// type SidebarItemProps = {
//   icon: IconType
//   text: string
//   active?: boolean
//   href: string
// }

// const SidebarItem = ({ icon: Icon, text, active, href }: SidebarItemProps) => (
//   <Link href={href} className={`flex items-center h-14 font-medium text-[16px] space-x-[24px]  px-[30px] rounded-lg ${active ? ' text-[#FF5151]' : 'text-gray-600 hover:bg-gray-100'}`}>
//     <Icon className="w-5 h-5" />
//     <span>{text}</span>
//   </Link>
// )

// export default function Sidebar() {
//   return (
//     <div className="w-[242px] bg-white h-screen  flex flex-col">
//       <div className="flex items-center p-2.5 px-5 justify-center mb-5">
//         <Image width={142} height={36} src="/images/logo.png" alt="Vasitum" />
//       </div>
//       <nav className="flex-1">
//         <p className='text-[12px] px-[30px] text-[#686868] font-medium h-[38px] opacity-[50%]'>MAIN MENU</p>
//         <SidebarItem icon={FiGrid} text="Dashboard" active href="/" />
//         <SidebarItem icon={FiUsers} text="Recruitment" href="/recruitment" />
//         <SidebarItem icon={FiCalendar} text="Schedule" href="/schedule" />
//         <SidebarItem icon={FiUser} text="Employee" href="/employee" />
//         <SidebarItem icon={FiFolder} text="Department" href="/department" />
//       </nav>
//       <div className="space-y-2">
//         <SidebarItem icon={FiHeadphones} text="Support" href="/support" />
//         <SidebarItem icon={FiSettings} text="Settings" href="/settings" />
//       </div>
//     </div>
//   )
// }

import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  FiGrid,
  FiUsers,
  FiCalendar,
  FiUser,
  FiFolder,
  FiHeadphones,
  FiSettings,
} from "react-icons/fi";

type SidebarItemProps = {
  icon: IconType;
  text: string;
  active?: boolean;
  href: string;
  color?: string;
};

const SidebarItem = ({
  icon: Icon,
  text,
  active,
  href,
  color,
}: SidebarItemProps) => (
  <Link
    href={href}
    className={`flex items-center space-x-[24px] h-14 py-2 px-[30px]  rounded-lg  ${
      active ? "text-[#FF5151] font-medium" : "text-[#686868] font-normal hover:bg-gray-100"
    }`}
  >
    <Icon className={`w-5 h-5 ${color ? color : ""}`} />
    <span className={`${active ? "font-medium" : ""}`}>{text}</span>
  </Link>
);

export default function Sidebar() {
  return (
    <div className="hidden md:flex w-56 z-10 fixed bg-gray-50 h-screen p-4 px-0  flex-col">
      <div className="flex items-center justify-center space-x-2 mb-10">
        <Image width={142} height={36} src="/images/logo.png" alt="Vasitum" />
      </div>
      <div className="mb-6">
        <h2 className="text-xs px-[30px] font-semibold text-[#686868] opacity-[50%] mb-2  uppercase tracking-wider">
          MAIN MENU
        </h2>
        <nav className="">
          <SidebarItem
            icon={FiGrid}
            text="Dashboard"
            active
            href="/"
            color="text-red-500"
          />
          <SidebarItem icon={FiUsers} text="Recruitment" href="/recruitment" />
          <SidebarItem icon={FiCalendar} text="Schedule" href="/schedule" />
          <SidebarItem icon={FiUser} text="Employee" href="/employee" />
          <SidebarItem icon={FiFolder} text="Department" href="/department" />
        </nav>
      </div>
      <div>
        <h2 className="text-xs px-[30px] font-semibold text-[#686868] opacity-[50%] mb-2  uppercase tracking-wider">
          OTHER
        </h2>
        <nav className="">
          <SidebarItem icon={FiHeadphones} text="Support" href="/support" />
          <SidebarItem icon={FiSettings} text="Settings" href="/settings" />
        </nav>
      </div>
    </div>
  );
}
