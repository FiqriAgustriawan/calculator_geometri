import React from 'react'
import InfiniteMenu from '../blocks/Components/InfiniteMenu/InfiniteMenu'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config/config';

// Import images from assets
import kubusImg from '../assets/kubus.png'
import balokImg from '../assets/balok.png'
import tabungImg from '../assets/tabung.png'
import kerucutImg from '../assets/kerucut.png'
import bolaImg from '../assets/bola.jpeg'
import prismaSegitigaImg from '../assets/prisma segitiga.jpg'
import limasSegitigaImg from '../assets/limas segitiga.jpg'
import limasSegiempatImg from '../assets/limas segiempat.jpeg'

function MenuBangunRuang() {
  const navigate = useNavigate();
  
  const items = [
    {
      image: kubusImg,
      link: `${BASE_URL}/3d/kubus`,
      title: 'Kubus',
      description: 'By: Raja Fiqri'
    },
    {
      image: balokImg,
      link: `${BASE_URL}/3d/balok`,
      title: 'Balok',
      description: 'By: Faras'
    },
    {
      image: tabungImg,
      link: `${BASE_URL}/3d/tabung`,
      title: 'Tabung',
      description: 'By: Hilal'
    },
    {
      image: kerucutImg,
      link: `${BASE_URL}/3d/kerucut`,
      title: 'Kerucut',
      description: 'By: Daniel'
    },
    {
      image: bolaImg,
      link: `${BASE_URL}/3d/bola`,
      title: 'Bola',
      description: 'By: Akram'
    },
    {
      image: prismaSegitigaImg,
      link: `${BASE_URL}/3d/prismasegitiga`,
      title: 'Prisma\nSegitiga',
      description: 'By: Ro\'if'
    },
    {
      image: limasSegitigaImg,
      link: `${BASE_URL}/3d/limassegitiga`,
      title: 'Limas\nSegitiga',
      description: 'By: Abiy'
    },
    {
      image: limasSegiempatImg,
      link: `${BASE_URL}/3d/limassegiempat`,
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