import {
  Calendar,
  Gift,
  GraduationCap,
  Heart,
  Receipt,
  Sparkles,
  Users,
  Wallet,
} from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: Receipt,
    text: 'Gestion des frais professionnelles',
  },
  {
    icon: Wallet,
    text: 'Avance sur salaire intégrale',
  },
  {
    icon: Gift,
    text: 'Chèques cadeaux, culture, CESU et titres restaurants',
  },
  {
    icon: GraduationCap,
    text: 'Gestion des frais de formation',
  },
  {
    icon: Calendar,
    text: 'Paiement à la fin du mois garanti',
  },
  {
    icon: Users,
    text: 'Accès au comité d&apos;entreprise',
  },
  {
    icon: Heart,
    text: 'Mutuelle d&apos;entreprise négociée',
  },
  {
    icon: Sparkles,
    text: 'Avantages sociaux et culturels ASC',
  },
];

export function BridgeOffer() {
  return (
    <div className="bg-white py-16 md:py-24">
      <h2 className="mb-16 text-center text-4xl font-bold text-[#001C55] md:text-5xl">
        L&apos;Offre Bridge
      </h2>

      <div className="mx-8">
        <div className="rounded-xl border border-[#F9FFB4]/20 bg-gradient-to-r from-[#00072D] via-[#001C55] to-[#0A2472] p-12 shadow-2xl md:p-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Cercle avec pourcentage */}
            <div className="flex justify-center lg:col-span-3">
              <div className="flex size-56 flex-col items-center justify-center rounded-full border-2 border-[#F9FFB4] bg-transparent shadow-lg transition-transform hover:scale-105">
                <span className="text-6xl font-bold text-white">5%</span>
                <span className="mt-2 px-4 text-center text-sm text-white">
                  du chiffre d&apos;affaires HT
                </span>
              </div>
            </div>

            {/* Liste des avantages en 2 colonnes et 4 lignes */}
            <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2 lg:col-span-9">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-4 transition-transform hover:translate-x-2"
                >
                  <div className="rounded-lg bg-[#C3FFFC]/10 p-3 shadow-md transition-colors group-hover:bg-[#C3FFFC]/20">
                    <benefit.icon className="size-7 text-[#ffffff]" />
                  </div>
                  <span className="text-lg text-gray-200">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bouton de simulation */}
          <div className="mt-16 flex justify-center">
            <Link
              href="#simulator"
              className="rounded-[6px] bg-[#C3FFFC] px-12 py-4 text-lg font-medium text-[#001C55] shadow-md transition-all hover:scale-105 hover:bg-[#C3FFFC]/90 hover:shadow-lg"
            >
              Simuler mon salaire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
