import { Clock } from 'lucide-react'
import GlassCard from './GlassCard'
import MemberCard from './MemberCard'
import { timeSpentMembers } from '../data/members'

export default function TimeSpent() {
  return (
    <GlassCard>
      <div className="flex items-center gap-2 mb-5">
        <Clock size={16} className="text-pink-accent" />
        <h3 className="font-semibold">Time Spent In Meetings</h3>
      </div>

      <div className="flex items-center text-xs text-white/40 mb-3 px-1">
        <span className="w-40">Participants 25</span>
        <span className="flex-1">Average 10h</span>
        <span className="w-16 text-right">Time Spent</span>
      </div>

      <div className="flex flex-col gap-4">
        {timeSpentMembers.map((m) => (
          <div key={m.id} className="flex items-center gap-3">
            <MemberCard avatar={m.avatar} name={m.name} role={m.role} />
            <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-accent to-fuchsia-500"
                style={{ width: `${m.progress}%` }}
              />
            </div>
            <span className="text-sm text-white/60 w-16 text-right">{m.timeSpent}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}