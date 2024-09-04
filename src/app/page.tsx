import ActivityCard from "@/components/dashboard/ActivityCard";
import AnnouncementList from "@/components/dashboard/AnnouncementList";
import Chart from "@/components/dashboard/Chart";
import ScheduleList from "@/components/dashboard/ScheduleList";
import StatCard from "@/components/dashboard/StatCard";
import Header from "@/components/layout/Header/Header";
import Sidebar from "@/components/layout/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-1 md:ml-48">
      <Header />
      <h1 className="text-2xl pl-5 md:pl-12 pt-6 font-bold mb-6">Dashboard</h1>

      <main className="p-5 pt-0 md:pl-12 md:flex md:space-x-6">
        <div className="md:w-[620px]">
        <div className="grid md:grid-cols-3 gap-2 w-full md:gap-1 mb-6">
          <StatCard title="Available Position" value={24} subtext="4 Urgently needed" color="#FFEFE7" subtextColor="#FF5151" />
          <StatCard title="Job Open" value={10} subtext="4 Active hiring" color="#E8F0FB" subtextColor="#3786F1" />
          <StatCard title="New Employees" value={24} subtext="4 Department" color="#FDEBF9" subtextColor="#EE61CF" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Chart title="Total Employees" value="216" men="120" women="96" percentage="2" pastmonth="2"/>
          <Chart title="Talent Request" value="16" men="6" women="10" percentage="5" pastmonth="5"/>
        </div>
        <div className="grid">
          <AnnouncementList />
        </div>
        </div>

        {/* second section  */}
        <div className="md:w-[420px] grid my-6 md:my-0">
          <ActivityCard />
          <ScheduleList />
        </div>
      </main>
    </div>
  </div>
  );
}
