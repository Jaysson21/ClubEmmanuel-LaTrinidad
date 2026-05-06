import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Tent, Heart } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-club-dark text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white mb-6">
              <div>
                <img
                  src="/images/ClubLogo.png"
                  alt="Logo Club Emmanuel La Trinidad"
                  className="h-12 w-12 object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">
                  Club Emmanuel
                </span>
                <span className="text-xs font-medium text-slate-400 tracking-wider uppercase">
                  La Trinidad #1
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Formando líderes mediante el servicio, el contacto con la
              naturaleza, la amistad y los valores cristianos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-club-gold transition-colors">
                  
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/recursos"
                  className="text-sm hover:text-club-gold transition-colors">
                  
                  Biblioteca de Recursos
                </Link>
              </li>
              <li>
                <Link
                  to="/galeria"
                  className="text-sm hover:text-club-gold transition-colors">
                  
                  Galería de Actividades
                </Link>
              </li>
              <li>
                <Link
                  to="/acerca"
                  className="text-sm hover:text-club-gold transition-colors">
                  
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-sm hover:text-club-gold transition-colors">
                  
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-club-gold mt-0.5 shrink-0" />
                <span className="text-sm leading-relaxed">
                  Costado Nor-Oeste Hospital Pedro Altamirano,
                  <br />
                  La Trinidad, Estelí
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-club-gold shrink-0" />
                <span className="text-sm">+505 0000 0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-club-gold shrink-0" />
                <span className="text-sm">contacto@clubemmanuel.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Club Emmanuel La Trinidad #1. Todos los
            derechos reservados. Jaysson Fley
          </p>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Hecho con <Heart size={12} className="text-red-500 fill-red-500" />{' '}
            para el ministerio juvenil
          </p>
        </div>
      </div>
    </footer>);

}