import { Filter, Calendar, Share2 } from 'lucide-react'
import Navbar from '../components/Navbar'
import AnalyticsChart from '../components/AnalyticsChart'
import PlatformCard from '../components/PlatformCard'
import SentimentChart from '../components/SentimentChart'
import TimeSpent from '../components/TimeSpent'
import TalkListen from '../components/TalkListen'

export default function Dashboard() {
  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <Navbar />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Analytics</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm bg-bg-panel border border-border-soft rounded-lg px-4 py-2">
            <Filter size={14} />
            Filters
          </button>
          <button className="flex items-center gap-2 text-sm bg-bg-panel border border-border-soft rounded-lg px-4 py-2">
            <Calendar size={14} />
            This month
          </button>
          <button className="w-9 h-9 flex items-center justify-center bg-bg-panel border border-border-soft rounded-lg">
            <Share2 size={14} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <AnalyticsChart />
        <div className="flex flex-col gap-6">
          <PlatformCard />
          <SentimentChart />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <TimeSpent />
        <TalkListen />
      </div>
    </main>
  )
}