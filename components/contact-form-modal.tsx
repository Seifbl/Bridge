"use client"

import type React from "react"
import { useState } from "react"
import { X, Send, CheckCircle } from "lucide-react"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className="relative w-full max-w-md overflow-hidden rounded-xl shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #001C55 0%, #001240 100%)",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Header avec titre */}
        <div className="relative px-6 py-4 text-center">
          <h3 className="text-xl font-bold text-white">
            {isSubmitted ? "Merci pour votre message !" : "Contactez-nous"}
          </h3>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-1 text-white/80 transition-all hover:bg-white/20 hover:text-white"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Ligne de séparation avec dégradé */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C3FFFC]/50 to-transparent"></div>

        {isSubmitted ? (
          <div className="p-6 text-center text-white">
            <CheckCircle size={48} className="mx-auto text-[#C3FFFC]" />
            <p className="mt-4 text-lg">Nous avons bien reçu votre message.</p>
            <p className="text-sm text-white/70">
              Nous vous répondrons dans les plus brefs délais.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-lg bg-[#C3FFFC] px-6 py-2 font-medium text-[#001C55] shadow-lg transition-all hover:shadow-[#C3FFFC]/20 hover:shadow-xl"
            >
              Fermer
            </button>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/mkgjgzrn"
            method="POST"
            onSubmit={(event) => {
              event.preventDefault(); // Empêche le rechargement immédiat
              setIsSubmitted(true); // Affiche le message de confirmation
              event.currentTarget.submit(); // Soumet le formulaire manuellement
            }}
            className="p-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="prenom" className="mb-1 block text-sm font-medium text-white/90">
                  Prénom
                </label>
                <input
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-[#C3FFFC] focus:outline-none focus:ring-1 focus:ring-[#C3FFFC]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/90">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-[#C3FFFC] focus:outline-none focus:ring-1 focus:ring-[#C3FFFC]"
                />
              </div>

              <div>
                <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-white/90">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-[#C3FFFC] focus:outline-none focus:ring-1 focus:ring-[#C3FFFC]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/90">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-white placeholder-white/40 backdrop-blur-sm transition-all focus:border-[#C3FFFC] focus:outline-none focus:ring-1 focus:ring-[#C3FFFC]"
                />
              </div>
            </div>

            {/* Bouton d'envoi */}
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="group relative flex items-center justify-center overflow-hidden rounded-lg bg-[#C3FFFC] px-8 py-3 font-medium text-[#001C55] shadow-lg transition-all hover:shadow-[#C3FFFC]/20 hover:shadow-xl"
              >
                <span className="mr-2">Envoyer</span>
                <Send size={18} />
                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform group-hover:translate-x-0"></div>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
