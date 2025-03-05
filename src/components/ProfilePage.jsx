import React from 'react';
import { motion } from 'framer-motion';
import Squares from '../blocks/Backgrounds/Squares/Squares';

function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.15}
          squareSize={40}
          direction='diagonal'
          borderColor='rgba(255,255,255,0.05)'
          hoverFillColor='rgba(40,40,40,0.5)'
        />
      </div>

      <div className="relative z-10 p-8">
        {/* Header Section */}
        <div className="flex items-center gap-8 mb-8">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500/30"
          >
            <img 
              src="/logo geometri.png" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div>
            <h1 className="text-4xl font-bold mb-2">Calculator Geometri</h1>
            <p className="text-gray-400">Mathematics Learning App</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• 8 Bangun Datar</li>
              <li>• 8 Bangun Ruang</li>
              <li>• Rumus Lengkap</li>
              <li>• AI Assistant</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Team</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Raja Fiqri</li>
              <li>• Hilal</li>
              <li>• Faras</li>
              <li>• Daniel</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
          >
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Contributors</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Akram</li>
              <li>• Ro'if</li>
              <li>• Abiy</li>
              <li>• Dendra</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;