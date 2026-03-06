'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const contactInfos = [
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['+225 05 05 91 09 97', '+225 01 53 05 05 05', '+225 27 20 35 68 55'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['nucfion01@gmail.com'],
  },
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['22 BP 700 Abidjan 22', 'Côte d\'Ivoire'],
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: ['Lundi – Vendredi : 8h00 – 18h00', 'Samedi : 9h00 – 13h00'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulaire soumis:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-highlight uppercase tracking-widest text-sm font-semibold mb-3">Parlons de votre projet</p>
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous répondre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Infos */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 mb-8">
              {contactInfos.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 bg-accent rounded-xl border border-gray-100 hover:border-primary/20 hover:shadow-sm transition-all"
                >
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <info.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm mb-1">{info.title}</h4>
                    {info.lines.map((line) => (
                      <p key={line} className="text-gray-500 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Légal */}
            <div className="p-5 bg-primary/5 rounded-xl border border-primary/10">
              <h4 className="font-semibold text-primary text-sm mb-2">Informations légales</h4>
              <p className="text-xs text-gray-500">SARL au capital de 5 000 000 FCFA</p>
              <p className="text-xs text-gray-500">RCCM : 1-ABJ-2018-B-33578</p>
              <p className="text-xs text-gray-500">NCC : 1870182W</p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-accent p-8 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">Envoyez-nous un message</h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium"
                >
                  ✓ Message envoyé avec succès ! Nous vous répondrons sous 24h.
                </motion.div>
              )}

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Sujet *
                  </label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="devis">Demande de devis</option>
                    <option value="information">Information sur un service</option>
                    <option value="formation">Inscription formation</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-sm"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-sm hover:bg-blue-800 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send size={16} />
                  Envoyer le message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}