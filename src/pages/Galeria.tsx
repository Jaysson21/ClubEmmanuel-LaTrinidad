import React, { useMemo, useState, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  ImageIcon } from
'lucide-react';
import galeriaData from '../data/galeria.json';
interface Foto {
  id: string;
  titulo: string;
  categoria: string;
  fecha: string;
  imagen: string;
}
export function Galeria() {
  const fotos = galeriaData as Foto[];
  const [activeFilter, setActiveFilter] = useState<string>('Todas');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const categorias = useMemo(() => {
    const unique = Array.from(new Set(fotos.map((f) => f.categoria)));
    return ['Todas', ...unique];
  }, [fotos]);
  const filtered = useMemo(() => {
    if (activeFilter === 'Todas') return fotos;
    return fotos.filter((f) => f.categoria === activeFilter);
  }, [fotos, activeFilter]);
  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filtered.length);
  };
  const goPrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filtered.length) % filtered.length);
  };
  return (
    <div className="min-h-screen pt-28 pb-20 bg-club-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-club-gold/10 text-amber-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Camera size={14} /> Memorias del club
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Galería de Actividades
          </h1>
          <p className="text-slate-600 text-lg">
            Un vistazo a nuestras aventuras, servicios, investiduras y momentos
            especiales que nos unen como familia en Cristo.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categorias.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === cat ? 'bg-club-blue text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>
            
              {cat}
            </button>
          )}
        </div>

        {/* Photo Grid - Masonry style */}
        {filtered.length > 0 ?
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((foto, index) =>
            <motion.button
              layout
              key={foto.id}
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.95
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.04
              }}
              onClick={() => openLightbox(index)}
              className="group relative block w-full break-inside-avoid rounded-2xl overflow-hidden bg-slate-200 shadow-soft hover:shadow-lg transition-shadow text-left">
              
                  <img
                src={foto.imagen}
                alt={foto.titulo}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
              
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-club-gold text-club-dark px-2 py-0.5 rounded-full mb-2">
                      {foto.categoria}
                    </span>
                    <h3 className="font-bold text-sm leading-tight">
                      {foto.titulo}
                    </h3>
                    <p className="text-xs text-white/80 flex items-center gap-1 mt-1">
                      <Calendar size={10} /> {foto.fecha}
                    </p>
                  </div>
                </motion.button>
            )}
            </AnimatePresence>
          </div> :

        <div className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm flex flex-col items-center min-h-[300px] justify-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <ImageIcon size={40} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              No hay fotos en esta categoría
            </h3>
            <p className="text-slate-500">Pronto subiremos más recuerdos.</p>
          </div>
        }
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && filtered[selectedIndex] &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          
            {/* Close */}
            <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Cerrar">
            
              <X size={24} />
            </button>

            {/* Prev */}
            <button
            onClick={goPrev}
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Anterior">
            
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
            onClick={goNext}
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Siguiente">
            
              <ChevronRight size={24} />
            </button>

            {/* Image content */}
            <motion.div
            key={filtered[selectedIndex].id}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            exit={{
              opacity: 0,
              scale: 0.95
            }}
            transition={{
              duration: 0.2
            }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            
              <img
              src={filtered[selectedIndex].imagen}
              alt={filtered[selectedIndex].titulo}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" />
            
              <div className="mt-4 text-center text-white">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-club-gold text-club-dark px-2 py-0.5 rounded-full mb-2">
                  {filtered[selectedIndex].categoria}
                </span>
                <h3 className="font-bold text-lg">
                  {filtered[selectedIndex].titulo}
                </h3>
                <p className="text-sm text-white/70 flex items-center gap-1 justify-center mt-1">
                  <Calendar size={12} /> {filtered[selectedIndex].fecha}
                </p>
                <p className="text-xs text-white/50 mt-2">
                  {selectedIndex + 1} de {filtered.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}