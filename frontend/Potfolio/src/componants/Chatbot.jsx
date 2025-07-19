import { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'ai', content: data.reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'ai', content: 'Error fetching response.' }]);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (chatRef.current && !chatRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <div
        ref={chatRef}
        className={`${
          isOpen
            ? 'scale-100 opacity-100'
            : 'scale-0 opacity-0 pointer-events-none'
        } transform transition-all duration-300 origin-bottom-right w-80 h-[450px] bg-black border border-[#CC66DA] rounded-xl shadow-lg flex flex-col overflow-hidden`}
      >
        <div className="bg-[#9929EA] text-white font-bold p-3">Ask Shwetal 🤖</div>
        <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm text-white bg-[#0f0f0f]">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-md ${
                msg.role === 'user'
                  ? 'bg-[#FAEB92] text-black self-end'
                  : 'bg-[#CC66DA]'
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>
        <div className="flex p-2 gap-2 border-t border-[#CC66DA]">
          <input
            type="text"
            placeholder="Type your question..."
            className="flex-1 px-3 py-2 rounded-md text-black"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-[#FAEB92] text-black px-3 py-2 rounded-md hover:bg-yellow-300 transition"
          >
            Send
          </button>
        </div>
      </div>

      {/* Floating Icon */}
      <button
        className="w-14 h-14 mt-3 bg-[#9929EA] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#CC66DA] transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
      >
        💬
      </button>
    </div>
  );
}
