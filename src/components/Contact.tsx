'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Loader2 } from 'lucide-react'
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
    lines: ['info@geniecorporations.com'],
  },
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['22 BP 700 Abidjan 22', "Côte d'Ivoire"],
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: ['Lundi – Vendredi : 8h00 – 18h00', 'Samedi : 9h00 – 13h00'],
  },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error('Erreur serveur')

      setStatus('success')

      const whatsappMessage = `📩 *Nouveau message via le site*\n\n*Nom :* ${formData.nom}\n*Email :* ${formData.email}\n*Téléphone :* ${formData.telephone || 'Non renseigné'}\n*Sujet :* ${formData.sujet}\n\n*Message :*\n${formData.message}`
      window.open(
        `https://wa.me/2250505910997?text=${encodeURIComponent(whatsappMessage)}`,
        '_blank'
      )

      setFormData({ nom: '', email: '', telephone: '', sujet: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-700/20 outline-none transition-all text-sm disabled:opacity-60"

  return (
    <section id="contact" style={{ backgroundColor: '#ffffff' }} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#3B82F6' }}>
            Parlons de votre projet
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1E3A8A' }}>
            Contactez-nous
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous répondre.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Infos contact */}
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
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:shadow-sm transition-all"
                  style={{ backgroundColor: '#F8FAFC' }}
                >
                  <div className="p-3 rounded-lg shrink-0" style={{ backgroundColor: '#EFF6FF' }}>
                    <info.icon style={{ color: '#1E3A8A' }} size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: '#1E3A8A' }}>{info.title}</h4>
                    {info.lines.map((line) => (
                      <p key={line} className="text-gray-500 text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/2250505910997?text=${encodeURIComponent(
                "Bonjour Génie Corporation, je souhaite obtenir plus d'informations sur vos services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full text-white py-3 rounded-xl font-semibold text-sm transition-colors shadow-md mb-4"
              style={{ backgroundColor: '#22C55E' }}
            >
              <MessageCircle size={20} />
              Écrire directement sur WhatsApp
            </a>

            <div className="p-2 rounded-xl border border-blue-100" style={{ backgroundColor: '#EFF6FF' }}>
              <h4 className="font-semibold text-sm mb-2" style={{ color: '#1E3A8A' }}>Informations légales</h4>
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
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl border border-gray-100 shadow-sm"
              style={{ backgroundColor: '#F8FAFC' }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: '#1E3A8A' }}>
                Envoyez-nous un message
              </h3>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium"
                >
                  ✅ Message envoyé ! Confirmation par email envoyée. WhatsApp s&apos;ouvre pour notifier l&apos;équipe.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm font-medium"
                >
                  ❌ Une erreur s&apos;est produite. Réessayez ou contactez-nous via WhatsApp.
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
                    disabled={status === 'loading'}
                    className={inputClass}
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
                      disabled={status === 'loading'}
                      className={inputClass}
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
                      disabled={status === 'loading'}
                      className={inputClass}
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
                    disabled={status === 'loading'}
                    className={inputClass}
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Demande de devis">Demande de devis</option>
                    <option value="Information sur un service">Information sur un service</option>
                    <option value="Inscription formation">Inscription formation</option>
                    <option value="Partenariat">Partenariat</option>
                    <option value="Autre">Autre</option>
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
                    disabled={status === 'loading'}
                    className={inputClass + ' resize-none'}
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: status === 'loading' ? 1 : 1.01 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.99 }}
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full text-white px-6 py-4 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#1E3A8A' }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>

                <p className="text-center text-xs text-gray-400">
                  Après envoi, WhatsApp s&apos;ouvrira automatiquement pour notifier notre équipe.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}