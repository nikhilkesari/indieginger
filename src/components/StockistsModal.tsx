import React, { useState, useMemo } from "react";
import { STOCKISTS_DATA, BRANDS_DATA } from "../data";
import { MapPin, Search, Building2, Clock, Phone, X, Filter, Sparkles, Navigation } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface StockistsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCity?: string;
}

export default function StockistsModal({ isOpen, onClose, selectedCity: initialCity }: StockistsModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>(initialCity || "All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [simulatedDirections, setSimulatedDirections] = useState<string | null>(null);

  const cities = ["All", "Mumbai", "Delhi NCR", "Bangalore", "Kolkata", "Goa", "Kochi"];
  const types = ["All", "Gourmet Store", "Artisanal Bar", "Bespoke Lounge"];

  const filteredStockists = useMemo(() => {
    return STOCKISTS_DATA.filter((st) => {
      const matchesCity = selectedCity === "All" || st.city === selectedCity;
      const matchesType = selectedType === "All" || st.type === selectedType;
      const matchesQuery =
        st.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        st.featuredBrands.some((id) =>
          (BRANDS_DATA.find((b) => b.id === id)?.name || "").toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCity && matchesType && matchesQuery;
    });
  }, [searchQuery, selectedCity, selectedType]);

  const handleSimulateDirections = (storeName: string) => {
    setSimulatedDirections(`Simulating high-contrast cartography to ${storeName}... Proceed down Heritage Colonial Boulevard, take the first right past the Old Siphon Distillery. Est. transit time: 14 mins.`);
    setTimeout(() => {
      setSimulatedDirections(null);
    }, 6000);
  };

  if (!isOpen) return null;

  return (
    <div id="stockists-modal-overlay" className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />
      
      <motion.div
        id="stockists-modal-panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative z-10 w-full max-w-xl bg-brand-white h-full shadow-2xl flex flex-col border-l border-brand-gold/20"
      >
        {/* Header */}
        <div className="p-6 border-b border-brand-gold/15 bg-brand-green text-brand-white flex justify-between items-center">
          <div>
            <span className="font-mono text-xs text-brand-gold uppercase tracking-widest block mb-1">
              Distribution Network
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-brand-white">
              Stockist Locator
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-brand-white/10 rounded-full transition-colors text-brand-white/80 hover:text-brand-white"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Search & Filters */}
        <div className="p-6 bg-brand-white border-b border-brand-gold/10 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-outline" />
            <input
              type="text"
              placeholder="Search by store name, address, or favorite brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-brand-white border border-brand-outline/30 rounded-lg text-brand-text placeholder-brand-outline/60 focus:border-brand-gold focus:outline-none transition-colors text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-brand-outline mb-1.5">
                Select Region
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-brand-white border border-brand-outline/30 text-brand-text p-2.5 rounded-md focus:border-brand-gold focus:outline-none text-xs"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city === "All" ? "All India Cities" : city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-brand-outline mb-1.5">
                Stockist Type
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-brand-white border border-brand-outline/30 text-brand-text p-2.5 rounded-md focus:border-brand-gold focus:outline-none text-xs"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type === "All" ? "All Venues" : type}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Info Notification Banner */}
        <AnimatePresence>
          {simulatedDirections && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-6 py-3 bg-brand-gold/10 border-b border-brand-gold/30 text-xs text-brand-gold flex items-start gap-2 overflow-hidden"
            >
              <Navigation className="w-5 h-5 flex-shrink-0 animate-pulse mt-0.5" />
              <span>{simulatedDirections}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stockists List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mono text-xs text-brand-outline uppercase tracking-wider">
              {filteredStockists.length} stockists available
            </span>
            {searchQuery || selectedCity !== "All" || selectedType !== "All" ? (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCity("All");
                  setSelectedType("All");
                }}
                className="text-xs font-mono text-brand-gold hover:underline"
              >
                Clear Filters
              </button>
            ) : null}
          </div>

          {filteredStockists.length === 0 ? (
            <div className="text-center py-12 px-4 border border-dashed border-brand-gold/20 rounded-xl bg-brand-white/40">
              <Building2 className="w-12 h-12 text-brand-outline/40 mx-auto mb-3" />
              <p className="font-serif text-lg text-brand-text">No stocking partners found</p>
              <p className="text-xs text-brand-outline mt-1 max-w-sm mx-auto">
                Try widening your search string or toggling the regional filters to other historic hubs.
              </p>
            </div>
          ) : (
            filteredStockists.map((st) => (
              <div
                key={st.id}
                className="p-5 border border-brand-gold/15 hover:border-brand-gold/45 rounded-xl bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-brand-gold/10 text-[10px] font-mono text-brand-gold rounded-full mb-1.5 uppercase tracking-wider">
                      {st.type}
                    </span>
                    <h3 className="font-serif text-lg text-brand-text group-hover:text-brand-green transition-colors">
                      {st.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleSimulateDirections(st.name)}
                    className="p-2 bg-brand-white border border-brand-gold/25 text-brand-gold hover:bg-brand-gold hover:text-brand-white rounded-lg transition-all"
                    title="Simulate Guide Route"
                  >
                    <Navigation className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-3.5 space-y-1.5 text-xs text-brand-outline">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    <span>{st.address}, <strong className="text-brand-text font-medium">{st.city}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>{st.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>{st.contact}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-brand-gold/10">
                  <span className="block text-[10px] font-mono uppercase text-brand-outline tracking-wider mb-2">
                    Featured Stocking Brands (In Stock)
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {st.featuredBrands.map((brandId) => {
                      const brand = BRANDS_DATA.find((b) => b.id === brandId);
                      return brand ? (
                        <span
                          key={brandId}
                          className="px-2 py-0.5 bg-brand-green/5 border border-brand-green/10 text-[11px] text-brand-green font-medium rounded"
                        >
                          {brand.name}
                        </span>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-4 bg-brand-green/5 border-t border-brand-gold/15 text-center text-xs text-brand-outline font-mono">
          <Sparkles className="w-4 h-4 text-brand-gold inline-block mr-1.5 -mt-0.5" />
          <span>Curating original, batch-numbered brews near you.</span>
        </div>
      </motion.div>
    </div>
  );
}
