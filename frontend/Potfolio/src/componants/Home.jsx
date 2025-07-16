// src/components/Home.jsx

export default function Home() {
    return (
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center px-4 py-32 bg-black text-[#FAEB92] min-h-screen"
      >
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-[#9929EA] via-[#CC66DA] to-[#FAEB92] text-transparent bg-clip-text">
            Shwetal Talavdekar
          </span>
        </h1>
  
        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-4 text-[#CC66DA]">
          Full Stack Developer | Java | Spring Boot | React.js
        </p>
  
        {/* Subtext */}
        <p className="text-lg max-w-2xl mb-8 text-[#FAEB92]">
          I build scalable, secure, and production-ready web applications.
          Passionate about solving real-world problems, and always open to relocation & remote opportunities.
        </p>
  
        {/* Call to Action */}
        <a
          href="/projects"
          className="inline-block bg-[#9929EA] hover:bg-[#CC66DA] text-black font-bold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
        >
          View My Projects
        </a>
      </section>
    );
  }
  