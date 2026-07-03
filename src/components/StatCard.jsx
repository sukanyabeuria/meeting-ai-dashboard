function StatCard({ title, value, change }) {
  return (
    <div className="bg-[#18181B] border border-gray-800 rounded-2xl p-6 hover:border-pink-500 transition duration-300">

      <h3 className="text-gray-400 text-sm mb-3">
        {title}
      </h3>

      <div className="flex items-center justify-between">

        <h2 className="text-4xl font-bold text-white">
          {value}
        </h2>

        <span className="bg-pink-600/20 text-pink-400 text-xs px-3 py-1 rounded-full">
          {change}
        </span>

      </div>

    </div>
  );
}

export default StatCard;