import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Flame, Compass, ChevronRight, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

interface HomeViewProps {
  setTab: (tab: string) => void;
  onOpenStockists: () => void;
}

export default function HomeView({ setTab, onOpenStockists }: HomeViewProps) {
  return (
    <div id="home-view" className="animate-fade-in space-y-20 pb-16">
      
      {/* 1. Hero Section */}
      <section 
        id="home-hero" 
        className="relative overflow-hidden bg-brand-green text-brand-white py-16 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-brand-gold/20"
      >
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#875200_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/15 border border-brand-gold/20 text-brand-gold rounded-full text-[10px] font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              The Indian Adrak Awakening
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-brand-white leading-[1.08] tracking-tight">
              Sip the Spark of <br />
              <span className="text-brand-gold italic">Genuine Spiced Craft</span>
            </h1>
            
            <p className="font-sans text-sm md:text-base text-brand-white/80 max-w-2xl leading-relaxed">
              Ditching commercial formulas and industrial corn syrup in favor of high-gingerol regional crops, hand-pressed botanicals, and colonial heritage recipes. Experience the renaissance of real ginger.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => setTab("brands")}
                className="px-6 py-3.5 bg-brand-gold text-brand-white hover:bg-brand-white hover:text-brand-green font-mono text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group hover:scale-105"
              >
                Explore Curated Artisans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-current" />
              </button>
              
              <button
                onClick={onOpenStockists}
                className="px-6 py-3.5 bg-transparent text-brand-white hover:bg-brand-white/10 font-mono text-xs uppercase tracking-widest rounded-lg transition-all border border-brand-white/30 hover:border-brand-gold flex items-center justify-center gap-2"
              >
                Locate Stockists Nearby
              </button>
            </div>
          </motion.div>

          {/* Hero Featured Image with frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative p-3 bg-brand-white/5 border border-brand-gold/30 rounded-2xl max-w-md w-full shadow-2xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyZDQ_bxk880VY58qRhBvLlYdo9DNAwVBjzMw8IKFhwlGWzQnTE5UWRQqRjsB2IKpjIFuPOvG6UooLP6fbZa5CP2D7rl5DiE6J8HULNnQA8_v386hkUTn3pG4iMukiEfeMYLUe5D1nvY2jFA6-KTAys3eHLYHLZ6RzYbcpqf6lJdnSNsd8WbDd0MGo3dXwhauf0DY0t87WdFgZWXJ_uiw_e-A13KXawyZA2GySLA890cRdtuKSBpp0eL7o7P1KFUnNQmqq01gg_GkF"
                alt="Chilled artisanal ginger ale pouring into a glass, showcasing fine rising bubbles and true spiced color"
                className="rounded-xl w-full h-[320px] md:h-[400px] object-cover shadow-inner hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 bg-brand-gold text-brand-white px-4 py-2.5 rounded-lg shadow-lg text-left hidden sm:block">
                <span className="font-mono text-[9px] uppercase text-brand-white/80 block select-none">
                  Sourced Naturally
                </span>
                <span className="font-serif text-sm font-medium tracking-wide">
                  100% Satara Ginger
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Intro Section: "The Indian Spark" */}
      <section id="home-intro" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative p-2.5 bg-brand-white border border-brand-green/15 rounded-xl shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD53TyaOeZUX5owupqKxxK-GHaBSuMMB4WJWocy6_eto1yRvh0aEI9P0f20f3tFlp34xGNM8CqYGAp2pW7-Fn4TSJ7JvmibCu4rFsrj0nTBnqYdJ7f35SrIkSUnhkCKYPfPU6gC6sBch6zrzHiUZmFDkBHl4smIXfZLy9qh1-7Mafhor1HHxohj-M6gPDxWPKCYVSqcbyMmmUJYscA20-Fh88BSTMcl7fZzg_g1VCU9po09TlhQ_WOpNFV-Hc-OPQ0OriY6PlvmnD7v"
                alt="A premium flat lay showcasing raw ginger knobs, citrus wedges, and botanicals on a textured rustic backdrop"
                className="rounded-lg w-full h-[300px] md:h-[380px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#875200]">
              The Genesis of Carbonation
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-green tracking-tight leading-snug">
              The Indian Spark: <br />
              <span className="italic font-normal">Squeezing Spice from History</span>
            </h2>
            <div className="h-0.5 w-16 bg-brand-gold" />
            <p className="text-sm md:text-base text-brand-text/80 leading-relaxed space-y-4">
              Since 1750, early apothecaries in Bombay and Calcutta integrated regional ginger—famed for its heat and therapeutic benefits—into pressurized carbonated spring water. It was more than a premium refresher; it was a warm, stimulating ritual that kept the humid evening air at bay.
              <br /><br />
              Today's "New-Age Artistry" revives this. Rejecting chemical syrups, our catalog showcases local brands blending genuine hand-pressed roots with regional botanicals—like fresh lemongrass, Satara black cardamom, and whole cloves. No synthetic preservatives, no larping.
            </p>
            <button
              onClick={() => setTab("heritage")}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-gold hover:text-brand-green transition-all uppercase tracking-wider group"
            >
              Examine the historical timeline
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. The Pillars Section: "The Craft & The Crown" */}
      <section id="home-pillars" className="bg-[#163422]/5 py-16 border-y border-brand-gold/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl text-brand-green">
              The Pillars of Real Ginger Craft
            </h2>
            <p className="text-xs text-brand-outline font-mono">
              The three core disciplines that separate standard carbonated soda water from authentic, artisanal ginger ales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-brand-white border border-brand-gold/15 rounded-xl overflow-hidden shadow-md group flex flex-col h-full hover:shadow-lg hover:border-brand-gold/40 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfljrNaFmxegQOWe06hCu5ME6bLyuUY4nGgaVV1RzgTeWRCN2Sp2iCmC8sGMCAa9HrY9mALPxaldt3aOy4p5Z54x_SeYqRhvno5SIPO8XFxaK1393vJ9jvZ52NAVwYTqFxdP-XUoNKiM2kwA9UY1z0yZpCxQHXEdxen8COqpZYhV_y0yrBhFFdric28-92WPBDMsQqebxAiTBJwTUeqaVmXr4_li2cjj7Zsqik5NiJeD2Lfhd6Mym3YYwH1vSJ32SIelik27HaY5lm"
                  alt="Historical ledger, old apothecary bottles, and ginger pieces evoking the heritage origins of brewing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-[10px] text-brand-white tracking-widest uppercase bg-brand-gold px-2 py-0.5 rounded">
                  01. Chronology
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-brand-green">Adrak Chronicle</h3>
                  <p className="text-xs text-brand-outline leading-relaxed">
                    Preserving the archival historical trail from colonial Bom-Bay club cellars to modern craft bars. We trace recipes rooted inside traditional natural ferments.
                  </p>
                </div>
                <button
                  onClick={() => setTab("heritage")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand-gold hover:text-brand-green group pt-2"
                >
                  Inspect the Archive
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-brand-white border border-brand-gold/15 rounded-xl overflow-hidden shadow-md group flex flex-col h-full hover:shadow-lg hover:border-brand-gold/40 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsIRPdUxA28IlWFAapG0AfH2qOvFmxbx0c0udtoK9wi1aWTdImL4PQaGReL8dSPl6EbkouUNnLLMr1pFuPxYDXnbUgqBReeDoCExW8gP2UQEfB2SXnWqAA_m3RU4Bg34nVf7v_JCedrm6_a7ovO1u1g061abiyEHbRfnGb_1IymFF8vnefKX7QE7EHANBplnqjH5rU2ddP5zIwtD0yRMBSPsLybE81rWhPhG47HNM9yy6n-N-k51M8SQdk5jcjE9B0q6YtUCeb1PV3"
                  alt="A line of three unique amber and modern glass ginger ale bottles showing clear and cloudy artisanal expressions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-[10px] text-brand-white tracking-widest uppercase bg-brand-gold px-2 py-0.5 rounded">
                  02. Artistry
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-brand-green">Curated Directory</h3>
                  <p className="text-xs text-brand-outline leading-relaxed">
                    Providing an objective, high-fidelity map of India's pre-eminent brands. Compare bold Satara spice hits with light floral botanicals.
                  </p>
                </div>
                <button
                  onClick={() => setTab("brands")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand-gold hover:text-brand-green group pt-2"
                >
                  Browse Directory
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-brand-white border border-brand-gold/15 rounded-xl overflow-hidden shadow-md group flex flex-col h-full hover:shadow-lg hover:border-brand-gold/40 transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz_zC8V5VnmNn1qHHE-7fuvypjisiEdLGEifdfi82J8m7Qtc101taR_GgzO4DfB0fAmAkRtTAeaTrhTII-7eRTbMtuegwJM9Uil2LUHOenl2RDSgqMf8mJwaUhJKjDcowLnJmPKbQVFmH11QRvqN9hzPi3vOwU78YVcTHcdnRqRra9_AxFxiTem0Eg51seNdPDqMYakG1iUR9IYV48Sj1GM6MbTE0kEV4Mry49GJ83C2s9cTJJdER50fPSuYUyWX6iSTZNz7NsxfoH"
                  alt="A chef knife precisely slicing fresh whole ginger root on a clean marble prep surface"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 font-mono text-[10px] text-brand-white tracking-widest uppercase bg-brand-gold px-2 py-0.5 rounded">
                  03. Decoction
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl text-brand-green">Brew Anatomy</h3>
                  <p className="text-xs text-brand-outline leading-relaxed">
                    Unlocking the physical science behind extraction and carbonation. Use our tasting calculator to match your specific palate to a custom craft recipe.
                  </p>
                </div>
                <button
                  onClick={() => setTab("brew")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-brand-gold hover:text-brand-green group pt-2"
                >
                  Unveil the Science
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Spotlight Spotlight on "Malabar Spiced Reserve" */}
      <section id="home-spotlight" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-green text-brand-white rounded-3xl overflow-hidden border border-brand-gold/30 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-6 opacity-10 select-none hidden md:block">
            <Compass className="w-40 h-40 animate-spin-slow text-brand-white" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-12 md:p-16 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative p-2.5 bg-brand-white/10 rounded-2xl border border-brand-gold/40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsacDEOO2RyrJRfwuqjl0VDSlkE3BGUain8wyo5rwE3Dq6Oprr4s7v2DM7U2wsNLRlqgG-QrkuEZRBLWzAguqjve1TR1zo-IJGaBJo6U48ac0SDIWIUo75U29YbiUyxdDzCDqlyZ6PrWxKsLcIht4zvprFITM88LQ0LX3DL-IbWCx7WUt6wYR_fK0rq3HqSz_Dk7g5KTQXCdxZf368Ggu36SOuIkfsp6pL1DWf10_g5p4ho-08cwj-hTpyUk9dAv_-eSPg704TOL3h"
                  alt="A beautiful flagship ginger ale bottle styled elegantly on clean green woodland moss and stones"
                  className="rounded-xl w-64 h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-brand-gold" />
                <span className="font-mono text-xs text-brand-gold uppercase tracking-widest font-bold">
                  The Archivist's Choice Flagship
                </span>
              </div>
              
              <h3 className="font-serif text-3xl sm:text-4xl text-brand-white tracking-tight">
                Malabar Spiced Reserve
              </h3>
              
              <p className="text-sm text-brand-white/80 leading-relaxed max-w-2xl">
                A rich, vintage-spiced craft reserve inspired by apothecary hand-ground recipes of 1820. We double-steep young Satara ginger alongside black tellicherry pepper, whole green cardamom pods, and organic sugarcane. 
              </p>

              {/* Interactive Tasting Scale */}
              <div className="pt-4 border-t border-brand-white/10 max-w-xl">
                <span className="block text-[10px] font-mono uppercase tracking-widest text-brand-gold mb-4">
                  Signature Tasting Scale (Hover to reveal details)
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-3 bg-brand-white/5 border border-brand-white/10 rounded-lg hover:border-brand-gold/5 transition-all group">
                    <span className="block text-[9px] font-mono text-brand-white/65 uppercase">Boldness</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-brand-gold font-serif text-lg font-bold">5</span>
                      <span className="text-brand-white/35 text-[10px] font-mono">/ 5</span>
                    </div>
                    <span className="text-[10px] text-brand-white/50 block group-hover:text-brand-white/90 transition-colors mt-0.5">Heavy woodiness</span>
                  </div>

                  <div className="p-3 bg-brand-white/5 border border-brand-white/10 rounded-lg hover:border-brand-gold/5 transition-all group">
                    <span className="block text-[9px] font-mono text-brand-white/65 uppercase">Spice Heat</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-brand-gold font-serif text-lg font-bold">4</span>
                      <span className="text-brand-white/35 text-[10px] font-mono">/ 5</span>
                    </div>
                    <span className="text-[10px] text-brand-white/50 block group-hover:text-brand-white/90 transition-colors mt-0.5">Slight tickle</span>
                  </div>

                  <div className="p-3 bg-brand-white/5 border border-brand-white/10 rounded-lg hover:border-brand-gold/5 transition-all group">
                    <span className="block text-[9px] font-mono text-brand-white/65 uppercase">Sweetness</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-brand-gold font-serif text-lg font-bold">3</span>
                      <span className="text-brand-white/35 text-[10px] font-mono">/ 5</span>
                    </div>
                    <span className="text-[10px] text-brand-white/50 block group-hover:text-brand-white/90 transition-colors mt-0.5">Caramel cane</span>
                  </div>

                  <div className="p-3 bg-brand-white/5 border border-brand-white/10 rounded-lg hover:border-brand-gold/5 transition-all group">
                    <span className="block text-[9px] font-mono text-brand-white/65 uppercase">Carbonation</span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-brand-gold font-serif text-lg font-bold">4</span>
                      <span className="text-brand-white/35 text-[10px] font-mono">/ 5</span>
                    </div>
                    <span className="text-[10px] text-brand-white/50 block group-hover:text-brand-white/90 transition-colors mt-0.5">Fine mousse</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-2.5">
                <span className="px-3 py-1 bg-brand-white/10 text-xs border border-brand-white/15 rounded">Cardamom Pods</span>
                <span className="px-3 py-1 bg-brand-white/10 text-xs border border-brand-white/15 rounded">Tellicherry Pepper</span>
                <span className="px-3 py-1 bg-brand-white/10 text-xs border border-brand-white/15 rounded">Cold Steeping</span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
