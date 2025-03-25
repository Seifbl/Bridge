"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  // Example with more testimonials
  const testimonials = [
    {
      quote:
        "I've been using this platform for over a year now, and I can confidently say it has transformed our entire workflow. Before implementing this solution, our team was struggling with disjointed systems and inefficient processes that were costing us valuable time and resources. The intuitive interface made onboarding our team incredibly smooth, and the comprehensive feature set addressed pain points we didn't even realize we had.",
      name: "Sarah Johnson",
      title: "CTO, TechCorp",
      image: "/placeholder.svg?height=60&width=60", // Replace with actual image path
    },
    {
      quote:
        "Customer support is where this company truly shines. In today's fast-paced business environment, having responsive and knowledgeable support is non-negotiable. Every issue we've encountered has been resolved within hours, not days or weeks as we experienced with previous vendors. Their team doesn't just fix problems—they take the time to understand our business context and provide solutions that align with our specific needs.",
      name: "Michael Chen",
      title: "Operations Manager, Innovate Inc.",
      image: "/placeholder.svg?height=60&width=60", // Replace with actual image path
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

  // Track the starting index for the visible testimonials
  const [startIndex, setStartIndex] = useState(0)

  // Number of testimonials to show at once
  const visibleCount = 2

  // Calculate if we can navigate forward or backward
  const canGoBack = startIndex > 0
  const canGoForward = startIndex + visibleCount < testimonials.length

  // Navigation functions
  const goToPrevious = () => {
    if (canGoBack) {
      setStartIndex(startIndex - visibleCount)
      // Reset expanded index when navigating
      setExpandedIndex(0)
    }
  }

  const goToNext = () => {
    if (canGoForward) {
      setStartIndex(startIndex + visibleCount)
      // Reset expanded index when navigating
      setExpandedIndex(0)
    }
  }

  // Get the currently visible testimonials
  const visibleTestimonials = testimonials.slice(startIndex, startIndex + visibleCount)

  return (
    <section className="py-16" style={{ backgroundColor: "#E7F3FE" }}>
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-[GlacialIndifferenc]  mb-2 text-gray-900">Découvrez ce que nos consultants pensent vraiment de Bridge !
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          

          {/* Testimonials Container */}
          <div className="grid gap-4 transition-all duration-500">
            {visibleTestimonials.map((testimonial, index) => {
              const actualIndex = index + startIndex
              return (
                <div
                  key={actualIndex}
                  className={`
                    bg-white rounded-lg overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer
                    ${expandedIndex === index ? "ring-2 ring-blue-400" : ""}
                    animate-fade-in
                  `}
                  onClick={() => setExpandedIndex(index)}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {/* Rounded image */}
                      <div className="relative">
                        <div
                          className={`
                          absolute inset-0 rounded-full 
                          ${expandedIndex === index ? "bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse" : "bg-blue-100"}
                        `}
                          style={{ padding: "2px" }}
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
                          className={`
                          w-8 h-8 rounded-full flex items-center justify-center transition-colors
                          ${expandedIndex === index ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-500"}
                        `}
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
                        <div className="border-l-4 border-blue-300 pl-4 text-gray-800">{testimonial.quote}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(testimonials.length / visibleCount) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                
                  setStartIndex(index * visibleCount)
                  setExpandedIndex(0)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  Math.floor(startIndex / visibleCount) === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add keyframes for the fade-in animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 400ms ease forwards;
        }
      `}</style>
    </section>
  )
}

