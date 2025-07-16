import { useState } from 'react';

export default function Gallery() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('');

  const fetchImages = async (e) => {
    e.preventDefault();
    setStatus('Loading...');

    try {
      const accessKey = '5o2Ldg71XpeVxNMeWDsRi8FNCqc0dJqkh0HiFxRBzvk'; // ✅ Replace with your key
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${query}&per_page=12&client_id=${accessKey}`
      );
      const data = await response.json();
      setImages(data.results);
      setStatus('');
    } catch (error) {
      console.error(error);
      setStatus('Error fetching images.');
    }
  };

  return (
    <section className="bg-black text-white min-h-screen px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#9929EA] mb-6">
          Image Gallery
        </h1>

        <form onSubmit={fetchImages} className="mb-8 flex flex-col md:flex-row justify-center gap-4">
          <input
            type="text"
            placeholder="Enter image type (e.g., Ghibli, cats)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-3 w-full md:w-1/2 rounded text-black"
            required
          />
          <button
            type="submit"
            className="bg-[#FAEB92] text-black px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            Search
          </button>
        </form>

        {status && <p className="mb-4 text-[#FAEB92]">{status}</p>}

        {images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img) => (
              <div key={img.id} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={img.urls.small}
                  alt={img.alt_description}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <p className="text-lg text-[#FAEB92] font-semibold px-2 text-center">
                    {img.alt_description || 'Untitled'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
