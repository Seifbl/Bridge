"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface Testimonial {
  name: string
  role: string
  image: string
  quote: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Martin",
    role: "Développement",
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "&quot;Bridge m&apos;a permis de me concentrer sur mes projets tout en optimisant mes revenus. Leur accompagnement est vraiment personnalisé et professionnel.&quot;",
    company: "Tech Solutions",
  },
  {
    name: "Thomas Dubois",
    role: "Chef de projet",
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "&quot;La flexibilité et la transparence de Bridge sont exceptionnelles. Je recommande vivement leur service à tous les professionnels indépendants.&quot;",
    company: "Digital Innovation",
  },
  {
    name: "Marie Lambert",
    role: "Business Analyst",
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "&quot;Un accompagnement sur mesure qui répond parfaitement à mes besoins. Bridge a vraiment changé ma façon de travailler en freelance.&quot;",
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
    <section className="bg-[#E7F3FE] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-bold text-black md:text-4xl">
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
                  <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-xl md:p-10">
                    <div className="flex flex-col items-center gap-8 md:flex-row">
                      <div className="relative size-32 overflow-hidden rounded-full border-4 border-[#C3FFFC] md:size-40">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <p
                          className="mb-6 text-lg italic text-gray-700 md:text-xl"
                          dangerouslySetInnerHTML={{
                            __html: testimonial.quote,
                          }}
                        />
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold text-[#001C55]">{testimonial.name}</h3>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <p className="font-medium text-[#0A2472]">{testimonial.company}</p>
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
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 md:-translate-x-8"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="size-6 text-[#001C55]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full bg-white p-2 shadow-lg transition-all hover:scale-110 hover:bg-gray-50 md:translate-x-8"
            aria-label="Next testimonial"
          >
            <ChevronRight className="size-6 text-[#001C55]" />
          </button>

          {/* Dots indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`size-2.5 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-[#C3FFFC]" : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* test */}
    </section>
  )
}

