
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastProvider } from './components/Toast';
import { PageTransition } from './components/PageTransition';
import { Home } from './pages/Home';
import { Recursos } from './pages/Recursos';
import { Acerca } from './pages/Acerca';
import { Contacto } from './pages/Contacto';
import { Galeria } from './pages/Galeria';
import { NotFound } from './pages/NotFound';
import { ScrollToTop } from './components/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/recursos" element={<PageTransition><Recursos /></PageTransition>} />
        <Route path="/galeria" element={<PageTransition><Galeria /></PageTransition>} />
        <Route path="/acerca" element={<PageTransition><Acerca /></PageTransition>} />
        <Route path="/contacto" element={<PageTransition><Contacto /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export function App() {
  return (
    <Router>
      <ToastProvider>
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
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </Router>);

}
