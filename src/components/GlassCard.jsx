export default function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`bg-bg-card/80 backdrop-blur-xl border border-border-soft rounded-xl2 p-5 ${className}`}
    >
      {children}
    </div>
  )
}