"use client"

import { Twitter, Linkedin, Github, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  product: [
    { label: "Fonctionnalites", href: "#fonctionnement" },
    { label: "Technologies", href: "#technologies" },
    { label: "Avantages", href: "#avantages" },
    { label: "Tarifs", href: "#" }
  ],
  company: [
    { label: "A Propos", href: "#apropos" },
    { label: "Equipe", href: "#equipe" },
    { label: "Carrieres", href: "#" },
    { label: "Contact", href: "#contact" }
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Support", href: "#" },
    { label: "FAQ", href: "#" }
  ],
  legal: [
    { label: "Confidentialite", href: "#" },
    { label: "Conditions", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "RGPD", href: "#" }
  ]
}

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Youtube, href: "#", label: "YouTube" }
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#accueil" className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-16%20at%2012.06.20-PwXC8LA8ZugJZZmRpYEn61Qe8ZNaTY.jpeg"
                alt="DERMASENSE Logo"
                width={140}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm font-medium text-derma-teal mb-2">
              {"L'intelligence au service de la prevention"}
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Pour une peau saine, un soin intelligent.
            </p>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Surveille, analyse et previent les escarres pour un confort optimal 
              et une meilleure prise en charge.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center hover:bg-derma-teal/10 hover:border-derma-teal/30 hover:text-derma-teal transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Produit</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-derma-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-derma-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Ressources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-derma-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-derma-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            2026 DERMASENSE. Tous droits reserves.
          </p>
          <p className="text-sm text-muted-foreground">
            Agadir, Maroc
          </p>
        </div>
      </div>
    </footer>
  )
}
