import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HeroSection from './components/HeroSection'
import MenuBangunDatar from './components/MenuBangunDatar'
import MenuBangunRuang from './components/MenuBangunRuang'
import RumusPage from './components/RumusPage'
import ProfilePage from './components/ProfilePage'
// Calculator imports
import KubusCalculator from './components/calculators/KubusCalculator'
import BalokCalculator from './components/calculators/BalokCalculator'
import BelahKetupatCalculator from './components/calculators/BelahKetupatCalculator'
import KerucutCalculator from './components/calculators/KerucutCalculator'
import SegitigaCalculator from './components/calculators/SegitigaCalculator'
import JajarGenjangCalculator from './components/calculators/JajarGenjangCalculator'
import PrismaSegitigaCalculator from './components/calculators/PrismaSegitigaCalculator'
import TabungCalculator from './components/calculators/TabungCalculator'
import PersegiCalculator from './components/calculators/PersegiCalculator'
import TrapesiumCalculator from './components/calculators/TrapesiumCalculator'
import LimasSegiEmpatCalculator from './components/calculators/LimasSegiEmpatCalculator'
import LayangCalculator from './components/calculators/AbiyCalculator'
import LimasSegitigaCalculator from './components/calculators/AbiyCalculator'
import LingkaranCalculator from './components/calculators/AkramCalculator'
import BolaCalculator from './components/calculators/AkramCalculator'
import PersegiPanjangCalculator from './components/calculators/PersegiPanjangCalculator'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HeroSection />} />
          <Route path="/rumus" element={<RumusPage />} />
          <Route path="/2d" element={<MenuBangunDatar />} />
          <Route path="/3d" element={<MenuBangunRuang />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* 2D Calculators */}
          <Route path="/2d/persegi" element={<PersegiCalculator />} />
          <Route path="/2d/panjang" element={<PersegiPanjangCalculator />} />
          <Route path="/2d/segitiga" element={<SegitigaCalculator />} />
          <Route path="/2d/jgenjang" element={<JajarGenjangCalculator />} />
          <Route path="/2d/ketupat" element={<BelahKetupatCalculator />} />
          <Route path="/2d/layang2" element={<LayangCalculator />} />
          <Route path="/2d/trapesium" element={<TrapesiumCalculator />} />
          <Route path="/2d/lingkaran" element={<LingkaranCalculator />} />

          {/* 3D Calculators */}
          <Route path="/3d/kubus" element={<KubusCalculator />} />
          <Route path="/3d/balok" element={<BalokCalculator />} />
          <Route path="/3d/tabung" element={<TabungCalculator />} />
          <Route path="/3d/kerucut" element={<KerucutCalculator />}/>
          <Route path="/3d/bola" element={<BolaCalculator />} />
          <Route path="/3d/prismasegitiga" element={<PrismaSegitigaCalculator />} />
          <Route path="/3d/limassegitiga" element={<LimasSegitigaCalculator />} />
          <Route path="/3d/limassegiempat" element={<LimasSegiEmpatCalculator />} />

          {/* Catch-all route */}
          <Route path="*" element={<HeroSection />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App