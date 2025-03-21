"use client"

import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"

interface Testimonial {
  name: string
  role: string
  quote: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    name: "Abdelghani Chaffai",
    role: "Développement",
    quote:
      "J'ai connu Bridge via un ami qui m'a recommandé l'entreprise, après plusieurs échanges avec eux, j'ai pris la décision de signer avec Bridge en Décembre 2023 pour la suite de mon aventure, et je peux affirmer que je ne le regrette pas du tout! Ce que j'apprécie chez bridge c'est le sens de l'écoute, la réactivité et le professionnalisme des différentes personnes au quotidien, j'en suis plus que satisfait et je n'hésiterai pas à recommander cette entreprise à mon entourage.",
    company: " Decathlon Digital",
  },
  {
    name: "Nouha Sghiri",
    role: "Business Analyst",
    quote:
      "Ce que j’apprécie particulièrement chez Bridge c’est la simplicité et la transparence des démarches, ainsi que l’accompagnement personnalisé. L’équipe est toujours disponible et très réactive, ce qui m’a permis de me concentrer pleinement sur mes missions en toute sérénité.  C’est un réel confort de collaborer avec une structure qui a une approche humaine et chaleureuse, qui comprend les besoins des freelances et facilite la gestion administrative",
    company: "Finance Corp",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-[#E7F3FE] py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-[GlacialIndifferenc] text-[#001C55] md:text-4xl">
          Découvrez ce que nos consultants pensent vraiment de Bridge !
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 md:p-12 shadow-xl relative">
                    {/* Decorative elements */}
                    <div className="absolute top-6 left-6 text-[#C3FFFC] opacity-20">
                      <Quote size={60} className="rotate-180" />
                    </div>
                    <div className="absolute bottom-6 right-6 text-[#C3FFFC] opacity-20">
                      <Quote size={60} />
                    </div>

                    {/* Border accent */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#001C55] to-[#0A2472] rounded-t-xl"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col items-center">
                        <div className="text-center max-w-3xl mx-auto">
                          <p
                            className="mb-8 text-xl md:text-2xl italic text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: testimonial.quote,
                            }}
                          />

                          <div className="pt-6 border-t border-gray-100">
                            <h3 className="text-xl font-bold text-[#001C55]">{testimonial.name}</h3>
                            <div className="flex items-center justify-center gap-2 mt-1">
                              <p className="text-gray-600">{testimonial.role}</p>
                              <span className="text-[#0A2472] opacity-50">•</span>
                              <p className="font-medium text-[#0A2472]">{testimonial.company}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 md:-translate-x-8 focus:outline-none focus:ring-2 focus:ring-[#001C55] focus:ring-opacity-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-6 text-[#001C55]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 md:translate-x-8 focus:outline-none focus:ring-2 focus:ring-[#001C55] focus:ring-opacity-50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-6 text-[#001C55]" />
          </button>

          {/* Dots indicator */}
          <div className="mt-10 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentIndex ? "w-10 bg-[#001C55]" : "w-3 bg-[#d6d6d6] hover:bg-[#0A2472]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

