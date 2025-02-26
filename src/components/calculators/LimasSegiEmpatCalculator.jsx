import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LimasSegiEmpatCalculator() {
  const navigate = useNavigate();
  const [sisi, setSisi] = useState(0);
  const [tinggiAlas, setTinggiAlas] = useState(0);
  const [tinggiLimas, setTinggiLimas] = useState(0);
  const [luasPermukaan, setLuasPermukaan] = useState(null);
  const [volume, setVolume] = useState(null);

  const hitungLuasPermukaan = () => {
    const luasAlas = sisi * sisi;
    const luasSegitiga = (sisi * tinggiLimas) / 2;
    const luasMuka = 4 * luasSegitiga;
    const hasilLuasPermukaan = luasAlas + luasMuka;
    setLuasPermukaan(hasilLuasPermukaan);
  };

  const hitungVolume = () => {
    const luasAlas = sisi * sisi;
    const hasilVolume = (1 / 3) * luasAlas * tinggiLimas;
    setVolume(hasilVolume);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-700 flex flex-col items-center justify-center p-4">
      <button 
        onClick={() => navigate('/3d')}
        className="absolute flex items-start ml-5"
      >
        <div className="backdrop-blur-lg rounded-3xl shadow-lg w-24 h-24 flex items-center hover:backdrop-brightness- justify-center shadow-sm shadow-white hover:shadow-lg hover:shadow-white transition duration-200">
          <h1 className="text-white">Kembali</h1>
        </div>
      </button>

      <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-lg w-96 text-center border border-white/20">
        <h1 className="text-2xl font-bold text-white mb-6">Kalkulator Limas Segi Empat</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-white mb-2">Panjang sisi alas (cm): </label>
            <input
              type="number"
              value={sisi}
              onChange={(e) => setSisi(Number(e.target.value))}
              className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Tinggi alas (cm): </label>
            <input
              type="number"
              value={tinggiAlas}
              onChange={(e) => setTinggiAlas(Number(e.target.value))}
              className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Tinggi limas (cm): </label>
            <input
              type="number"
              value={tinggiLimas}
              onChange={(e) => setTinggiLimas(Number(e.target.value))}
              className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={hitungLuasPermukaan}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Hitung Luas Permukaan
            </button>
            <button 
              onClick={hitungVolume}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Hitung Volume
            </button>
          </div>

          <div className="space-y-2">
            {luasPermukaan !== null && (
              <p className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 text-white">
                Luas Permukaan Limas: {luasPermukaan} cm²
              </p>
            )}
            {volume !== null && (
              <p className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 text-white">
                Volume Limas: {volume} cm³
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LimasSegiEmpatCalculator;