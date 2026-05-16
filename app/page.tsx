import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { MonitoringSection } from "@/components/monitoring-section"
import { DashboardSection } from "@/components/dashboard-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <MonitoringSection />
      <DashboardSection />
      <AdvantagesSection />
      <TechnologiesSection />
      
      <ContactSection />
      <Footer />
    </main>
  )
}
