import React from 'react'
import InfiniteMenu from '../blocks/Components/InfiniteMenu/InfiniteMenu'

import { useNavigate } from 'react-router-dom';

function MenuBangunDatar() {
  const navigate = useNavigate();
  
  const items = [
    {
      image: '/shapes/persegi.png',
      link: 'http://localhost:5173/2d/persegi',
      title: 'Persegi',
      description: 'By: Hilal'
    },
    {
      image: '/shapes/persegi panjang.jpg',
      link: 'http://localhost:5173/2d/panjang',
      title: 'PPanjang',
      description: 'By: Faras'
    },
    {
      image: '/shapes/jajar genjang.png',
      link: 'http://localhost:5173/2d/jgenjang',
      title: 'JGenjang', 
      description: 'By: Ro\'if'
    },
    {
      image: '/shapes/belah ketupat.png',
      link: 'http://localhost:5173/2d/ketupat',
      title: 'Ketupat',
      description: 'By: Raja Fiqri'
    },
    {
      image: '/shapes/layang2.png',
      link: 'http://localhost:5173/2d/layang2',
      title: 'Layang',
      description: 'By: Abiy'
    },
    {
      image: '/shapes/trapesium.png',
      link: 'http://localhost:5173/2d/trapesium',
      title: 'Trapesium',
      description: 'By: Dendra'
    },
    {
      image: '/shapes/lingkaran.png',
      link: 'http://localhost:5173/2d/lingkaran',
      title: 'Lingkaran',
      description: 'By: Akram'
    },
    {
      image: '/shapes/segitiga.jpg',
      link: 'http://localhost:5173/2d/segitiga',
      title: 'Segitiga',
      description: 'By: Daniel'
    }
  ].map(item => ({
    ...item,
    onClick: () => navigate(item.link)
  }));

  return (
    <div style={{ height: 'calc(100vh - 90px)', position: 'relative' }} className="text-blue-400">
      <InfiniteMenu 
        items={items}
        textColor="#ffffff"
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

export default MenuBangunDatar;