import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HeroSection from './components/HeroSection'
import MenuBangunDatar from './components/MenuBangunDatar'
import MenuBangunRuang from './components/MenuBangunRuang'
import RumusPage from './components/RumusPage'
import KubusCalculator from './components/calculators/KubusCalculator'
import BalokCalculator from './components/calculators/BalokCalculator'
import BelahKetupatCalculator from './components/calculators/BelahKetupatCalculator'
import KerucutCalculator from './components/calculators/KerucutCalculator';
import SegitigaCalculator from './components/calculators/SegitigaCalculator';
import JajarGenjangCalculator from './components/calculators/JajarGenjangCalculator';
import PrismaSegitigaCalculator from './components/calculators/PrismaSegitigaCalculator';
import AbiyCalculator from './components/calculators/AbiyCalculator';
import TabungCalculator from './components/calculators/TabungCalculator';
import PersegiCalculator from './components/calculators/PersegiCalculator';
import TrapesiumCalculator from './components/calculators/TrapesiumCalculator';
import LimasSegiEmpatCalculator from './components/calculators/LimasSegiEmpatCalculator';
import AkramCalculator from './components/calculators/AkramCalculator';
import PersegiPanjangCalculator from './components/calculators/PersegiPanjangCalculator';

// Add this to your routes

// In your routes configuration


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/rumus" element={<RumusPage />} />
          <Route path="/2d" element={<MenuBangunDatar />} />
          <Route path="/3d" element={<MenuBangunRuang />} />
          <Route path="/3d/kubus" element={<KubusCalculator />} />
          <Route path="/3d/balok" element={<BalokCalculator />} />
          <Route path="/2d/ketupat" element={<BelahKetupatCalculator />} />
          <Route path="/3d/kerucut" element={<KerucutCalculator />} />
          <Route path="/2d/segitiga" element={<SegitigaCalculator />} />
          <Route path="/2d/jgenjang" element={<JajarGenjangCalculator />} />
          <Route path="/2d/layang2" element={<AbiyCalculator />} />
          <Route path="/3d/limassegitiga" element={<AbiyCalculator />} />
          <Route path="/3d/tabung" element={<TabungCalculator />} />
          <Route path="/2d/persegi" element={<PersegiCalculator />} />
          <Route path="/2d/trapesium" element={<TrapesiumCalculator />} />
          <Route path="/3d/limassegiempat" element={<LimasSegiEmpatCalculator />} />
          {/* Remove catch-all route to prevent multiple redirects */}
          <Route path="/3d/prismasegitiga" element={<PrismaSegitigaCalculator />} />
          <Route path="/2d/lingkaran" element={<AkramCalculator />} />
          <Route path="/3d/bola" element={<AkramCalculator />} />
          <Route path="/2d/panjang" element={<PersegiPanjangCalculator />} />

        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App