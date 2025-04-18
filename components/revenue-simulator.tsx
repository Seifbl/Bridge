"use client"

import * as Slider from "@radix-ui/react-slider"
import { Edit3 } from "lucide-react"
import { useState } from "react"
import { ContactFormModal } from "./contact-form-modal"

function getTauxIRMensuel(salaireNetMensuel: number): number {
  const tranches: [number, number, number][] = [
    [0, 1620, 0],
    [1620, 1683, 0.005],
    [1683, 1791, 0.013],
    [1791, 1911, 0.021],
    [1911, 2042, 0.029],
    [2042, 2151, 0.035],
    [2151, 2294, 0.041],
    [2294, 2714, 0.053],
    [2714, 3107, 0.075],
    [3107, 3539, 0.099],
    [3539, 3983, 0.119],
    [3983, 4648, 0.138],
    [4648, 5574, 0.158],
    [5574, 6974, 0.179],
    [6974, 8711, 0.2],
    [8711, 12091, 0.24],
    [12091, 16376, 0.28],
    [16376, 25706, 0.33],
    [25706, 55062, 0.38],
    [55062, Number.POSITIVE_INFINITY, 0.43],
  ]

  for (const [min, max, taux] of tranches) {
    if (salaireNetMensuel >= min && salaireNetMensuel < max) {
      return taux
    }
  }

  return 0
}

function calculateOptimizedNetRevenue(tjm: number, joursParMois: number): number {
  const j = 34926
  const ppv = 3000
  const joursParAn = joursParMois * 12

  const ca = tjm * joursParAn
  const dispoCa = ca * 0.95
  const dispoCaFicheDePaie = dispoCa - j

  const fraisDeFonctionnement = Math.round(dispoCaFicheDePaie * 0.2 * 100) / 100
  const primeRC = Math.round(dispoCaFicheDePaie * 0.0125 * 100) / 100

  const dispoCaPourSalaire = dispoCaFicheDePaie - fraisDeFonctionnement - primeRC - ppv

  const salaireBrut = Math.round((dispoCaPourSalaire / 1.45) * 100) / 100
  const salaireNetAvantIR = Math.round(salaireBrut * 0.786 * 100) / 100
  const salaireNetMensuelAvantIR = salaireNetAvantIR / 12

  const tauxIR = getTauxIRMensuel(salaireNetMensuelAvantIR)
  const salaireNetApresIR = Math.round(salaireNetAvantIR * (1 - tauxIR) * 100) / 100

  const titresResto = Math.round(joursParAn * 12.4 * 100) / 100

  const revenuAnnuel = salaireNetApresIR + titresResto + ppv + primeRC + fraisDeFonctionnement + j

  const revenuMensuel = Math.round((revenuAnnuel / 12) * 100) / 100

  return revenuMensuel
}

export function RevenueSimulator() {
  const [dailyRate, setDailyRate] = useState(530)
  const [daysPerMonth, setDaysPerMonth] = useState(18)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [simulatedRevenue, setSimulatedRevenue] = useState<number | null>(null)

  const optimizations = [
    ["Titres-restaurant", "Participation aux vacances"],
    ["Chèques cadeaux", "Compensations de télétravail"],
    ["Chèques culture", "Formation professionnelle"],
    ["Chèques emploi service", "Voyages professionnels"],
  ]

  const handleSimulation = () => {
    const revenu = calculateOptimizedNetRevenue(dailyRate, daysPerMonth)
    setSimulatedRevenue(revenu)
  }

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)
  return (
    <div className="mx-auto max-w-6xl">
      <div className="rounded-xl bg-[#001C55] p-8 shadow-2xl md:p-12">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Colonne de gauche */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Simulez votre salaire net en portage salarial avec Bridge
            </h2>

            <div className="space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-white">Prix facturé / jour (TJM)</label>
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
                      className="no-spinner w-36 rounded-[6px] bg-white px-4 py-2 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-[#C3FFFC]/50"
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <span className="text-black">€/jour</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-white">
                  Nombre de jours à facturer <strong>(par mois)</strong>
                </label>

                <div className="flex items-center gap-4">
                  <Slider.Root
                    className="relative flex h-5 w-full touch-none select-none items-center"
                    value={[daysPerMonth]}
                    onValueChange={(value) => setDaysPerMonth(value[0] ?? daysPerMonth)}
                    max={23}
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
                      className="no-spinner w-36 rounded-[6px] bg-white px-4 py-2 pl-10 text-black focus:outline-none focus:ring-2 focus:ring-[#C3FFFC]/50"
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
              <h3 className="text-xl font-bold text-white">Revenu net optimisé :</h3>
              {simulatedRevenue !== null ? (
                <p className="text-4xl font-bold text-[#F9FFB4]">{simulatedRevenue.toLocaleString()} €</p>
              ) : (
                <p className="text-lg text-white">Cliquez sur &quot;Simuler&quot; pour voir le résultat</p>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Optimisations incluses :</h3>
              <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
                {optimizations.map(([left, right], index) => (
                  <div key={index} className="col-span-2 grid grid-cols-2 gap-8">
                    <div className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-[#C3FFFC]" />
                      <span className="text-sm text-white">{left}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="size-1.5 rounded-full bg-[#C3FFFC]" />
                      <span className="text-sm text-white">{right}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={openContactModal}
              className="w-full rounded-[6px] border border-[#F9FFB4] px-6 py-3 font-[GlacialIndifferenc] font-medium text-[#ffffff] 
              shadow-md transition-colors hover:bg-[#C3FFFC] hover:border-[#C3FFFC] hover:text-[#000B45] hover:shadow-lg md:ml-[108px] md:w-auto"
              style={{ marginTop: "55px" }}
            >
              Contacter un conseiller
            </button>
          </div>
        </div>
      </div>

      {/* Intégration du formulaire de contact */}
      <ContactFormModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  )
}

