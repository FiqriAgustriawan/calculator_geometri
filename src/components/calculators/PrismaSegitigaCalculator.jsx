import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function PrismaSegitigaCalculator() {
  const navigate = useNavigate();
  const [a, setA] = useState("");
  const [t, setT] = useState("");
  const [T, setTinggiPrisma] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const aNum = parseFloat(a);
    const tNum = parseFloat(t);
    const TNum = parseFloat(T);
    if (isNaN(aNum) || isNaN(tNum) || isNaN(TNum) || aNum <= 0 || tNum <= 0 || TNum <= 0) {
      setResult("Masukkan angka yang valid dan lebih dari 0!");
      return;
    }
    const sisiMiring = Math.sqrt(aNum ** 2 + tNum ** 2);
    const kelilingSegitiga = aNum + tNum + sisiMiring;
    const luasSegitiga = (aNum * tNum) / 2;
    const luasPermukaan = kelilingSegitiga * TNum + 2 * luasSegitiga;
    const volume = luasSegitiga * TNum;
    setResult({ lp: luasPermukaan, volume });
  };

  const resetForm = () => {
    setA("");
    setT("");
    setTinggiPrisma("");
    setResult(null);
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-br from-black to-blue-700 relative">
      <button 
        onClick={() => navigate('/3d')}
        className="fixed top-4 left-4 p-3 bg-gray-700 rounded-full hover:bg-gray-600 text-white"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="w-full max-w-lg p-6 backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg border border-gray-300/20">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Kalkulator Prisma Segitiga
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-white font-medium">Alas Segitiga (a) (cm):</label>
            <input type="number" value={a} onChange={(e) => setA(e.target.value)}
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-white font-medium">Tinggi Segitiga (t) (cm):</label>
            <input type="number" value={t} onChange={(e) => setT(e.target.value)}
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-white font-medium">Tinggi Prisma (T) (cm):</label>
            <input type="number" value={T} onChange={(e) => setTinggiPrisma(e.target.value)}
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <button onClick={calculate} className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition-all duration-300">
            Hitung
          </button>
          <button onClick={resetForm} className="w-1/2 bg-red-500 hover:bg-red-600 text-white font-semibold p-3 rounded-lg transition-all duration-300">
            Reset
          </button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-300/20">
            {typeof result === "string" ? (
              <p className="text-red-400 text-center font-semibold">{result}</p>
            ) : (
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2 text-white">Hasil Perhitungan</h3>
                <p className="bg-blue-600/50 backdrop-blur-sm text-white font-bold p-3 rounded-lg">
                  Luas Permukaan (Lp) = {result?.lp?.toFixed(2)} cm²
                </p>
                <p className="bg-blue-600/50 backdrop-blur-sm text-white font-bold p-3 rounded-lg mt-2">
                  Volume = {result?.volume?.toFixed(2)} cm³
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PrismaSegitigaCalculator;