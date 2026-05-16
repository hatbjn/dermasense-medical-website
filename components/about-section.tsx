"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Heart, Clock, Users, TrendingDown, CheckCircle } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="apropos" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-white to-white" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-derma-teal/10 border border-derma-teal/20 text-sm font-medium text-derma-blue mb-4">
            A Propos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Innovation medicale pour la{" "}
            <span className="text-gradient">protection cutanee</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Le matelas intelligent DERMASENSE integre une surveillance intelligente de la pression 
            et de {"l'humidite"} afin {"d'optimiser"} le confort, la securite et la prise en charge du patient.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {"Qu'est-ce qu'une escarre ?"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Une escarre est une lesion cutanee causee par une pression prolongee sur la peau,
                generalement au niveau des prominences osseuses. Elle survient lorsque
                {"l'apport sanguin"} est interrompu, entrainant la mort des tissus.
                La prevention est essentielle pour proteger les patients alites.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-derma-teal/10 transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-derma-blue/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-derma-blue" />
                </div>
                <div className="text-3xl font-bold text-derma-blue mb-1">2.5M</div>
                <p className="text-xs text-muted-foreground">
                  Patients touches par an
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-derma-teal/10 transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-derma-green/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-derma-green" />
                </div>
                <div className="text-3xl font-bold text-derma-green mb-1">95%</div>
                <p className="text-xs text-muted-foreground">
                  Des escarres evitables
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass rounded-2xl p-6 text-center hover:shadow-lg hover:shadow-derma-teal/10 transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-derma-teal/10 flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-derma-teal" />
                </div>
                <div className="text-3xl font-bold text-derma-teal mb-1">60%</div>
                <p className="text-xs text-muted-foreground">
                  Reduction possible
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Problem Cards */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6 border-l-4 border-destructive hover:shadow-lg hover:shadow-destructive/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-destructive/10">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Risques Graves</h4>
                  <p className="text-muted-foreground text-sm">
                    Sans surveillance adequate, les escarres peuvent evoluer rapidement
                    vers des stades avances, causant infections et complications severes.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border-l-4 border-warning hover:shadow-lg hover:shadow-warning/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-warning/10">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Detection Tardive</h4>
                  <p className="text-muted-foreground text-sm">
                    Les methodes traditionnelles de surveillance reposent sur des inspections
                    periodiques, souvent insuffisantes pour une prevention efficace.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border-l-4 border-derma-teal hover:shadow-lg hover:shadow-derma-teal/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-derma-teal/10">
                  <Heart className="w-6 h-6 text-derma-teal" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Notre Solution</h4>
                  <p className="text-muted-foreground text-sm">
                    DERMASENSE offre une surveillance continue et intelligente,
                    permettant une intervention precoce et personnalisee. Des donnees precises
                    pour des decisions eclairees.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
