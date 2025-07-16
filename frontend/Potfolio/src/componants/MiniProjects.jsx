// src/pages/MiniProjects.jsx

import { Link } from 'react-router-dom';

const projects = [
  {
    name: 'Quote Generator',
    description: 'Fetches a random inspirational quote using a free API. Includes copy-to-clipboard and toggle themes. 100% client-side.',
    link: '/projects/quote-generator',
  },
  {
    name: 'Weather App',
    description: 'Simple weather app using OpenWeatherMap API. Search any city and see current temperature, humidity, and condition.',
    link: '/projects/weather-app',
  },
  {
    name: 'Typing Speed Tester',
    description: 'Test your typing speed (WPM) and accuracy with real-time stats. Pure React — runs fully in the browser!',
    link: '/projects/typing-speed-tester',
  },
  {
    name: 'Contact Form',
    description: 'A modern contact form connected with Netlify or Formspree for submissions. No backend needed.',
    link: '/projects/contact-form',
  },
  {
    name: 'Image Gallery',
    description: 'Responsive gallery showcasing personal photos or project screenshots. Hover to preview, click to view larger.',
    link: '/projects/gallery',
  },
  {
    name: 'Unit Converter',
    description: 'Convert units for length, temperature, weight, etc. All logic handled client-side with instant results.',
    link: '/projects/unit-converter',
  },
];

export default function MiniProjects() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#9929EA] mb-12 text-center animate-fadeInUp">
          Mini Projects
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.name}
              to={project.link}
              className="relative group block border border-[#CC66DA] rounded-lg overflow-hidden p-6 hover:bg-[#111] transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#FAEB92] mb-2 group-hover:text-[#CC66DA] transition">
                {project.name}
              </h2>
              <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition duration-300">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
