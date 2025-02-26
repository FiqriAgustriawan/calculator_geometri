import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GoogleGenerativeAI } from "@google/generative-ai"

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-pro" })

function AIChatHelper() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', content: 'Hai! Saya AI yang bisa membantu kamu dengan rumus matematika. Apa yang ingin kamu tanyakan?' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    try {
      setIsLoading(true)
      setMessages(prev => [...prev, { type: 'user', content: input }])

      const prompt = `Kamu adalah guru matematika yang ahli dalam bangun ruang dan bangun datar.
      Berikan jawaban dalam Bahasa Indonesia yang sederhana dan mudah dipahami.
      
      Pertanyaan: ${input}

      Berikan jawaban dengan format berikut:
      1. Definisi singkat (jika ditanya tentang bentuk)
      2. Rumus-rumus penting (jika ada)
      3. Cara menghitung (jika diminta)
      4. Contoh penerapan
      
      Jawablah dengan singkat dan jelas. Jika ada perhitungan, tunjukkan langkah-langkahnya.`
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              parts: [{ text: prompt }]
            }],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 1000,
            },
          }),
        }
      )
      const data = await response.json()
      
      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        throw new Error('Invalid response format')
      }

      const text = data.candidates[0].content.parts[0].text
      setMessages(prev => [...prev, { type: 'bot', content: text }])
      setInput('')
    } catch (error) {
      console.error('AI Error:', error)
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Maaf, coba tanyakan dengan lebih spesifik, contoh:\n"Apa itu kubus?"\n"Rumus volume balok?"\n"Cara hitung luas bola?"' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-gray-800 rounded-lg shadow-xl w-80 mb-20" // Changed mb-4 to mb-20
          >
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-white font-bold">Math AI Helper</h3>
              {isLoading && (
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-cyan-500 border-t-transparent"/>
              )}
            </div>
            <div className="h-96 p-4 overflow-y-auto bg-gray-900/50">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`mb-4 ${
                    msg.type === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      msg.type === 'user'
                        ? 'bg-cyan-600 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tanya tentang rumus..."
                  className="flex-1 p-2 rounded bg-gray-700 text-white"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 
                    ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gray-900 text-cyan-400 p-4 rounded-full 
          shadow-lg hover:bg-gray-800 border-2 border-cyan-500/50 backdrop-blur-sm
          transition-all duration-300 ease-in-out
          hover:border-cyan-400 hover:text-cyan-300
          flex items-center justify-center
          w-14 h-14"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </motion.button>
    </div>
  )
}

export default AIChatHelper