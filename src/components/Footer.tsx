import React from "react";
import { Compass, Mail, Globe, MapPin, Sparkles } from "lucide-react";

interface FooterProps {
  setTab: (tab: string) => void;
  onOpenStockists: () => void;
}

export default function Footer({ setTab, onOpenStockists }: FooterProps) {
  return (
    <footer id="footer" className="bg-brand-green text-brand-white border-t border-brand-gold/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background radial flash */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#875200_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start relative z-10">
        
        {/* Left Column Brand Identification */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setTab("home")}>
            <div className="w-9 h-9 bg-brand-gold rounded-lg flex items-center justify-center text-brand-white">
              <Compass className="w-5 h-5 animate-spin-slow text-brand-white" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold tracking-tight text-white leading-none">
                INDIE GINGER
              </h4>
              <span className="font-mono text-[8px] uppercase text-brand-gold tracking-widest block mt-0.5 select-none">
                Artisanal Adrak Collective
              </span>
            </div>
          </div>
          <p className="text-xs text-brand-white/70 leading-relaxed max-w-sm">
            Bridging colonial carbonation heritage and contemporary Indian artisanal micro-brews. Dedicated to Satara gingerol integrity and raw botanical mixtures.
          </p>
          <div className="flex gap-4 text-xs font-mono text-brand-gold pt-2">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Batch-Numbered
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              Satara, MH
            </span>
          </div>
        </div>

        {/* Center Navigation Links */}
        <div className="md:col-span-3 space-y-4">
          <span className="block font-mono text-[10px] uppercase text-brand-gold tracking-widest font-bold">
            ARCHIVE DIRECTORY
          </span>
          <ul className="space-y-2 text-xs font-mono">
            <li>
              <button onClick={() => setTab("home")} className="text-brand-white/80 hover:text-brand-gold transition-colors block py-0.5">
                HOME PORTAL
              </button>
            </li>
            <li>
              <button onClick={() => setTab("heritage")} className="text-brand-white/80 hover:text-brand-gold transition-colors block py-0.5">
                HERITAGE CHRONICLE
              </button>
            </li>
            <li>
              <button onClick={() => setTab("brew")} className="text-brand-white/80 hover:text-brand-gold transition-colors block py-0.5">
                BREW CHEMISTRY
              </button>
            </li>
            <li>
              <button onClick={() => setTab("brands")} className="text-brand-white/80 hover:text-brand-gold transition-colors block py-0.5">
                ARTISANAL DIRECTORY
              </button>
            </li>
            <li>
              <button onClick={onOpenStockists} className="text-brand-white/80 hover:text-brand-gold transition-colors block py-0.5">
                STOCKIST LOCATOR
              </button>
            </li>
          </ul>
        </div>

        {/* Right Partner List */}
        <div className="md:col-span-4 space-y-4">
          <span className="block font-mono text-[10px] uppercase text-brand-gold tracking-widest font-bold">
            PARTNERS & CO-SIGNEES
          </span>
          <p className="text-xs text-brand-white/60 leading-relaxed">
            All listed partners, including Sepoy & Co., Svami, and Jade Forest, represent the pinnacle of modern Indian tonic and mixer research. This presentation serves as an objective academic catalog.
          </p>
          <div className="flex gap-3 pt-2 text-brand-white/40 hover:text-brand-white/80 transition-colors text-xs items-center">
            <Mail className="w-4 h-4 flex-shrink-0 text-brand-white" />
            <span className="font-mono text-[10px]">stewardship@indieginger.in</span>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-brand-white/10 text-center text-[10px] font-mono text-brand-white/45 space-y-1 relative z-10">
        <p>© {new Date().getFullYear()} INDIE GINGER COLLECTIVE. ALL RIGHTS SECURED BY ARCHIVAL PATENTS.</p>
        <p className="tracking-wide">
          Crafted under the Indian Spice Restoration Act. Simulated research ledger strictly tracking genuine adrak weight.
        </p>
      </div>
    </footer>
  );
}
