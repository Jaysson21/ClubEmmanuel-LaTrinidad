import React, { useState } from 'react';
import { MapPin, MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
export function Contacto() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };
  return (
    <div className="min-h-screen pt-28 pb-20 bg-club-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">
            Contáctanos
          </h1>
          <p className="text-lg text-slate-600">
            ¿Tienes dudas sobre cómo unirte al club o necesitas más información?
            Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Info & Map */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://wa.me/50500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-green-200 hover:shadow-md transition-all group flex flex-col items-center text-center">
                
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">WhatsApp</h3>
                <p className="text-sm text-slate-500">
                  Escríbenos directamente
                </p>
              </a>

              <a
                href="mailto:contacto@clubemmanuel.org"
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all group flex flex-col items-center text-center">
                
                <div className="w-12 h-12 bg-blue-50 text-club-blue rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-slate-800 mb-1">Correo</h3>
                <p className="text-sm text-slate-500">
                  contacto@clubemmanuel.org
                </p>
              </a>
            </div>

            {/* Location Card / Map Placeholder */}
            <div className="bg-white p-2 rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="bg-slate-100 rounded-2xl h-64 w-full relative flex items-center justify-center overflow-hidden group">
                {/* Decorative map-like background pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                    'radial-gradient(#cbd5e1 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 max-w-[80%]">
                  <div className="w-10 h-10 bg-club-blue text-white rounded-full flex items-center justify-center mb-3 shadow-md">
                    <MapPin size={20} />
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">
                    Nuestra Ubicación
                  </h3>
                  <p className="text-sm text-slate-600">
                    Costado Nor-Oeste Hospital Pedro Altamirano, La Trinidad,
                    Estelí
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
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
              duration: 0.5,
              delay: 0.2
            }}
            className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100">
            
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Envíanos un mensaje
            </h2>

            {isSubmitted ?
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center">
              
                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-green-600">
                  Gracias por contactarnos. Te responderemos lo más pronto
                  posible.
                </p>
              </motion.div> :

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-slate-700 mb-1.5">
                  
                    Nombre completo
                  </label>
                  <input
                  type="text"
                  id="nombre"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-club-blue/20 focus:border-club-blue transition-all"
                  placeholder="Ej. Juan Pérez" />
                
                </div>

                <div>
                  <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-1.5">
                  
                    Correo o Teléfono
                  </label>
                  <input
                  type="text"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-club-blue/20 focus:border-club-blue transition-all"
                  placeholder="Para poder responderte" />
                
                </div>

                <div>
                  <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-slate-700 mb-1.5">
                  
                    Mensaje
                  </label>
                  <textarea
                  id="mensaje"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-club-blue/20 focus:border-club-blue transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?">
                </textarea>
                </div>

                <button
                type="submit"
                className="w-full bg-club-blue hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                
                  <Send size={18} />
                  Enviar mensaje
                </button>
              </form>
            }
          </motion.div>
        </div>
      </div>
    </div>);

}