import { useDarkMode } from "../../context/DarkmodeProvider";
import { useState } from "react";
import JMTCImg from "../../assets/img/JMTCImg.png";
import PortfolioImg from "../../assets/img/PortfolioImg.png";
import { ChevronDown } from "lucide-react";

function FeaturedProjects() {
  const { darkMode } = useDarkMode();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      name: "JMTC Transport Services",
      description:
        "A full-stack Rental and Administration System for JMTC Transport Service with Maintenance Monitoring. Built with vehicle management, customer reservations, and admin control features. Includes testing and debugging for system reliability, accurate rental processing, and smooth user experience. Designed and optimized the MySQL database schema for managing vehicles, reservations, and user data.",
      link: "jmtc.netlify.app/login",
      code: "",
      image: JMTCImg,
      tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
    },
    {
      name: "My Portfolio",
      description:
        "A personal portfolio website showcasing my projects, skills, certifications, and experience as a Full Stack Developer. Features a responsive design, dark/light mode toggle, and an AI-powered chatbot built with Groq API that answers questions about me in real time.",
      link: "",
      code: "",
      image: PortfolioImg,
      tech: ["Groq AI", "JavaScript", "React", "Vite", "Tailwind CSS"],
    },
  ];

  return (
    <section
      className={`w-full rounded-lg backdrop-blur-sm border flex flex-col gap-6 px-2 sm:px-6 py-6 ${
        darkMode
          ? "bg-[#0f0f0f] border-gray-800 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-white border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      }`}
    >
      <header>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`w-2 h-2 rounded-full ${darkMode ? "bg-red-400" : "bg-red-500"}`}
            />
            <h2
              className={`text-lg font-bold tracking-tight ${darkMode ? "text-white" : "text-black"}`}
            >
              Featured Projects
            </h2>
          </div>
          <div className="relative flex flex-col gap-1.5">
            <div className="relative group">
              <select
                className="input-base w-full cursor-pointer rounded-md appearance-none bg-base-surface border-2 border-[#953E00] outline-none px-3 py-2 text-sm text-text-primary transition-all pr-10"
                style={{ colorScheme: "dark" }}
              >
                <option
                  value="volvo"
                  className="text-black cursor-pointer"
                >
                  Full-stack
                </option>
                <option
                  value="saab"
                  className="text-black cursor-pointer"
                >
                  Front-end
                </option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted group-hover:text-text-primary transition-colors">
                <ChevronDown size={14} />
              </div>
            </div>
          </div>
        </div>
        <p
          className={`text-xs tracking-widest uppercase font-mono ${darkMode ? "text-gray-500" : "text-gray-600"}`}
        >
          Selected works
        </p>
      </header>

      <div className="space-y-4 h-[800px] overflow-y-auto">
        {projects.map((project, index) => (
          <article
            key={index}
            className={`rounded-lg border p-5 transition-all duration-200 ${
              darkMode
                ? "bg-[#1a1a1a] border-gray-700 hover:border-orange-500/50"
                : "bg-gray-50 border-gray-200 hover:border-orange-300"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div
                className={`w-full lg:w-100 h-70 p-3 rounded flex-shrink-0 overflow-hidden ${
                  darkMode ? "bg-black/30" : "bg-gray-100"
                } flex items-center justify-center`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className={`h-full object-contain transition-transform duration-500 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                  onError={(e) => (e.target.style.display = "none")}
                />
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <div>
                  <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-orange-400/70 to-orange-400/70 bg-clip-text text-transparent">
                    {project.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech?.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded font-medium ${
                        darkMode
                          ? "bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 text-gray-200"
                          : "bg-orange-50 hover:bg-orange-100 border border-orange-200 text-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 items-center pt-2 text-sm">
                  {project.link && (
                    <a
                      href={`https://${project.link}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`font-semibold transition-colors ${
                        darkMode
                          ? "text-orange-400/70 hover:text-orange-300/70"
                          : "text-orange-600/70 hover:text-orange-700/70"
                      }`}
                    >
                      View Project <i className="bi bi-arrow-up-right ml-1" />
                    </a>
                  )}
                  {project.code && (
                    <>
                      <span
                        className={darkMode ? "text-gray-600" : "text-gray-400"}
                      >
                        |
                      </span>
                      <a
                        href={`https://${project.code}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`font-semibold transition-colors ${
                          darkMode
                            ? "text-orange-400/70 hover:text-orange-300/70"
                            : "text-orange-600/70 hover:text-orange-700/70"
                        }`}
                      >
                        View Code <i className="bi bi-arrow-up-right ml-1" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProjects;
