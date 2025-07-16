import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const isValidEmail = (email) => {
    // Basic email pattern
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic required fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all required fields.');
      return;
    }

    if (!isValidEmail(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }

    if (formData.subject.trim().length < 20) {
      setStatus('Subject must be at least 20 characters long.');
      return;
    }

    if (formData.message.trim().length > 300) {
      setStatus('Message must be less than 300 characters.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-lg w-full text-center p-8 border border-[#CC66DA] rounded-lg shadow-lg animate-fadeInUp">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9929EA] mb-6">Contact Me</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded text-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded text-black"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject (min 20 chars)"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 rounded text-black"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message * (max 300 chars)"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded text-black"
            required
          />

          <button
            type="submit"
            className="bg-[#FAEB92] text-black px-6 py-3 rounded hover:bg-yellow-300 transition w-full"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-[#FAEB92]">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
