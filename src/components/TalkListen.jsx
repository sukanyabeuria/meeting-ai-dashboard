// src/components/TalkListen.jsx

const members = [
  {
    name: "Elina Lopez",
    role: "Web Designer",
    talk: 80,
    listen: 26,
    image: "https://i.pravatar.cc/100?img=15",
  },
  {
    name: "Elina Lopez",
    role: "Web Designer",
    talk: 60,
    listen: 20,
    image: "https://i.pravatar.cc/100?img=18",
  },
  {
    name: "Elina Lopez",
    role: "Web Designer",
    talk: 50,
    listen: 10,
    image: "https://i.pravatar.cc/100?img=25",
  },
];

function TalkListen() {
  return (
    <div className="bg-[#18181B] border border-[#2A2A2A] rounded-2xl p-6 shadow-lg">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Talk To Listen Ratio
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          Participants 25
        </p>
      </div>

      {/* Members */}
      <div className="space-y-6">

        {members.map((member, index) => (

          <div key={index} className="flex items-center gap-4">

            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">

              <div className="flex justify-between mb-2">

                <div>
                  <h3 className="text-white font-medium">
                    {member.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {member.role}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-pink-400 text-sm">
                    Talk {member.talk}%
                  </p>

                  <p className="text-gray-400 text-sm">
                    Listen {member.listen}%
                  </p>
                </div>

              </div>

              <div className="w-full h-3 bg-[#2E2E34] rounded-full overflow-hidden">

                <div
                  className="h-full bg-pink-500 rounded-full"
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