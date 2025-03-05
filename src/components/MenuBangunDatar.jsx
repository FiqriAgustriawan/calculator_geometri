import React from 'react'
import InfiniteMenu from '../blocks/Components/InfiniteMenu/InfiniteMenu'
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config/config';

// Import images from assets
import persegiImg from '../assets/persegi.png'
import persegiPanjangImg from '../assets/persegi panjang.jpg'
import jajarGenjangImg from '../assets/jajar genjang.png'
import belahKetupatImg from '../assets/belah ketupat.png'
import layangImg from '../assets/layang2.png'
import trapesiumImg from '../assets/trapesium.png'
import lingkaranImg from '../assets/lingkaran.png'
import segitigaImg from '../assets/segitiga.jpg'

function MenuBangunDatar() {
  const navigate = useNavigate();
  
  const items = [
    {
      image: persegiImg,
      link: `${BASE_URL}/2d/persegi`,
      title: 'Persegi',
      description: 'By: Hilal'
    },
    {
      image: persegiPanjangImg,
      link: `${BASE_URL}/2d/panjang`,
      title: 'PPanjang',
      description: 'By: Faras'
    },
    {
      image: segitigaImg,
      link: `${BASE_URL}/2d/segitiga`,
      title: 'Segitiga',
      description: 'By: Daniel'
    },
    {
      image: jajarGenjangImg,
      link: `${BASE_URL}/2d/jgenjang`,
      title: 'JGenjang',
      description: 'By: Ro\'if'
    },
    {
      image: belahKetupatImg,
      link: `${BASE_URL}/2d/ketupat`,
      title: 'Ketupat',
      description: 'By: Raja Fiqri'
    },
    {
      image: layangImg,
      link: `${BASE_URL}/2d/layang2`,
      title: 'Layang',
      description: 'By: Abiy'
    },
    {
      image: trapesiumImg,
      link: `${BASE_URL}/2d/trapesium`,
      title: 'Trapesium',
      description: 'By: Dendra'
    },
    {
      image: lingkaranImg,
      link: `${BASE_URL}/2d/lingkaran`,
      title: 'Lingkaran',
      description: 'By: Akram'
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