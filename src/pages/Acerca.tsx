
import {
  Heart,
  HandHeart,
  Users,
  Trophy,
  Leaf,
  Target,
  Eye,
  BookOpen,
  Award,
  Shield,
  Star,
  Quote } from
'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export function Acerca() {
  const values = [
  {
    icon: <Heart size={24} />,
    title: 'Fe',
    desc: 'Amor a Dios sobre todas las cosas y estudio de su palabra.',
    color: 'text-rose-500',
    bg: 'bg-rose-50'
  },
  {
    icon: <HandHeart size={24} />,
    title: 'Servicio',
    desc: 'Ayudar al prójimo y ser útiles en nuestra comunidad.',
    color: 'text-club-blue',
    bg: 'bg-blue-50'
  },
  {
    icon: <Users size={24} />,
    title: 'Amistad',
    desc: 'Compañerismo sano, respeto y trabajo en equipo.',
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  },
  {
    icon: <Trophy size={24} />,
    title: 'Liderazgo',
    desc: 'Desarrollo de habilidades para guiar con el ejemplo.',
    color: 'text-purple-500',
    bg: 'bg-purple-50'
  },
  {
    icon: <Leaf size={24} />,
    title: 'Naturaleza',
    desc: 'Cuidado y aprecio por la creación de Dios.',
    color: 'text-club-green',
    bg: 'bg-green-50'
  }];

  const ideales = [
    {
      id: 'voto',
      title: 'Voto',
      icon: <HandHeart size={20} />,
      content: 'Por la gracia de Dios, seré puro, bondadoso y leal. Guardaré la ley del Conquistador, seré siervo de Dios y amigo de la humanidad.'
    },
    {
      id: 'ley',
      title: 'Ley',
      icon: <Shield size={20} />,
      content: (
        <ul className="list-decimal list-inside space-y-3 text-slate-600 leading-relaxed marker:font-bold marker:text-club-blue">
          <li>Observar la devoción matutina.</li>
          <li>Cumplir con la parte que me toca.</li>
          <li>Cuidar mi cuerpo.</li>
          <li>Tener una mirada franca.</li>
          <li>Ser cortés y obediente.</li>
          <li>Andar con reverencia en la casa de Dios.</li>
          <li>Conservar una canción en el corazón.</li>
          <li>Trabajar para Dios.</li>
        </ul>
      )
    },
    {
      id: 'blanco',
      title: 'Blanco',
      icon: <Target size={20} />,
      content: 'El mensaje del advenimiento a todo el mundo en mi generación.'
    },
    {
      id: 'lema',
      title: 'Lema',
      icon: <Quote size={20} />,
      content: 'El amor de Cristo nos motiva.'
    },
    {
      id: 'biblia',
      title: 'Voto a la Biblia',
      icon: <BookOpen size={20} />,
      content: 'Prometo lealtad a la Biblia, la Santa Palabra de Dios. Haré de ella una lámpara a mis pies y una luz a mi camino. Y guardaré sus palabras en mi corazón para no pecar contra Dios.'
    },
    {
      id: 'legion',
      title: 'Legión de Honor',
      icon: <Star size={20} />,
      content: (
        <ul className="list-disc list-inside space-y-3 text-slate-600 leading-relaxed marker:text-club-gold">
          <li>Honrar a Cristo en lo que escoja <strong>ver</strong>.</li>
          <li>Honrar a Cristo en lo que escoja <strong>oír</strong>.</li>
          <li>Honrar a Cristo en los lugares donde escoja <strong>ir</strong>.</li>
          <li>Honrar a Cristo en la selección de mis <strong>compañeros</strong>.</li>
          <li>Honrar a Cristo en la selección de mis <strong>palabras y pensamientos</strong>.</li>
          <li>Honrar a Cristo en el cuidado esmerado del <strong>templo de mi cuerpo</strong>.</li>
        </ul>
      )
    }
  ];

  const [activeTab, setActiveTab] = useState(ideales[0].id);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 -left-40 w-[40rem] h-[40rem] bg-club-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[40rem] h-[40rem] bg-club-gold/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
              duration: 0.5
            }}>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
              Quiénes somos
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              El Club Emmanuel de La Trinidad es parte de una organización
              mundial patrocinada por la Iglesia Adventista del Séptimo Día,
              dedicada al desarrollo integral de niños y jóvenes.
            </p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="bg-gradient-to-br from-blue-50/80 to-white p-8 rounded-3xl shadow-sm border border-blue-100/50 flex gap-6 group hover:shadow-md transition-shadow duration-300">
            
            <div className="w-14 h-14 shrink-0 bg-blue-50 text-club-blue rounded-2xl flex items-center justify-center">
              <Target size={28} strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                Nuestra Misión
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Trabajar en favor de los jóvenes, promoviendo su desarrollo
                físico, mental y espiritual, preparándolos para el servicio a
                Dios y a la humanidad.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="bg-gradient-to-br from-amber-50/80 to-white p-8 rounded-3xl shadow-sm border border-amber-100/50 flex gap-6 group hover:shadow-md transition-shadow duration-300">
            
            <div className="w-14 h-14 shrink-0 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
              <Eye size={28} strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                Nuestra Visión
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ser un club modelo que inspire a las nuevas generaciones a vivir
                los ideales cristianos, impactando positivamente nuestra
                comunidad en La Trinidad.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-slate-600">
              Los pilares que sostienen nuestras actividades y enseñanza.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {values.map((value, index) =>
            <motion.div
              key={value.title}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1
              }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 hover:border-club-blue/20 transition-all duration-300 text-center flex flex-col items-center">
              
                <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${value.bg} ${value.color}`}>
                
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Ideals Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Nuestros Ideales
            </h2>
            <p className="text-slate-600">
              Los principios que guían la vida y el servicio de nuestro club.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
            {/* Tabs Sidebar */}
            <div className="w-full md:w-1/3 bg-slate-50 p-4 md:p-6 border-b md:border-b-0 md:border-r border-slate-100 flex flex-wrap md:flex-col gap-2 md:gap-3 justify-center md:justify-start">
              {ideales.map((ideal) => (
                <button
                  key={ideal.id}
                  onClick={() => setActiveTab(ideal.id)}
                  className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-1.5 md:gap-3 w-[calc(50%-0.25rem)] sm:w-[calc(33.33%-0.33rem)] md:w-full text-center md:text-left px-2 py-3 md:px-4 md:py-3.5 rounded-xl transition-all ${
                    activeTab === ideal.id
                      ? 'bg-club-blue text-white shadow-md'
                      : 'text-slate-600 bg-white md:bg-transparent border border-slate-200 md:border-transparent hover:bg-slate-200/50 hover:text-slate-900'
                  }`}
                >
                  <span className={`${activeTab === ideal.id ? 'text-white' : 'text-slate-400'}`}>
                    {ideal.icon}
                  </span>
                  <span className="font-semibold text-[11px] sm:text-xs md:text-base leading-tight">
                    {ideal.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="w-full md:w-2/3 p-8 md:p-12 min-h-[300px] flex items-center bg-gradient-to-br from-white to-slate-50/50">
              <AnimatePresence mode="wait">
                {ideales.map((ideal) =>
                  activeTab === ideal.id ? (
                    <motion.div
                      key={ideal.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                        <span className="text-club-blue">{ideal.icon}</span>
                        {ideal.title}
                      </h3>
                      <div className="text-lg text-slate-700 italic border-l-4 border-club-gold pl-6 py-2">
                        {ideal.content}
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>);

}