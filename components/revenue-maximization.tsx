'use client';

import { motion } from 'framer-motion';
import { Sliders, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    title: 'Accompagnement ',
    description:
      "En tant que consultant en portage salarial, vous bénéficiez d’un conseiller dédié qui vous accompagne à chaque étape. Il vous conseille dans vos décisions stratégiques et financières et reste disponible pour répondre à vos questions selon vos besoins.",
    icon: Users,
    bgColor: 'bg-[#0a2472]',
    iconBg: 'bg-[#ffffff]',
    iconColor: 'text-[#000000]',
    borderColor: 'border-[#90CDF4]/30',
    titleColor: 'text-[#ffffff]', // Couleur du titre
    descriptionColor: 'text-[#ffffff]', // Couleur de la description
  },
  {
    title: 'Sur mesure',
    description:
      'Gardez le contrôle total de vos revenus grâce à notre stratégie sur-mesure. Anticipez vos charges, évitez les fluctuations imprévues et profitez d’une optimisation fiscale et des frais professionnels en portage salarial pour une stabilité financière durable.',
    icon: Sliders,
    bgColor: 'bg-[#0a2472]',
    iconBg: 'bg-[#ffffff]',
    iconColor: 'text-[#000000]',
    borderColor: 'border-[#63B3ED]/30',
    titleColor: 'text-[#ffffff]',
    descriptionColor: 'text-[#ffffff]',
  },
  {
    title: 'Ajustement ',
    description:
      "Vos besoins évoluent ? Votre stratégie aussi. Nous ajustons en continu notre approche pour aligner votre rémunération avec vos priorités et vous aider à anticiper les éventuels risques du portage salarial.",
    icon: TrendingUp,
    bgColor: 'bg-[#0a2472]',
    iconBg: 'bg-[#ffffff]',
    iconColor: 'text-[#000000]',
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
          Notre approche personnalisée assure aux salariés portés une optimisation continue de leurs revenus.
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
                  className={`mb-6 font-[GlacialIndifferenc] font-normal text-2xl ${feature.titleColor}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`grow font-[GlacialIndifferenc] font-normal text-lg leading-relaxed ${feature.descriptionColor}`}

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
