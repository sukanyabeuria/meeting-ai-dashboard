// src/components/TimeSpent.jsx

const members = [
  {
    name: "Elina Lopez",
    role: "Web Designer",
    time: "40h 10m",
    progress: 80,
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Elina Lopez",
    role: "Web Designer",
    time: "40h 10m",
    progress: 70,
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Elina Lopez",
    role: "Web Designer",
    time: "40h 10m",
    progress: 65,
    image: "https://i.pravatar.cc/100?img=18",
  },
];

function TimeSpent() {
  return (
    <div className="bg-[#18181B] border border-[#2A2A2A] rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-xl font-semibold text-white">
            Time Spent In Meetings
          </h2>

          <p className="text-gray-400 text-sm mt-1">
            Participants 25 • Average 10h
          </p>
        </div>

      </div>

      {/* Members */}

      <div className="space-y-6">

        {members.map((member, index) => (

          <div
            key={index}
            className="flex items-center gap-4"
          >

            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">

              <div className="flex justify-between">

                <div>

                  <h3 className="text-white font-medium">
                    {member.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {member.role}
                  </p>

                </div>

                <span className="text-gray-300 text-sm">
                  {member.time}
                </span>

              </div>

              <div className="w-full h-3 bg-[#2E2E34] rounded-full mt-3">

                <div
                  className="h-3 rounded-full bg-pink-500"
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