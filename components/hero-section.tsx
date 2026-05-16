"use client"

import { motion } from "framer-motion"
import { ChevronDown, Activity, Wifi, Shield, Droplets } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary/30 to-derma-teal/10" />
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,128,128,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-derma-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-derma-green/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-derma-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-derma-teal/10 border border-derma-teal/20 mb-6"
            >
              <span className="w-2 h-2 bg-derma-green rounded-full animate-pulse" />
              <span className="text-sm font-medium text-derma-blue">
                Matelas Intelligent
              </span>
            </motion.div>

            {/* LOGO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8 flex justify-center lg:justify-center"
            >
              <Image
                src="/logo-transparent.png"
                alt="DERMASENSE Logo"
                width={300}
                height={280}
                className="
                  w-[300px]
                  sm:w-[250px]
                  lg:w-[300px]
                  h-auto
                  object-contain
                  mix-blend-multiply
                  opacity-95
                  brightness-105
                  contrast-105
                "
                priority
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-derma-teal font-semibold mb-2 text-balance"
            >
              Innovation medicale pour la protection cutanee.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-lg text-derma-blue/80 font-medium mb-4 text-balance"
            >
              Technologie au service de la prevention des escarres.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Le matelas intelligent DERMASENSE integre une surveillance intelligente de la pression et de {"l'humidite"} afin {"d'optimiser"} le confort, la securite et la prise en charge du patient.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#fonctionnement"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-brand rounded-full overflow-hidden group hover:shadow-lg hover:shadow-derma-teal/30 transition-all duration-300 hover:scale-105"
              >
                Decouvrir
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-derma-blue border-2 border-derma-blue/20 bg-white/50 rounded-full hover:bg-derma-blue/5 hover:border-derma-blue/40 transition-all"
              >
                Nous contacter
              </Link>
            </motion.div>

            {/* Key Features from Stand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-border"
            >
              {[
                { icon: Shield, label: "Prevenir" },
                { icon: Activity, label: "Surveiller" },
                { icon: Droplets, label: "Proteger" },
                { icon: Wifi, label: "Connecter" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Stand Image & Mattress Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            {/* Main Stand Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-derma-teal/20 via-derma-green/10 to-derma-blue/20 rounded-3xl blur-3xl" />
              
              <div className="relative glass rounded-3xl p-4 overflow-hidden">
                <Image
                  src="/dermasense.png"
                  alt="DERMASENSE"
                  width={600}
                  height={450}
                  className="rounded-2xl w-full h-auto"
                  priority
                />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 bg-white/95 border border-derma-teal/30 rounded-full shadow-lg backdrop-blur-sm"
                >
                  <Wifi className="w-4 h-4 text-derma-teal animate-pulse" />
                  <span className="text-sm font-semibold text-derma-blue">Suivi en temps reel</span>
                  <div className="w-2 h-2 bg-derma-green rounded-full animate-pulse" />
                </motion.div>
              </div>

              {/* Data Card Overlay */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -right-4 top-1/4 p-4 bg-white border border-border rounded-xl shadow-xl"
              >
                <div className="text-xs text-muted-foreground mb-1">Pression detectee</div>
                <div className="text-3xl font-bold text-derma-blue">23</div>
                <div className="text-xs text-derma-teal font-medium">mmHg</div>
              </motion.div>

              {/* Humidity Card Overlay */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="absolute -left-4 bottom-1/4 p-4 bg-white border border-border rounded-xl shadow-xl"
              >
                <div className="text-xs text-muted-foreground mb-1">Humidite</div>
                <div className="text-3xl font-bold text-derma-teal">45%</div>
                <div className="text-xs text-derma-green font-medium">Optimal</div>
              </motion.div>
            </div>

            {/* Key Points from Stand - Right Panel Style */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 }}
              className="mt-6 glass rounded-2xl p-5"
            >
              <div className="grid gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-derma-blue/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-derma-blue" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Detection precoce des zones a risque</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-derma-teal/10 flex items-center justify-center flex-shrink-0">
                    <Activity className="w-4 h-4 text-derma-teal" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{"Surveillance de la pression et de l'humidite"}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-derma-green/10 flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-4 h-4 text-derma-green" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Alertes intelligentes en temps reel</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link href="#apropos" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-derma-teal transition-colors">
          <span className="text-sm">Decouvrir</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}