'use client';

import { motion } from 'framer-motion';
import { Sliders, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    title: 'Accompagnement personnalisé',
    description:
      "Un conseiller dédié vous suit à chaque étape, disponible pour échanger selon vos besoins. Réactif et à l'écoute, il vous guide dans vos décisions stratégiques et financières.",
    icon: Users,
    bgColor: 'bg-[#0a2472]',
    iconBg: 'bg-[#ffffff]',
    iconColor: 'text-[#000000]',
    borderColor: 'border-[#90CDF4]/30',
    titleColor: 'text-[#ffffff]', // Couleur du titre
    descriptionColor: 'text-[#ffffff]', // Couleur de la description
  },
  {
    title: 'Stratégie sur-mesure',
    description:
      'Gardez le contrôle total de vos revenus avec notre approche adaptée. Anticipez vos charges, évitez les fluctuations imprévues et optimisez votre rémunération pour une stabilité financière durable.',
    icon: Sliders,
    bgColor: 'bg-[#0a2472]',
    iconBg: 'bg-[#a6e1fa]',
    iconColor: 'text-[#000000]',
    borderColor: 'border-[#63B3ED]/30',
    titleColor: 'text-[#ffffff]',
    descriptionColor: 'text-[#ffffff]',
  },
  {
    title: 'Ajustement continu',
    description:
      "Vos besoins évoluent, votre stratégie s'adapte. Nous ajustons en permanence notre approche pour aligner votre rémunération avec vos priorités changeantes.",
    icon: TrendingUp,
    bgColor: 'bg-[#0a2472]',
    iconBg: 'bg-[#0e6ba8]',
    iconColor: 'text-[#ffffff]',
    borderColor: 'border-[#4FD1C5]/30',
    titleColor: 'text-[#ffffff]',
    descriptionColor: 'text-[#ffffff]',
  },
];

export function RevenueMaximization() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-[GlacialIndifferenc] text-3xl text-[#001C55] md:text-4xl">
            Maximisez vos revenus avec un suivi personnalisé
          </h2>
          <p className="mx-auto max-w-2xl font-[GlacialIndifferenc] text-gray-600">
            Notre approche personnalisée vous garantit une optimisation continue
            de vos revenus
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`relative cursor-pointer overflow-hidden rounded-xl border ${feature.borderColor} ${feature.bgColor} shadow-xl`}
              whileHover={{
                scale: 1.03,
                zIndex: 1,
                boxShadow:
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="flex h-full flex-col p-10">
                <div className={`mb-8 w-fit rounded-lg ${feature.iconBg} p-4`}>
                  <feature.icon className={`size-10 ${feature.iconColor}`} />
                </div>
                <h3
                  className={`mb-6 font-[GlacialIndifferenc] text-2xl ${feature.titleColor}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`grow font-[GlacialIndifferenc] text-lg leading-relaxed ${feature.descriptionColor}`}
                >
                  {feature.description}
                </p>
              </div>
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
