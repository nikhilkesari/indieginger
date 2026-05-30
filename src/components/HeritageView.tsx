import React, { useState } from "react";
import { TIMELINE_EVENTS } from "../data";
import { Bookmark, MapPin, Landmark, Calendar, Sparkles, AlertCircle, Quote } from "lucide-react";
import { motion } from "motion/react";

export default function HeritageView() {
  const [activeEventIndex, setActiveEventIndex] = useState(0);

  return (
    <div id="heritage-view" className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-24">
      
      {/* Page Header Banner */}
      <section id="heritage-header" className="relative p-8 md:p-14 bg-brand-green rounded-3xl overflow-hidden border border-brand-gold/30 shadow-xl flex flex-col md:flex-row gap-10 items-center">
        {/* Subtle geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#875200_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 space-y-4 md:w-3/5 text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-gold">
            Archival Research
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brand-white tracking-tight leading-snug">
            The Adrak Archive: <br />
            <span className="italic font-normal">History of Ginger Carbonation</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold mx-auto md:mx-0" />
          <p className="text-sm text-brand-white/80 leading-relaxed">
            The narrative of Indian ginger carbonation winds through colonial clubs, traditional apothecary herbalists, steam-powered industrial factories, and back into modern craft micro-breweries. Sourced with historical research from the Adrak Archive.
          </p>
        </div>

        <div className="md:w-2/5 flex justify-center z-10">
          <div className="relative p-2 bg-brand-white/10 rounded-2xl border border-brand-gold/30 shadow-md">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEGef4XJzwM8nXnBI2cbjLNi6nBbufD4N51fF3dJ96kbwPTICXMauLJezYYtY9jJRn44zLl3vipn9T6sfIeuspmZ34MNxrBiN1Q9_DLURIHjCcXVlrOqiZ64pf8dHEtMfr32MhvPtFkeZrfUSPMYKri6CQykVbKk9eE2xWitC-4oWpz98yxVSBPxSz9kyyP3w7Hd2rSicVS60mawzKGf11yn5QrmRPYvnCHure3iA0Lw0-tpQcPIVrVqw3yQLLyWIpDNdh9pIC38Yg"
              alt="Hands washing young ginger roots inside a traditional brass bowl, surrounded by water droplets"
              className="rounded-xl w-64 h-44 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Central Interactive Timeline */}
      <section id="heritage-interactive-timeline" className="space-y-12">
        
        {/* Timeline Sliders/Tabs (Year selectors) */}
        <div className="flex flex-col items-center space-y-4">
          <span className="font-mono text-xs text-brand-outline uppercase tracking-widest">
            Select Historical Epoch
          </span>

          <div className="relative flex justify-between items-center w-full max-w-2xl px-4 py-3 bg-brand-green/5 border border-brand-gold/15 rounded-full shadow-inner">
            {/* Background line */}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-brand-gold/25 -translate-y-1/2" />
            
            {TIMELINE_EVENTS.map((event, index) => (
              <button
                key={event.year}
                onClick={() => setActiveEventIndex(index)}
                className={`relative z-10 flex flex-col items-center justify-center transition-all duration-300 ${
                  activeEventIndex === index ? "scale-110" : "opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-sm font-bold border transition-colors ${
                    activeEventIndex === index
                      ? "bg-brand-gold border-brand-gold text-brand-white shadow-md shadow-brand-gold/25"
                      : "bg-brand-white border-brand-gold/30 text-brand-green hover:border-brand-gold"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="font-mono text-[10px] uppercase font-bold mt-1.5 tracking-wider text-brand-green">
                  {event.year}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Focus Item Detail Card (Animated) */}
        <motion.div
          key={activeEventIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-brand-gold/20 rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-w-5xl mx-auto"
        >
          {/* Timeline Event Image */}
          <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[300px]">
            <img
              src={TIMELINE_EVENTS[activeEventIndex].imageUrl}
              alt={TIMELINE_EVENTS[activeEventIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Color Overlay for Vintage Feeling */}
            <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 text-brand-white space-y-1.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-brand-gold text-[10px] font-mono rounded uppercase tracking-wider">
                <Bookmark className="w-3.5 h-3.5" />
                Historic Asset
              </span>
              <div className="font-mono text-xs text-brand-white/80 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                {TIMELINE_EVENTS[activeEventIndex].location}
              </div>
            </div>
          </div>

          {/* Timeline Event Description & Details */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between space-y-6 bg-brand-white">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4.5 h-4.5 text-brand-gold" />
                <span className="font-mono text-xs uppercase tracking-widest text-brand-gold font-bold">
                  Epoch of {TIMELINE_EVENTS[activeEventIndex].year}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-green tracking-tight leading-tight">
                  {TIMELINE_EVENTS[activeEventIndex].title}
                </h3>
                <span className="text-xs font-mono text-brand-outline italic block mt-1.5 font-medium">
                  {TIMELINE_EVENTS[activeEventIndex].subtitle}
                </span>
              </div>

              <div className="h-px bg-brand-gold/15" />

              <p className="text-sm text-brand-text/80 leading-relaxed">
                {TIMELINE_EVENTS[activeEventIndex].description}
              </p>
            </div>

            <div className="pt-6 border-t border-brand-gold/10 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#163422]/5 p-5 rounded-xl">
              <div className="space-y-1">
                <span className="block text-[8px] font-mono uppercase text-brand-gold tracking-widest font-bold">
                  Milestone Metric
                </span>
                <span className="font-serif text-xs font-medium text-brand-green leading-snug block">
                  {TIMELINE_EVENTS[activeEventIndex].keyTakeaway}
                </span>
              </div>
              <div className="space-y-1">
                <span className="block text-[8px] font-mono uppercase text-brand-gold tracking-widest font-bold">
                  Socioeconomic Impact
                </span>
                <span className="text-xs text-brand-outline leading-snug block">
                  {TIMELINE_EVENTS[activeEventIndex].historicalContext}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* Historical Quote Callout */}
      <section id="heritage-quoter" className="max-w-4xl mx-auto text-center space-y-4 p-8 bg-brand-white border border-dashed border-brand-gold/30 rounded-2xl relative">
        <Quote className="w-10 h-10 text-brand-gold/20 absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-white px-2" />
        <p className="font-serif text-lg italic text-brand-green">
          "The genuine zing of country-grown adrak, mixed with pressurized water in heavy glass cylinders, proved to be an indispensable tonic. It was the only carbonated juice featuring real fire."
        </p>
        <span className="font-mono text-[10px] text-brand-outline uppercase tracking-wider block mt-2">
          — Extract from "Apothecary logs & Botanical Registers of Bengal, 1835"
        </span>
      </section>

    </div>
  );
}
