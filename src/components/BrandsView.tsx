import React, { useState, useMemo } from "react";
import { BRANDS_DATA } from "../data";
import { Brand } from "../types";
import { Sparkles, Calendar, MapPin, Compass, Droplet, Star, ShoppingBag, X, Wine, Heart, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BrandsViewProps {
  onOpenStockists: () => void;
}

export default function BrandsView({ onOpenStockists }: BrandsViewProps) {
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [likedBrands, setLikedBrands] = useState<Record<string, boolean>>({});

  // Compile unique tags for the directory
  const availableTags = useMemo(() => {
    const list = new Set<string>();
    list.add("All");
    BRANDS_DATA.forEach((b) => b.tags.forEach((t) => list.add(t)));
    return Array.from(list);
  }, []);

  // Filtered lists
  const filteredBrands = useMemo(() => {
    return BRANDS_DATA.filter((b) => {
      const matchTag = selectedTag === "All" || b.tags.includes(selectedTag);
      return matchTag;
    });
  }, [selectedTag]);

  // Separate "New-Age Artisans" (Artisanal, Reserve) from "Stalwarts" (Stalwart)
  const newAgeArtisans = useMemo(() => {
    return filteredBrands.filter((b) => b.type === "Artisanal" || b.type === "Reserve");
  }, [filteredBrands]);

  const stalwarts = useMemo(() => {
    return filteredBrands.filter((b) => b.type === "Stalwart");
  }, [filteredBrands]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Avoid triggering details modal
    setLikedBrands((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id="brands-view" className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 pb-24">
      
      {/* 1. Header description */}
      <section id="brands-header" className="text-center max-w-2xl mx-auto space-y-4">
        <span className="font-mono text-xs uppercase tracking-widest text-brand-gold">
          The Curated Index
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-brand-green tracking-tight leading-tight">
          A Curated Directory of <br />
          <span className="italic font-normal">Authentic Indian Ginger Ales</span>
        </h2>
        <div className="h-0.5 w-16 bg-brand-gold mx-auto" />
        <p className="text-sm text-brand-outline leading-relaxed">
          Evaluating formulas with strict focus on raw adrak juice weight, glycemic balance, supporting botanicals, and real bubbling strength. Click any bottle card to reveal deep micro-batch intelligence reports.
        </p>
      </section>

      {/* 2. Directory filter tabs */}
      <section id="brands-filters" className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto pb-4">
        {availableTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 font-mono text-[10px] uppercase tracking-widest rounded-full border transition-all duration-300 ${
              selectedTag === tag
                ? "bg-brand-gold text-brand-white border-brand-gold shadow-md"
                : "bg-white text-brand-text/80 border-brand-gold/15 hover:border-brand-gold/45"
            }`}
          >
            {tag === "All" ? "All Formulations" : tag}
          </button>
        ))}
      </section>

      {/* 3. New-Age Artisans Grid */}
      <section id="new-age-artisans-block" className="space-y-6">
        <div className="flex items-center gap-2 border-b border-brand-gold/20 pb-2.5">
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <h3 className="font-serif text-xl sm:text-2xl text-brand-green font-medium">
            New-Age Artisans & Reserves
          </h3>
          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-outline font-bold ml-auto select-none">
            {newAgeArtisans.length} BRANDS RANKED
          </span>
        </div>

        {newAgeArtisans.length === 0 ? (
          <div className="text-center py-12 px-4 border border-dashed border-brand-gold/20 rounded-xl bg-white">
            <span className="font-serif text-brand-text text-base">No artisanal formulas match this specification.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newAgeArtisans.map((brand) => (
              <div
                key={brand.id}
                onClick={() => setSelectedBrand(brand)}
                className="bg-white border border-brand-gold/15 hover:border-brand-gold/40 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group"
              >
                <div className="p-5 space-y-4">
                  {/* Photo container with like button */}
                  <div className="h-64 bg-brand-white border border-brand-gold/10 rounded-xl overflow-hidden relative flex items-center justify-center p-4">
                    <img
                      src={brand.imageUrl}
                      alt={brand.name}
                      className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Left overlay badge */}
                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-brand-green text-[9px] font-mono text-brand-white uppercase rounded tracking-wider">
                      {brand.type}
                    </span>

                    {/* Like button on top-right */}
                    <button
                      onClick={(e) => toggleLike(brand.id, e)}
                      className="absolute top-3 right-3 p-2 bg-brand-white/80 backdrop-blur-xs hover:bg-brand-white rounded-full text-brand-gold border border-brand-gold/10 hover:shadow-xs transition-all pointer-events-auto"
                      aria-label="Add to Favorites"
                    >
                      <Heart
                        className={`w-4 h-4 transition-transform ${
                          likedBrands[brand.id] ? "fill-brand-gold scale-110" : "scale-100"
                        }`}
                      />
                    </button>
                  </div>

                  {/* Info brief */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-serif text-lg text-brand-text group-hover:text-brand-green transition-colors font-bold">
                        {brand.name}
                      </h4>
                      <span className="font-mono text-[9px] text-brand-outline bg-brand-green/5 px-2 py-0.5 rounded border border-brand-green/10">
                        {brand.origin}
                      </span>
                    </div>
                    <p className="text-xs text-brand-outline line-clamp-2 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="px-5 py-4 bg-brand-white border-t border-brand-gold/10 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-brand-outline">EST. {brand.yearEstablished}</span>
                  <div className="flex gap-1.5">
                    {brand.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-brand-gold/10 text-brand-gold rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Stalwarts Grid */}
      <section id="stalwarts-block" className="space-y-6 pt-4">
        <div className="flex items-center gap-2 border-b border-brand-gold/20 pb-2.5">
          <Wine className="w-4 h-4 text-brand-gold" />
          <h3 className="font-serif text-xl sm:text-2xl text-brand-green font-medium">
            Commercial Benchmarks & Stalwarts
          </h3>
          <span className="font-mono text-[9px] uppercase tracking-wider text-brand-outline font-bold ml-auto select-none">
            {stalwarts.length} BRAND REPRESENTED
          </span>
        </div>

        {stalwarts.length === 0 ? (
          <div className="text-center py-8 px-4 border border-dashed border-brand-gold/10 rounded-xl bg-white/40">
            <span className="font-serif text-brand-outline text-xs block">No industrial benchmarks match this filter set.</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stalwarts.map((brand) => (
              <div
                key={brand.id}
                onClick={() => setSelectedBrand(brand)}
                className="bg-white border border-brand-gold/15 hover:border-brand-gold/40 rounded-2xl shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group"
              >
                <div className="p-5 space-y-4">
                  {/* Photo container */}
                  <div className="h-56 bg-brand-white border border-brand-gold/10 rounded-xl overflow-hidden relative flex items-center justify-center p-4">
                    <img
                      src={brand.imageUrl}
                      alt={brand.name}
                      className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    <span className="absolute top-3 left-3 px-2 py-0.5 bg-brand-outline text-[9px] font-mono text-brand-white uppercase rounded tracking-wider">
                      {brand.type}
                    </span>
                  </div>

                  {/* Info brief */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-serif text-lg text-brand-text group-hover:text-brand-green transition-colors font-bold">
                        {brand.name}
                      </h4>
                      <span className="font-mono text-[9px] text-brand-outline bg-brand-green/5 px-2 py-0.5 rounded border border-brand-green/10">
                        {brand.origin}
                      </span>
                    </div>
                    <p className="text-xs text-brand-outline line-clamp-2 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-4 bg-brand-white border-t border-brand-gold/10 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-brand-outline">EST. {brand.yearEstablished}</span>
                  <div className="flex gap-1.5">
                    {brand.tags.slice(0, 2).map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-brand-outline/20 text-brand-outline rounded font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 5. Deep Details Modal Popup */}
      <AnimatePresence>
        {selectedBrand && (
          <div id="brand-details-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="absolute inset-0" onClick={() => setSelectedBrand(null)} />

            <motion.div
              id="brand-details-panel"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 22 }}
              className="relative z-10 w-full max-w-3xl bg-brand-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-brand-gold/25"
            >
              {/* Header block with cover tint */}
              <div className="p-6 bg-brand-green text-brand-white border-b border-brand-gold/20 flex justify-between items-center relative">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#875200_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                
                <div className="relative z-10 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-brand-gold text-[9px] font-mono text-brand-white uppercase rounded tracking-wider">
                      {selectedBrand.type} SPECS
                    </span>
                    <span className="text-[10px] font-mono text-brand-white/70">
                      ABV: {selectedBrand.alcoholByVolume}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
                    {selectedBrand.name}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedBrand(null)}
                  className="p-2 bg-brand-white/10 hover:bg-brand-white/20 rounded-full text-brand-white transition-colors relative z-10"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Information Suite */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-brand-white">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Photo Left Column */}
                  <div className="md:col-span-5 flex justify-center bg-brand-white border border-brand-gold/15 p-5 rounded-2xl h-64 md:h-72">
                    <img
                      src={selectedBrand.imageUrl}
                      alt={selectedBrand.name}
                      className="h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Identity brief on Right Column */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="space-y-1">
                      <span className="block text-[10px] font-mono uppercase tracking-wider text-brand-gold font-bold">Statement of Flavor</span>
                      <p className="font-serif text-lg italic text-brand-text font-semibold">
                        "{selectedBrand.tagline}"
                      </p>
                    </div>

                    <p className="text-xs text-brand-outline leading-relaxed">
                      {selectedBrand.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono pt-2 border-t border-brand-gold/10">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0" />
                        <span>Origin: <strong className="text-brand-text">{selectedBrand.origin}</strong></span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-brand-gold flex-shrink-0" />
                        <span>Established: <strong className="text-brand-text">{selectedBrand.yearEstablished}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sourcing & Brew Process */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-brand-green/5 p-5 rounded-2xl border border-brand-gold/10 text-xs leading-relaxed">
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-sm font-bold text-brand-green flex items-center gap-1.5">
                      <Droplet className="w-4 h-4 text-brand-gold" />
                      Sourcing Story
                    </h4>
                    <p className="text-brand-outline text-xs leading-relaxed">{selectedBrand.sourcingStory}</p>
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="font-serif text-sm font-bold text-brand-green flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-brand-gold" />
                      De-decoction Protocol
                    </h4>
                    <p className="text-brand-outline text-xs leading-relaxed">{selectedBrand.brewProcess}</p>
                  </div>
                </div>

                <div className="h-px bg-brand-gold/15" />

                {/* Tasting Score Indicators and Key Ingredients */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left Column: Ingredients & Perfect Serve */}
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <span className="block text-[9px] font-mono text-brand-gold uppercase tracking-wider font-bold">Key Ingredients List</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedBrand.keyIngredients.map((ing) => (
                          <span
                            key={ing}
                            className="px-2.5 py-1 bg-white border border-brand-gold/20 text-xs text-brand-text rounded-md font-medium"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1 bg-brand-gold/10 p-4 border border-brand-gold/20 rounded-xl text-xs">
                      <span className="block text-[9px] font-mono text-brand-gold uppercase tracking-wider font-bold">Perfect Serve Suggestion</span>
                      <p className="text-brand-text font-serif italic mt-0.5">"{selectedBrand.perfectServe}"</p>
                    </div>
                  </div>

                  {/* Right Column: Tasting Spectrum Numbers */}
                  <div className="space-y-3.5 bg-brand-white border border-brand-gold/15 p-5 rounded-2xl">
                    <span className="block text-[9px] font-mono uppercase tracking-widest text-brand-gold font-bold">
                      Tasting Spectrum Analysis
                    </span>
                    
                    <div className="space-y-3 font-mono text-[10px]">
                      <div>
                        <div className="flex justify-between text-brand-outline">
                          <span>BOTANICAL BOLDNESS</span>
                          <span>{selectedBrand.tastingNotes.boldness} / 5</span>
                        </div>
                        <div className="h-1 bg-brand-gold/10 rounded-full mt-1 overflow-hidden">
                          <div className="h-full bg-brand-gold rounded-full" style={{ width: `${selectedBrand.tastingNotes.boldness * 20}%` }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-brand-outline">
                          <span>SPICE HEAT CAPACITY</span>
                          <span>{selectedBrand.tastingNotes.spiceHeat} / 5</span>
                        </div>
                        <div className="h-1 bg-brand-gold/10 rounded-full mt-1 overflow-hidden">
                          <div className="h-full bg-brand-gold rounded-full" style={{ width: `${selectedBrand.tastingNotes.spiceHeat * 20}%` }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-brand-outline">
                          <span>GLYCEMIC SWEETNESS</span>
                          <span>{selectedBrand.tastingNotes.sweetness} / 5</span>
                        </div>
                        <div className="h-1 bg-brand-gold/10 rounded-full mt-1 overflow-hidden">
                          <div className="h-full bg-brand-gold rounded-full" style={{ width: `${selectedBrand.tastingNotes.sweetness * 20}%` }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-brand-outline">
                          <span>EFFERVESCENCE (CARBONATION)</span>
                          <span>{selectedBrand.tastingNotes.carbonation} / 5</span>
                        </div>
                        <div className="h-1 bg-brand-gold/10 rounded-full mt-1 overflow-hidden">
                          <div className="h-full bg-brand-gold rounded-full" style={{ width: `${selectedBrand.tastingNotes.carbonation * 20}%` }} />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-brand-gold/10">
                      <span className="block text-[8px] font-mono text-brand-outline uppercase tracking-wider mb-1">Identified Tastings Tones</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedBrand.tastingNotes.primaryNotes.map((note) => (
                          <span key={note} className="px-1.5 py-0.5 bg-brand-green/10 text-[9px] text-brand-green font-medium rounded uppercase">
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Critic Endorsement Row */}
                <div className="p-4 border border-dashed border-brand-gold/30 rounded-xl flex gap-3 text-xs bg-brand-white items-start">
                  <Star className="w-5 h-5 text-brand-gold fill-brand-gold flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] uppercase text-brand-gold font-bold block">COLLECTIVE DISCOVERY CRITIC ENDORSEMENT</span>
                    <p className="text-brand-outline font-serif italic">
                      "An exceptional representation of region-first extract bottling. Retains the true, therapeutic adrak heat without the generic, bubble-gum syrup mouthfeel of mainstream tonics."
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons in footer */}
              <div className="p-4 bg-[#163422]/5 border-t border-brand-gold/15 flex justify-end gap-3.5 relative z-10">
                <button
                  onClick={() => setSelectedBrand(null)}
                  className="px-4 py-2 font-mono text-[10px] text-brand-outline uppercase hover:text-brand-text transition-colors"
                >
                  Dismiss Report
                </button>
                <button
                  onClick={() => {
                    setSelectedBrand(null);
                    onOpenStockists();
                  }}
                  className="px-4 py-2.5 bg-brand-green hover:bg-brand-gold text-brand-white font-mono text-[10px] uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-brand-white" />
                  Find Sells Outlets
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
