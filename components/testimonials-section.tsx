"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export function TestimonialsSection() {
  // Example with more testimonials
  const testimonials = [
    {
      quote:
        "Ce que j’apprécie particulièrement chez Bridge c’est la simplicité et la transparence des démarches, ainsi que l’accompagnement personnalisé. L’équipe est toujours disponible et très réactive, ce qui m’a permis de me concentrer pleinement sur mes missions en toute sérénité. C’est un réel confort de collaborer avec une structure qui a une approche humaine et chaleureuse, qui comprend les besoins des freelances et facilite la gestion administrative",
      name: "Nouha Sghiri",
      title: "CTO, TechCorp",
      image: "/placeholder.svg?height=60&width=60", // Replace with actual image path
      initial: "N", // Added initial for first testimonial
    },
    {
      quote:
        "J'ai connu Bridge via un ami qui m'a recommandé l'entreprise, après plusieurs échanges avec eux, j'ai pris la décision de signer avec Bridge en Décembre 2023 pour la suite de mon aventure, et je peux affirmer que je ne le regrette pas du tout! Ce que j'apprécie chez bridge c'est le sens de l'écoute, la réactivité et le professionnalisme des différentes personnes au quotidien, j'en suis plus que satisfait et je n'hésiterai pas à recommander cette entreprise à mon entourage.",
      name: "Abdelghani Chaffai",
      title: "Operations Manager, Innovate Inc.",
      image: "/placeholder.svg?height=60&width=60", // Replace with actual image path
      initial: "A", // Added initial for first testimonial
    },
    {
      quote:
        "The analytics capabilities have given us insights we never had before. We can now make data-driven decisions with confidence, which has directly impacted our bottom line. The customizable dashboards allow each department to focus on their key metrics, while still maintaining a unified view of our business performance.",
      name: "Emily Rodriguez",
      title: "Data Analyst, Metrics Global",
      image: "/placeholder.svg?height=60&width=60", // Replace with actual image path
    },
    {
      quote:
        "Implementation was seamless and the training resources provided were comprehensive. Our team was up and running in days, not weeks. The platform's intuitive design meant that even our less tech-savvy team members were comfortable using it almost immediately.",
      name: "David Kim",
      title: "Project Manager, Innovate Solutions",
      image: "/placeholder.svg?height=60&width=60", // Replace with actual image path
    },
  ]

  // Track which testimonial is expanded
  const [expandedIndex, setExpandedIndex] = useState(0)

  // Reference to the scrollable container
  const scrollContainerRef = useRef(null)

  // Calculate the height needed to show exactly 2 testimonials
  const [containerHeight, setContainerHeight] = useState("auto")
  const firstTwoTestimonialsRef = useRef<HTMLDivElement | null>(null)

  // Set the container height to show exactly 2 testimonials
  useEffect(() => {
    if (firstTwoTestimonialsRef.current) {
      // Add a larger buffer (40px) to account for increased spacing
      setContainerHeight(`${firstTwoTestimonialsRef.current.offsetHeight + 40}px`)
    }
  }, [])

  // Couleur principale #E7F3FE
  const mainColor = "#E7F3FE"

  return (
    <section className="py-16" style={{ backgroundColor: mainColor }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-16 text-center text-3xl font-[GlacialIndifferenc] text-[#001C55] md:text-4xl">Découvrez ce que nos consultants pensent vraiment de Bridge !
          </h2>
          
        </div>

        {/* Scrollable container without the blue frame */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="custom-scrollbar overflow-y-auto pr-4"
            style={{
              height: containerHeight,
              scrollBehavior: "smooth",
            }}
          >
            <div className="grid gap-8">
              {/* First two testimonials in a separate ref to measure height */}
              <div ref={firstTwoTestimonialsRef} className="space-y-8">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                    style={{
                      borderRadius: "10px",
                      marginBottom: index === 0 ? "2rem" : "0", // Add extra margin to first testimonial
                    }}
                    onClick={() => setExpandedIndex(index === expandedIndex ? -1 : index)}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        {/* Rounded image or initial */}
                        <div className="relative">
                          <div
                            className={`
                            absolute inset-0 rounded-full 
                            ${expandedIndex === index ? "animate-pulse" : ""}
                          `}
                            style={{
                              padding: "2px",
                              backgroundColor: expandedIndex === index ? mainColor : "rgba(231, 243, 254, 0.5)",
                            }}
                          ></div>

                          {index === 0 && testimonial.initial ? (
                            // Display initial "N" for first testimonial
                            <div
                              className="relative overflow-hidden rounded-full flex items-center justify-center bg-gray-100 text-gray-800 font-bold"
                              style={{ width: "44px", height: "44px" }}
                            >
                              {testimonial.initial}
                            </div>
                          ) : (
                            // Display image for other testimonials
                            <div
                              className="relative overflow-hidden rounded-full"
                              style={{ width: "44px", height: "44px" }}
                            >
                              <Image
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                width={44}
                                height={44}
                                className="object-cover rounded-full"
                              />
                            </div>
                          )}
                        </div>

                        {/* Name and title */}
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.title}</p>
                        </div>

                        {/* Expand/collapse indicator */}
                        <div className="ml-auto">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                            style={{
                              backgroundColor: expandedIndex === index ? mainColor : "rgba(231, 243, 254, 0.5)",
                              color: expandedIndex === index ? "#333" : "#666",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 transition-transform ${expandedIndex === index ? "rotate-180" : ""}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial content with max height animation */}
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{
                          maxHeight: expandedIndex === index ? "500px" : "0",
                          opacity: expandedIndex === index ? 1 : 0,
                        }}
                      >
                        <div className="pt-2 pb-1">
                          <div className="pl-4 text-gray-800" style={{ borderLeft: `4px solid ${mainColor}` }}>
                            {testimonial.quote}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional testimonials */}
              {testimonials.slice(2).map((testimonial, index) => {
                const actualIndex = index + 2
                return (
                  <div
                    key={actualIndex}
                    className="bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer opacity-0 animate-fade-in"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      animationFillMode: "forwards",
                      borderRadius: "10px",
                    }}
                    onClick={() => setExpandedIndex(actualIndex === expandedIndex ? -1 : actualIndex)}
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        {/* Rounded image */}
                        <div className="relative">
                          <div
                            className={`
                            absolute inset-0 rounded-full 
                            ${expandedIndex === actualIndex ? "animate-pulse" : ""}
                          `}
                            style={{
                              padding: "2px",
                              backgroundColor: expandedIndex === actualIndex ? mainColor : "rgba(231, 243, 254, 0.5)",
                            }}
                          ></div>
                          <div
                            className="relative overflow-hidden rounded-full"
                            style={{ width: "44px", height: "44px" }}
                          >
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={44}
                              height={44}
                              className="object-cover rounded-full"
                            />
                          </div>
                        </div>

                        {/* Name and title */}
                        <div className="ml-3">
                          <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                          <p className="text-sm text-gray-600">{testimonial.title}</p>
                        </div>

                        {/* Expand/collapse indicator */}
                        <div className="ml-auto">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                            style={{
                              backgroundColor: expandedIndex === actualIndex ? mainColor : "rgba(231, 243, 254, 0.5)",
                              color: expandedIndex === actualIndex ? "#333" : "#666",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-5 w-5 transition-transform ${expandedIndex === actualIndex ? "rotate-180" : ""}`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial content with max height animation */}
                      <div
                        className="overflow-hidden transition-all duration-500"
                        style={{
                          maxHeight: expandedIndex === actualIndex ? "500px" : "0",
                          opacity: expandedIndex === actualIndex ? 1 : 0,
                        }}
                      >
                        <div className="pt-2 pb-1">
                          <div className="pl-4 text-gray-800" style={{ borderLeft: `4px solid ${mainColor}` }}>
                            {testimonial.quote}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Subtle scroll shadow at the bottom */}
          <div
            className="absolute bottom-0 left-0 right-4 h-12 pointer-events-none"
            style={{ background: `linear-gradient(to top, ${mainColor}, transparent)` }}
          ></div>
        </div>
      </div>

      {/* Styles for animations and custom scrollbar */}
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
          animation: fadeIn 500ms ease forwards;
        }
        
        /* Beautiful custom scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 20px;
          margin: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E7F3FE;
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.5);
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #E7F3FE;
          opacity: 0.9;
        }
        
        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #E7F3FE rgba(255, 255, 255, 0.4);
        }
        
        /* Hide scrollbar for mobile devices */
        @media (max-width: 768px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
      `}</style>
    </section>
  )
}

