import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AkramCalculator() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('circle');
  const [circleRadius, setCircleRadius] = useState('');
  const [sphereRadius, setSphereRadius] = useState('');
  const [circleResults, setCircleResults] = useState({ area: null, circumference: null });
  const [sphereResults, setSphereResults] = useState({ surfaceArea: null, volume: null });

  const calculateCircle = () => {
    const r = parseFloat(circleRadius);
    if (!isNaN(r) && r > 0) {
      const area = Math.PI * r * r;
      const circumference = 2 * Math.PI * r;
      setCircleResults({ area, circumference });
    }
  };

  const calculateSphere = () => {
    const r = parseFloat(sphereRadius);
    if (!isNaN(r) && r > 0) {
      const surfaceArea = 4 * Math.PI * r * r;
      const volume = (4/3) * Math.PI * Math.pow(r, 3);
      setSphereResults({ surfaceArea, volume });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-700 flex flex-col items-center justify-center p-4">
      <button 
        onClick={() => navigate(activeTab === 'circle' ? '/2d' : '/3d')}
        className="absolute flex items-start ml-5"
      >
        <div className="backdrop-blur-lg rounded-3xl shadow-lg w-24 h-24 flex items-center hover:backdrop-brightness- justify-center shadow-sm shadow-white hover:shadow-lg hover:shadow-white transition duration-200">
          <h1 className="text-white">Kembali</h1>
        </div>
      </button>

      <div className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg w-full max-w-md border border-white/20">
        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          <button
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === 'circle'
                ? 'bg-blue-600/50 border-b-2 border-blue-400 text-white'
                : 'text-gray-300 hover:bg-blue-600/30'
            }`}
            onClick={() => setActiveTab('circle')}
          >
            Lingkaran
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center ${
              activeTab === 'sphere'
                ? 'bg-blue-600/50 border-b-2 border-blue-400 text-white'
                : 'text-gray-300 hover:bg-blue-600/30'
            }`}
            onClick={() => setActiveTab('sphere')}
          >
            Bola
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Circle Calculator */}
          <div className={activeTab === 'circle' ? 'block' : 'hidden'}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Jari-jari Lingkaran (cm)
                </label>
                <input
                  type="number"
                  value={circleRadius}
                  onChange={(e) => setCircleRadius(e.target.value)}
                  placeholder="Masukkan jari-jari"
                  className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
                />
              </div>
              <button
                onClick={calculateCircle}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
              >
                Hitung
              </button>
              {circleResults.area !== null && (
                <div className="space-y-4">
                  <div className="bg-blue-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
                    <h3 className="font-semibold text-white">Luas Lingkaran:</h3>
                    <p className="text-lg text-blue-300">{circleResults.area.toFixed(2)} cm²</p>
                    <p className="text-sm text-gray-300">
                      L = πr² = π × {circleRadius}²
                    </p>
                  </div>
                  <div className="bg-blue-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
                    <h3 className="font-semibold text-white">Keliling Lingkaran:</h3>
                    <p className="text-lg text-blue-300">{circleResults.circumference.toFixed(2)} cm</p>
                    <p className="text-sm text-gray-300">
                      K = 2πr = 2π × {circleRadius}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sphere Calculator */}
          <div className={activeTab === 'sphere' ? 'block' : 'hidden'}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Jari-jari Bola (cm)
                </label>
                <input
                  type="number"
                  value={sphereRadius}
                  onChange={(e) => setSphereRadius(e.target.value)}
                  placeholder="Masukkan jari-jari"
                  className="w-full p-2 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
                />
              </div>
              <button
                onClick={calculateSphere}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
              >
                Hitung
              </button>
              {sphereResults.surfaceArea !== null && (
                <div className="space-y-4">
                  <div className="bg-blue-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
                    <h3 className="font-semibold text-white">Luas Permukaan Bola:</h3>
                    <p className="text-lg text-blue-300">{sphereResults.surfaceArea.toFixed(2)} cm²</p>
                    <p className="text-sm text-gray-300">
                      L = 4πr² = 4π × {sphereRadius}²
                    </p>
                  </div>
                  <div className="bg-blue-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/30">
                    <h3 className="font-semibold text-white">Volume Bola:</h3>
                    <p className="text-lg text-blue-300">{sphereResults.volume.toFixed(2)} cm³</p>
                    <p className="text-sm text-gray-300">
                      V = 4/3πr³ = 4/3π × {sphereRadius}³
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AkramCalculator;