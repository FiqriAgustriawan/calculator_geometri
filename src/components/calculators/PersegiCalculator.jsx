import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PersegiCalculator() {
  const navigate = useNavigate();
  const [side, setSide] = useState("");
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  const calculate = () => {
    const s = parseFloat(side);
    if (!isNaN(s) && s > 0) {
      setPerimeter(4 * s);
      setArea(s * s);
    } else {
      setPerimeter(null);
      setArea(null);
      alert("Masukkan angka yang valid!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-700 flex flex-col items-center justify-center p-4">
      <button 
        onClick={() => navigate('/2d')}
        className="absolute flex items-start ml-5"
      >
        <div className="backdrop-blur-lg rounded-3xl shadow-lg w-24 h-24 flex items-center hover:backdrop-brightness- justify-center shadow-sm shadow-white hover:shadow-lg hover:shadow-white transition duration-200">
          <h1 className="text-white">Kembali</h1>
        </div>
      </button>

      <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-lg w-80 text-center border border-white/20">
        <h2 className="text-xl font-bold mb-4 text-white">Kalkulator Persegi</h2>
        
        <input
          type="number"
          value={side}
          onChange={(e) => setSide(e.target.value)}
          placeholder="Masukkan sisi"
          className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white mb-4"
        />
        <button
          onClick={calculate}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full transition"
        >
          Hitung
        </button>
        {area !== null && (
          <div className="mt-4 space-y-2">
            <p className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 text-white">
              Keliling: {perimeter} cm
            </p>
            <p className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 text-white">
              Luas: {area} cm²
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersegiCalculator;