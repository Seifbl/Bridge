"use client"

import { useState } from "react"
import { ContactFormModal } from "./contact-form-modal"

export function GetStartedSection() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  const closeContactModal = () => {
    setIsContactModalOpen(false)
  }

  return (
    <section className="bg-[#E7F3FE] py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#001C55] p-12 shadow-lg md:p-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-[GlacialIndifferenc] text-3xl text-white md:text-4xl lg:text-5xl">
              Démarrer avec Bridge
            </h2>
            <p className="mx-auto mb-10 max-w-2xl font-[GlacialIndifferenc] text-lg text-gray-200">
              Contactez-nous, partagez vos infos et celles de votre client, puis signez votre contrat en toute sérénité.
            </p>
            <button
              onClick={openContactModal}
              className="inline-block rounded-[6px] bg-[#C3FFFC] px-7 py-4 font-[GlacialIndifferenc] text-xl text-[#001C55] hover:bg-[#C3FFFC]/90 hover:shadow-lg"
            >
              Je démarre
            </button>
          </div>
        </div>
      </div>

      {/* Intégration du formulaire de contact */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </section>
  )
}

