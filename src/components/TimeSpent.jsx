// src/components/TimeSpent.jsx

const members = [
  {
    id: 1,
    name: "Branden Leo",
    role: "Product Manager",
    hours: "42h 18m",
    progress: 90,
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "UI/UX Designer",
    hours: "38h 42m",
    progress: 78,
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    name: "Daniel Smith",
    role: "Frontend Developer",
    hours: "35h 20m",
    progress: 70,
    image: "https://i.pravatar.cc/100?img=12",
  },
];

function TimeSpent() {
  return (
    <div className="bg-[#18181B] border border-[#2A2A32] rounded-3xl p-6 shadow-xl">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Time Spent In Meetings
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Participants • Last 30 Days
          </p>

        </div>

      </div>

      {/* Members */}

      <div className="space-y-7">

        {members.map((member) => (

          <div
            key={member.id}
            className="flex items-center gap-4"
          >

            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">

              <div className="flex justify-between mb-2">

                <div>

                  <h3 className="text-white font-semibold">
                    {member.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {member.role}
                  </p>

                </div>

                <span className="text-pink-400 font-semibold">
                  {member.hours}
                </span>

              </div>

              <div className="w-full h-3 rounded-full bg-[#2D2D35] overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-700"
                  style={{
                    width: `${member.progress}%`,
                  }}
                />

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TimeSpent;