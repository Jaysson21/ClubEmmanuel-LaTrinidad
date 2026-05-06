import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, FileQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResourceCard, Resource } from '../components/ResourceCard';
import recursosData from '../data/recursos.json';
type FilterType =
'Todos' |
'Conquistadores' |
'Aventureros' |
'Libros' |
'Tarjetas';
export function Recursos() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>('Todos');
  const [resources, setResources] = useState<Resource[]>([]);
  // Initialize data and handle URL query params
  useEffect(() => {
    setResources(recursosData as Resource[]);
    const params = new URLSearchParams(location.search);
    const grupoParam = params.get('grupo');
    if (grupoParam === 'Conquistadores' || grupoParam === 'Aventureros') {
      setActiveFilter(grupoParam);
    }
  }, [location]);
  const filters: FilterType[] = [
  'Todos',
  'Conquistadores',
  'Aventureros',
  'Libros',
  'Tarjetas'];

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      // 1. Apply Search
      const query = searchQuery.toLowerCase();
      const matchesSearch =
      resource.titulo.toLowerCase().includes(query) ||
      resource.descripcion.toLowerCase().includes(query) ||
      resource.grupo.toLowerCase().includes(query) ||
      resource.tipo.toLowerCase().includes(query);
      // 2. Apply Filter
      let matchesFilter = true;
      if (activeFilter === 'Conquistadores')
      matchesFilter = resource.grupo === 'Conquistadores';
      if (activeFilter === 'Aventureros')
      matchesFilter = resource.grupo === 'Aventureros';
      if (activeFilter === 'Libros') matchesFilter = resource.tipo === 'Libro';
      if (activeFilter === 'Tarjetas')
      matchesFilter = resource.tipo === 'Tarjeta';
      return matchesSearch && matchesFilter;
    });
  }, [resources, searchQuery, activeFilter]);
  return (
    <div className="min-h-screen pt-28 pb-20 bg-club-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            Biblioteca de Recursos
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl">
            Encuentra manuales, tarjetas de clase, especialidades y materiales
            de apoyo para el desarrollo de las actividades del club.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 mb-10 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-club-blue/20 focus:border-club-blue transition-all"
              placeholder="Buscar por nombre, clase o tipo de material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
            
          </div>

          {/* Filter Chips */}
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 uppercase tracking-wider mr-2">
              <Filter size={16} /> Filtros:
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) =>
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeFilter === filter ? 'bg-club-blue text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                
                  {filter}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredResources.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredResources.map((resource, index) =>
            <ResourceCard
              key={resource.id}
              resource={resource}
              index={index} />

            )}
            </AnimatePresence>
          </div> /* Empty State */ :

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          className="bg-white rounded-2xl p-12 text-center border border-slate-100 shadow-sm flex flex-col items-center justify-center min-h-[300px]">
          
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
              <FileQuestion size={40} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              No encontramos recursos
            </h3>
            <p className="text-slate-500 max-w-md mx-auto">
              No hay resultados que coincidan con tu búsqueda "{searchQuery}" y
              los filtros seleccionados. Intenta con otros términos.
            </p>
            <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('Todos');
            }}
            className="mt-6 text-club-blue font-semibold hover:underline">
            
              Limpiar filtros y búsqueda
            </button>
          </motion.div>
        }
      </div>
    </div>);

}