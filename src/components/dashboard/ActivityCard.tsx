
const ActivityCard = () => {
  return (
    <div className="rounded-[10px] w-full bg-[#161E54] px-6 md:h-64 text-[#FFFFFF] mb-6">
        <h1 className=" text-white font-medium text-lg h-7 py-4">Recent Activity</h1>
        <div className="grid gap-1.5 pt-10">
            <p className=" opacity-[60%] text-xs">10.40 AM, Fri 10 Sept 2021</p>
            <h3 className="text-lg font-medium ">You Posted a New Job</h3>
            <p className="text-sm opacity-[80%]">Kindly check the requirements and terms of workand make sure everything is right.</p>
        </div>

        <div className="md:flex grid gap-y-6 py-6 md:pb-0  justify-between items-center pt-6">
            <h3 className="text-sm">Today you makes 12 Activity</h3>
            <button className="bg-[#FF5151] py-2.5 px-5  rounded-[4px]">See All Activity</button>
        </div>
    </div>
  )
}

export default ActivityCard