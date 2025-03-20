/* eslint-disable prettier/prettier */

"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { BridgeOffer } from "components/bridge-offer"
import { ContactFormModal } from "components/contact-form-modal"
import { GetStartedSection } from "components/get-started-section"
import { LogoCarousel } from "components/logo-carousel"
import { RevenueMaximization } from "components/revenue-maximization"
import { RevenueSimulator } from "components/revenue-simulator"
import { TestimonialsSection } from "components/testimonials-section"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style when scrolling past hero section (80vh)
      const scrollPosition = window.scrollY
      const heroHeight = window.innerHeight * 0.8
      setIsScrolled(scrollPosition > heroHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Fermer le menu mobile lors du clic sur un lien
  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false)
  }

  const partnerLogos = [
    { name: "Logo 1", src: "/sephora.png" },
    { name: "Logo 2", src: "/decathlon.png" },
    { name: "Logo 3", src: "/engie.png" },
    { name: "Logo 4", src: "/channel.png" },
    { name: "Logo 5", src: "/total.png" },
    { name: "Logo 6", src: "/LB_Logo-Blue-BIG-ConvertImage.png" },
    { name: "Logo 7", src: "/axa.png" },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
        {/* Header avec transition */}
        <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
            isScrolled ? "bg-[#001C55] shadow-lg" : "bg-transparent backdrop-blur-sm"
          }`}
        >
          <nav className="container mx-auto flex items-center justify-between p-4">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <Image src="/logo.png" alt="Bridge Logo" width={25} height={25} />

              {/* Texte "Bridge" */}
              <span className="font-nunito mt-[3px] text-2xl text-white">Bridge</span>
            </div>

            {/* Boutons de navigation desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="#simulator"
                className="rounded-[6px] bg-[#C3FFFC] px-4 py-2 font-[GlacialIndifferenc] text-sm font-medium text-[#001C55] shadow-md transition-colors hover:bg-[#C3FFFC]/90 hover:shadow-lg"
              >
                Faire une simulation
              </Link>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="rounded-[6px] border border-[#F9FFB4] px-4 py-2 font-[GlacialIndifferenc] text-sm font-medium text-[#ffffff] transition-colors hover:border-[#C3FFFC] hover:bg-[#C3FFFC] hover:text-[#000B45]"
              >
                Contactez-nous
              </button>
            </div>

            {/* Burger menu pour mobile */}
            <button
              className="md:hidden text-white p-2 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Menu mobile */}
          <div
            className={`md:hidden fixed inset-0 z-40 bg-[#001C55] transition-transform duration-300 ease-in-out transform ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } pt-20`}
          >
            {/* Bouton X pour fermer le menu */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center space-y-6 p-6">
              <Link
                href="#simulator"
                className="w-full rounded-[6px] bg-[#C3FFFC] px-4 py-3 font-[GlacialIndifferenc] text-center text-sm font-medium text-[#001C55] shadow-md transition-colors hover:bg-[#C3FFFC]/90 hover:shadow-lg"
                onClick={handleMobileMenuItemClick}
              >
                Faire une simulation
              </Link>
              <button
                onClick={() => {
                  setIsContactModalOpen(true)
                  handleMobileMenuItemClick()
                }}
                className="w-full rounded-[6px] border border-[#F9FFB4] px-4 py-3 font-[GlacialIndifferenc] text-sm font-medium text-[#ffffff] transition-colors hover:border-[#C3FFFC] hover:bg-[#C3FFFC] hover:text-[#000B45]"
              >
                Contactez-nous
              </button>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <section className="container mx-auto min-h-[80vh] px-4 pb-20 pt-28 md:pb-24 md:pt-32">
          <div className="grid h-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-12">
              <div className="space-y-10">
                <h1 className="space-y-4 font-[GlacialIndifferenc] text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  <span className="block">Le portage salarial</span>
                  <span className="block">conçu pour</span>
                  <span className="block">
                    <span className="text-[#C3FFFC]">maximiser</span> vos{" "}
                    <span className="text-[#F9FFB4]">revenus</span>
                  </span>
                </h1>
                <p className="max-w-2xl font-[GlacialIndifferenc] text-lg text-gray-300">
                  Profitez d&apos;une stratégie d&apos;optimisation de revenus, gérée par un conseiller dédié, adaptée à
                  votre situation et qui évolue selon vos priorités.
                </p>

                <p className="max-w-2xl font-[GlacialIndifferenc] text-lg text-gray-300">
                  Avec Bridge, vous êtes Satisfait ou Remboursé&nbsp;!
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="rounded-[6px] bg-[#C3FFFC] px-8 py-3 font-[GlacialIndifferenc] text-lg font-bold text-[#001C55] shadow-md transition-colors hover:bg-[#C3FFFC]/90 hover:shadow-lg"
                >
                  Parler à un conseiller
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <Image
                src="/Bridge.png"
                alt="Illustration de portage salarial"
                width={500}
                height={500}
                className="mx-auto h-auto w-full rounded-lg "
              />
            </div>
          </div>
        </section>
      </div>

      {/* Reste du contenu */}
      <main className="overflow-x-hidden">
        {/* Logo Carousel */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <LogoCarousel logos={partnerLogos} />
          </div>
        </section>

        {/* Revenue Simulator Section */}
        <section id="simulator" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <RevenueSimulator />
          </div>
        </section>

        {/* Revenue Maximization Section */}
        <RevenueMaximization />

        {/* Bridge Offer Section */}
        <BridgeOffer />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Get Started Section */}
        <GetStartedSection />

        {/* Footer */}
        <footer className="bg-[#E7F3FE] py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <div className="font-[GlacialIndifferenc] text-sm text-gray-400">© 2025 Bridge, Tous droits réservés.</div>
            <div className="flex items-center gap-6">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400 transition-colors hover:text-gray-600"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400 transition-colors hover:text-gray-600"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400 transition-colors hover:text-gray-600"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </main>
      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}

