import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Squares from '../blocks/Backgrounds/Squares/Squares';

function RumusPage() {
  const [activeCategory, setActiveCategory] = useState('2d');
  
  const formulas = {
    '2d': [
      { name: 'Persegi', formulas: ['L = s × s', 'K = 4s'], note: 's = sisi' },
      { name: 'Persegi Panjang', formulas: ['L = p × l', 'K = 2(p + l)'], note: 'p = panjang, l = lebar' },
      { name: 'Segitiga', formulas: ['L = ½ × a × t', 'K = a + b + c'], note: 'a = alas, t = tinggi' },
      { name: 'Jajar Genjang', formulas: ['L = a × t', 'K = 2(a + b)'], note: 'a = alas, t = tinggi' },
      { name: 'Belah Ketupat', formulas: ['L = ½(d₁ × d₂)', 'K = 4s'], note: 'd = diagonal, s = sisi' },
      { name: 'Layang-layang', formulas: ['L = ½(d₁ × d₂)', 'K = 2(x + y)'], note: 'd = diagonal, x,y = sisi' },
      { name: 'Trapesium', formulas: ['L = ½(a + b)t', 'K = a + b + c + d'], note: 'a,b = sisi sejajar, t = tinggi' },
      { name: 'Lingkaran', formulas: ['L = πr²', 'K = 2πr'], note: 'r = jari-jari, π = 3.14' }
    ],
    '3d': [
      { name: 'Kubus', formulas: ['V = s³', 'LP = 6s²'], note: 's = sisi' },
      { name: 'Balok', formulas: ['V = p × l × t', 'LP = 2(pl + pt + lt)'], note: 'p = panjang, l = lebar, t = tinggi' },
      { name: 'Bola', formulas: ['V = 4/3πr³', 'LP = 4πr²'], note: 'r = jari-jari, π = 3.14' },
      { name: 'Kerucut', formulas: ['V = ⅓πr²t', 'LP = πr(r + s)'], note: 'r = jari-jari, s = sisi miring' },
      { name: 'Tabung', formulas: ['V = πr²t', 'LP = 2πr(r + t)'], note: 'r = jari-jari, t = tinggi' },
      { name: 'Limas Segitiga', formulas: ['V = ⅓ × La × t', 'LP = La + Ls'], note: 'La = luas alas, Ls = luas selimut' },
      { name: 'Limas Segiempat', formulas: ['V = ⅓ × La × t', 'LP = La + Ls'], note: 'La = luas alas, t = tinggi' },
      { name: 'Prisma', formulas: ['V = La × t', 'LP = 2La + (Ka × t)'], note: 'La = luas alas, Ka = keliling alas' }
    ]
  };
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.15}
          squareSize={40}
          direction='diagonal'
          borderColor='rgba(255,255,255,0.05)'
          hoverFillColor='rgba(40,40,40,0.5)'
        />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-20 p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Rumus Matematika</h1>
        
        <div className="flex justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCategory('2d')}
            className={`px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base ${
              activeCategory === '2d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            Bangun Datar
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveCategory('3d')}
            className={`px-4 sm:px-6 py-2 rounded-lg transition-colors text-sm sm:text-base ${
              activeCategory === '3d' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            Bangun Ruang
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {formulas[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-gray-800/50 backdrop-blur-sm p-3 sm:p-5 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all"
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-blue-400">{item.name}</h3>
              <div className="space-y-2">
                {item.formulas.map((formula, idx) => (
                  <div key={idx} className="bg-gray-900/50 p-2 rounded">
                    <p className="font-mono text-xs sm:text-sm text-gray-200">{formula}</p>
                  </div>
                ))}
                <div className="mt-2 pt-2 border-t border-gray-700">
                  <p className="text-[10px] sm:text-xs text-gray-400">{item.note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RumusPage;