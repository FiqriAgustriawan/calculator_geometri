import React from 'react'
import InfiniteMenu from '../blocks/Components/InfiniteMenu/InfiniteMenu'
import { useNavigate } from 'react-router-dom';

function MenuBangunRuang() {
  const navigate = useNavigate();
  
  const items = [
    {
      image: '/shapes/kubus.png',
      link: 'http://localhost:5173/3d/kubus',
      title: 'Kubus',
      description: 'By: Raja Fiqri'
    },
    {
      image: '/shapes/balok.png',
      link: 'http://localhost:5173/3d/balok',
      title: 'Balok',
      description: 'By: Faras'
    },
    {
      image: '/shapes/tabung.png',
      link: 'http://localhost:5173/3d/tabung',
      title: 'Tabung',
      description: 'By: Hilal'
    },
    {
      image: '/shapes/kerucut.png',
      link: 'http://localhost:5173/3d/kerucut',
      title: 'Kerucut',
      description: 'By: Daniel'
    },
    {
      image: '/shapes/bola.jpeg',
      link: 'http://localhost:5173/3d/bola',
      title: 'Bola',
      description: 'By: Akram'
    },
    {
      image: '/shapes/prisma segitiga.jpg',
      link: 'http://localhost:5173/3d/prismasegitiga',
      title: 'Prisma\nSegitiga',
      description: 'By: Ro\'if'
    },
    {
      image: '/shapes/limas segitiga.jpg',
      link: 'http://localhost:5173/3d/limassegitiga',
      title: 'Limas\nSegitiga',
      description: 'By: Abiy'
    },
    {
      image: '/shapes/limas segiempat.jpeg',
      link: 'http://localhost:5173/3d/limassegiempat',
      title: 'Limas\nSegiempat',
      description: 'By: Dendra'
    }
  ].map(item => ({
    ...item,
    onClick: () => navigate(item.link)
  }));

  return (
    <div style={{ height: 'calc(100vh - 80px)', position: 'relative' }} className="text-blue-400">
      <InfiniteMenu 
        items={items}
        textColor="#ffffff"
        itemSize={10}
        gap={2}
        styles={{
          title: {
            fontSize: '0.1rem',
            fontWeight: 'normal'
          }
        }}
      />
    </div>
  );
}

export default MenuBangunRuang;