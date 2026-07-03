// src/components/SentimentChart.jsx

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Positive", value: 34 },
  { name: "Negative", value: 21 },
  { name: "Neutral", value: 45 },
];

const COLORS = [
  "#ff4fd8",
  "#ff7ac8",
  "#4B4B57",
];

function SentimentChart() {
  return (
    <div className="bg-[#18181B] border border-[#2A2A2A] rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <h2 className="text-xl font-semibold text-white mb-6">
        Sentiments
      </h2>

      {/* Donut Chart */}
      <div className="relative h-60">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={62}
              outerRadius={88}
              paddingAngle={3}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#18181B",
                border: "1px solid #333",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <span className="text-gray-400 text-sm">
            Total
          </span>

          <h2 className="text-4xl font-bold text-white">
            100%
          </h2>

        </div>

      </div>

      {/* Legend */}

      <div className="mt-6 space-y-4">

        {data.map((item, index) => (

          <div
            key={index}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: COLORS[index],
                }}
              />

              <span className="text-gray-300">
                {item.name}
              </span>

            </div>

            <span className="text-white font-medium">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SentimentChart;