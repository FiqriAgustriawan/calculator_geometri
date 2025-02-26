import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Squares from '../blocks/Backgrounds/Squares/Squares'
import TextPressure from '../blocks/TextAnimations/TextPressure/TextPressure'
import GeometricLoader from './GeometricLoader'

function HeroSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.15}
          squareSize={40}
          direction='diagonal'
          borderColor='rgba(255,255,255,0.05)'
          hoverFillColor='rgba(40,40,40,0.5)'
        />
      </div>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-30"
          >
            <GeometricLoader />
          </motion.div>
        ) : (
          <motion.div
            className="relative z-30 text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{position: 'relative', height: '300px'}}>
              <TextPressure
                text="MATH!"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>
            <motion.p 
              className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Eksplorasi dunia geometri dengan perhitungan yang akurat dan mudah dipahami
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HeroSection