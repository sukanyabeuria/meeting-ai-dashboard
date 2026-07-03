// src/components/AnalyticsChart.jsx

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "1.05", meetings: 22 },
  { day: "2.05", meetings: 32 },
  { day: "3.05", meetings: 18 },
  { day: "4.05", meetings: 28 },
  { day: "5.05", meetings: 36 },
  { day: "6.05", meetings: 30 },
  { day: "7.05", meetings: 45 },
  { day: "8.05", meetings: 26 },
  { day: "9.05", meetings: 22 },
  { day: "10.05", meetings: 40 },
  { day: "11.05", meetings: 29 },
  { day: "12.05", meetings: 38 },
];

function AnalyticsChart() {
  return (
    <div className="bg-[#18181B] rounded-2xl border border-[#2A2A2A] p-6 shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-xl font-semibold text-white">
          General Stats
        </h2>

        <div className="flex gap-2">

          <button className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm">
            Meetings
          </button>

          <button className="bg-[#242424] text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-[#303030]">
            Hours
          </button>

          <button className="bg-[#242424] text-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-[#303030]">
            Participants
          </button>

        </div>
      </div>

      {/* Chart */}
      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid
              stroke="#2A2A2A"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              stroke="#888"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#888"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#18181B",
                border: "1px solid #333",
                borderRadius: "12px",
              }}
              labelStyle={{ color: "#fff" }}
            />

            <Bar
              dataKey="meetings"
              fill="#ff4fd8"
              radius={[8, 8, 0, 0]}
              barSize={22}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsChart;