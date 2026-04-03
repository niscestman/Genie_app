'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowUp } from 'lucide-react'

const quickLinks = ['Accueil', 'Services', 'Réalisations', 'À propos', 'Contact']
const serviceLinks = ['Bâtiment', 'Aménagement', 'Conception', 'Formation', 'Expertise']

const hrefMap: Record<string, string> = {
  Accueil: '#hero',
  Services: '#services',
  Réalisations: '#realisations',
  'À propos': '#about',
  Contact: '#contact',
  Bâtiment: '#services',
  Aménagement: '#services',
  Conception: '#services',
  Formation: '#services',
  Expertise: '#services',
}

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string) => {
    e.preventDefault()
    const href = hrefMap[label]
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative">
      {/* Bouton retour haut */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-highlight text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors"
      >
        <ArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* À propos */}
          <div>
            <div className="relative h-14 w-36 mb-5 bg-white p-2 rounded-lg">
              <Image
                src="/images/LOGO.png"
                alt="Génie Corporation"
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Votre partenaire de confiance pour tous vos projets de construction,
              formation et expertise en Côte d&apos;Ivoire.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-5 text-blue-100">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a
                    href={hrefMap[item]}
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-highlight rounded-full" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-5 text-blue-100">Nos services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, item)}
                    className="text-blue-200 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-highlight rounded-full" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-5 text-blue-100">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-highlight shrink-0 mt-0.5" />
                <div className="text-blue-200 text-sm">
                  <div>+225 05 05 91 09 97</div>
                  <div>+225 01 53 05 05 05</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-highlight shrink-0" />
                <span className="text-blue-200 text-sm">info@geniecorporations.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-highlight shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm">22 BP 700 Abidjan 22</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-blue-300 text-xs">
          <p>&copy; {new Date().getFullYear()} Génie Corporation SARL. Tous droits réservés.</p>
          <p className="mt-1">RCCM : 1-ABJ-2018-B-33578 · NCC : 1870182W · Capital : 5 000 000 FCFA</p>
        </div>
      </div>
    </footer>
  )
}