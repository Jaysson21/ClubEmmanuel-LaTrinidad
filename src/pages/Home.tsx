import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Compass,
  Users,
  Map,
  HeartHandshake,
  Leaf
} from
  'lucide-react';
import { motion } from 'framer-motion';
export function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-club-blue overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute left-0 top-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none">

            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" />
            <path
              d="M0,100 C20,80 40,100 60,80 C80,60 100,80 100,80 L100,100 Z"
              fill="#ffffff" />

          </svg>
        </div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-club-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -left-20 top-20 w-72 h-72 bg-club-green rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32">
          <div className="max-w-3xl">
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
                duration: 0.6
              }}>

              <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-club-gold text-sm font-semibold tracking-wider mb-6 border border-white/20">
                CLUB EMMANUEL • LA TRINIDAD #1
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Recursos para crecer en{' '}
                <span className="text-club-gold">fe</span>,{' '}
                <span className="text-club-green">servicio</span> y amistad
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
                Biblioteca digital de libros, tarjetas y materiales para el
                desarrollo físico, mental y espiritual de nuestros
                Conquistadores y Aventureros.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/recursos"
                  className="bg-club-gold hover:bg-yellow-500 text-club-dark px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5">

                  Ver recursos <ArrowRight size={20} />
                </Link>
                <Link
                  to="/acerca"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 flex items-center justify-center backdrop-blur-sm">

                  Conocer el club
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Groups Section */}
      <section className="py-20 bg-club-light relative -mt-8 rounded-t-[2.5rem] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-club-dark mb-4">
              Nuestros Clubes
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Dos programas diseñados específicamente para las necesidades de
              desarrollo de cada edad, unidos por un mismo propósito.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Aventureros Card */}
            <motion.div
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
                duration: 0.5
              }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">

              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="w-16 h-16 bg-club-blue/10 text-club-blue rounded-2xl flex items-center justify-center mb-6">
                <Users size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                Aventureros
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Para niños de 6 a 9 años. Un programa familiar que apoya a los
                padres en la tarea de guiar a sus hijos en el desarrollo de un
                carácter cristiano.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-club-blue" />{' '}
                  Abejitas Laboriosas (6 años)
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-club-blue" />{' '}
                  Rayitos de Sol (7 años)
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-club-blue" />{' '}
                  Constructores (8 años)
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-club-blue" />{' '}
                  Manos Ayudadoras (9 años)
                </li>
              </ul>
              <Link
                to="/recursos?grupo=Aventureros"
                className="inline-flex items-center gap-2 text-club-blue font-bold hover:text-blue-800 transition-colors">

                Ver materiales <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Conquistadores Card */}
            <motion.div
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
                duration: 0.5,
                delay: 0.1
              }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all">

              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="w-16 h-16 bg-club-gold/20 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Compass size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                Conquistadores
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Para jóvenes de 10 a 15 años. Enfocado en el desarrollo físico,
                mental y espiritual a través de actividades al aire libre,
                servicio y liderazgo.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-club-gold" />{' '}
                  Amigo & Compañero (10-11 años)
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-club-gold" />{' '}
                  Explorador & Orientador (12-13 años)
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-club-gold" />{' '}
                  Viajero & Guía (14-15 años)
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-club-gold" />{' '}
                  Liderazgo (Guía Mayor)
                </li>
              </ul>
              <Link
                to="/recursos?grupo=Conquistadores"
                className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors">

                Ver materiales <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Brief */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-slate-100">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">
                Nuestra Misión
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Salvar del pecado y guiar en el servicio. Trabajamos para formar
                una generación de jóvenes comprometidos con Dios, la naturaleza
                y su comunidad, desarrollando líderes íntegros para el futuro.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                  <HeartHandshake size={18} className="text-club-blue" />
                  <span className="font-medium text-sm text-slate-700">
                    Servicio
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                  <Leaf size={18} className="text-club-green" />
                  <span className="font-medium text-sm text-slate-700">
                    Naturaleza
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm">
                  <Map size={18} className="text-club-gold" />
                  <span className="font-medium text-sm text-slate-700">
                    Aventura
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-square bg-transparent rounded-2xl flex items-center justify-center relative overflow-hidden">
              <img
                src="/images/ClubLogo.png"
                alt="Logo Club Emmanuel La Trinidad"
                className="w-40 h-40 object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>);

}