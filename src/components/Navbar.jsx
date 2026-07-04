// src/components/Navbar.jsx

import {
  FaSearch,
  FaBell,
  FaSlidersH,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  return (
    <header className="flex items-center justify-between">

      {/* Search */}
      <div className="relative w-[520px]">

        <FaSearch
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
        />

        <input
          type="text"
          placeholder="Find any discussion point..."
          className="w-full h-14 bg-[#18181B] border border-[#2B2B31] rounded-2xl pl-14 pr-5 text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500 transition-all"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Filter */}

        <button className="flex items-center gap-2 h-14 px-5 rounded-2xl bg-[#18181B] border border-[#2B2B31] hover:border-pink-500 transition">

          <FaSlidersH />

          <span>Filters</span>

          <FaChevronDown className="text-xs" />

        </button>

        {/* Month */}

        <button className="flex items-center gap-2 h-14 px-5 rounded-2xl bg-[#18181B] border border-[#2B2B31] hover:border-pink-500 transition">

          <span>This Month</span>

          <FaChevronDown className="text-xs" />

        </button>

        {/* Notification */}

        <button className="w-14 h-14 rounded-2xl bg-[#18181B] border border-[#2B2B31] flex items-center justify-center hover:border-pink-500 transition">

          <FaBell />

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 bg-[#18181B] border border-[#2B2B31] rounded-2xl px-4 py-2">

          <img
            src="https://i.pravatar.cc/100?img=15"
            alt="profile"
            className="w-11 h-11 rounded-full"
          />

          <div>

            <h3 className="text-white font-semibold text-sm">
              Branden Leo
            </h3>

            <p className="text-xs text-gray-400">
              branden@email.com
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;