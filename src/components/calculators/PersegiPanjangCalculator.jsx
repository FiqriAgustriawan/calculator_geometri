import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PersegiPanjangCalculator() {
  const navigate = useNavigate();
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [area, setArea] = useState(null);
  const [perimeter, setPerimeter] = useState(null);

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (!isNaN(l) && !isNaN(w) && l > 0 && w > 0) {
      setArea(l * w);
      setPerimeter(2 * (l + w));
    } else {
      setArea(null);
      setPerimeter(null);
      alert('Masukkan angka yang valid!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-600 flex flex-col items-center justify-center p-4">
      <button 
        onClick={() => navigate('/2d')}
        className="absolute flex items-start ml-5"
      >
        <div className="backdrop-blur-lg rounded-3xl shadow-lg w-24 h-24 flex items-center hover:backdrop-brightness- justify-center shadow-sm shadow-white hover:shadow-lg hover:shadow-white transition duration-200">
          <h1 className="text-white">Kembali</h1>
        </div>
      </button>

      <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-lg w-[800px] text-center border border-white/20">
        <h2 className="text-3xl font-bold mb-8 text-white">Kalkulator Persegi Panjang</h2>
        
        <div className="flex gap-8">
          {/* Input Section */}
          <div className="flex-1 space-y-6">
            <div className="relative">
              <label className="block text-white mb-2 text-left text-sm">Panjang (cm)</label>
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-purple-500/30 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Masukkan panjang"
              />
            </div>

            <div className="relative">
              <label className="block text-white mb-2 text-left text-sm">Lebar (cm)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-purple-500/30 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 transition-all"
                placeholder="Masukkan lebar"
              />
            </div>

            <button
              onClick={calculate}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 font-semibold"
            >
              Hitung
            </button>
          </div>

          {/* Results Section */}
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div className="bg-purple-900/50 backdrop-blur-sm p-4 rounded-lg border border-purple-500/30">
              <h3 className="text-purple-300 text-sm mb-1">Luas</h3>
              <p className="text-2xl font-bold text-white">{area !== null ? `${area} cm²` : '-'}</p>
              <p className="text-xs text-purple-200 mt-1">
                L = p × l = {length || '0'} × {width || '0'}
              </p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
              <h3 className="text-blue-300 text-sm mb-1">Keliling</h3>
              <p className="text-2xl font-bold text-white">{perimeter !== null ? `${perimeter} cm` : '-'}</p>
              <p className="text-xs text-blue-200 mt-1">
                K = 2(p + l) = 2({length || '0'} + {width || '0'})
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersegiPanjangCalculator;