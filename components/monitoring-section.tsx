"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { AlertTriangle, CheckCircle, RotateCcw } from "lucide-react"

const sensorData = [
  { id: 0, status: "danger", value: 85 },
  { id: 1, status: "normal", value: 32 },
  { id: 2, status: "warning", value: 65 },
  { id: 3, status: "normal", value: 28 },
  { id: 4, status: "normal", value: 35 },
  { id: 5, status: "normal", value: 40 },
  { id: 6, status: "normal", value: 38 },
  { id: 7, status: "warning", value: 58 },
  { id: 8, status: "normal", value: 30 },
  { id: 9, status: "normal", value: 42 },
  { id: 10, status: "normal", value: 36 },
  { id: 11, status: "normal", value: 25 },
  { id: 12, status: "warning", value: 62 },
  { id: 13, status: "normal", value: 33 },
  { id: 14, status: "normal", value: 29 },
  { id: 15, status: "normal", value: 27 },
]

const statusCards = [
  {
    status: "normal",
    label: "Pression Normale",
    description: "Zone sans risque, pression dans les limites acceptables",
    icon: CheckCircle,
    color: "success",
    threshold: "< 50 mmHg"
  },
  {
    status: "warning",
    label: "Surveillance",
    description: "Pression elevee detectee, repositionnement recommande",
    icon: AlertTriangle,
    color: "warning",
    threshold: "50-70 mmHg"
  },
  {
    status: "danger",
    label: "Repositionnement Necessaire",
    description: "Pression critique, action immediate requise",
    icon: RotateCcw,
    color: "destructive",
    threshold: "> 70 mmHg"
  }
]

export function MonitoringSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [sensors, setSensors] = useState(sensorData)
  const [lastUpdate, setLastUpdate] = useState(new Date())

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSensors(prev => prev.map(sensor => ({
        ...sensor,
        value: Math.max(20, Math.min(90, sensor.value + (Math.random() - 0.5) * 10)),
        status: sensor.value > 70 ? "danger" : sensor.value > 50 ? "warning" : "normal"
      })))
      setLastUpdate(new Date())
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "danger": return "bg-red-500"
      case "warning": return "bg-amber-500"
      default: return "bg-emerald-500"
    }
  }

  const getStatusBorder = (status: string) => {
    switch (status) {
      case "danger": return "border-red-500 shadow-red-500/30"
      case "warning": return "border-amber-500 shadow-amber-500/30"
      default: return "border-emerald-500 shadow-emerald-500/30"
    }
  }

  return (
    <section id="surveillance" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/20 to-white" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-derma-green/10 border border-derma-green/20 text-sm font-medium text-derma-blue mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Surveillance en Direct
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Surveillance <span className="text-gradient">Intelligente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Visualisation en temps reel de {"l'etat"} de chaque zone du matelas avec alertes automatiques
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Live Sensor Grid */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-6 lg:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-foreground">Carte des Capteurs</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Mise a jour: {lastUpdate.toLocaleTimeString()}
              </div>
            </div>

            {/* Sensor Grid */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-xl p-4 border-4 border-slate-700">
              <div className="absolute inset-4 grid grid-cols-4 grid-rows-4 gap-2">
                {sensors.map((sensor, i) => (
                  <motion.div
                    key={sensor.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className={`relative rounded-lg border-2 ${getStatusBorder(sensor.status)} shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform ${
                      sensor.status === "danger" ? "animate-pulse" : ""
                    }`}
                    style={{
                      backgroundColor: `rgba(${
                        sensor.status === "danger" ? "239, 68, 68" :
                        sensor.status === "warning" ? "234, 179, 8" :
                        "34, 197, 94"
                      }, ${sensor.value / 100 * 0.5 + 0.1})`
                    }}
                  >
                    <div className="text-center">
                      <div className={`w-3 h-3 rounded-full mx-auto mb-1 ${getStatusColor(sensor.status)}`} />
                      <span className="text-xs font-medium text-white">{Math.round(sensor.value)}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Patient Silhouette Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <svg viewBox="0 0 100 150" className="w-3/4 h-3/4 text-white">
                  <ellipse cx="50" cy="20" rx="15" ry="18" fill="currentColor" />
                  <rect x="35" y="38" width="30" height="50" rx="10" fill="currentColor" />
                  <rect x="20" y="38" width="15" height="40" rx="5" fill="currentColor" />
                  <rect x="65" y="38" width="15" height="40" rx="5" fill="currentColor" />
                  <rect x="38" y="88" width="10" height="50" rx="5" fill="currentColor" />
                  <rect x="52" y="88" width="10" height="50" rx="5" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-muted-foreground">Normal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span className="text-xs text-muted-foreground">Surveillance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs text-muted-foreground">Critique</span>
              </div>
            </div>
          </motion.div>

          {/* Status Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {statusCards.map((card, index) => (
              <motion.div
                key={card.status}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className={`glass rounded-2xl p-6 border-l-4 ${
                  card.color === "success" ? "border-emerald-500 hover:shadow-emerald-500/10" :
                  card.color === "warning" ? "border-amber-500 hover:shadow-amber-500/10" :
                  "border-red-500 hover:shadow-red-500/10"
                } hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    card.color === "success" ? "bg-emerald-500/10" :
                    card.color === "warning" ? "bg-amber-500/10" :
                    "bg-red-500/10"
                  }`}>
                    <card.icon className={`w-6 h-6 ${
                      card.color === "success" ? "text-emerald-500" :
                      card.color === "warning" ? "text-amber-500" :
                      "text-red-500"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{card.label}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        card.color === "success" ? "bg-emerald-500/10 text-emerald-600" :
                        card.color === "warning" ? "bg-amber-500/10 text-amber-600" :
                        "bg-red-500/10 text-red-600"
                      }`}>
                        {card.threshold}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Real-time Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="glass rounded-2xl p-6"
            >
              <h4 className="text-lg font-semibold mb-4 text-foreground">Statistiques en Direct</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-500">
                    {sensors.filter(s => s.status === "normal").length}
                  </div>
                  <div className="text-xs text-muted-foreground">Zones OK</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-500">
                    {sensors.filter(s => s.status === "warning").length}
                  </div>
                  <div className="text-xs text-muted-foreground">A surveiller</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">
                    {sensors.filter(s => s.status === "danger").length}
                  </div>
                  <div className="text-xs text-muted-foreground">Critiques</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
