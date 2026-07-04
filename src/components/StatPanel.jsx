export default function StatPanel({ label, value, change }) {
  return (
    <div className="bg-bg-panel/70 border border-border-soft rounded-2xl p-4 flex-1">
      <p className="text-sm text-white/50 mb-3">{label}</p>
      <div className="flex items-center gap-2">
        <span className="text-3xl font-bold">{value}</span>
        <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
          {change} ↑
        </span>
      </div>
    </div>
  )
}