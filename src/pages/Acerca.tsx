import React from 'react';
import {
  Heart,
  HandHeart,
  Users,
  Trophy,
  Leaf,
  Target,
  Eye } from
'lucide-react';
import { motion } from 'framer-motion';
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

  return (
    <div className="min-h-screen pt-28 pb-20 bg-club-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 flex gap-6">
            
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
            className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 flex gap-6">
            
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
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center flex flex-col items-center">
              
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
      </div>
    </div>);

}