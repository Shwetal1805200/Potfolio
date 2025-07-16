import { useState, useEffect, useRef } from 'react';

const sampleTexts = [
  "The quick brown fox jumps over the lazy dog.",
  "Learning to type fast helps you code better.",
  "Practice makes perfect. Keep going!",
  "Always remember to write clean code."
];

export default function TypingSpeedTester() {
  const [text, setText] = useState('');
  const [input, setInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    getNewText();
  }, []);

  const getNewText = () => {
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setText(randomText);
    setInput('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(0);
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    const val = e.target.value;
    if (!startTime) {
      setStartTime(new Date());
    }
    if (val.length >= text.length) {
      calculateResults(val);
    }
    setInput(val);
  };

  const calculateResults = (val) => {
    if (!startTime) return;
    const endTime = new Date();
    const timeDiff = (endTime - startTime) / 1000 / 60; // in minutes
    const wordsTyped = val.trim().split(/\s+/).length;
    const calculatedWpm = Math.max(Math.round(wordsTyped / timeDiff), 0);

    const trimmedVal = val.trim().slice(0, text.length);
    const matchCount = text.split('').filter((char, idx) => char === trimmedVal[idx]).length;
    const calculatedAccuracy = Math.max(Math.round((matchCount / text.length) * 100), 0);

    setWpm(calculatedWpm);
    setAccuracy(calculatedAccuracy);
  };

  return (
    <section className="bg-black text-white flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-xl w-full text-center p-6 border border-[#CC66DA] rounded-lg shadow-lg animate-fadeInUp">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9929EA] mb-4">Typing Speed Tester</h1>

        <p className="text-[#FAEB92] mb-6">{text}</p>

        <textarea
          ref={inputRef}
          value={input}
          onChange={handleChange}
          rows={4}
          className="w-full p-4 rounded text-black mb-4"
          placeholder="Start typing here..."
        />

        <button
          onClick={() => calculateResults(input)}
          className="bg-[#FAEB92] text-black px-4 py-2 rounded hover:bg-yellow-300 transition mb-4"
        >
          Finish Test
        </button>

        <div className="mb-4">
          <p className="text-[#FAEB92]">WPM: {wpm}</p>
          <p className="text-[#CC66DA]">Accuracy: {accuracy}%</p>
        </div>

        <button
          onClick={getNewText}
          className="bg-[#9929EA] hover:bg-[#CC66DA] text-white px-6 py-2 rounded transition"
        >
          Restart Test
        </button>
      </div>
    </section>
  );
}
