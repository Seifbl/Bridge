"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export function TestimonialsSection() {
  // Exemple de témoignages
  const testimonials = [
    {
      quote:
        "Ce que j'apprécie particulièrement chez Bridge c'est la simplicité et la transparence des démarches, ainsi que l'accompagnement personnalisé. L'équipe est toujours disponible et très réactive, ce qui m'a permis de me concentrer pleinement sur mes missions en toute sérénité. C'est un réel confort de collaborer avec une structure qui a une approche humaine et chaleureuse, qui comprend les besoins des freelances et facilite la gestion administrative",
      name: "Nouha. S",
      title: "Product Owner",
      image: "/placeholder.svg?height=80&width=80",
      initial: "N",
    },
    {
      quote:
        "J'ai connu Bridge via un ami qui m'a recommandé l'entreprise, après plusieurs échanges avec eux, j'ai pris la décision de signer avec Bridge en Décembre 2023 pour la suite de mon aventure, et je peux affirmer que je ne le regrette pas du tout! Ce que j'apprécie chez bridge c'est le sens de l'écoute, la réactivité et le professionnalisme des différentes personnes au quotidien, j'en suis plus que satisfait et je n'hésiterai pas à recommander cette entreprise à mon entourage..",
      name: "Abdelghani. C",
      title: "Product Manager",
      image: "/placeholder.svg?height=80&width=80",
      initial: "A",
    },
  ]

  // Suivi de l'index du témoignage actuel
  const [currentIndex, setCurrentIndex] = useState(0)
  // État pour suivre si le défilement automatique est en pause
  const [isPaused, setIsPaused] = useState(false)
  // État pour suivre la direction de la transition
  const [direction, setDirection] = useState(0)

  // Navigation vers le témoignage suivant
  const goToNext = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }, [testimonials.length])

  // Navigation vers le témoignage précédent
  const goToPrevious = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }, [testimonials.length])

  // Aller directement à un témoignage spécifique
  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)

    // Pause temporaire du défilement automatique lorsque l'utilisateur interagit
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Reprend après 5 secondes
  }

  // Effet pour le défilement automatique
  useEffect(() => {
    // Ne pas défiler automatiquement si en pause
    if (isPaused) return

    // Définir un intervalle pour changer automatiquement de témoignage
    const interval = setInterval(() => {
      goToNext()
    }, 5000) // Change toutes les 5 secondes

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval)
  }, [goToNext, isPaused])

  // Témoignage actuel
  const currentTestimonial = testimonials[currentIndex]

  // Variants pour les animations Framer Motion
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-16 relative" style={{ backgroundColor: "#E7F3FE" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-[GlacialIndifferenc] mb-2 text-[#001C55]">
            Découvrez ce que nos consultants pensent vraiment de Bridge !
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Conteneur pour l'animation avec Framer Motion */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="relative"
            >
              {/* Carte de témoignage avec bordure bleue à gauche et coins très arrondis */}
              <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row relative min-h-[300px] md:min-h-[350px]">
                {/* Bordure bleue à gauche avec coins arrondis */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0A2272]"></div>

                {/* Partie gauche avec avatar et informations */}
                <div className="flex flex-col items-center text-center p-6 md:p-10 md:w-1/4 relative">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-[#0A2272] flex items-center justify-center text-white text-3xl font-bold mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {currentTestimonial?.initial ?? ""}
                  </motion.div>
                  {currentTestimonial && (
                    <motion.h3
                      className="text-xl font-bold text-[#0A2272] mb-2 whitespace-nowrap"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      {currentTestimonial.name}
                    </motion.h3>
                  )}
                  {currentTestimonial && (
                    <motion.p
                      className="text-gray-600 whitespace-nowrap"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      {currentTestimonial.title}
                    </motion.p>
                  )}
                </div>

                {/* Ligne verticale de séparation */}
                <div className="hidden md:block w-px bg-gray-200 absolute top-10 bottom-10 left-1/4"></div>

                {/* Partie droite avec le témoignage */}
                <div className="md:w-3/4 p-6 md:p-10 flex items-center">
                  {currentTestimonial && (
                    <motion.p
                      className="text-gray-800 text-lg leading-relaxed font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {currentTestimonial.quote}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Boutons de navigation - toujours visibles et en dehors du conteneur d'animation */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors z-10"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors z-10"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Indicateurs de pagination */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-colors ${
                  currentIndex === index ? "w-8 bg-[#0A2272]" : "w-2 bg-gray-300"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

