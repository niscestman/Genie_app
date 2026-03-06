'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Résidence Les Jardins',
    category: 'Bâtiment',
    image: '/images/appart.jpg',
    description: "Construction d'un immeuble résidentiel de 12 appartements à Cocody.",
  },
  {
    id: 2,
    title: 'Siège Social – Groupe ABC',
    category: 'Bâtiment',
    image: '/images/immeubleConst.jpg',
    description: "Construction d'un immeuble de bureaux moderne de 8 étages.",
  },
  {
    id: 3,
    title: 'Aménagement Plateau',
    category: 'Aménagement',
    image: '/images/housebuilding.jpg',
    description: 'Aménagement extérieur et espaces verts pour une entreprise.',
  },
  {
    id: 4,
    title: 'Villa Luxueuse',
    category: 'Conception',
    image: '/images/siteConstruc.jpg',
    description: "Conception architecturale d'une villa moderne avec piscine.",
  },
  {
    id: 5,
    title: 'Centre de Formation',
    category: 'Formation',
    image: '/images/chapeauManoeuvre.jpg',
    description: 'Espace de formation professionnelle avec équipements modernes.',
  },
  {
    id: 6,
    title: 'Chantier Industriel',
    category: 'Expertise',
    image: '/images/travaux.jpg',
    description: 'Expertise et supervision de chantier industriel.',
  },
]

const categories = ['Tous', 'Bâtiment', 'Aménagement', 'Conception', 'Formation', 'Expertise']

type Project = typeof projects[0]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="realisations" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-highlight uppercase tracking-widest text-sm font-semibold mb-3">Portfolio</p>
          <h2 className="section-title">Nos Réalisations</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Quelques projets récents qui témoignent de notre savoir-faire
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-sm cursor-pointer border border-gray-100"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={70}
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-blue-200 font-medium uppercase tracking-wider mb-1">{project.category}</span>
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={16} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow transition-colors"
                >
                  <X size={20} className="text-gray-700" />
                </button>

                <div className="relative h-72">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    quality={80}
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>

                <div className="p-6">
                  <span className="text-xs text-highlight font-semibold uppercase tracking-wider">{selectedProject.category}</span>
                  <h3 className="text-xl font-bold text-primary mt-1 mb-3">{selectedProject.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{selectedProject.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}