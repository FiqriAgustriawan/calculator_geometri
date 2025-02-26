import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function TriangularPyramid({ size = 1 }) {
  return (
    <mesh>
      <coneGeometry args={[size, size * 2, 3]} />
      <meshStandardMaterial color="#4ade80" transparent opacity={0.7} />
      <meshStandardMaterial wireframe color="#22c55e" />
    </mesh>
  );
}

function Kite({ width = 1, height = 2 }) {
  return (
    <mesh>
      <boxGeometry args={[width, height, 0.1]} />
      <meshStandardMaterial color="#4ade80" transparent opacity={0.7} />
      <meshStandardMaterial wireframe color="#22c55e" />
    </mesh>
  );
}

function AbiyCalculator() {
  const navigate = useNavigate();
  const [view, setView] = useState("home");
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");
  const [pyramidHeight, setPyramidHeight] = useState("");
  const [side1, setSide1] = useState("");
  const [side2, setSide2] = useState("");
  const [result, setResult] = useState(null);

  const calculateTrianglePyramid = () => {
    const baseValue = parseFloat(base);
    const heightValue = parseFloat(height);
    const pyramidHeightValue = parseFloat(pyramidHeight);

    if (isNaN(baseValue) || isNaN(heightValue) || isNaN(pyramidHeightValue)) {
      setResult("❌ Masukkan semua nilai dengan benar!");
      return;
    }

    const baseArea = (baseValue * heightValue) / 2;
    const volume = (baseArea * pyramidHeightValue) / 3;
    const surfaceArea = baseArea + 3 * ((baseValue * pyramidHeightValue) / 2);
    setResult(`📦 Volume: ${volume.toFixed(2)} cm³\n🔳 Luas Permukaan: ${surfaceArea.toFixed(2)} cm²`);
  };

  const calculateKite = () => {
    const side1Value = parseFloat(side1);
    const side2Value = parseFloat(side2);

    if (isNaN(side1Value) || isNaN(side2Value)) {
      setResult("❌ Masukkan semua nilai dengan benar!");
      return;
    }

    const perimeter = 2 * (side1Value + side2Value);
    setResult(`📏 Keliling: ${perimeter.toFixed(2)} cm`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-700 text-white p-6">
      <button 
        onClick={() => navigate(view === "trianglePyramid" ? '/3d' : '/2d')}
        className="absolute flex items-start ml-5"
      >
        <div className="backdrop-blur-lg rounded-3xl shadow-lg w-24 h-24 flex items-center hover:backdrop-brightness- justify-center shadow-sm shadow-white hover:shadow-lg hover:shadow-white transition duration-200">
          <h1 className="text-white">Kembali</h1>
        </div>
      </button>

      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-center mb-8">
          {view === "home" ? "Pilih Kalkulator" : view === "trianglePyramid" ? "Limas Segitiga" : "Layang-Layang"}
        </h1>

        {view === "home" && (
          <div className="grid grid-cols-2 gap-6">
            <button 
              onClick={() => setView("trianglePyramid")}
              className="p-6 bg-blue-600/50 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:bg-blue-600/70 transition"
            >
              Limas Segitiga
            </button>
            <button 
              onClick={() => setView("kite")}
              className="p-6 bg-blue-600/50 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:bg-blue-600/70 transition"
            >
              Layang-Layang
            </button>
          </div>
        )}

        {(view === "trianglePyramid" || view === "kite") && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="h-[300px] bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
                <Canvas camera={{ position: [2, 2, 2], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  {view === "trianglePyramid" ? <TriangularPyramid /> : <Kite />}
                  <OrbitControls enableZoom={false} />
                  <gridHelper args={[10, 10]} />
                </Canvas>
              </div>

              <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl border border-gray-700">
                <h3 className="text-lg font-semibold mb-2">Rumus:</h3>
                {view === "trianglePyramid" ? (
                  <div className="space-y-1 font-mono text-sm">
                    <p>Volume = (Luas Alas × Tinggi) / 3</p>
                    <p>Luas Permukaan = Luas Alas + 3 × (Luas Segitiga Sisi)</p>
                  </div>
                ) : (
                  <p className="font-mono text-sm">Keliling = 2 × (Sisi 1 + Sisi 2)</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              {view === "trianglePyramid" ? (
                <>
                  <input
                    type="number"
                    placeholder="Alas"
                    value={base}
                    onChange={(e) => setBase(e.target.value)}
                    className="w-full p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
                  />
                  <input
                    type="number"
                    placeholder="Tinggi Alas"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
                  />
                  <input
                    type="number"
                    placeholder="Tinggi Limas"
                    value={pyramidHeight}
                    onChange={(e) => setPyramidHeight(e.target.value)}
                    className="w-full p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
                  />
                </>
              ) : (
                <>
                  <input
                    type="number"
                    placeholder="Sisi 1"
                    value={side1}
                    onChange={(e) => setSide1(e.target.value)}
                    className="w-full p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
                  />
                  <input
                    type="number"
                    placeholder="Sisi 2"
                    value={side2}
                    onChange={(e) => setSide2(e.target.value)}
                    className="w-full p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg border border-gray-700 text-white"
                  />
                </>
              )}

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={view === "trianglePyramid" ? calculateTrianglePyramid : calculateKite}
                  className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                  Hitung
                </button>
                <button
                  onClick={() => setResult(null)}
                  className="p-3 bg-red-600 hover:bg-red-700 rounded-lg transition"
                >
                  Reset
                </button>
              </div>

              <button
                onClick={() => setView("home")}
                className="w-full p-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition"
              >
                Kembali ke Menu
              </button>

              {result && (
                <div className="p-4 bg-blue-900/50 backdrop-blur-sm rounded-lg border border-blue-500/30">
                  <pre className="whitespace-pre-wrap text-center font-semibold">
                    {result}
                  </pre>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AbiyCalculator;