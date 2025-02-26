import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function KerucutCalculator() {
  const navigate = useNavigate();
  const [jariJari, setJariJari] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [garisPelukis, setGarisPelukis] = useState("");
  const [hasil, setHasil] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    if (jariJari && tinggi && garisPelukis) {
      const r = parseFloat(jariJari);
      const t = parseFloat(tinggi);
      const s = parseFloat(garisPelukis);
      
      const volume = (1/3) * Math.PI * r * r * t;
      const luasAlas = Math.PI * r * r;
      const luasSelimut = Math.PI * r * s;
      const luasPermukaan = luasAlas + luasSelimut;
      
      setHasil({
        volume: volume,
        luasPermukaan: luasPermukaan
      });
      setIsCalculated(true);
    } else {
      setHasil(null);
      setIsCalculated(false);
      alert("Masukkan semua nilai yang diperlukan!");
    }
  };

  return (
    <div className="min-h-screen flex grid grid-cols-1 items-center bg-gradient-to-br from-black to-blue-700 py-12 px-4">
      <button 
        onClick={() => navigate('/3d')}
        className="absolute flex items-start ml-5"
      >
        <div className="backdrop-blur-lg rounded-3xl shadow-lg w-24 h-24 flex items-center hover:backdrop-brightness- justify-center shadow-sm shadow-white hover:shadow-lg hover:shadow-white transition duration-200">
          <h1 className="text-white">Kembali</h1>
        </div>
      </button>
      <div className="w-[600px] mx-auto backdrop-brightness-150 backdrop-blur-lg rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-medium text-white mb-6 text-center">
          Kalkulator Kerucut
        </h1>
        
        <div className="space-y-6">
          <div className="p- rounded-lg">
            <label htmlFor="jariJari" className="block text-sm font-medium text-white mb-2">
              Jari-jari (r) dalam cm
            </label>
            <input
              type="number"
              id="jariJari"
              value={jariJari}
              onChange={(e) => setJariJari(e.target.value)}
              placeholder="Masukkan jari-jari"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="p- rounded-lg">
            <label htmlFor="tinggi" className="block text-sm font-medium text-white mb-2">
              Tinggi (t) dalam cm
            </label>
            <input
              type="number"
              id="tinggi"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              placeholder="Masukkan tinggi"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="pb-4 rounded-lg">
            <label htmlFor="garisPelukis" className="block text-sm font-medium text-white mb-2">
              Garis Pelukis (s) dalam cm
            </label>
            <input
              type="number"
              id="garisPelukis"
              value={garisPelukis}
              onChange={(e) => setGarisPelukis(e.target.value)}
              placeholder="Masukkan garis pelukis"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
          >
            Hitung
          </button>

          {isCalculated && hasil !== null && (
            <div className="mt-6 bg-green-50 p-6 rounded-lg border border-green-200">
              <h2 className="text-lg font-semibold text-green-800 mb-2">Hasil Perhitungan</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-green-700">Volume Kerucut:</p>
                  <div className="text-3xl font-bold text-green-600">
                    {hasil.volume.toFixed(2)} cm³
                  </div>
                </div>
                <div>
                  <p className="text-sm text-green-700">Luas Permukaan Kerucut:</p>
                  <div className="text-3xl font-bold text-green-600">
                    {hasil.luasPermukaan.toFixed(2)} cm²
                  </div>
                </div>
              </div>
              <p className="text-sm text-green-700 mt-4">
                Perhitungan dengan jari-jari {jariJari} cm, tinggi {tinggi} cm, dan garis pelukis {garisPelukis} cm
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default KerucutCalculator;