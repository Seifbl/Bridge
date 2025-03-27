"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  // Exemple de témoignages
  const testimonials = [
    {
      quote:
        "Ce que j'apprécie particulièrement chez Bridge c'est la simplicité et la transparence des démarches, ainsi que l'accompagnement personnalisé. L'équipe est toujours disponible et très réactive, ce qui m'a permis de me concentrer pleinement sur mes missions en toute sérénité. C'est un réel confort de collaborer avec une structure qui a une approche humaine et chaleureuse, qui comprend les besoins des freelances et facilite la gestion administrative",
      name: "Nouha. S",
      title: "Product Owner",
      image: "/placeholder.svg?height=80&width=80", // Remplacer par le chemin de l'image réelle
      initial: "N",
    },
    {
      quote:
        "J'ai connu Bridge via un ami qui m'a recommandé l'entreprise, après plusieurs échanges avec eux, j'ai pris la décision de signer avec Bridge en Décembre 2023 pour la suite de mon aventure, et je peux affirmer que je ne le regrette pas du tout! Ce que j'apprécie chez bridge c'est le sens de l'écoute, la réactivité et le professionnalisme des différentes personnes au quotidien, j'en suis plus que satisfait et je n'hésiterai pas à recommander cette entreprise à mon entourage..",
      name: "Abdelghani  C.",
      title: "Développeur Manager",
      image: "/placeholder.svg?height=80&width=80",
      initial: "A",
    },
  ]

  // Suivi de l'index du témoignage actuel
  const [currentIndex, setCurrentIndex] = useState(0)
  // État pour suivre si le défilement automatique est en pause
  const [isPaused, setIsPaused] = useState(false)
  // État pour suivre la direction de la transition
  const [direction, setDirection] = useState("next")
  // État pour contrôler l'animation
  const [isAnimating, setIsAnimating] = useState(false)

  // Référence au conteneur pour les animations
  const testimonialRef = useRef(null)

  // Navigation vers le témoignage suivant avec animation
  const goToNext = useCallback(() => {
    if (isAnimating) return

    setDirection("next")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, 500)
  }, [testimonials.length, isAnimating])

  // Navigation vers le témoignage précédent avec animation
  const goToPrevious = useCallback(() => {
    if (isAnimating) return

    setDirection("prev")
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, 500)
  }, [testimonials.length, isAnimating])

  // Aller directement à un témoignage spécifique
  const goToTestimonial = (index: number) => {
    if (isAnimating) return

    setDirection(index > currentIndex ? "next" : "prev")
    setIsAnimating(true)

    // Pause temporaire du défilement automatique lorsque l'utilisateur interagit
    setIsPaused(true)

    setTimeout(() => {
      setCurrentIndex(index)
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, 500)

    setTimeout(() => setIsPaused(false), 5000) // Reprend après 5 secondes
  }

  // Effet pour le défilement automatique
  useEffect(() => {
    // Ne pas défiler automatiquement si en pause ou en animation
    if (isPaused || isAnimating) return

    // Définir un intervalle pour changer automatiquement de témoignage
    const interval = setInterval(() => {
      goToNext()
    }, 5000) // Change toutes les 7 secondes

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(interval)
  }, [goToNext, isPaused, isAnimating])

  // Témoignage actuel
  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 relative" style={{ backgroundColor: "#E7F3FE" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium mb-2 text-gray-900">
            Découvrez ce que nos consultants pensent vraiment de Bridge !
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Conteneur pour l'animation */}
          <div
            ref={testimonialRef}
            className={`
              relative transition-all duration-500 ease-in-out
              ${isAnimating ? (direction === "next" ? "translate-x-[-100%] opacity-0" : "translate-x-[100%] opacity-0") : "translate-x-0 opacity-100"}
            `}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carte de témoignage avec bordure bleue à gauche et coins très arrondis */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row relative min-h-[300px]">
              {/* Bordure bleue à gauche avec coins arrondis */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#0A2272]"></div>

              {/* Partie gauche avec avatar et informations */}
              <div className="flex flex-col items-center text-center p-10 md:w-1/4 relative">
                <div className="w-20 h-20 rounded-full bg-[#0A2272] flex items-center justify-center text-white text-3xl font-bold mb-6">
                  {currentTestimonial?.initial ?? ""}
                </div>
                {currentTestimonial && (
                  <h3 className="text-xl font-bold text-[#0A2272] mb-2">{currentTestimonial.name}</h3>
                )}
                {currentTestimonial && <p className="text-gray-600">{currentTestimonial.title}</p>}
              </div>

              {/* Ligne verticale de séparation */}
              <div className="hidden md:block w-px bg-gray-200 absolute top-10 bottom-10 left-1/4"></div>

              {/* Partie droite avec le témoignage */}
              <div className="md:w-3/4 p-10 flex items-center">
                {currentTestimonial && <p className="text-gray-800 leading-relaxed">{currentTestimonial.quote}</p>}
              </div>
            </div>
          </div>

          {/* Boutons de navigation - toujours visibles et en dehors du conteneur d'animation */}
          <button
            onClick={() => {
              if (!isAnimating) {
                goToPrevious()
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 5000)
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors z-10"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={() => {
              if (!isAnimating) {
                goToNext()
                setIsPaused(true)
                setTimeout(() => setIsPaused(false), 5000)
              }
            }}
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
                onClick={() => {
                  if (!isAnimating) {
                    goToTestimonial(index)
                  }
                }}
                className={`h-2 rounded-full transition-colors ${
                  currentIndex === index ? "w-8 bg-[#0A2272]" : "w-2 bg-gray-300"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 400ms ease forwards;
        }
      `}</style>
    </section>
  )
}

