// src/components/Projects.jsx

const projects = [
    {
      name: "TownBlend Living",
      description:
        "Developed a scalable full-stack web app using React, Spring Boot, and MySQL. Features secure user authentication, role-based access, and service booking for rentals, WiFi, and utilities. Built RESTful APIs and integrated responsive design for real-world deployment.",
      tech: ["React", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/YourUsername/TownBlend",
      image: "/images/townblend.jpg", // Replace with your local or hosted image
    },
    {
      name: "Typing Speed Game",
      description:
        "Java Swing-based desktop app that fetches random quotes, measures typing speed (WPM), accuracy tracking, and includes difficulty levels and sound feedback for a fun user experience.",
      tech: ["Java", "Swing"],
      github: "https://github.com/YourUsername/TypingSpeedGame",
      image: "/images/typinggame.jpg",
    },
    {
      name: "Snake and Egg",
      description:
        "Classic Java Swing game with real-time keyboard controls. Features collectible eggs, increasing difficulty, a score tracker, and a game loop built from scratch with object-oriented design.",
      tech: ["Java", "Swing"],
      github: "https://github.com/YourUsername/SnakeAndEgg",
      image: "/images/snakeandegg.jpg",
    },
    {
      name: "Placement Cell System",
      description:
        "MERN stack application for managing college placement drives, student profiles, recruiter dashboards, and job postings. Includes admin portal, secure login, and automated email notifications.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/YourUsername/PlacementCell",
      image: "/images/placementcell.jpg",
    },
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="bg-[#000000] py-20 px-6 text-[#FAEB92]">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#CC66DA] animate-fadeInUp">
          Projects
        </h2>
  
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.name}
              className="relative overflow-hidden rounded-lg border border-[#CC66DA] shadow-lg group"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
  
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-2xl font-bold text-[#9929EA] mb-4">
                  {project.name}
                </h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#9929EA] text-black px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#CC66DA] hover:bg-[#FAEB92] text-black font-bold px-4 py-2 rounded transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  