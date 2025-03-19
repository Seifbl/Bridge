"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, CheckCircle } from "lucide-react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    prenom: "",
    email: "",
    telephone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [phoneInputLoaded, setPhoneInputLoaded] = useState(false)

 

  useEffect(() => {
    // S'assurer que le composant PhoneInput est chargé côté client
    setPhoneInputLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, telephone: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await fetch("https://formspree.io/f/mkgjgzrn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (error) {
      alert("Erreur de connexion. Vérifiez votre connexion internet.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg overflow-hidden rounded-md bg-white shadow-md">
        {/* Header avec croix de fermeture */}
        <div className="relative px-6 py-4 text-center">
          <h3 className="text-xl font-medium text-gray-800">
            {isSubmitted ? "Merci pour votre message !" : "Contactez-nous"}
          </h3>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1 text-gray-400 transition-all hover:text-gray-600"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
              <CheckCircle size={32} className="text-blue-600" />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">Nous avons bien reçu votre message.</p>
            <p className="mt-2 text-sm text-gray-500">Nous vous répondrons dans les plus brefs délais.</p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-md bg-[#001C55] px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-[#001C55]/90"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="prenom" className="mb-1 block text-sm font-medium text-gray-700">
                  Prénom <span className="text-red-500">*</span>
                </label>
                <input
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  placeholder="Votre prénom"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-400 transition-all focus:border-[#001C55] focus:outline-none focus:ring-1 focus:ring-[#001C55]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@exemple.fr"
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-400 transition-all focus:border-[#001C55] focus:outline-none focus:ring-1 focus:ring-[#001C55]"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-gray-700">
                  Téléphone <span className="text-red-500">*</span>
                </label>
                {phoneInputLoaded && (
                  <PhoneInput
                    country={"fr"}
                    value={formData.telephone}
                    onChange={handlePhoneChange}
                    inputProps={{
                      name: "telephone",
                      required: true,
                      className: "w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800",
                    }}
                    containerClass="phone-input-container"
                    buttonClass="phone-input-button"
                    dropdownClass="phone-input-dropdown"
                    containerStyle={{
                      width: "100%",
                    }}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                      fontSize: "16px",
                    }}
                  />
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Votre message..."
                  className="w-full rounded-md border border-gray-300 px-4 py-2 text-gray-800 placeholder-gray-400 transition-all focus:border-[#001C55] focus:outline-none focus:ring-1 focus:ring-[#001C55]"
                />
              </div>

              <div className="mt-2 text-xs text-gray-500">
                En cliquant sur "envoyer", vous acceptez les conditions d'utilisation et la politique de
                confidentialité.
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-md bg-[#001C55] px-6 py-3 font-medium text-white shadow-sm transition-all hover:bg-[#001C55]/90"
              >
                Envoyer
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

