// src/components/Footer.jsx

export default function Footer() {
  return (
    <footer className="bg-black text-[#CC66DA] py-8 mt-auto">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
        {/* Personal Tagline */}
        <p className="mb-4 max-w-xl text-[#FAEB92]">
          SHWETAL TALAVDEKAR 
        </p>
        <p className="mb-4 max-w-xl text-[grey]">
          FULL STACK DEVELOPER | JAVA | SPRING BOOT | REACT | MONGODB | SQL | HTML | CSS | JAVASCRIPT | GIT | GITHUB | NETLIFY |
        </p>
        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <a
            href="https://www.linkedin.com/in/shwetal-talavdekar-a1354b139/"  // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9929EA] transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Shwetal1805200"  // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9929EA] transition"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/_shwet_18"  // Optional: Replace or remove
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9929EA] transition"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/shwet18"  // Optional: Replace or remove
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9929EA] transition"
          >
            Facebook
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#CC66DA]">
          &copy; {new Date().getFullYear()} Shwetal Talavdekar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
