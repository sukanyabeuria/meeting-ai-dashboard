import { Mic } from 'lucide-react'
import GlassCard from './GlassCard'
import MemberCard from './MemberCard'
import { talkListenMembers } from '../data/members'

export default function TalkListen() {
  return (
    <GlassCard>
      <div className="flex items-center gap-2 mb-5">
        <Mic size={16} className="text-pink-accent" />
        <h3 className="font-semibold">Talk To Listen Ratio</h3>
      </div>

      <div className="flex items-center text-xs text-white/40 mb-3 px-1">
        <span className="w-40">Participants 25</span>
        <span className="flex-1">Talk %</span>
        <span className="w-16 text-right">Listen %</span>
      </div>

      <div className="flex flex-col gap-4">
        {talkListenMembers.map((m) => (
          <div key={m.id} className="flex items-center gap-3">
            <MemberCard avatar={m.avatar} name={m.name} role={m.role} />
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full bg-pink-accent"
                  style={{ width: `${m.talk}%` }}
                />
              </div>
              <span className="text-xs text-white/50 w-8">{m.talk}%</span>
            </div>
            <span className="text-sm text-white/60 w-10 text-right">{m.listen}%</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}