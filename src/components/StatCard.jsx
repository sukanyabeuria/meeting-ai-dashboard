import {
  FaVideo,
  FaClock,
  FaArrowUp,
} from "react-icons/fa";

function StatCard() {
  return (
    <div className="grid grid-cols-2 gap-5 mb-6">

      {/* Total Meetings */}

      <div
        className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-3xl
        p-6
        shadow-[0_0_60px_rgba(255,0,180,.10)]
        "
      >

        {/* Glow */}

        <div
          className="
          absolute
          -top-16
          -left-16
          h-48
          w-48
          rounded-full
          bg-pink-500/20
          blur-[90px]
          "
        />

        <div className="relative">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div
                className="
                h-12
                w-12
                rounded-2xl
                bg-gradient-to-br
                from-pink-500
                to-fuchsia-600
                flex
                items-center
                justify-center
                shadow-lg
                "
              >
                <FaVideo className="text-white text-lg" />
              </div>

              <div>

                <p className="text-gray-400 text-sm">
                  Total Meetings
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  352
                </h2>

              </div>

            </div>

            <span
              className="
              px-3
              py-1
              rounded-full
              bg-pink-500/20
              text-pink-400
              text-xs
              font-semibold
              "
            >
              +12%
            </span>

          </div>
          {/* Divider */}

          <div className="my-6 h-px bg-white/10" />

          {/* Bottom Stats */}

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                This Month
              </p>

              <h3 className="mt-1 text-xl font-semibold text-white">
                128 Meetings
              </h3>

            </div>

            <div
              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-emerald-500/10
              px-3
              py-2
              "
            >
              <FaArrowUp className="text-emerald-400" />

              <span className="text-sm font-medium text-emerald-400">
                +18%
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Avg Meeting Hours */}

      <div
        className="
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-3xl
        p-6
        shadow-[0_0_60px_rgba(170,0,255,.10)]
        "
      >

        <div
          className="
          absolute
          -bottom-16
          -right-16
          h-48
          w-48
          rounded-full
          bg-purple-500/20
          blur-[90px]
          "
        />

        <div className="relative">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">

              <div
                className="
                h-12
                w-12
                rounded-2xl
                bg-gradient-to-br
                from-violet-500
                to-pink-500
                flex
                items-center
                justify-center
                shadow-lg
                "
              >
                <FaClock className="text-white text-lg" />
              </div>

              <div>

                <p className="text-gray-400 text-sm">
                  Avg. Meeting Hours
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  128h
                </h2>

              </div>

            </div>

            <span
              className="
              px-3
              py-1
              rounded-full
              bg-violet-500/20
              text-violet-300
              text-xs
              font-semibold
              "
            >
              +8%
            </span>

          </div>
          {/* Divider */}

          <div className="my-6 h-px bg-white/10" />

          {/* Bottom */}

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                This Month
              </p>

              <h3 className="mt-1 text-xl font-semibold text-white">
                87 Hours
              </h3>

            </div>

            <div
              className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-pink-500/10
              px-3
              py-2
              "
            >
              <FaArrowUp className="text-pink-400" />

              <span className="text-sm font-medium text-pink-400">
                +12%
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StatCard;