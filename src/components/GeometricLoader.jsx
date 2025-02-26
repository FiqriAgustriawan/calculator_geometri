import React from 'react'
import { motion } from 'framer-motion'

const GeometricLoader = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Cube */}
      <motion.div
        className="w-12 h-12 border-2 border-gray-400"
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px"
        }}
      />

      {/* Triangle */}
      <motion.div
        className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] 
                   border-l-transparent border-r-transparent border-b-gray-400"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Circle */}
      <motion.div
        className="w-12 h-12 rounded-full border-2 border-gray-400"
        animate={{
          scale: [1, 1.2, 1],
          borderWidth: ["2px", "4px", "2px"]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Rectangle */}
      <motion.div
        className="w-12 h-8 border-2 border-gray-400"
        animate={{
          scaleX: [1, 1.5, 1],
          scaleY: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default GeometricLoader