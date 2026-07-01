
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Recursos } from './pages/Recursos';
import { Acerca } from './pages/Acerca';
import { Contacto } from './pages/Contacto';
import { Galeria } from './pages/Galeria';
import { NotFound } from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';

export function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Fondo global traslúcido solo para móviles */}
      <div className="fixed inset-0 z-[-1] block md:hidden pointer-events-none">
        <img 
          src="/images/bg-mobile.jpeg" 
          alt="Fondo" 
          className="w-full h-full object-cover opacity-10 mix-blend-multiply"
        />
      </div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>);

}