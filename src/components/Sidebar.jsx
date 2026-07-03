// src/components/Sidebar.jsx

import {
  FaHome,
  FaVideo,
  FaRegStickyNote,
  FaTasks,
  FaHeart,
  FaChartPie,
  FaUsers,
  FaPuzzlePiece,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#0E0E12] border-r border-gray-800 flex flex-col px-6 py-8">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-xl">
          🤖
        </div>

        <h1 className="text-2xl font-bold text-white">
          Meet <span className="text-pink-500">AI</span>
        </h1>
      </div>

      {/* Main Menu */}

      <p className="text-gray-500 text-xs uppercase mb-4 tracking-widest">
        Main Menu
      </p>

      <nav className="space-y-2">

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#1A1A22] transition">
          <FaHome />
          Home
        </button>

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#1A1A22] transition">
          <FaVideo />
          Meetings
        </button>

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#1A1A22] transition">
          <FaRegStickyNote />
          Snippets
        </button>

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#1A1A22] transition">
          <FaTasks />
          Action Items
        </button>

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#1A1A22] transition">
          <FaHeart />
          AI Tags
        </button>

        {/* Active Item */}

        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg">
          <FaChartPie />
          Analytics
        </button>

      </nav>

      {/* Workspace */}

      <div className="mt-12">

        <p className="text-gray-500 text-xs uppercase mb-4 tracking-widest">
          Workstation
        </p>

        <nav className="space-y-2">

          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#1A1A22] transition">
            <FaUsers />
            Members
          </button>

          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#1A1A22] transition">
            <FaPuzzlePiece />
            Integrations
          </button>

          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-[#1A1A22] transition">
            <FaCog />
            Settings
          </button>

        </nav>

      </div>

    </aside>
  );
}

export default Sidebar;