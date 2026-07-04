// src/components/SentimentChart.jsx

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Positive", value: 34 },
  { name: "Negative", value: 21 },
  { name: "Neutral", value: 45 },
];

const COLORS = [
  "#ff4fd8",
  "#ff8ae6",
  "#686B78",
];

function SentimentChart() {
  return (
    <div className="bg-[#18181B] border border-[#2A2A32] rounded-3xl p-6 shadow-xl">

      {/* Header */}

      <h2 className="text-2xl font-bold text-white mb-6">
        Sentiments
      </h2>

      {/* Chart */}

      <div className="relative h-[240px]">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={68}
              outerRadius={90}
              paddingAngle={3}
              stroke="none"
            >

              {data.map((item, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>

        {/* Center Text */}

        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <p className="text-gray-400 text-sm">
            Total
          </p>

          <h2 className="text-5xl font-bold text-white">
            100%
          </h2>

        </div>

      </div>

      {/* Legend */}

      <div className="mt-8 space-y-4">

        {data.map((item, index) => (

          <div
            key={index}
            className="flex justify-between items-center"
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

            <span className="text-white font-semibold">
              {item.value}%
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SentimentChart;