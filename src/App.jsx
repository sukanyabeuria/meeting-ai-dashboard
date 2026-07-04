import Sidebar from './components/Sidebar'
import GlowBackground from './components/GlowBackground'
import Dashboard from './pages/Dashboard'
import './App.css'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-white flex overflow-hidden">
      <GlowBackground />
      <div className="relative z-10 flex w-full">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  )
}