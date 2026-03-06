'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building, Users, Award, Calendar, Target, Clock } from 'lucide-react'

const stats = [
  { icon: Calendar, value: '2018', label: 'Année de création', suffix: '' },
  { icon: Building, value: '50', label: 'Projets réalisés', suffix: '+' },
  { icon: Users, value: '200', label: 'Professionnels formés', suffix: '+' },
  { icon: Award, value: '100', label: 'Satisfaction client', suffix: '%' },
  { icon: Target, value: '15', label: 'Experts', suffix: '+' },
  { icon: Clock, value: '5', label: "Années d'expérience", suffix: '+' },
]

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-300 uppercase tracking-widest text-sm font-semibold mb-3">Notre impact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Génie Corporation en chiffres</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">Des résultats concrets qui parlent d&apos;eux-mêmes</p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="inline-block p-4 bg-white/10 rounded-2xl mb-4 group-hover:bg-white/20 transition-colors"
              >
                <stat.icon size={28} className="text-blue-200" />
              </motion.div>

              <motion.div
                className="text-3xl md:text-4xl font-bold mb-1 text-white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {stat.value}{stat.suffix}
              </motion.div>

              <div className="text-xs text-blue-300 uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}