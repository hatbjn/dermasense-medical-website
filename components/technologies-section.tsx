"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Gauge, Wifi, Smartphone, Cloud, Brain } from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    name: "ESP32",
    description: "Microcontroleur dual-core avec WiFi et Bluetooth integres pour une connectivite optimale",
    color: "blue",
    features: ["Dual-core 240MHz", "WiFi 802.11 b/g/n", "Bluetooth 4.2", "Ultra low power"]
  },
  {
    icon: Gauge,
    name: "FSR Sensors",
    description: "Capteurs de force resistifs haute precision pour une mesure fiable de la pression",
    color: "teal",
    features: ["Force 0-100N", "Resolution 12 bits", "Temps de reponse <5ms", "Durabilite elevee"]
  },
  {
    icon: Wifi,
    name: "IoT Protocol",
    description: "Communication securisee via protocoles IoT standards avec chiffrement AES-256",
    color: "blue",
    features: ["MQTT/TLS", "WebSocket", "REST API", "Chiffrement E2E"]
  },
  {
    icon: Smartphone,
    name: "Application Mobile",
    description: "Interface intuitive disponible sur iOS et Android pour une surveillance a distance",
    color: "green",
    features: ["iOS & Android", "Notifications push", "Mode hors-ligne", "Interface intuitive"]
  },
  {
    icon: Cloud,
    name: "Cloud Database",
    description: "Infrastructure cloud scalable pour le stockage securise et l'analyse des donnees",
    color: "teal",
    features: ["99.99% uptime", "HIPAA compliant", "Backup auto", "Scalable"]
  },
  {
    icon: Brain,
    name: "Intelligence Artificielle",
    description: "Algorithmes ML pour la prediction des risques et l'optimisation des alertes",
    color: "blue",
    features: ["Prediction risques", "Patterns analysis", "Auto-learning", "Recommendations"]
  }
]

export function TechnologiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue": return { bg: "bg-derma-blue/10", text: "text-derma-blue", border: "border-derma-blue/20" }
      case "teal": return { bg: "bg-derma-teal/10", text: "text-derma-teal", border: "border-derma-teal/20" }
      case "green": return { bg: "bg-derma-green/10", text: "text-derma-green", border: "border-derma-green/20" }
      default: return { bg: "bg-derma-blue/10", text: "text-derma-blue", border: "border-derma-blue/20" }
    }
  }

  return (
    <section id="technologies" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/10 to-white" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-derma-blue/10 border border-derma-blue/20 text-sm font-medium text-derma-blue mb-4">
            Stack Technique
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Technologies <span className="text-gradient">Utilisees</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Une architecture moderne combinant hardware de pointe et software intelligent
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const colors = getColorClasses(tech.color)
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={`glass rounded-2xl p-6 h-full hover:shadow-xl hover:shadow-derma-teal/10 transition-all duration-300 hover:-translate-y-1 border ${colors.border}`}>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <tech.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{tech.name}</h3>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {tech.features.map((feature) => (
                      <div
                        key={feature}
                        className="px-3 py-2 rounded-lg bg-secondary text-xs font-medium text-muted-foreground"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold text-center mb-8 text-foreground">Architecture Systeme</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            {/* Hardware Layer */}
            <div className="glass rounded-xl p-4 text-center border border-derma-blue/20">
              <div className="text-xs text-muted-foreground mb-2">Hardware Layer</div>
              <div className="flex gap-2">
                <div className="px-3 py-2 rounded-lg bg-derma-blue/10 text-xs font-medium text-derma-blue">FSR x16</div>
                <div className="px-3 py-2 rounded-lg bg-derma-teal/10 text-xs font-medium text-derma-teal">DHT22</div>
              </div>
            </div>

            <div className="text-2xl text-derma-teal hidden lg:block">-{">"}</div>
            <div className="text-2xl text-derma-teal lg:hidden rotate-90">-{">"}</div>

            {/* Edge Layer */}
            <div className="glass rounded-xl p-4 text-center border border-derma-blue/20">
              <div className="text-xs text-muted-foreground mb-2">Edge Layer</div>
              <div className="px-3 py-2 rounded-lg bg-derma-blue/10 text-xs font-medium text-derma-blue">ESP32 MCU</div>
            </div>

            <div className="text-2xl text-derma-teal hidden lg:block">-{">"}</div>
            <div className="text-2xl text-derma-teal lg:hidden rotate-90">-{">"}</div>

            {/* Cloud Layer */}
            <div className="glass rounded-xl p-4 text-center border border-derma-teal/20">
              <div className="text-xs text-muted-foreground mb-2">Cloud Layer</div>
              <div className="flex gap-2">
                <div className="px-3 py-2 rounded-lg bg-derma-teal/10 text-xs font-medium text-derma-teal">Database</div>
                <div className="px-3 py-2 rounded-lg bg-derma-blue/10 text-xs font-medium text-derma-blue">AI/ML</div>
              </div>
            </div>

            <div className="text-2xl text-derma-teal hidden lg:block">-{">"}</div>
            <div className="text-2xl text-derma-teal lg:hidden rotate-90">-{">"}</div>

            {/* App Layer */}
            <div className="glass rounded-xl p-4 text-center border border-derma-green/20">
              <div className="text-xs text-muted-foreground mb-2">Application Layer</div>
              <div className="flex gap-2">
                <div className="px-3 py-2 rounded-lg bg-derma-green/10 text-xs font-medium text-derma-green">Mobile App</div>
                <div className="px-3 py-2 rounded-lg bg-derma-blue/10 text-xs font-medium text-derma-blue">Web Dashboard</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
