"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Github, Mail } from "lucide-react"

const team = [
  {
    name: "Dr. Sarah Martin",
    role: "CEO & Co-fondatrice",
    bio: "Medecin specialiste en soins intensifs avec 15 ans d'experience dans la prevention des escarres.",
    avatar: "SM",
    color: "from-derma-blue to-derma-teal"
  },
  {
    name: "Thomas Dubois",
    role: "CTO & Co-fondateur",
    bio: "Ingenieur IoT expert en systemes embarques et developpement de capteurs intelligents.",
    avatar: "TD",
    color: "from-derma-teal to-derma-green"
  },
  {
    name: "Marie Laurent",
    role: "Lead Designer",
    bio: "Designer UX/UI specialisee dans les interfaces medicales et l'accessibilite.",
    avatar: "ML",
    color: "from-derma-green to-derma-blue"
  },
  {
    name: "Pierre Moreau",
    role: "Lead Developer",
    bio: "Developpeur full-stack passionne par l'IA et les applications de sante connectee.",
    avatar: "PM",
    color: "from-derma-blue to-derma-green"
  }
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="equipe" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/20 to-white" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-derma-teal/10 border border-derma-teal/20 text-sm font-medium text-derma-blue mb-4">
            Notre Equipe
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-foreground">
            {"L'Equipe"} <span className="text-gradient">DERMASENSE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Une equipe pluridisciplinaire passionnee par {"l'innovation"} medicale
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full hover:shadow-xl hover:shadow-derma-teal/10 transition-all duration-300 hover:-translate-y-1 text-center">
                {/* Avatar */}
                <div className="relative mx-auto w-20 h-20 mb-4">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-40 transition-opacity`} />
                  <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-xl font-bold text-white`}>
                    {member.avatar}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold mb-1 text-foreground">{member.name}</h3>
                <p className="text-sm text-derma-teal mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3">
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Linkedin className="w-4 h-4 text-muted-foreground hover:text-derma-blue" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Github className="w-4 h-4 text-muted-foreground hover:text-derma-blue" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Mail className="w-4 h-4 text-muted-foreground hover:text-derma-blue" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-3xl mx-auto border border-derma-teal/20">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Notre Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              &ldquo;Revolutionner la prevention des escarres grace a {"l'innovation"} technologique, 
              pour ameliorer la qualite de vie des patients et soutenir le personnel medical 
              dans leur mission de soins.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
