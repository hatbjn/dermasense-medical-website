"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/20 to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-derma-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-derma-green/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-derma-blue/10 border border-derma-blue/20 text-sm font-medium text-derma-blue mb-4">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Nous <span className="text-gradient">Contacter</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Une question ? Un projet ? Notre equipe est a votre ecoute
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Parlons de votre projet</h3>
              <p className="text-muted-foreground">
                Que vous soyez un etablissement de sante, un chercheur ou un partenaire potentiel,
                nous serions ravis de discuter de vos besoins et de la facon dont DERMASENSE
                peut vous aider.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-4 flex items-center gap-4 hover:shadow-lg hover:shadow-derma-teal/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-derma-blue/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-derma-blue" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium text-foreground">contact@dermasense.io</div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-center gap-4 hover:shadow-lg hover:shadow-derma-teal/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-derma-teal/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-derma-teal" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telephone</div>
                  <div className="font-medium text-foreground">+212 6 23 45 67 89</div>
                </div>
              </div>

              <div className="glass rounded-xl p-4 flex items-center gap-4 hover:shadow-lg hover:shadow-derma-teal/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-derma-green/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-derma-green" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Adresse</div>
                  <div className="font-medium text-foreground">Agadir,Maroc</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold mb-4 text-foreground">Liens Rapides</h4>
              <div className="grid grid-cols-2 gap-3">
                <a href="#" className="text-sm text-muted-foreground hover:text-derma-teal transition-colors">
                  Documentation technique
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-derma-teal transition-colors">
                  Etudes cliniques
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-derma-teal transition-colors">
                  FAQ
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-derma-teal transition-colors">
                  Presse
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 lg:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-derma-green/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-derma-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">Message envoye !</h3>
                  <p className="text-muted-foreground text-center">
                    Merci pour votre message. Nous vous repondrons dans les plus brefs delais.
                  </p>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-derma-teal focus:ring-1 focus:ring-derma-teal outline-none transition-colors text-foreground"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-derma-teal focus:ring-1 focus:ring-derma-teal outline-none transition-colors text-foreground"
                        placeholder="jean@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                      Sujet
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-derma-teal focus:ring-1 focus:ring-derma-teal outline-none transition-colors text-foreground"
                    >
                      <option value="">Selectionnez un sujet</option>
                      <option value="demo">Demande de demonstration</option>
                      <option value="partnership">Partenariat</option>
                      <option value="technical">Question technique</option>
                      <option value="press">Presse / Medias</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-border focus:border-derma-teal focus:ring-1 focus:ring-derma-teal outline-none transition-colors resize-none text-foreground"
                      placeholder="Votre message..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 text-sm font-semibold text-white bg-gradient-brand rounded-xl hover:shadow-lg hover:shadow-derma-teal/20 transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.02]"
                  >
                    <span>Envoyer le message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
