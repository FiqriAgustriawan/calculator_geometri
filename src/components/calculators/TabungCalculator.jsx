import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TabungCalculator() {
  const navigate = useNavigate();
  const [radius, setRadius] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [luasSelimut, setLuasSelimut] = useState(null);
  const [luasPermukaan, setLuasPermukaan] = useState(null);
  const [luasAlasTinggi, setLuasAlasTinggi] = useState(null);

  const hitung = () => {
    const r = parseFloat(radius);
    const t = parseFloat(tinggi);

    if (!isNaN(r) && r > 0 && !isNaN(t) && t > 0) {
      const pi = Math.PI;
      const selimut = 2 * pi * r * t;
      const permukaan = selimut + 2 * pi * r * r;
      const alasTinggi = pi * r * r * t;

      setLuasSelimut(selimut);
      setLuasPermukaan(permukaan);
      setLuasAlasTinggi(alasTinggi);
    } else {
      setLuasSelimut(null);
      setLuasPermukaan(null);
      setLuasAlasTinggi(null);
      alert("Masukkan angka yang valid!");
    }
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
        <h2 className="text-xl font-bold mb-4 text-white">Kalkulator Tabung</h2>

        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          placeholder="Masukkan jari-jari (r)"
          className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white mb-4"
        />
        <input
          type="number"
          value={tinggi}
          onChange={(e) => setTinggi(e.target.value)}
          placeholder="Masukkan tinggi (T)"
          className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white mb-4"
        />
        <button
          onClick={hitung}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full transition"
        >
          Hitung
        </button>
        {luasSelimut !== null && luasPermukaan !== null && luasAlasTinggi !== null && (
          <div className="mt-4 space-y-2">
            <p className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 text-white">
              Luas Selimut: {luasSelimut.toFixed(2)} cm²
            </p>
            <p className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 text-white">
              Luas Permukaan: {luasPermukaan.toFixed(2)} cm²
            </p>
            <p className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 text-white">
              Volume: {luasAlasTinggi.toFixed(2)} cm³
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabungCalculator;