import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";

const data = [
  { day: "01", meetings: 22 },
  { day: "02", meetings: 34 },
  { day: "03", meetings: 18 },
  { day: "04", meetings: 30 },
  { day: "05", meetings: 41 },
  { day: "06", meetings: 36 },
  { day: "07", meetings: 46 },
  { day: "08", meetings: 33 },
  { day: "09", meetings: 27 },
  { day: "10", meetings: 44 },
  { day: "11", meetings: 38 },
  { day: "12", meetings: 42 },
];

const COLORS = [
  "#FF4FD8",
  "#ffffff",
  "#FF4FD8",
  "#ffffff",
  "#FF4FD8",
  "#ffffff",
  "#FF4FD8",
  "#ffffff",
  "#FF4FD8",
  "#ffffff",
  "#FF4FD8",
  "#ffffff",
];

function AnalyticsChart() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 h-[390px] shadow-[0_0_60px_rgba(255,70,220,.12)]">

      {/* Glow */}

      <div className="absolute w-72 h-72 rounded-full bg-pink-500/20 blur-[120px] -top-24 -right-20"></div>

      <div className="absolute w-60 h-60 rounded-full bg-purple-600/20 blur-[120px] -bottom-20 -left-10"></div>

      {/* Header */}

      <div className="relative flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            General Stats
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Meeting analytics overview
          </p>

        </div>

        <div className="flex gap-2">

          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white text-sm font-semibold shadow-lg">
            Meetings
          </button>

          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm">
            Hours
          </button>

          <button className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm">
            Participants
          </button>

        </div>

      </div>

      {/* Chart */}

      <div className="relative h-[280px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            barGap={8}
            barCategoryGap={18}
          >

            <CartesianGrid
              stroke="#2E2E3A"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9CA3AF",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9CA3AF",
                fontSize: 12,
              }}
            />

            <Tooltip
              cursor={{
                fill: "rgba(255,255,255,.03)",
              }}
              contentStyle={{
                background: "#14141E",
                border: "1px solid #2E2E3A",
                borderRadius: "14px",
                color: "#fff",
              }}
            />
            <Bar
              dataKey="meetings"
              radius={[12, 12, 0, 0]}
              maxBarSize={24}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Bar>

          </BarChart>

        </ResponsiveContainer>

        {/* Bottom Glow */}

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-20 bg-pink-500/20 blur-[70px] rounded-full pointer-events-none" />

      </div>

      {/* Footer */}

      <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4">

        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Total Meetings
          </p>

          <h3 className="text-2xl font-bold text-white mt-1">
            412
          </h3>
        </div>

        <div className="text-right">

          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Growth
          </p>

          <h3 className="text-2xl font-bold text-pink-400 mt-1">
            +18%
          </h3>

        </div>

      </div>

    </div>
  );
}

export default AnalyticsChart;