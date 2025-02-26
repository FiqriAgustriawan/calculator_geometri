import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'

function Box({ width, height, depth }) {
  return (
    <mesh>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial color="#4ade80" transparent opacity={0.8} />
      <meshStandardMaterial color="#22c55e" wireframe />
    </mesh>
  )
}

function BalokCalculator() {
  const [dimensions, setDimensions] = useState({
    panjang: 2,
    lebar: 1,
    tinggi: 1
  })
  const [results, setResults] = useState({
    volume: 0,
    luasPermukaan: 0
  })

  useEffect(() => {
    calculateResults()
  }, [dimensions])

  const calculateResults = () => {
    const { panjang, lebar, tinggi } = dimensions
    const volume = panjang * lebar * tinggi
    const luasPermukaan = 2 * (
      (panjang * lebar) +
      (panjang * tinggi) +
      (lebar * tinggi)
    )
    setResults({ volume, luasPermukaan })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        {/* Left Panel - Controls */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Kalkulator Balok
            </h2>
            
            <div className="grid gap-6">
              {Object.entries(dimensions).map(([key, value]) => (
                <motion.div 
                  key={key}
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300 capitalize">{key}</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.1"
                    value={value}
                    onChange={(e) => setDimensions(prev => ({
                      ...prev,
                      [key]: parseFloat(e.target.value)
                    }))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => setDimensions(prev => ({
                      ...prev,
                      [key]: parseFloat(e.target.value) || 0
                    }))}
                    className="w-full bg-gray-700 p-2 rounded-lg text-center"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Hasil</h3>
            <div className="grid gap-4">
              <div className="bg-gray-700/50 p-4 rounded-xl">
                <p className="text-gray-400">Volume</p>
                <p className="text-2xl font-bold text-emerald-500">
                  {results.volume.toFixed(2)} satuan³
                </p>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-xl">
                <p className="text-gray-400">Luas Permukaan</p>
                <p className="text-2xl font-bold text-emerald-500">
                  {results.luasPermukaan.toFixed(2)} satuan²
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Panel - 3D Preview */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden"
          style={{ height: '600px' }}
        >
          <Canvas camera={{ position: [4, 4, 4], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Box 
              width={dimensions.panjang} 
              height={dimensions.tinggi} 
              depth={dimensions.lebar}
            />
            <OrbitControls enableZoom={false} />
            <gridHelper args={[10, 10, '#1f2937', '#1f2937']} />
          </Canvas>
        </motion.div>
      </div>
    </div>
  )
}

export default BalokCalculator