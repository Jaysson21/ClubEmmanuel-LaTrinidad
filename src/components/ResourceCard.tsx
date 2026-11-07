
import { Download, Eye, BookOpen, CreditCard, Library } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from './Toast';

export type ResourceTipo = 'Libro' | 'Tarjeta';

export interface Resource {
  id: string;
  titulo: string;
  grupo: 'Conquistadores' | 'Aventureros' | 'Club del Libro';
  tipo: ResourceTipo;
  descripcion: string;
  pdfUrl: string;
  logoUrl?: string;
}

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

export function ResourceCard({ resource, index }: ResourceCardProps) {
  const { showToast } = useToast();
  const isConquistador = resource.grupo === 'Conquistadores';
  const isLibro = resource.tipo === 'Libro';
  const isClubDelLibro = resource.grupo === 'Club del Libro';

  const handleDownload = async () => {
    try {
      const response = await fetch(resource.pdfUrl);

      if (!response.ok) {
        throw new Error('No se pudo descargar el archivo');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${resource.titulo}.pdf`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      showToast(`Descargando "${resource.titulo}"`, 'success');
    } catch (error) {
      console.error(error);
      showToast(`No se pudo descargar ${resource.titulo}`, 'error');
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.4,
        delay: index * 0.05
      }}
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-soft border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full group"
    >
      {/* Header: Icon & Badges */}
      <div className="flex justify-between items-start mb-4">
        <div
          className={`shrink-0 flex items-center justify-center overflow-hidden ${
            resource.logoUrl
              ? 'w-14 h-14 rounded-full shadow-sm border border-slate-100 bg-white'
              : `w-12 h-12 rounded-xl ${isClubDelLibro ? 'bg-purple-50 text-purple-600' : isLibro ? 'bg-blue-50 text-club-blue' : 'bg-amber-50 text-amber-600'}`
          }`}
        >
          {resource.logoUrl ? (
            <img src={resource.logoUrl} alt={`Logo ${resource.titulo}`} className="w-full h-full object-cover" />
          ) : isClubDelLibro ? (
            <Library size={24} strokeWidth={2} />
          ) : isLibro ? (
            <BookOpen size={24} strokeWidth={2} />
          ) : (
            <CreditCard size={24} strokeWidth={2} />
          )}
        </div>

        <div className="flex flex-col gap-2 items-end">
          <span
            className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
              isConquistador
                ? 'bg-club-gold/10 text-amber-700'
                : isClubDelLibro
                  ? 'bg-purple-50 text-purple-700'
                  : 'bg-club-blue/10 text-club-blue'
            }`}
          >
            {resource.grupo}
          </span>

          <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
            {resource.tipo}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-club-blue transition-colors">
          {resource.titulo}
        </h3>

        <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed">
          {resource.descripcion}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3">
        <a
          href={resource.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-club-blue hover:bg-blue-800 text-white flex items-center justify-center gap-2 min-h-11 rounded-xl text-sm font-semibold active:bg-blue-800 transition-colors"
        >
          <Eye size={16} />
          <span>Ver PDF</span>
        </a>

        <button
          type="button"
          className="w-11 h-11 shrink-0 flex items-center justify-center text-slate-500 hover:text-club-blue active:bg-blue-50 hover:bg-blue-50 rounded-xl transition-colors border border-slate-200 hover:border-blue-100"
          title="Descargar"
          aria-label={`Descargar ${resource.titulo}`}
          onClick={handleDownload}
        >
          <Download size={18} />
        </button>
      </div>
    </motion.div>
  );
}
