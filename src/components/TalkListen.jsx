// src/components/TalkListen.jsx

const members = [
  {
    id: 1,
    name: "Branden Leo",
    role: "Product Manager",
    talk: 78,
    listen: 22,
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    id: 2,
    name: "Sophia Carter",
    role: "UI/UX Designer",
    talk: 62,
    listen: 38,
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    name: "Daniel Smith",
    role: "Frontend Developer",
    talk: 55,
    listen: 45,
    image: "https://i.pravatar.cc/100?img=12",
  },
];

function TalkListen() {
  return (
    <div className="bg-[#18181B] border border-[#2A2A32] rounded-3xl p-6 shadow-xl">

      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold text-white">
          Talk To Listen Ratio
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Meeting Participation
        </p>

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

                <div className="text-right">

                  <p className="text-pink-400 font-semibold text-sm">
                    Talk {member.talk}%
                  </p>

                  <p className="text-gray-400 text-sm">
                    Listen {member.listen}%
                  </p>

                </div>

              </div>

              <div className="w-full h-3 rounded-full bg-[#2D2D35] overflow-hidden">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-700"
                  style={{
                    width: `${member.talk}%`,
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

export default TalkListen;