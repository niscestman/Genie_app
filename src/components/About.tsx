'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Target, Users, Shield } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Notre Mission',
    description: 'Offrir des solutions innovantes et durables dans le secteur du BTP et de la formation professionnelle.',
  },
  {
    icon: Users,
    title: 'Notre Équipe',
    description: 'Une équipe de 15+ experts passionnés, engagés pour la qualité et la satisfaction client.',
  },
  {
    icon: Shield,
    title: 'Nos Engagements',
    description: 'Respect des délais, qualité des matériaux, sécurité sur les chantiers et transparence totale.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-highlight uppercase tracking-widest text-sm font-semibold mb-3">Notre histoire</p>
          <h2 className="section-title">Qui sommes-nous ?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Une entreprise ivoirienne au service de vos ambitions depuis 2018
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative h-100 lg:h-120 w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ferChantier.jpg"
                alt="Chantier Génie Corporation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent" />
              {/* Badge flottant */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-3">
                <p className="text-primary font-bold text-xl">+50</p>
                <p className="text-gray-500 text-xs">Projets réalisés</p>
              </div>
            </div>
          </motion.div>

          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                <span className="font-bold text-primary">Génie Corporation SARL</span> est une entreprise
                ivoirienne fondée en 2018, spécialisée dans le bâtiment, l&apos;aménagement,
                la conception architecturale, la formation et l&apos;expertise technique.
              </p>
              <p>
                Immatriculée au RCCM sous le numéro <span className="font-semibold text-gray-700">1-ABJ-2018-B-33578</span> (NCC: 1870182W),
                nous intervenons sur toute la Côte d&apos;Ivoire avec une équipe de professionnels
                passionnés et expérimentés.
              </p>

              <div className="bg-accent border border-gray-100 p-6 rounded-xl mt-4">
                <h3 className="font-bold text-primary text-base mb-4">Nos atouts :</h3>
                <ul className="space-y-3">
                  {[
                    'Expertise technique reconnue',
                    'Respect strict des normes de construction',
                    'Formations certifiantes',
                    'Suivi personnalisé des projets',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="text-highlight shrink-0" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-accent border border-gray-100 p-8 rounded-2xl text-center group hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                <value.icon className="text-primary group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-white transition-colors">{value.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{value.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}