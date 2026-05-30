import React, { useState } from "react";
import { Compass, Menu, X, Landmark, Coffee, Search, MapPin, Sparkles } from "lucide-react";

interface NavbarProps {
  currentTab: string;
  setTab: (tab: string) => void;
  onOpenStockists: () => void;
}

export default function Navbar({ currentTab, setTab, onOpenStockists }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: "HOME" },
    { id: "heritage", label: "HERITAGE" },
    { id: "brew", label: "THE BREW" },
    { id: "brands", label: "BRANDS" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-brand-white border-b border-brand-gold/20 shadow-xs backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand Title */}
          <div 
            onClick={() => { setTab("home"); setMobileMenuOpen(false); }} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-brand-green rounded-lg flex items-center justify-center text-brand-white group-hover:bg-brand-gold transition-colors duration-300">
              <Compass className="w-5 h-5 animate-spin-slow text-brand-white" />
            </div>
            <div>
              <h1 className="font-serif text-2xl font-bold tracking-tight text-brand-green leading-none">
                INDIE GINGER
              </h1>
              <span className="font-mono text-[9px] uppercase text-brand-gold tracking-widest block mt-0.5">
                Artisanal Adrak Collective
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setTab(link.id)}
                className={`relative py-2 text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  currentTab === link.id
                    ? "text-brand-gold font-bold"
                    : "text-brand-text/75 hover:text-brand-orange"
                }`}
              >
                {link.label}
                {currentTab === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenStockists}
              className="flex items-center gap-1.5 px-4 py-2 bg-brand-green text-brand-white hover:bg-brand-gold text-xs font-mono tracking-wider rounded-lg transition-all shadow-md group border border-transparent hover:border-brand-gold/30 hover:scale-[1.02]"
            >
              <MapPin className="w-3.5 h-3.5 group-hover:animate-bounce text-brand-white" />
              FIND NEARBY
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenStockists}
              className="p-2 text-brand-green hover:text-brand-gold transition-colors"
              aria-label="Stockists Locator"
            >
              <MapPin className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-text focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="md:hidden bg-brand-white border-b border-brand-gold/15 px-4 pt-2 pb-6 space-y-3 shadow-md animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-mono tracking-wider uppercase transition-colors ${
                currentTab === link.id
                  ? "bg-brand-gold/10 text-brand-gold font-bold"
                  : "text-brand-text/80 hover:text-brand-gold hover:bg-brand-gold/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4 border-t border-brand-gold/10 px-4">
            <button
              onClick={() => {
                onOpenStockists();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-brand-green text-brand-white hover:bg-brand-gold text-xs font-mono tracking-widest rounded-lg transition-all"
            >
              <MapPin className="w-4 h-4" />
              FIND Stockists
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
