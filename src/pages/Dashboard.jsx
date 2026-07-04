import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import AnalyticsChart from "../components/AnalyticsChart";
import PlatformCard from "../components/PlatformCard";
import SentimentChart from "../components/SentimentChart";
import TimeSpent from "../components/TimeSpent";
import TalkListen from "../components/TalkListen";

function Dashboard() {
  return (
    <div className="flex h-screen bg-[#07070B] text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 px-6 py-5 overflow-hidden">

        <Navbar />

        {/* Heading */}
        <div className="mt-5 mb-5">
          <h1 className="text-[46px] font-bold leading-none">
            Analytics Dashboard
          </h1>

          <p className="text-gray-400 mt-2 text-[15px]">
            Monitor meetings, team activity and AI insights.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 h-[calc(100vh-165px)]">

          {/* Left */}
          <div className="col-span-8 flex flex-col gap-4">

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(217,70,239,0.08)]">
              <StatCard />
            </div>

            <div className="flex-1 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(217,70,239,0.08)]">
              <AnalyticsChart />
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(217,70,239,0.08)]">
                <TimeSpent />
              </div>

              <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(217,70,239,0.08)]">
                <TalkListen />
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="col-span-4 flex flex-col gap-4">

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(217,70,239,0.08)]">
              <PlatformCard />
            </div>

            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(217,70,239,0.08)]">
              <SentimentChart />
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;