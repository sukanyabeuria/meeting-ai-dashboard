import { Smile } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import GlassCard from './GlassCard'
import { sentimentData, sentimentTotal } from '../data/sentiment'

export default function SentimentChart() {
  return (
    <GlassCard>
      <div className="flex items-center gap-2 mb-4">
        <Smile size={16} className="text-pink-accent" />
        <h3 className="font-semibold">Sentiments</h3>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-3 text-sm">
          {sentimentData.map((s) => (
            <div key={s.name} className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-white/60 w-16">{s.name}</span>
              <span className="font-medium">{s.value}%</span>
            </div>
          ))}
        </div>

        <div className="relative w-28 h-28 shrink-0 ml-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sentimentData}
                dataKey="value"
                innerRadius={34}
                outerRadius={50}
                stroke="none"
                startAngle={90}
                endAngle={-270}
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] text-white/40">Total</span>
            <span className="text-sm font-bold">{sentimentTotal}</span>
          </div>
        </div>
      </div>
    </GlassCard>
  )
}