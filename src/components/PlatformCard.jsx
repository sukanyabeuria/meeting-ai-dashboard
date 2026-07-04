import { Users2 } from 'lucide-react'
import GlassCard from './GlassCard.jsx'
import PlatformProgress from './PlatformProgress.jsx'
import { platforms } from '../data/platform.js'

export default function PlatformCard() {
  return (
    <GlassCard>
      <div className="flex items-center gap-2 mb-5">
        <Users2 size={16} className="text-pink-accent" />
        <h3 className="font-semibold">Platforms</h3>
      </div>
      <div className="flex flex-col gap-4">
        {platforms.map((p) => (
          <PlatformProgress key={p.id} {...p} />
        ))}
      </div>
    </GlassCard>
  )
}