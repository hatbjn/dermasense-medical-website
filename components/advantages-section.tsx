"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Shield, 
  Activity, 
  AlertTriangle, 
  Users, 
  Heart,
  Droplets
} from "lucide-react"

const advantages = [
  {
    icon: Shield,
    title: "Detection Precoce des Zones a Risque",
    description: "Identification anticipee des zones de pression excessive avant l'apparition des lesions grace a nos capteurs FSR de haute precision.",
    stat: "95%",
    statLabel: "d'escarres evitees"
  },
  {
    icon: Activity,
    title: "Surveillance de la Pression et de l'Humidite",
    description: "Monitoring continu 24h/24 et 7j/7 avec analyse en temps reel des donnees de pression et d'humidite du matelas.",
    stat: "<1s",
    statLabel: "temps de reponse"
  },
  {
    icon: AlertTriangle,
    title: "Alertes Intelligentes en Temps Reel",
    description: "Notifications instantanees sur l'application mobile des que des parametres critiques sont detectes pour une intervention rapide.",
    stat: "24/7",
    statLabel: "surveillance"
  },
  {
    icon: Users,
    title: "Assistance au Personnel Medical",
    description: "Outil d'aide a la decision pour optimiser les soins, planifier les repositionnements et reduire la charge de travail.",
    stat: "50%",
    statLabel: "gain de temps"
  },
  {
    icon: Heart,
    title: "Confort et Securite des Patients",
    description: "Protection renforcee des patients vulnerables avec un suivi personnalise pour une meilleure prise en charge.",
    stat: "100%",
    statLabel: "couverture"
  },
  {
    icon: Droplets,
    title: "Controle de l'Humidite",
    description: "Detection precise du niveau d'humidite pour prevenir la maceration cutanee, facteur aggravant des escarres.",
    stat: "45%",
    statLabel: "taux optimal"
  }
]

export function AdvantagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="avantages" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/20 to-white" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-derma-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-derma-green/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-derma-green/10 border border-derma-green/20 text-sm font-medium text-derma-blue mb-4">
            Benefices
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
            {"L'innovation au service de la"}{" "}
            <span className="text-gradient">prevention</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Des donnees precises pour des decisions eclairees. Une solution complete 
            pour le bien-etre des patients.
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:shadow-xl hover:shadow-derma-teal/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-derma-teal/20 via-transparent to-derma-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-derma-blue/10 to-derma-teal/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <advantage.icon className="w-7 h-7 text-derma-blue" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 text-foreground">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{advantage.description}</p>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gradient">{advantage.stat}</span>
                    <span className="text-sm text-muted-foreground">{advantage.statLabel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass rounded-2xl p-6">
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold mb-1 text-foreground">Pour une peau saine, un soin intelligent.</h3>
              <p className="text-sm text-muted-foreground">Contactez-nous pour une demonstration</p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-brand rounded-full hover:shadow-lg hover:shadow-derma-teal/20 transition-all hover:scale-105"
            >
              Demander une demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
