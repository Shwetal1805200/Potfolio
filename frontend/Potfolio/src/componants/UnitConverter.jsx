import { useState, useEffect } from 'react';

export default function UnitConverter() {
  const units = [
    { label: 'Centimeters', value: 'cm' },
    { label: 'Meters', value: 'm' },
    { label: 'Kilometers', value: 'km' },
    { label: 'Inches', value: 'in' },
    { label: 'Feet', value: 'ft' },
    { label: 'Miles', value: 'mi' },
  ];

  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('cm');
  const [toUnit, setToUnit] = useState('m');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (inputValue === '') {
      setResult('');
      return;
    }
    convert();
  }, [inputValue, fromUnit, toUnit]);

  const convert = () => {
    const cmValue = toCentimeters(parseFloat(inputValue), fromUnit);
    const converted = fromCentimeters(cmValue, toUnit);
    setResult(converted.toFixed(4));
  };

  const toCentimeters = (value, unit) => {
    switch (unit) {
      case 'cm': return value;
      case 'm': return value * 100;
      case 'km': return value * 100000;
      case 'in': return value * 2.54;
      case 'ft': return value * 30.48;
      case 'mi': return value * 160934;
      default: return value;
    }
  };

  const fromCentimeters = (value, unit) => {
    switch (unit) {
      case 'cm': return value;
      case 'm': return value / 100;
      case 'km': return value / 100000;
      case 'in': return value / 2.54;
      case 'ft': return value / 30.48;
      case 'mi': return value / 160934;
      default: return value;
    }
  };

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full text-center p-8 border border-[#CC66DA] rounded-lg shadow-lg animate-fadeInUp">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9929EA] mb-6">
          Unit Converter
        </h1>

        <input
          type="number"
          placeholder="Enter value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-3 mb-4 rounded text-black"
        />

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="w-full p-3 rounded text-black"
          >
            {units.map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>

          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="w-full p-3 rounded text-black"
          >
            {units.map((unit) => (
              <option key={unit.value} value={unit.value}>
                {unit.label}
              </option>
            ))}
          </select>
        </div>

        <div className="text-[#FAEB92] text-lg font-semibold">
          {result && `${inputValue} ${fromUnit} = ${result} ${toUnit}`}
        </div>
      </div>
    </section>
  );
}
