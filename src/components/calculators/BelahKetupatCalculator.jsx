import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function BelahKetupatCalculator() {
  const [diagonal1, setDiagonal1] = useState(1)
  const [diagonal2, setDiagonal2] = useState(1)
  const [sisi, setSisi] = useState(1)
  const [hasil, setHasil] = useState({ luas: 0, keliling: 0 })

  useEffect(() => {
    hitungBelahKetupat()
  }, [diagonal1, diagonal2, sisi])

  const hitungBelahKetupat = () => {
    const luas = 0.5 * diagonal1 * diagonal2
    const keliling = 4 * sisi
    setHasil({ luas, keliling })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Kalkulator Belah Ketupat
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-lg text-purple-300 mb-4">Parameter</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Diagonal 1 (d₁)</label>
                    <div className="flex gap-4">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={diagonal1}
                        onChange={(e) => setDiagonal1(Number(e.target.value))}
                        className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                      <input
                        type="number"
                        value={diagonal1}
                        onChange={(e) => setDiagonal1(Number(e.target.value))}
                        className="w-20 bg-gray-700 p-2 rounded-lg text-center text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Diagonal 2 (d₂)</label>
                    <div className="flex gap-4">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={diagonal2}
                        onChange={(e) => setDiagonal2(Number(e.target.value))}
                        className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                      <input
                        type="number"
                        value={diagonal2}
                        onChange={(e) => setDiagonal2(Number(e.target.value))}
                        className="w-20 bg-gray-700 p-2 rounded-lg text-center text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Sisi (s)</label>
                    <div className="flex gap-4">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={sisi}
                        onChange={(e) => setSisi(Number(e.target.value))}
                        className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                      <input
                        type="number"
                        value={sisi}
                        onChange={(e) => setSisi(Number(e.target.value))}
                        className="w-20 bg-gray-700 p-2 rounded-lg text-center text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 p-4 rounded-xl border border-purple-500/20">
                <h4 className="text-sm text-purple-300 mb-2">Rumus</h4>
                <div className="space-y-1 font-mono text-sm">
                  <p className="text-pink-400">Luas = ½ × d₁ × d₂</p>
                  <p className="text-purple-400">Keliling = 4 × s</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Visual Representation */}
            <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/30 aspect-square flex items-center justify-center">
              <div 
                className="w-3/4 h-3/4 relative"
                style={{
                  transform: 'rotate(45deg)',
                  background: 'linear-gradient(135deg, #9333ea20, #db277820)',
                  border: '2px solid rgba(147, 51, 234, 0.3)'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center -rotate-45">
                  <div className="text-xs text-gray-400">
                    <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-purple-500/30 flex justify-between px-2">
                      <span className="bg-gray-800/80 px-1 -mt-3">d₁: {diagonal1}</span>
                    </div>
                    <div className="absolute top-0 bottom-0 left-1/2 border-l border-dashed border-purple-500/30 flex flex-col justify-between py-2">
                      <span className="bg-gray-800/80 px-1 -ml-4">d₂: {diagonal2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30"
              >
                <p className="text-sm text-purple-300 mb-1">Luas</p>
                <p className="text-2xl font-bold text-pink-400">
                  {hasil.luas.toFixed(2)}
                  <span className="text-xs text-gray-500 ml-1">satuan²</span>
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30"
              >
                <p className="text-sm text-purple-300 mb-1">Keliling</p>
                <p className="text-2xl font-bold text-purple-400">
                  {hasil.keliling.toFixed(2)}
                  <span className="text-xs text-gray-500 ml-1">satuan</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default BelahKetupatCalculator