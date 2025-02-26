import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TrapesiumCalculator() {
  const navigate = useNavigate();
  const [sisiA, setSisiA] = useState(0);
  const [sisiB, setSisiB] = useState(0);
  const [tinggi, setTinggi] = useState(0);
  const [sisiC, setSisiC] = useState(0);
  const [sisiD, setSisiD] = useState(0);
  const [luas, setLuas] = useState(null);
  const [keliling, setKeliling] = useState(null);

  const hitungLuas = () => {
    const hasilLuas = ((sisiA + sisiB) * tinggi) / 2;
    setLuas(hasilLuas);
  };

  const hitungKeliling = () => {
    const hasilKeliling = sisiA + sisiB + sisiC + sisiD;
    setKeliling(hasilKeliling);
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

      <div className="backdrop-blur-lg bg-white/10 p-6 rounded-2xl shadow-lg w-96 text-center border border-white/20">
        <h1 className="text-2xl font-bold text-white mb-6">Kalkulator Trapesium</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-white mb-2">Panjang sisi A (cm): </label>
            <input
              type="number"
              value={sisiA}
              onChange={(e) => setSisiA(Number(e.target.value))}
              className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Panjang sisi B (cm): </label>
            <input
              type="number"
              value={sisiB}
              onChange={(e) => setSisiB(Number(e.target.value))}
              className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Tinggi (cm): </label>
            <input
              type="number"
              value={tinggi}
              onChange={(e) => setTinggi(Number(e.target.value))}
              className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Panjang sisi C (cm): </label>
            <input
              type="number"
              value={sisiC}
              onChange={(e) => setSisiC(Number(e.target.value))}
              className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
            />
          </div>
          <div>
            <label className="block text-white mb-2">Panjang sisi D (cm): </label>
            <input
              type="number"
              value={sisiD}
              onChange={(e) => setSisiD(Number(e.target.value))}
              className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={hitungLuas}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Hitung Luas
            </button>
            <button 
              onClick={hitungKeliling}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Hitung Keliling
            </button>
          </div>

          <div className="space-y-2">
            {luas !== null && (
              <p className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 text-white">
                Luas Trapesium: {luas} cm²
              </p>
            )}
            {keliling !== null && (
              <p className="bg-blue-900/50 backdrop-blur-sm p-2 rounded-lg border border-blue-500/30 text-white">
                Keliling Trapesium: {keliling} cm
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrapesiumCalculator;