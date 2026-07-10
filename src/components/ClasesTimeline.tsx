import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Clase {
  nombre: string;
  edad: string;
  logo: string;
}

const clases: Clase[] = [
  { nombre: 'Amigo', edad: '10 años', logo: '/images/clases/Conquis/1Amigo.png' },
  { nombre: 'Compañero', edad: '11 años', logo: '/images/clases/Conquis/2Compañero.png' },
  { nombre: 'Explorador', edad: '12 años', logo: '/images/clases/Conquis/3Explorador.png' },
  { nombre: 'Orientador', edad: '13 años', logo: '/images/clases/Conquis/4Orientador.png' },
  { nombre: 'Viajero', edad: '14 años', logo: '/images/clases/Conquis/5Viajero.png' },
  { nombre: 'Guía', edad: '15 años', logo: '/images/clases/Conquis/6Guia.png' }
];

export function ClasesTimeline() {
  return (
    <div className="mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Las Clases Progresivas</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Seis niveles que acompañan el crecimiento del Conquistador, cada uno con sus propios
          requisitos y aventuras. Del Amigo al Guía.
        </p>
      </div>

      <div className="relative">
        {/* Línea guía en escritorio */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-club-blue/10 via-club-gold/40 to-club-blue/10" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {clases.map((clase, index) => (
            <motion.div
              key={clase.nombre}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border border-slate-100 shadow-soft flex items-center justify-center overflow-hidden mb-4 group-hover:-translate-y-1.5 group-hover:shadow-md transition-all duration-300">
                <img
                  src={clase.logo}
                  alt={`Clase ${clase.nombre}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-slate-800 leading-tight">{clase.nombre}</h3>
              <span className="text-xs font-semibold text-club-gold uppercase tracking-wider mt-1">
                {clase.edad}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/recursos?grupo=Conquistadores"
          className="inline-flex items-center gap-2 bg-club-blue hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-sm"
        >
          Ver materiales de las clases <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
