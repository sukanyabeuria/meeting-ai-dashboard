// src/components/PlatformCard.jsx

import {
  FaGoogle,
  FaMicrosoft,
} from "react-icons/fa";

import { SiZoom } from "react-icons/si";

const platforms = [
  {
    name: "Google Meet",
    meetings: "138 Meetings",
    percent: 85,
    color: "#ff4fd8",
    icon: <FaGoogle className="text-green-400 text-lg" />,
  },
  {
    name: "Zoom",
    meetings: "96 Meetings",
    percent: 65,
    color: "#ffffff",
    icon: <SiZoom className="text-sky-400 text-lg" />,
  },
  {
    name: "Microsoft Teams",
    meetings: "74 Meetings",
    percent: 45,
    color: "#9D8CFF",
    icon: <FaMicrosoft className="text-blue-400 text-lg" />,
  },
];

function PlatformCard() {
  return (
    <div className="bg-[#18181B] border border-[#2A2A32] rounded-3xl p-6 shadow-xl">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-white">
          Platforms
        </h2>

        <span className="text-gray-400 text-sm">
          Last 30 Days
        </span>

      </div>

      <div className="space-y-6">

        {platforms.map((item, index) => (

          <div key={index}>

            <div className="flex justify-between items-center mb-2">

              <div className="flex items-center gap-3">

                {item.icon}

                <div>

                  <h3 className="text-white font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {item.meetings}
                  </p>

                </div>

              </div>

              <span className="text-gray-300 font-semibold">
                {item.percent}%
              </span>

            </div>

            <div className="w-full h-3 rounded-full bg-[#2C2C35] overflow-hidden">

              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${item.percent}%`,
                  background: item.color,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default PlatformCard;