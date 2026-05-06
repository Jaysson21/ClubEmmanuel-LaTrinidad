import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Tent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Recursos',
    path: '/recursos'
  },
  {
    name: 'Galería',
    path: '/galeria'
  },
  {
    name: 'Acerca',
    path: '/acerca'
  },
  {
    name: 'Contacto',
    path: '/contacto'
  }];

  const isActive = (path: string) => location.pathname === path;
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-white py-5'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-club-blue text-white p-2 rounded-xl group-hover:bg-club-gold transition-colors duration-300">
              <Tent size={24} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-club-blue">
                Club Emmanuel
              </span>
              <span className="text-xs font-medium text-slate-500 tracking-wider uppercase">
                La Trinidad #1
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition-colors duration-200 relative ${isActive(link.path) ? 'text-club-blue' : 'text-slate-600 hover:text-club-blue'}`}>
              
                {link.name}
                {isActive(link.path) &&
              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-club-gold rounded-full"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />

              }
              </Link>
            )}
            <Link
              to="/recursos"
              className="bg-club-blue hover:bg-blue-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 shadow-sm">
              
              Ver Biblioteca
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600 hover:text-club-blue hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
            
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="md:hidden overflow-hidden bg-white border-t border-slate-100">
          
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive(link.path) ? 'bg-blue-50 text-club-blue' : 'text-slate-600 hover:bg-slate-50 hover:text-club-blue'}`}>
              
                  {link.name}
                </Link>
            )}
              <div className="pt-4 px-4">
                <Link
                to="/recursos"
                className="block w-full text-center bg-club-blue text-white px-5 py-3 rounded-xl font-semibold shadow-sm">
                
                  Ver Biblioteca
                </Link>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}