'use client';

import { BridgeOffer } from 'components/bridge-offer';
import { GetStartedSection } from 'components/get-started-section';
import { LogoCarousel } from 'components/logo-carousel';
import { RevenueMaximization } from 'components/revenue-maximization';
import { RevenueSimulator } from 'components/revenue-simulator';
import { TestimonialsSection } from 'components/testimonials-section';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style when scrolling past hero section (80vh)
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight * 0.8;
      setIsScrolled(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const partnerLogos = [
    { name: 'Logo 1', src: '/logos/logo1.png' },
    { name: 'Logo 2', src: '/logos/logo2.png' },
    { name: 'Logo 3', src: '/logos/logo3.png' },
    { name: 'Logo 4', src: '/logos/logo4.png' },
    { name: 'Logo 5', src: '/logos/logo5.png' },
    { name: 'Logo 6', src: '/logos/logo6.png' },
    { name: 'Logo 7', src: '/logos/logo7.png' },
    { name: 'Logo 8', src: '/logos/logo8.png' },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
        {/* Header avec transition */}
        <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#001C55] shadow-lg'
              : 'bg-transparent backdrop-blur-sm'
          }`}
        >
          <nav className="container mx-auto flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              {/* Logo */}
              <Image
                src="/logo.png"
                alt="Bridge Logo"
                width={30} // Ajuste la taille
                height={40}
                className="size-auto"
              />

              {/* Texte "Bridge" */}
              <span className="text-2xl font-bold text-white">Bridge</span>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="#simulator"
                className="rounded-[6px] bg-[#C3FFFC] px-4 py-2 font-[GlacialIndifferenc] text-sm font-medium text-[#001C55] shadow-md transition-colors hover:bg-[#C3FFFC]/90 hover:shadow-lg"
              >
                Faire une simulation
              </Link>
              <Link
                href="#contact"
                className="rounded-[6px] border border-[#F9FFB4] px-4 py-2 font-[GlacialIndifferenc] text-sm font-medium text-[#F9FFB4] transition-colors hover:border-[#C3FFFC] hover:bg-[#C3FFFC] hover:text-[#000B45] "
              >
                Contactez-nous
              </Link>
            </div>
          </nav>
        </header>

        {/* Hero Content */}
        <section className="container mx-auto min-h-[80vh] px-4 pb-20 pt-28 md:pb-24 md:pt-32">
          <div className="grid h-full grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-12">
              <div className="space-y-10">
                <h1 className="space-y-4 font-[GlacialIndifferenc] text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  <span className="block">Le portage salarial</span>
                  <span className="block">conçu pour</span>
                  <span className="block">
                    <span className="text-[#C3FFFC]">maximiser</span> vos{' '}
                    <span className="text-[#F9FFB4]">revenus</span>
                  </span>
                </h1>
                <p className="max-w-2xl font-[GlacialIndifferenc] text-lg text-gray-300">
                  Profitez d&apos;une stratégie d&apos;optimisation de revenus,
                  gérée par un conseiller dédié, adaptée à votre situation et
                  qui évolue selon vos priorités.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#simulator"
                  className="rounded-[6px] bg-[#C3FFFC] px-8 py-3 font-[GlacialIndifferenc] text-lg font-bold text-[#001C55] shadow-md transition-colors hover:bg-[#C3FFFC]/90 hover:shadow-lg"
                >
                  Parler à un conseiller
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block mt-[-50px] ml-[170px] w-[750px] h-[750px] mx-auto">
  <Image
    src="/Bridge.png"
    alt="Illustration de portage salarial"
    width={750}
    height={750}
    className="rounded-lg"
  />
</div>


          </div>
        </section>
      </div>

      {/* Reste du contenu */}
      <main>
        {/* Logo Carousel */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <LogoCarousel logos={partnerLogos} />
          </div>
        </section>

        {/* Revenue Simulator Section */}
        <section id="simulator" className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <RevenueSimulator />
          </div>
        </section>

       

        {/* Revenue Maximization Section */}
        <RevenueMaximization />

          {/* Bridge Offer Section */}
          <BridgeOffer />
          
        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Get Started Section */}
        <GetStartedSection />
      </main>
    </div>
  );
}
