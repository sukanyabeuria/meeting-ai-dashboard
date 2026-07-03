import { FaSearch, FaBell, FaSlidersH, FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex items-center justify-between mb-8">

      {/* Search */}
      <div className="relative w-[420px]">
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          placeholder="Find any discussion point..."
          className="w-full bg-[#18181B] text-white rounded-xl py-3 pl-12 pr-4 outline-none border border-gray-800 focus:border-pink-500 transition"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

        {/* Filters */}
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18181B] hover:bg-[#202024] transition">
          <FaSlidersH />
          Filters
          <FaChevronDown className="text-xs" />
        </button>

        {/* Month */}
        <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18181B] hover:bg-[#202024] transition">
          This Month
          <FaChevronDown className="text-xs" />
        </button>

        {/* Notification */}
        <button className="w-12 h-12 rounded-xl bg-[#18181B] flex items-center justify-center hover:bg-[#202024] transition">
          <FaBell />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 bg-[#18181B] px-3 py-2 rounded-xl">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          <div>
            <h3 className="font-semibold text-sm">
              Branden Leo
            </h3>

            <p className="text-xs text-gray-400">
              branden@email.com
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Navbar;