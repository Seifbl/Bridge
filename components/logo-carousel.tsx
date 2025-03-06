'use client';

import Image from 'next/image';

interface Logo {
  name: string;
  src: string;
}

interface LogoCarouselProps {
  logos: Logo[];
}

export function LogoCarousel({ logos }: LogoCarouselProps) {
  const duplicatedLogos = [...logos, ...logos]; // Dupliquer les logos pour un effet infini

  return (
    <div className="relative overflow-hidden py-10">
      <div className="flex w-full items-center">
        <div className="animate-scroll flex whitespace-nowrap">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="mx-4 inline-flex w-[200px] items-center justify-center"
            >
              <Image
                src={logo.src || '/placeholder.svg'}
                alt={logo.name}
                width={180}
                height={90}
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
        }
      `}</style>
    </div>
  );
}
