import { useState } from 'react';

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const apiKey = '0ec0633818f788559ee6bfaaee846a01'; 

  // Fetch weather by city name
  const fetchWeatherByCity = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      updateWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  // Fetch weather by coordinates
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error('Could not fetch weather for location');
      const data = await response.json();
      updateWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  // Handle geolocation request
  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (err) => {
          setError('Permission denied or location unavailable.');
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  // Update weather state and clear errors
  const updateWeather = (data) => {
    setWeather({
      city: data.name,
      temp: data.main.temp,
      condition: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    });
    setError('');
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center p-6 border border-[#CC66DA] rounded-lg shadow-lg animate-fadeInUp">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9929EA] mb-6">Weather App</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 px-4 py-2 rounded text-black"
          />
          <button
            onClick={fetchWeatherByCity}
            className="bg-[#FAEB92] text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
          >
            Get Weather
          </button>
        </div>

        <button
          onClick={handleUseMyLocation}
          className="bg-[#9929EA] hover:bg-[#CC66DA] text-white px-4 py-2 rounded transition mb-4"
        >
          Use My Location
        </button>

        {error && <p className="text-red-400 mb-4">{error}</p>}

        {weather && (
          <div className="text-center">
            <h2 className="text-xl mb-2 text-[#FAEB92]">{weather.city}</h2>
            <img src={weather.icon} alt="weather icon" className="mx-auto mb-4" />
            <p className="text-2xl text-[#FAEB92] mb-2">{weather.temp}°C</p>
            <p className="text-[#CC66DA] capitalize">{weather.condition}</p>
          </div>
        )}
      </div>
    </section>
  );
}
