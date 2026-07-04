import { useState } from 'react'
import { BarChart2 } from 'lucide-react'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Cell } from 'recharts'
import GlassCard from './GlassCard'
import StatPanel from './StatPanel'
import { totalMeetings, avgPerMember, meetingsChartData } from '../data/analytics'

const tabs = ['Meetings', 'Hours', 'Participants']

export default function AnalyticsChart() {
  const [activeTab, setActiveTab] = useState('Meetings')

  return (
    <GlassCard className="col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart2 size={16} className="text-pink-accent" />
          <h3 className="font-semibold">General Stats</h3>
        </div>
        <div className="flex items-center bg-bg-panel rounded-lg p-1 text-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-md transition-colors ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-pink-accent to-fuchsia-600 text-white'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-6">
        <div className="flex flex-col gap-4 w-40 shrink-0">
          <StatPanel label="Total Meetings" value={totalMeetings.value} change={totalMeetings.change} />
          <StatPanel label="Avg. Per Member" value={avgPerMember.value} change={avgPerMember.change} />
        </div>

        <div className="flex-1 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={meetingsChartData} barCategoryGap="30%">
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
              />
              <Bar dataKey="value" radius={[6, 6, 6, 6]}>
                {meetingsChartData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={entry.highlight ? '#ff2ea6' : 'rgba(255,255,255,0.08)'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </GlassCard>
  )
}