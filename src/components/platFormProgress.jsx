export default function PlatformProgress({ name, percent, color }) {
  const totalDots = 10
  const filledDots = Math.round((percent / 100) * totalDots)

  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-white/70 w-24 shrink-0">{name}</span>
      <div className="flex items-center gap-1 flex-1">
        {Array.from({ length: totalDots }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 flex-1 rounded-full"
            style={{
              backgroundColor: i < filledDots ? color : 'rgba(255,255,255,0.08)',
            }}
          />
        ))}
      </div>
      <span className="text-sm text-white/50 w-9 text-right">{percent}%</span>
    </div>
  )
}