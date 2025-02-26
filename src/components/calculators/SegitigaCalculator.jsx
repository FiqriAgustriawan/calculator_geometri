import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SegitigaCalculator() {
  const navigate = useNavigate();
  const [alas, setAlas] = useState("");
  const [tinggi, setTinggi] = useState("");
  const [luas, setLuas] = useState(null);
  const [keliling, setKeliling] = useState(null);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    if (alas && tinggi) {
      const alasNumber = parseFloat(alas);
      const tinggiNumber = parseFloat(tinggi);
      const resultLuas = (alasNumber * tinggiNumber) / 2;
      const hypotenuse = Math.sqrt(Math.pow(alasNumber, 2) + Math.pow(tinggiNumber, 2));
      const resultKeliling = alasNumber + tinggiNumber + hypotenuse;
      
      setLuas(resultLuas);
      setKeliling(resultKeliling);
      setIsCalculated(true);
    } else {
      setLuas(null);
      setKeliling(null);
      setIsCalculated(false);
      alert("Masukkan nilai alas dan tinggi!");
    }
  };

  return (
    <div className="min-h-screen flex grid grid-cols-1 items-center bg-gradient-to-br from-black to-blue-700 py-12 px-4">
      <button 
        onClick={() => navigate('/2d')}
        className="absolute flex items-start ml-5"
      >
        <div className="backdrop-blur-lg rounded-3xl shadow-lg w-24 h-24 flex items-center hover:backdrop-brightness- justify-center shadow-sm shadow-white hover:shadow-lg hover:shadow-white transition duration-200">
          <h1 className="text-white">Kembali</h1>
        </div>
      </button>
      <div className="w-[600px] mx-auto backdrop-brightness-150 backdrop-blur-lg rounded-3xl shadow-lg p-8">
        <h1 className="text-4xl font-medium text-white mb-6 text-center">
          Kalkulator Segitiga
        </h1>
        
        <div className="space-y-6">
          <div className="p- rounded-lg">
            <label htmlFor="alas" className="block text-sm font-medium text-white mb-2">
              Alas (cm)
            </label>
            <input
              type="number"
              id="alas"
              value={alas}
              onChange={(e) => setAlas(e.target.value)}
              placeholder="Masukkan alas"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div className="pb-4 rounded-lg">
            <label htmlFor="tinggi" className="block text-sm font-medium text-white mb-2">
              Tinggi (cm)
            </label>
            <input
              type="number"
              id="tinggi"
              value={tinggi}
              onChange={(e) => setTinggi(e.target.value)}
              placeholder="Masukkan tinggi"
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
          >
            Hitung Luas dan Keliling
          </button>
{isCalculated && luas !== null && (
            <div className="mt-6 bg-green-50 p-6 rounded-lg border border-green-200">
              <h2 className="text-lg font-semibold text-green-800 mb-2">Hasil Perhitungan</h2>
              <div className="text-3xl font-bold text-green-600">
                {luas.toFixed(2)} cm²
              </div>
              <div className="text-3xl font-bold text-green-600 mt-4">
                {keliling.toFixed(2)} cm
              </div>
              <p className="text-sm text-green-700 mt-2">
                Luas segitiga dengan alas {alas} cm dan tinggi {tinggi} cm.
              </p>
              <p className="text-sm text-green-700 mt-2">
                Keliling segitiga dengan alas {alas} cm dan tinggi {tinggi} cm.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SegitigaCalculator;