import { Search, Bell } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-2 bg-bg-panel border border-border-soft rounded-xl px-4 py-2.5 w-80">
        <Search size={16} className="text-white/40" />
        <input
          type="text"
          placeholder="Find any discussion point..."
          className="bg-transparent outline-none text-sm placeholder:text-white/40 w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 rounded-full bg-bg-panel border border-border-soft flex items-center justify-center relative">
          <Bell size={16} className="text-white/70" />
          <span className="absolute top-2 right-2.5 w-1.5 h-1.5 rounded-full bg-pink-accent" />
        </button>

        <div className="flex items-center gap-3 bg-bg-panel border border-border-soft rounded-xl px-3 py-1.5">
          <img
            src="https://i.pravatar.cc/64?img=12"
            alt="Branden Lee"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div className="leading-tight">
            <p className="text-sm font-medium">Branden Lee</p>
            <p className="text-xs text-white/40">brande@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}