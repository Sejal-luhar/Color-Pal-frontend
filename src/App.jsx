
// export default App;
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandinPage';
import ColorVariantsPage from './components/ColorVariantsPage';
import PaletteManager from './components/PaletteManager';
import TrendingColorPalettes from './components/TrendingColorPalettes';
import SavedPalettes from './components/SavedPalettes';
import About from './components/AboutSection';

function App() {
  return (
  
<Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/palette-manager" element={<PaletteManager />} />
        <Route path="/Trending-palettes" element={<TrendingColorPalettes />} />
        <Route path="/color-variants" element={<ColorVariantsPage />} />
        <Route path="/saved-palettes" element={<SavedPalettes />} />
        <Route path="/about" element={<About />} />

      </Routes>
    
  );
}

export default App;

