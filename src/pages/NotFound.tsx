import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70dvh] px-4 pt-28 pb-16 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-club-blue/10 blur-3xl rounded-full" />
        <Compass className="w-24 h-24 sm:w-32 sm:h-32 text-club-blue mx-auto relative z-10" strokeWidth={1.5} />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-5xl sm:text-6xl font-extrabold text-club-dark mb-4 tabular-nums"
      >
        404
      </motion.h1>
      
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 text-balance"
      >
        ¡Te has perdido en el bosque!
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-slate-600 max-w-md mb-8"
      >
        Parece que la ruta que intentas explorar no existe en nuestro mapa. 
        Pero no te preocupes, siempre puedes volver al campamento base.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
      >
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 min-h-12 bg-club-blue text-white rounded-xl hover:bg-blue-800 active:bg-blue-800 transition-colors shadow-sm font-semibold"
        >
          <Home className="w-5 h-5" />
          Volver al Inicio
        </Link>
        <button
          type="button"
          onClick={() => window.history.back()}
          className="inline-flex items-center justify-center gap-2 px-6 min-h-12 bg-white text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 active:bg-slate-50 transition-colors font-semibold"
        >
          <ArrowLeft className="w-5 h-5" />
          Página anterior
        </button>
      </motion.div>
    </div>
  );
}
