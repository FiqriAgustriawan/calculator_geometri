import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'

function Cube({ size }) {
  return (
    <mesh>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color="#4ade80" transparent opacity={0.7} />
      <meshStandardMaterial wireframe color="#22c55e" />
    </mesh>
  )
}

function KubusCalculator() {
  const [sisi, setSisi] = useState(1)
  const [hasil, setHasil] = useState({ volume: 0, luasPermukaan: 0 })
  const navigate = useNavigate()
  useEffect(() => {
    hitungKubus()
  }, [sisi])
  const hitungKubus = () => {
    const volume = Math.pow(sisi, 3)
    const luasPermukaan = 6 * Math.pow(sisi, 2)
    setHasil({ volume, luasPermukaan })
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Left Side - Calculator */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Kalkulator Kubus
            </h2>
            
            <div className="mb-6 space-y-2">
              <h3 className="text-xl text-gray-300 mb-2">Rumus:</h3>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                <p className="font-mono text-cyan-400">Volume = s³</p>
                <p className="font-mono text-cyan-400">Luas Permukaan = 6s²</p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-gray-300">
                Panjang Sisi (s)
                <div className="flex items-center space-x-4 mt-2">
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={sisi}
                    onChange={(e) => setSisi(Number(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                  />
                  <input
                    type="number"
                    value={sisi}
                    onChange={(e) => setSisi(Number(e.target.value))}
                    className="w-24 bg-gray-700 p-2 rounded-lg text-center"
                    min="0"
                    step="0.1"
                  />
                </div>
              </label>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-700"
          >
            <h3 className="text-lg text-gray-300 mb-3">Hasil Perhitungan</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm mb-1">Volume</p>
                <p className="text-xl font-bold text-cyan-400">{hasil.volume.toFixed(2)} 
                  <span className="text-xs text-gray-500 ml-1">satuan³</span>
                </p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-lg border border-gray-700">
                <p className="text-gray-400 text-sm mb-1">Luas Permukaan</p>
                <p className="text-xl font-bold text-cyan-400">{hasil.luasPermukaan.toFixed(2)} 
                  <span className="text-xs text-gray-500 ml-1">satuan²</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side - 3D Preview */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden"
          style={{ height: '500px' }}
        >
          <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Cube size={sisi} />
            <OrbitControls enableZoom={false} />
            <gridHelper args={[20, 20, '#1f2937', '#1f2937']} />
          </Canvas>
        </motion.div>
      </div>
    </div>
  )
}
<button 
        onClick={() => navigate('/3d')}
        className="absolute flex items-start ml-5"
      >
        <div className="backdrop-blur-lg rounded-3xl shadow-lg w-24 h-24 flex items-center hover:backdrop-brightness- justify-center shadow-sm shadow-white hover:shadow-lg hover:shadow-white transition duration-200">
          <h1 className="text-white">Kembali</h1>
        </div>
      </button>
export default KubusCalculator