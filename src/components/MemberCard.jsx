export default function MemberCard({ avatar, name, role }) {
  return (
    <div className="flex items-center gap-3 w-40 shrink-0">
      <img src={avatar} alt={name} className="w-9 h-9 rounded-full object-cover" />
      <div className="leading-tight">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-white/40">{role}</p>
      </div>
    </div>
  )
}