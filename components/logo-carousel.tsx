"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface Logo {
  name: string
  src: string
}

interface LogoCarouselProps {
  logos: Logo[]
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animationKey, setAnimationKey] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const duplicatedLogos = [...logos, ...logos] // Dupliquer les logos pour un effet infini

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Redémarrer l'animation en changeant la clé
          setAnimationKey((prev) => prev + 1)
        } else {
          setIsVisible(false)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Déclencher quand au moins 10% du carrousel est visible
      },
    )

    if (carouselRef.current) {
      observer.observe(carouselRef.current)
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current)
      }
    }
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="relative overflow-hidden py-10" ref={carouselRef}>
      <motion.div
        key={animationKey} // Utiliser une clé pour forcer le redémarrage de l'animation
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="flex w-full items-center"
      >
        <div className="flex whitespace-nowrap animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              className="mx-4 inline-flex w-[200px] items-center justify-center"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={180}
                height={90}
                className="max-h-24 w-auto object-contain filter hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 15s linear infinite;
          animation-play-state: running;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion) {
          .animate-scroll {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  )
}

