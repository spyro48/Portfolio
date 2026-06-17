import { useDarkMode } from "../../context/DarkmodeProvider";

function About() {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`flex flex-col p-6 rounded-md overflow-hidden backdrop-blur-sm border ${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex flex-col gap-4 overflow-y-auto custom-scroll">
        <div className="shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <div
              className={`w-2 h-2 rounded-full ${
                darkMode ? "bg-violet-400" : "bg-violet-500"
              }`}
            />
            <h2
              className={`text-lg font-bold tracking-tight ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              About
            </h2>
          </div>
          <p
            className={`text-xs tracking-widest uppercase font-mono ${
              darkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Who I Am
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <p
            className={`text-xs leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm a fresh graduate of BS Information Systems at Saint Louis
            University, and honestly, I just really enjoy building things
            for the web. I got into Full Stack Development because I like seeing
            ideas turn into something real and functional — something people can
            actually use.
          </p>

          <p
            className={`text-xs leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm the type who learns by doing. I recently completed my OJT at
            Knowles Training Institute (The Umonics Method) in Singapore, where
            I worked on digital content production — editing presentations,
            generating AI voiceovers, video editing, and quality assurance. I
            even took on a team leader role during the later weeks.
          </p>

          <p
            className={`text-xs leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
          Now that I've graduated, I'm actively looking for an opportunity
            where I can apply what I've built and learned. I'm based in Sta.
            Barbara, San Antonio, Nueva Ecija, and I'm 25 — still early in the
            journey but genuinely passionate about where it's going.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
