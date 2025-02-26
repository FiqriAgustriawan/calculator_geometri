import React from 'react'
import Dock from '../blocks/Components/Dock/Dock'
import { useNavigate } from 'react-router-dom'
import { HomeIcon, BookOpenIcon, Square3Stack3DIcon, CubeIcon } from '@heroicons/react/24/outline'
import AIChatHelper from '../components/AIChatHelper'

function MainLayout({ children }) {
  const navigate = useNavigate()

  const dockItems = [
    {
      icon: <HomeIcon className="w-6 h-6 text-white" />,
      label: "Home",
      onClick: () => navigate('/'),
    },
    {
      icon: <BookOpenIcon className="w-6 h-6 text-white" />,
      label: "Rumus",
      onClick: () => navigate('/rumus'),
    },
    {
      icon: <Square3Stack3DIcon className="w-6 h-6 text-white" />,
      label: "Bangun Datar",
      onClick: () => navigate('/2d'),
    },
    {
      icon: <CubeIcon className="w-6 h-6 text-white" />,
      label: "Bangun Ruang",
      onClick: () => navigate('/3d'),
    },
  ]

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <main className="flex-1 overflow-auto">
        {children}
      </main>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
        <Dock
          items={dockItems}
          className="bg-black backdrop-blur-md"
          magnification={70}
          baseItemSize={50}
          distance={80}
          panelHeight={70}
        />
      </div>
      <AIChatHelper />
    </div>
  )
}

export default MainLayout