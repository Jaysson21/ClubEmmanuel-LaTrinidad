import { Link } from 'react-router-dom';
import { Compass, Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="mb-8 relative"
      >
        <div className="absolute inset-0 bg-club-500/20 blur-3xl rounded-full" />
        <Compass className="w-32 h-32 text-club-600 mx-auto relative z-10" strokeWidth={1.5} />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-6xl font-bold text-gray-900 mb-4"
      >
        404
      </motion.h1>
      
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl font-semibold text-gray-800 mb-4"
      >
        ¡Te has perdido en el bosque!
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-gray-600 max-w-md mb-8"
      >
        Parece que la ruta que intentas explorar no existe en nuestro mapa. 
        Pero no te preocupes, siempre puedes volver al campamento base.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-club-600 text-white rounded-lg hover:bg-club-700 transition-colors shadow-lg hover:shadow-xl font-medium"
        >
          <Home className="w-5 h-5" />
          Volver al Inicio
        </Link>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Página anterior
        </button>
      </motion.div>
    </div>
  );
}
