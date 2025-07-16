import { useState, useEffect } from 'react';

export default function QuoteGenerator() {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [copied, setCopied] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote({
        content: 'Keep going. Everything you need will come to you at the perfect time.',
        author: 'Unknown'
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote.content}" — ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="bg-black text-white flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-3xl text-center p-6 border border-[#CC66DA] rounded-lg shadow-lg animate-fadeInUp">
        <p className="text-xl md:text-2xl text-[#FAEB92] mb-4">&ldquo;{quote.content}&rdquo;</p>
        <p className="text-[#CC66DA] mb-6">— {quote.author}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={fetchQuote}
            className="bg-[#9929EA] hover:bg-[#CC66DA] text-white px-6 py-2 rounded transition"
          >
            New Quote
          </button>
          <button
            onClick={copyToClipboard}
            className="bg-[#FAEB92] text-black hover:bg-yellow-300 px-6 py-2 rounded transition"
          >
            {copied ? 'Copied!' : 'Copy Quote'}
          </button>
        </div>
      </div>
    </section>
  );
}
