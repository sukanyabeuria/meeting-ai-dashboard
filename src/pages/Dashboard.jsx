// src/pages/Dashboard.jsx

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
    <div className="flex min-h-screen bg-[#09090B] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">

        {/* Navbar */}
        <Navbar />

        {/* Page Title */}
        <div className="mt-8 mb-6">
          <h1 className="text-4xl font-bold">Analytics Dashboard</h1>
          <p className="text-gray-400 mt-2">
            Monitor meetings, team activity and AI insights.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-2 gap-6 mb-6">

          <StatCard
            title="Total Meetings"
            value="352"
            change="+12%"
          />

          <StatCard
            title="Avg. Meeting Hours"
            value="128h"
            change="+8%"
          />

        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-12 gap-6 mb-6">

          <div className="col-span-8">
            <AnalyticsChart />
          </div>

          <div className="col-span-4 space-y-6">
            <PlatformCard />
            <SentimentChart />
          </div>

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-6">

          <TimeSpent />

          <TalkListen />

        </div>

      </main>

    </div>
  );
}

export default Dashboard;