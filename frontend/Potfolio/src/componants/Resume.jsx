// src/pages/Resume.jsx

export default function Resume() {
    return (
      <section className="bg-black text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-bold text-[#9929EA] mb-2">
              Shwetal Talavdekar
            </h1>
            <p className="text-lg text-[#FAEB92]">Full Stack Developer</p>
            <p className="mt-2 text-gray-300">
              Navi Mumbai – 400705 | shwetalt856@gmail.com | +91 80828 38403
            </p>
            <div className="flex justify-center gap-6 mt-4 text-[#CC66DA]">
              <a
                href="https://github.com/Shwetal1805200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/shwetal-talavdekar-a1354b139"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
  
          {/* Summary */}
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-[#FAEB92] border-b border-[#CC66DA] pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-300">
              Full Stack Developer with hands-on experience in Java, Spring Boot,
              React.js, REST APIs, and SQL/NoSQL databases. Skilled in developing
              and deploying scalable, microservices-based web applications using
              Agile practices. Delivered secure and production-grade financial
              software for clients like MPSeDC and IDBI Bank. Known for strong
              problem-solving, backend logic building, API integration, unit
              testing, and efficient team collaboration. Quick learner who thrives
              in fast-paced, multi-tasking environments and enjoys taking
              ownership of real-world projects.
            </p>
          </div>
  
          {/* Experience */}
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-[#FAEB92] border-b border-[#CC66DA] pb-2">
              Professional Experience
            </h2>
            <p className="font-semibold text-[#CC66DA]">
              Software Developer — IDBI Intech, Mumbai | July 2024 – Present
            </p>
            <ul className="list-disc ml-6 text-gray-300 space-y-1">
              <li>
                Developed a secure transaction processing module for MPSeDC using
                Java, JSP, and Servlets.
              </li>
              <li>
                Enhanced mandate and ACH handling features in the i-NACH product
                for IDBI, RBL, and J&amp;K Banks.
              </li>
              <li>
                Implemented SFTP and SMTP-based API integrations for mandate
                registration at NPCI, ensuring real-time transaction validation.
              </li>
              <li>
                Sound knowledge of SWIFT messaging system for cross-border
                financial compliance.
              </li>
              <li>
                Integrated RESTful APIs and ensured compliance with enterprise
                architecture standards.
              </li>
              <li>
                Strengthened backend processing with improved logic and data
                validation in high-volume systems.
              </li>
              <li>
                Followed Agile methodology with bi-weekly sprints, thorough code
                reviews, and continuous integration practices.
              </li>
              <li>
                Collaborated closely with QA, infrastructure, and client teams to
                deploy stable and secure applications.
              </li>
            </ul>
          </div>
  
          {/* Education */}
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-[#FAEB92] border-b border-[#CC66DA] pb-2">
              Education
            </h2>
            <ul className="list-none text-gray-300 space-y-2">
              <li>
                <strong>Centre for Development of Advanced Computing (C-DAC)</strong>{' '}
                — PG-DAC, 2024
              </li>
              <li>
                <strong>MGM College of Engineering, Navi Mumbai</strong> — BE
                (Mechanical), 2022
              </li>
              <li>
                <strong>Bharati Vidyapeeth Institute of Technology, Navi Mumbai</strong>{' '}
                — Diploma in Engineering, 2016–2019
              </li>
            </ul>
          </div>
  
          {/* Technical Skills */}
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-2xl font-bold text-[#FAEB92] border-b border-[#CC66DA] pb-2">
              Technical Skills
            </h2>
            <p className="text-gray-300">
              <strong>Languages &amp; Frameworks:</strong> Java, C#, JavaScript,
              J2EE, Spring Boot, MS.NET
              <br />
              <strong>Frontend:</strong> React.js, JSP, Servlets
              <br />
              <strong>Backend:</strong> Core Java, JDBC, REST APIs
              <br />
              <strong>Database:</strong> MySQL, Oracle SQL, NoSQL (basic)
              <br />
              <strong>Tools &amp; Technologies:</strong> Git, GitHub, JSON, XML,
              Java Swing, Postman
              <br />
              <strong>Architecture:</strong> Microservices, MVC
              <br />
              <strong>DevOps:</strong> CI/CD basics
              <br />
              <strong>Testing:</strong> Selenium
              <br />
              <strong>Methodologies:</strong> Agile, Scrum
              <br />
              <strong>Operating Systems:</strong> Windows, RHEL Linux, AIX
            </p>
          </div>
  
          {/* Download Resume */}
          <div className="text-center mt-12 animate-fadeInUp">
            <a
              href="/document/Shwetal_Talavdekar_Resume_23-06-2025.pdf"
              download
              className="inline-block bg-[#FAEB92] text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              📄 Download Resume PDF
            </a>
          </div>
        </div>
      </section>
    );
  }
  