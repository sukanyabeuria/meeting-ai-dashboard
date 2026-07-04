import {
  FaHome,
  FaVideo,
  FaRegStickyNote,
  FaTasks,
  FaTags,
  FaUsers,
  FaPlug,
  FaCog,
  FaChartPie,
} from "react-icons/fa";

const menu = [
  { title: "Home", icon: <FaHome /> },
  { title: "Meetings", icon: <FaVideo /> },
  { title: "Snippets", icon: <FaRegStickyNote /> },
  { title: "Action Items", icon: <FaTasks /> },
  { title: "AI Tags", icon: <FaTags /> },
];

const workspace = [
  { title: "Members", icon: <FaUsers /> },
  { title: "Integrations", icon: <FaPlug /> },
  { title: "Settings", icon: <FaCog /> },
];

function Sidebar() {
  return (
    <aside className="w-[280px] h-screen bg-[#0b0812] border-r border-white/5 px-6 py-8 flex flex-col justify-between">

      <div>

        {/* Logo */}

        <div className="flex items-center gap-4 mb-12">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(255,60,210,.45)]">
            🤖
          </div>

          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              Meet <span className="text-pink-400">AI</span>
            </h1>

            <p className="text-xs text-gray-500">
              Meeting Analytics
            </p>
          </div>

        </div>

        {/* Main Menu */}

        <p className="text-[11px] uppercase tracking-[3px] text-gray-500 mb-5">
          Main Menu
        </p>

        <div className="space-y-2">

          {menu.map((item) => (
            <button
              key={item.title}
              className="w-full flex items-center gap-4 rounded-2xl px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}

          <button
            className="w-full flex items-center gap-4 rounded-2xl px-4 py-3 font-semibold text-black bg-gradient-to-r from-pink-300 via-pink-400 to-fuchsia-500 shadow-[0_0_35px_rgba(255,70,220,.45)]"
          >
            <FaChartPie className="text-lg" />
            Analytics
          </button>

        </div>

        <div className="border-t border-white/5 my-8"></div>

        {/* Workspace */}

        <p className="text-[11px] uppercase tracking-[3px] text-gray-500 mb-5">
          Workspace
        </p>

        <div className="space-y-2">

          {workspace.map((item) => (
            <button
              key={item.title}
              className="w-full flex items-center gap-4 rounded-2xl px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition-all duration-300"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}

        </div>

      </div>

      <div className="border-t border-white/5 pt-6">
        <p className="text-sm text-gray-400">
          Meet AI Dashboard
        </p>

        <p className="text-xs text-gray-600 mt-1">
          Version 1.0
        </p>
      </div>

    </aside>
  );
}

export default Sidebar;