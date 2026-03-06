'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/siteConstruc.jpg"
          alt="Chantier de construction"
          fill
          className="object-cover"
          priority
          quality={75}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-200 uppercase tracking-widest text-sm font-medium mb-6">
            Depuis 2018 · Côte d&apos;Ivoire
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
            Génie Corporation
          </h1>
          <p className="text-lg md:text-xl font-light text-blue-100 mb-6 tracking-wide">
            Bâtiment · Aménagement · Conception · Formation · Expertise
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-lg mb-10 max-w-2xl mx-auto text-blue-50/90"
        >
          Nous accompagnons vos projets de construction, d&apos;aménagement
          et de développement des compétences en Côte d&apos;Ivoire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-base hover:bg-gray-50 transition-all shadow-lg flex items-center justify-center gap-2 group"
          >
            Demander un devis
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            onClick={(e) => handleScroll(e, '#services')}
            className="border-2 border-white/70 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 transition-all"
          >
            Nos services
          </a>
        </motion.div>

        {/* Stats rapides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto"
        >
          {[
            { value: '50+', label: 'Projets' },
            { value: '200+', label: 'Formés' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-blue-200 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown size={28} className="text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}