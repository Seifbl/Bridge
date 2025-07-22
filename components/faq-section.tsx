"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ContactFormModal } from "./contact-form-modal"

const faqData = [
  {
    question: "Comment fonctionne le portage salarial ?",
    answer:
      "Le portage salarial permet à un freelance d’exercer son activité tout en bénéficiant du statut de salarié. La société de portage signe le contrat avec le client, facture la prestation, puis reverse au freelance un salaire après déduction des charges et frais. Vous conservez votre autonomie tout en profitant de la sécurité sociale, du chômage et de la retraite.",
  },
  {
    question: "Qui a le droit au portage salarial ?",
    answer:
      "Toute personne proposant une prestation intellectuelle (consultant, formateur, IT, marketing, etc.) peut travailler en portage salarial, sous réserve d’un certain chiffre d’affaires.",
  },
  {
    question: "Quels sont les avantages du portage salarial ?",
    answer:
      "Il allie indépendance et sécurité : protection sociale, retraite, assurance chômage, gestion simplifiée, et possibilité d’optimiser ses revenus grâce aux frais professionnels déductibles.",
  },
  {
    question: "Comment calculer son salaire en portage salarial ?",
    answer:
      "En portage salarial, votre salaire net dépend de votre chiffre d’affaires hors taxes. La société de portage retire d’abord ses frais de gestion, puis les cotisations sociales. Vos frais professionnels déductibles peuvent ensuite réduire ces charges. Le reste constitue votre salaire net.",
  },
  {
    question: "Quels frais professionnels peut-on déduire en portage salarial ?",
    answer:
      "De nombreux frais sont déductibles : coworking, forfait téléphonique, matériel informatique, déplacements, repas professionnels… Cela dépend toutefois de votre activité de la politique de chaque société de portage. Chez Bridge, toutes les optimisations disponibles en portage salarial sont proposées pour maximiser votre revenu.",
  },
  {
    question: "Vais-je toucher mon salaire si mon client n'a pas encore payé ?",
    answer:
      "En portage salarial, vous évoluez dans un cadre sécurisé. Bridge s’engage à verser votre salaire à date fixe, même si votre client tarde à payer. C’est l’une des garanties majeures qui assurent une stabilité financière aux freelances portés.",
  },
  {
    question: "Le portage salarial est-il compatible avec un crédit immobilier ?",
    answer:
      "Oui. En tant que salarié porté, vous disposez de fiches de paie et d’une situation stable ce qui facilite l’accès à un crédit immobilier. Les banques apprécient ce statut sécurisant.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    )
  }

  return (
    <section className="w-full bg-[#001C55] py-16 px-4 md:py-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-200 mb-12">
          Questions fréquentes
        </h2>

        <div className="space-y-1">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-blue-700/50">
              <button
                onClick={() => toggleItem(index)}
                className="w-full group"
                aria-expanded={openItems.includes(index)}
              >
                <div className="flex items-center justify-between w-full py-6 px-0 hover:border-blue-600/70 transition-colors">
                  <h3 className="text-lg md:text-xl font-medium text-white text-left group-hover:text-yellow-200 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-6 w-6 text-white group-hover:text-yellow-200 transition-all duration-200 ${
                      openItems.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-2 pr-8">
                  <p className="text-blue-100 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-block rounded-[6px] bg-[#C3FFFC] px-7 py-4 font-[GlacialIndifferenc] text-xl text-[#001C55] hover:bg-[#C3FFFC]/90 hover:shadow-lg"
          >
            Besoin d'aide
          </button>
        </div>

        <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </section>
  )
}
