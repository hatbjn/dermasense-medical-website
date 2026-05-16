"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Bell, TrendingUp, Droplets, Clock, User, AlertTriangle } from "lucide-react"

export function DashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [humidity, setHumidity] = useState(45)
  const [temperature, setTemperature] = useState(36.5)

  useEffect(() => {
    const interval = setInterval(() => {
      setHumidity(prev => Math.max(30, Math.min(70, prev + (Math.random() - 0.5) * 5)))
      setTemperature(prev => Math.max(35, Math.min(38, prev + (Math.random() - 0.5) * 0.3)))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Heatmap data (16 zones)
  const heatmapData = [
    [75, 45, 30, 25],
    [55, 40, 35, 30],
    [45, 50, 45, 40],
    [30, 35, 40, 35]
  ]

  const getHeatColor = (value: number) => {
    if (value > 60) return "bg-red-500/80"
    if (value > 45) return "bg-amber-500/70"
    return "bg-emerald-500/60"
  }

  const alerts = [
    { id: 1, type: "critical", message: "Zone A1: Pression critique detectee", time: "Il y a 2 min", patient: "Chambre 12" },
    { id: 2, type: "warning", message: "Zone C3: Humidite elevee", time: "Il y a 15 min", patient: "Chambre 08" },
    { id: 3, type: "info", message: "Patient repositionne avec succes", time: "Il y a 30 min", patient: "Chambre 12" },
  ]

  const pressureHistory = [
    { time: "00:00", avg: 35 },
    { time: "04:00", avg: 42 },
    { time: "08:00", avg: 38 },
    { time: "12:00", avg: 55 },
    { time: "16:00", avg: 48 },
    { time: "20:00", avg: 40 },
    { time: "Maintenant", avg: 45 },
  ]

  return (
    <section id="dashboard" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/10 to-white" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-derma-teal/10 border border-derma-teal/20 text-sm font-medium text-derma-blue mb-4">
            Interface de Controle
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
            Tableau de <span className="text-gradient">Bord</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Une interface intuitive pour le personnel medical, centralisant toutes les donnees essentielles
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-4 lg:p-6 shadow-2xl shadow-derma-teal/10"
        >
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <div className="text-sm font-medium text-derma-blue">
              DERMASENSE Dashboard v2.0
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Heatmap */}
            <div className="lg:col-span-2 space-y-6">
              {/* Heatmap Card */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground">Carte Thermique</h3>
                  <span className="text-xs text-derma-teal px-2 py-1 rounded-full bg-derma-teal/10">
                    Temps reel
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2 aspect-video">
                  {heatmapData.flat().map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + i * 0.02 }}
                      className={`${getHeatColor(value)} rounded-lg flex items-center justify-center text-sm font-bold text-white transition-colors duration-500`}
                    >
                      {value}
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-6 mt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-2 rounded bg-emerald-500/60" />
                    <span>Faible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-2 rounded bg-amber-500/70" />
                    <span>Moyen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-2 rounded bg-red-500/80" />
                    <span>Eleve</span>
                  </div>
                </div>
              </div>

              {/* Pressure History Chart */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center gap-2 text-foreground">
                    <TrendingUp className="w-4 h-4 text-derma-teal" />
                    Historique de Pression
                  </h3>
                  <span className="text-xs text-muted-foreground">24h</span>
                </div>
                <div className="h-32 flex items-end gap-2">
                  {pressureHistory.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${item.avg}%` } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-derma-teal/50 to-derma-teal relative group cursor-pointer"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium bg-white border border-border px-2 py-1 rounded shadow-lg whitespace-nowrap text-foreground">
                        {item.avg} mmHg
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  {pressureHistory.map((item, i) => (
                    <span key={i}>{item.time}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Alerts */}
            <div className="space-y-6">
              {/* Patient Info */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Patient #12</h4>
                    <p className="text-xs text-muted-foreground">Chambre 12 - Lit A</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-derma-teal/10">
                    <Droplets className="w-4 h-4 text-derma-teal mb-1" />
                    <div className="text-lg font-bold text-foreground">{humidity.toFixed(1)}%</div>
                    <div className="text-xs text-muted-foreground">Humidite</div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-500/10">
                    <TrendingUp className="w-4 h-4 text-amber-500 mb-1" />
                    <div className="text-lg font-bold text-foreground">{temperature.toFixed(1)} C</div>
                    <div className="text-xs text-muted-foreground">Temperature</div>
                  </div>
                </div>
              </div>

              {/* Alerts */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center gap-2 text-foreground">
                    <Bell className="w-4 h-4 text-derma-teal" />
                    Alertes Recentes
                  </h3>
                  <span className="w-5 h-5 rounded-full bg-red-500 text-xs flex items-center justify-center text-white font-bold">
                    3
                  </span>
                </div>
                <div className="space-y-3">
                  {alerts.map((alert, i) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className={`p-3 rounded-xl border-l-4 ${
                        alert.type === "critical" ? "border-red-500 bg-red-500/5" :
                        alert.type === "warning" ? "border-amber-500 bg-amber-500/5" :
                        "border-emerald-500 bg-emerald-500/5"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <AlertTriangle className={`w-4 h-4 mt-0.5 ${
                          alert.type === "critical" ? "text-red-500" :
                          alert.type === "warning" ? "text-amber-500" :
                          "text-emerald-500"
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate text-foreground">{alert.message}</p>
                          <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {alert.time}
                            <span>-</span>
                            {alert.patient}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
