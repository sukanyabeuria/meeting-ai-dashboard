import {
  FaGoogle,
  FaVideo,
  FaMicrosoft,
} from "react-icons/fa";

const platforms = [
  {
    name: "Google Meet",
    icon: <FaGoogle className="text-green-400" />,
    value: 80,
    color: "bg-pink-500",
  },
  {
    name: "Zoom",
    icon: <FaVideo className="text-blue-400" />,
    value: 60,
    color: "bg-gray-300",
  },
  {
    name: "MS Teams",
    icon: <FaMicrosoft className="text-indigo-400" />,
    value: 50,
    color: "bg-purple-400",
  },
];

function PlatformCard() {
  return (
    <div className="bg-[#18181B] border border-[#2A2A2A] rounded-2xl p-6 shadow-lg">

      <h2 className="text-xl font-semibold text-white mb-6">
        Platforms
      </h2>

      <div className="space-y-6">

        {platforms.map((item, index) => (
          <div key={index}>

            <div className="flex justify-between items-center mb-2">

              <div className="flex items-center gap-3">
                {item.icon}

                <span className="text-gray-200">
                  {item.name}
                </span>
              </div>

              <span className="text-gray-400 text-sm">
                {item.value}%
              </span>

            </div>

            <div className="w-full h-3 bg-[#2D2D2D] rounded-full overflow-hidden">

              <div
                className={`${item.color} h-3 rounded-full transition-all duration-700`}
                style={{
                  width: `${item.value}%`,
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