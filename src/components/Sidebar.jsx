import {
  Home,
  Video,
  FileText,
  ListChecks,
  Tag,
  PieChart,
  Users,
  Plug,
  Settings,
} from 'lucide-react'

const mainLinks = [
  { icon: Home, label: 'Home' },
  { icon: Video, label: 'Meetings' },
  { icon: FileText, label: 'Snippets' },
  { icon: ListChecks, label: 'Action Items' },
  { icon: Tag, label: 'AI Tags' },
  { icon: PieChart, label: 'Analytics', active: true },
]

const workstationLinks = [
  { icon: Users, label: 'Members' },
  { icon: Plug, label: 'Integrations' },
  { icon: Settings, label: 'Settings' },
]

function NavItem({ icon: Icon, label, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors
      ${active
          ? 'bg-gradient-to-r from-pink-accent to-fuchsia-600 text-white shadow-glow'
          : 'text-white/50 hover:text-white/90 hover:bg-white/5'
        }`}
    >
      <Icon size={18} strokeWidth={2} />
      <span>{label}</span>
    </button>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 h-full flex flex-col justify-between px-4 py-6">
      <div>
        <div className="flex items-center gap-2 px-3 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-accent to-fuchsia-600 flex items-center justify-center text-sm font-bold">
            M
          </div>
          <span className="font-semibold text-lg">
            Meet <span className="text-pink-accent">AI</span>
          </span>
        </div>

        <nav className="flex flex-col gap-1">
          {mainLinks.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </nav>

        <p className="text-xs uppercase tracking-wider text-white/30 mt-8 mb-2 px-4">
          Workstation
        </p>
        <nav className="flex flex-col gap-1">
          {workstationLinks.map((link) => (
            <NavItem key={link.label} {...link} />
          ))}
        </nav>
      </div>
    </aside>
  )
}