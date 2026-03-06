'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Building2, Ruler, PenTool, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'batiment',
    icon: Building2,
    title: 'Bâtiment',
    description: 'Construction de bâtiments résidentiels, commerciaux et industriels aux normes les plus exigeantes.',
    image: '/images/immeubleConst.jpg',
  },
  {
    id: 'amenagement',
    icon: Ruler,
    title: 'Aménagement',
    description: 'Aménagement intérieur et extérieur, espaces professionnels et résidentiels sur mesure.',
    image: '/images/housebuilding.jpg',
  },
  {
    id: 'conception',
    icon: PenTool,
    title: 'Conception',
    description: 'Plans architecturaux, design innovant et modélisation 3D pour concrétiser vos idées.',
    image: '/images/appart.jpg',
  },
  {
    id: 'formation',
    icon: GraduationCap,
    title: 'Formation',
    description: 'Formations professionnelles certifiantes en BTP et management de projet.',
    image: '/images/chapeauManoeuvre.jpg',
  },
  {
    id: 'expertise',
    icon: TrendingUp,
    title: 'Expertise',
    description: 'Conseil technique, audit de chantier et accompagnement personnalisé de vos projets.',
    image: '/images/travaux.jpg',
  },
]

export default function Services() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-highlight uppercase tracking-widest text-sm font-semibold mb-3">Ce que nous faisons</p>
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Une expertise complète pour tous vos projets de construction et de formation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={70}
                />
                <div className="absolute inset-0 bg-primary/50 group-hover:bg-primary/40 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded-lg">
                  <service.icon className="text-primary" size={22} />
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{service.description}</p>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="text-primary font-semibold text-sm flex items-center gap-1.5 hover:gap-3 transition-all group/link"
                >
                  En savoir plus
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}