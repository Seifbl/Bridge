/* eslint-disable prettier/prettier */

'use client';

import * as Slider from '@radix-ui/react-slider';
import { Edit3 } from 'lucide-react';
import { useState } from 'react';

export function RevenueSimulator() {
  const [dailyRate, setDailyRate] = useState(500);
  const [daysPerMonth, setDaysPerMonth] = useState(15);
 
  const [simulatedRevenue, setSimulatedRevenue] = useState<number | null>(null);


  const optimizations = [
    ['Titres-restaurant', 'Participation aux vacances'],
    ['Chèques cadeaux', 'Compensations de télétravail'],
    ['Chèques culture', 'Formation professionnelle'],
    ['Chèques emploi service', 'Voyages professionnels'],
  ];

  const handleSimulation = () => {
    const monthlyGross = dailyRate * daysPerMonth;
    const estimatedNet = monthlyGross * 0.7;
    setSimulatedRevenue(Math.round(estimatedNet)); // Stocker le résultat uniquement au clic
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="rounded-xl bg-[#001C55] p-8 shadow-2xl md:p-12">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Colonne de gauche */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Estimez vos revenus nets après impôts avec Bridge
            </h2>

            <div className="space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">
                  Prix facturé / jour (TJM)
                </label>
                <div className="flex items-center gap-4">
                  <Slider.Root
                    className="relative flex h-5 w-full touch-none select-none items-center"
                    value={[dailyRate]}
                    onValueChange={(value) => setDailyRate(value[0] ?? dailyRate)}
                    max={1500}
                    min={100}
                    step={50}
                  >
                    <Slider.Track className="relative h-1 grow rounded-full bg-gray-400">
                      <Slider.Range className="absolute h-full rounded-full bg-[#C3FFFC]" />
                    </Slider.Track>
                    <Slider.Thumb className="block size-5 rounded-full border-2 border-[#C3FFFC] bg-white shadow-md hover:border-[#C3FFFC]/80 focus:outline-none focus:ring-2 focus:ring-[#C3FFFC]/50" />
                  </Slider.Root>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                      <Edit3 className="size-4 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      value={dailyRate}
                      onChange={(e) => setDailyRate(Number(e.target.value) || dailyRate)}
                      className="no-spinner w-32 rounded-[6px] bg-gray-300 px-4 py-2 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-[#C3FFFC]/50"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <span className="text-black">€/jour</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">
                  Nombre de jours à facturer
                </label>
                <div className="flex items-center gap-4">
                  <Slider.Root
                    className="relative flex h-5 w-full touch-none select-none items-center"
                    value={[daysPerMonth]}
                    onValueChange={(value) => setDaysPerMonth(value[0] ?? daysPerMonth)}
                    max={22}
                    min={1}
                    step={1}
                  >
                    <Slider.Track className="relative h-1 grow rounded-full bg-gray-400">
                      <Slider.Range className="absolute h-full rounded-full bg-[#C3FFFC]" />
                    </Slider.Track>
                    <Slider.Thumb className="block size-5 rounded-full border-2 border-[#C3FFFC] bg-white shadow-md hover:border-[#C3FFFC]/80 focus:outline-none focus:ring-2 focus:ring-[#C3FFFC]/50" />
                  </Slider.Root>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                      <Edit3 className="size-4 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      value={daysPerMonth}
                      onChange={(e) => setDaysPerMonth(Number(e.target.value) || daysPerMonth)}
                      className="no-spinner w-32 rounded-[6px] bg-gray-300 px-4 py-2 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-[#C3FFFC]/50"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <span className="text-black">j/mois</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSimulation}
                className="w-full rounded-[6px] bg-[#C3FFFC] px-6 py-3 font-[GlacialIndifferenc] font-medium text-[#001C55] shadow-md transition-colors hover:scale-105 hover:bg-[#C3FFFC]/90 hover:shadow-lg md:w-auto"
              >
                Simuler
              </button>
            </div>
          </div>

          {/* Colonne de droite */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-300">
                Revenu net optimisé :
              </h3>
              {simulatedRevenue !== null ? (
                <p className="text-4xl font-bold text-[#F9FFB4]">
                  {simulatedRevenue.toLocaleString()} €
                </p>
              ) : (
                <p className="text-lg text-gray-400">Cliquez sur &quot;Simuler&quot; pour voir le résultat</p>

              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-300">
                Optimisations incluses :
              </h3>
              <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                {optimizations.map(([left, right], index) => (
                  <div key={index} className="col-span-2 grid grid-cols-2 gap-8">
                    <div className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-[#C3FFFC]" />
                      <span className="text-sm text-gray-300">{left}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-[#C3FFFC]" />
                      <span className="text-sm text-gray-300">{right}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
            className="ml-[108px]  w-full rounded-[6px] border border-[#F9FFB4] px-6 py-3 font-[GlacialIndifferenc] font-medium text-[#ffffff] 
            shadow-md transition-colors hover:bg-[#C3FFFC] hover:border-[#C3FFFC] hover:text-[#000B45] hover:shadow-lg  md:w-auto" style={{ marginTop: '55px' }}
            >
              Contacter un conseiller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
