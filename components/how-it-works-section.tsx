"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Gauge, Droplets, Cpu, Smartphone, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Gauge,
    title: "Capteurs FSR",
    subtitle: "Force Sensing Resistors",
    description: "16 capteurs FSR mesurent en continu la pression exercee sur chaque zone du matelas avec une precision millimetrique.",
    color: "blue",
    details: ["Mesure 0-100 N/cm2", "Resolution 12 bits", "Frequence 10Hz"]
  },
  {
    icon: Droplets,
    title: "Capteur Humidite",
    subtitle: "DHT22 Sensor",
    description: "Detection de l'humidite et de la temperature pour prevenir la maceration cutanee et assurer le confort du patient.",
    color: "teal",
    details: ["Humidite 0-100%", "Temperature -40C a 80C", "Precision 2%"]
  },
  {
    icon: Cpu,
    title: "ESP32 Controller",
    subtitle: "Microcontroleur IoT",
    description: "Le cerveau du systeme traite les donnees en temps reel et les transmet via WiFi/Bluetooth au cloud securise.",
    color: "blue",
    details: ["Dual-core 240MHz", "WiFi + Bluetooth", "Cryptage AES-256"]
  },
  {
    icon: Smartphone,
    title: "Application Mobile",
    subtitle: "Dashboard Temps Reel",
    description: "Interface intuitive pour le personnel medical avec alertes instantanees et historique complet des donnees.",
    color: "green",
    details: ["Alertes push", "Graphiques temps reel", "Export donnees"]
  }
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="fonctionnement" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/20 to-white" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-derma-teal/10 border border-derma-teal/20 text-sm font-medium text-derma-blue mb-4">
            Fonctionnement
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Comment <span className="text-gradient">ca marche ?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Une architecture IoT complete pour une surveillance intelligente et continue
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full hover:shadow-xl hover:shadow-derma-teal/10 transition-all duration-300 hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-brand flex items-center justify-center text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl mb-4 flex items-center justify-center ${
                  step.color === "blue" ? "bg-derma-blue/10" :
                  step.color === "teal" ? "bg-derma-teal/10" :
                  "bg-derma-green/10"
                }`}>
                  <step.icon className={`w-7 h-7 ${
                    step.color === "blue" ? "text-derma-blue" :
                    step.color === "teal" ? "text-derma-teal" :
                    "text-derma-green"
                  }`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-1 text-foreground">{step.title}</h3>
                <p className="text-sm text-derma-teal mb-3">{step.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-derma-teal" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-derma-teal/40" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Data Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">Flux de Donnees</h3>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            <div className="px-4 py-2 rounded-full bg-derma-blue/10 text-derma-blue font-medium">
              Capteurs FSR
            </div>
            <ArrowRight className="w-4 h-4 text-derma-teal" />
            <div className="px-4 py-2 rounded-full bg-derma-teal/10 text-derma-teal font-medium">
              Capteur Humidite
            </div>
            <ArrowRight className="w-4 h-4 text-derma-teal" />
            <div className="px-4 py-2 rounded-full bg-derma-blue/10 text-derma-blue font-medium">
              ESP32
            </div>
            <ArrowRight className="w-4 h-4 text-derma-teal" />
            <div className="px-4 py-2 rounded-full bg-muted text-foreground font-medium">
              Cloud
            </div>
            <ArrowRight className="w-4 h-4 text-derma-teal" />
            <div className="px-4 py-2 rounded-full bg-derma-green/10 text-derma-green font-medium">
              Application
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
