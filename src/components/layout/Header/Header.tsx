import Image from 'next/image'
import { FiBell, FiMessageSquare } from 'react-icons/fi'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Header() {
  return (
    <div>
    <header className="bg-white md:p-4 md:pl-12 px-5 py-2 flex justify-between items-center">
      <div className="flex items-center -z-0 inset-0 justify-center space-x-4 md:relative">
        <input
          type="text"
          placeholder="Search"
          className="px-2.5 bg-[#FAFAFA] hidden md:block   py-4 border rounded-[4px] border-[#E0E0E0] w-[343px] h-11 focus:outline-none"
        />
        <RxHamburgerMenu  className='md:hidden'/>
        <svg
          className="w-6 h-6 text-gray-400 md:absolute md:right-2.5 md:top-1/2 md:transform md:-translate-y-1/2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <div className="flex items-center space-x-4 md:pr-12">
        <FiBell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <FiMessageSquare className="w-6 h-6 text-gray-600 cursor-pointer" />
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image src="/images/avatar.png" width={42} height={42} alt="User" className="rounded-full" />
          <span className="font-medium hidden md:block">Admitra John</span>
        </div>
      </div>
    </header>
    <div className="h-[1px] ml-12 bg-[#F1F1F1]"></div>
    </div>
  )
}