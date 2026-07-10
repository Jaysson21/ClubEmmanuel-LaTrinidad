import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword, Shield, Triangle } from 'lucide-react';

interface Elemento {
  id: string;
  title: string;
  icon: React.ReactNode;
  meaning: string;
}

const elementos: Elemento[] = [
  {
    id: 'triangulo',
    title: 'El Triángulo',
    icon: <Triangle size={18} />,
    meaning:
      'Invertido nos recuerda lo que enseñó Jesús: lo más alto es estar dispuesto a servir, no a ser servido. Al ser equilátero, representa la plenitud de la Trinidad: el Padre, el Hijo y el Espíritu Santo.'
  },
  {
    id: 'espada',
    title: 'La Espada',
    icon: <Sword size={18} />,
    meaning:
      'Representa la Biblia y el Espíritu Santo. Un verdadero soldado de Cristo nunca va a la batalla sin su espada.'
  },
  {
    id: 'escudo',
    title: 'El Escudo',
    icon: <Shield size={18} />,
    meaning: 'Representa la Fe, que nos protege en el camino cristiano.'
  }
];

const colores = [
  { id: 'oro', label: 'Oro', swatch: '#F5B70A', text: 'text-club-dark', meaning: 'La excelencia de los ideales.' },
  { id: 'azul', label: 'Azul', swatch: '#1E3A8A', text: 'text-white', meaning: 'La lealtad.' },
  { id: 'blanco', label: 'Blanco', swatch: '#FFFFFF', text: 'text-slate-700', meaning: 'La pureza.' },
  { id: 'rojo', label: 'Rojo', swatch: '#DC2626', text: 'text-white', meaning: 'La sangre preciosa de Cristo derramada por nosotros.' }
];

export function Emblema() {
  const [activo, setActivo] = useState<string>('triangulo');
  const elementoActivo = elementos.find((e) => e.id === activo);
  const colorActivo = colores.find((c) => c.id === activo);

  const base =
    'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all';

  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">El Emblema y su Significado</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Cada parte del emblema del Conquistador cuenta parte de nuestra identidad. Toca cada
          elemento para descubrir lo que representa.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Emblema visual */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-club-blue to-blue-900 p-8 md:p-10 flex items-center justify-center">
          <motion.img
            src="/images/conquistadore-logo.png"
            alt="Emblema del Club de Conquistadores"
            className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Panel interactivo */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {elementos.map((el) => (
              <button
                key={el.id}
                onClick={() => setActivo(el.id)}
                className={`${base} ${
                  activo === el.id
                    ? 'bg-club-blue text-white border-club-blue shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-club-blue/40 hover:text-club-blue'
                }`}
              >
                {el.icon}
                {el.title}
              </button>
            ))}
          </div>

          {/* Colores */}
          <div className="flex flex-wrap gap-2 mb-6">
            {colores.map((c) => (
              <button
                key={c.id}
                onClick={() => setActivo(c.id)}
                aria-label={`Color ${c.label}`}
                className={`w-9 h-9 rounded-full border-2 transition-all ${
                  activo === c.id ? 'ring-2 ring-offset-2 ring-club-gold scale-110' : 'border-slate-200 hover:scale-105'
                }`}
                style={{ backgroundColor: c.swatch }}
              />
            ))}
          </div>

          <div className="flex-grow min-h-[140px] bg-slate-50 rounded-2xl p-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {elementoActivo ? elementoActivo.title : `Color ${colorActivo?.label}`}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {elementoActivo ? elementoActivo.meaning : colorActivo?.meaning}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
