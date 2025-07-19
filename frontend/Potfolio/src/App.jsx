import { Routes, Route } from 'react-router-dom';
import Navbar from './componants/Navbar';
import Home  from './componants/Home';
import Footer  from './componants/Footer';
import Projects from './componants/Projects';
import Resume from './componants/Resume';
import MiniProjects from './componants/MiniProjects';
import QuoteGenerator from './componants/QuoteGenerator';
import WeatherApp from './componants/WeatherApp';
import TypingSpeedTester from './componants/TypingSpeedTester';
import ContactForm from './componants/ContactForm';
import UnitConverter from './componants/UnitConverter';
import Gallery from './componants/Gallery';
import Chatbot from './componants/Chatbot';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} /> 
        {/* `<Route path="/hobbies" element={<Hobbies />} / */}
        <Route path="/MiniProjects" element={<MiniProjects />} />
        <Route path="/projects/quote-generator" element={<QuoteGenerator />} />
        <Route path="/projects/weather-app" element={<WeatherApp />} /> 
        <Route path="/projects/typing-speed-tester" element={<TypingSpeedTester />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/projects/unit-converter" element={<UnitConverter />} />
        <Route path="/projects/gallery" element={<Gallery />} />
      </Routes> 
      <Chatbot />
      <Footer />
    </div>
  );
}
