import React, { useState } from "react";
import { QUIZ_QUESTIONS, BRANDS_DATA } from "../data";
import { Brand } from "../types";
import { Sparkles, Check, Info, Flame, Wine, Compass, ArrowRight, RefreshCw, BarChart2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BrewViewProps {
  setTab: (tab: string) => void;
  onOpenStockists: () => void;
}

export default function BrewView({ setTab, onOpenStockists }: BrewViewProps) {
  // Quiz State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState({
    boldness: 0,
    spiceHeat: 0,
    sweetness: 0,
    carbonation: 0,
  });
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendedBrand, setRecommendedBrand] = useState<Brand | null>(null);

  // Compare column toggle state
  const [highlightRow, setHighlightRow] = useState<string | null>(null);

  const handleOptionSelect = (weights: {
    boldness?: number;
    spiceHeat?: number;
    sweetness?: number;
    carbonation?: number;
  }) => {
    // Add weights to score state
    setScores((prev) => ({
      boldness: prev.boldness + (weights.boldness || 0),
      spiceHeat: prev.spiceHeat + (weights.spiceHeat || 0),
      sweetness: prev.sweetness + (weights.sweetness || 0),
      carbonation: prev.carbonation + (weights.carbonation || 0),
    }));

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // End of quiz, calculate closest brand recommendation
      calculateRecommendation();
    }
  };

  const calculateRecommendation = () => {
    // Calculate final score averages or raw sums
    // Normalize user preferences and find Euclidean distance to BRANDS_DATA tasting notes
    const finalScores = {
      boldness: scores.boldness / QUIZ_QUESTIONS.length + 2, // offset to range 1-5
      spiceHeat: scores.spiceHeat / QUIZ_QUESTIONS.length + 2,
      sweetness: scores.sweetness / QUIZ_QUESTIONS.length + 2,
      carbonation: scores.carbonation / QUIZ_QUESTIONS.length + 2,
    };

    let closestBrand: Brand = BRANDS_DATA[0];
    let minDistance = Infinity;

    BRANDS_DATA.forEach((brand) => {
      // Calculate distance between brand and user scores
      const dist = Math.sqrt(
        Math.pow(brand.tastingNotes.boldness - finalScores.boldness, 2) +
        Math.pow(brand.tastingNotes.spiceHeat - finalScores.spiceHeat, 2) +
        Math.pow(brand.tastingNotes.sweetness - finalScores.sweetness, 2) +
        Math.pow(brand.tastingNotes.carbonation - finalScores.carbonation, 2)
      );

      if (dist < minDistance) {
        minDistance = dist;
        closestBrand = brand;
      }
    });

    setRecommendedBrand(closestBrand);
    setQuizCompleted(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScores({
      boldness: 0,
      spiceHeat: 0,
      sweetness: 0,
      carbonation: 0,
    });
    setQuizCompleted(false);
    setRecommendedBrand(null);
  };

  const brewSteps = [
    {
      num: "01",
      title: "Root Maceration",
      text: "Satara ginger crops are cleaned, young peel is retained for essential citrus oils, then raw adrak is crushed under massive rollers to extract liquid without wood burning."
    },
    {
      num: "02",
      title: "Infusion-Steeping",
      text: "The freshly pressed ginger juice is combined with pure water and slow heated under steam together with hand-ground cardamom, cloves, and whole black tellicherry pepper."
    },
    {
      num: "03",
      title: "Natural Siphonage",
      text: "The herbal infusion undergoes micro-filtration. Fine particles stay for visual cloudiness (signifying raw pulp) while larger wood particles are extracted."
    },
    {
      num: "04",
      title: "Citric Balancing",
      text: "Organic cane sugars or palm jaggery is melted in. Fresh key lime extracts are blended to create high-octane acid balance, preventing sugar heavy syrups from forming."
    }
  ];

  const qualityChecklist = [
    {
      title: "No Synthetic Syrups",
      desc: "Authentic craft relies entirely on fresh or cold-pressed ginger root, never artificial flavor oleoresins or high fructose corn powder syrups."
    },
    {
      title: "Visual Cloudiness",
      desc: "Unlike pale transparent commercial sodas, real ginger ale is slightly cloudy or carries natural ginger sediments settleable at the container floor."
    },
    {
      title: "Integrated Spice Oils",
      desc: "Infusing supporting botanicals like cardamom and whole lime peels adds multi-layered complexity that lasts way past the initial bubble tickle."
    },
    {
      title: "Subtle Glycemic Choice",
      desc: "Relying on lighter fine sugars, organic honey, or local palm jaggery values the authentic woodiness of ginger over simple cloying sweetness."
    }
  ];

  return (
    <div id="brew-view" className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20 pb-24">
      
      {/* 1. Page Header */}
      <section id="brew-hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#875200]">
            The Botanical Protocol
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-green tracking-tight leading-snug">
            The Anatomy of a Brew: <br />
            <span className="italic font-normal">Extraction & Effervescence</span>
          </h2>
          <p className="text-sm md:text-base text-brand-text/80 leading-relaxed">
            Crafting the ultimate ginger ale is a study in thermal control and organic chemistry. Balancing the heavy, throat-tingling heat of fresh adrak juice against the clean carbonated carbonation of fine mineral spring water requires a precise four-stage protocol.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {brewSteps.map((step) => (
              <div key={step.num} className="p-4 border border-brand-gold/15 bg-white rounded-xl shadow-xs hover:border-brand-gold/30 transition-colors">
                <span className="font-mono text-xs text-brand-gold font-bold block mb-1">
                  {step.num}. {step.title}
                </span>
                <p className="text-xs text-brand-outline leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative p-2.5 bg-brand-white border border-brand-gold/20 rounded-2xl shadow-xl max-w-xs sm:max-w-md">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfDyXetRUf0s0cU8-7VcTr8Yd4J9bfWR_CGbr8ptXeXs2esNSe5vS4QjrsPsfiYDg3V0bxbQm2m3BAuRguXq4ZHgVYIrwG62LW5VGeMJOOX8vogsHtP4ag5xNW210RoH9gZV_jAOBROvq8Zrjbe2cwoSWno61kVdoFRGgS0iVHqPlOvuqrY8H9WMgzkOfFhFRCvd3MweYOAc3qvAWPk6dsYqZ3FtH20xHKUkYIMsbY-z5u-s5iv3Oqf6UXlzH1Tb-gBQyKgYdE2ZjV"
              alt="Raw sliced ginger roots submerged in beautiful bubbling sparkling spring water with droplets rising"
              className="rounded-xl w-full h-[320px] md:h-[420px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 2. Interactive Comparison Table */}
      <section id="compare-section" className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-gold">
            Critical Contrasts
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-brand-green">
            Commercial vs. Craft Ginger Ale
          </h2>
          <p className="text-xs text-brand-outline font-mono">
            Hover over different dimensions to see where standard high-speed sodas fail real botanical integrity.
          </p>
        </div>

        <div className="overflow-x-auto border border-brand-gold/25 rounded-2xl shadow-lg bg-white max-w-4xl mx-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-green text-brand-white text-xs font-mono uppercase tracking-widest">
                <th className="p-4 sm:p-5 border-b border-brand-gold/15">Siphoning Metric</th>
                <th className="p-4 sm:p-5 border-b border-brand-gold/15 text-red-300">Commercial Standard</th>
                <th className="p-4 sm:p-5 border-b border-brand-gold/15 text-green-300">Artisanal Craft</th>
              </tr>
            </thead>
            <tbody className="text-xs sm:text-sm text-brand-text">
              <tr
                className={`border-b border-brand-gold/10 transition-colors ${
                  highlightRow === "ginger" ? "bg-brand-gold/5 font-semibold" : ""
                }`}
                onMouseEnter={() => setHighlightRow("ginger")}
                onMouseLeave={() => setHighlightRow(null)}
              >
                <td className="p-4 font-mono uppercase font-bold text-brand-green">Primary Ginger Source</td>
                <td className="p-4 text-brand-outline">Synthetic ginger flavoring, powder, or extract oleoresins.</td>
                <td className="p-4 text-brand-green font-medium">100% natural, cold-pressed ginger root juice (high gingerol).</td>
              </tr>
              <tr
                className={`border-b border-brand-gold/10 transition-colors ${
                  highlightRow === "sugar" ? "bg-brand-gold/5 font-semibold" : ""
                }`}
                onMouseEnter={() => setHighlightRow("sugar")}
                onMouseLeave={() => setHighlightRow(null)}
              >
                <td className="p-4 font-mono uppercase font-bold text-brand-green">Sweeteners</td>
                <td className="p-4 text-brand-outline">High-fructose corn syrup, refined white sugar (excessive calorie loads).</td>
                <td className="p-4 text-brand-green font-medium">Organic raw cane sugar, raw forest honey, or local palm jaggery.</td>
              </tr>
              <tr
                className={`border-b border-brand-gold/10 transition-colors ${
                  highlightRow === "clarity" ? "bg-brand-gold/5 font-semibold" : ""
                }`}
                onMouseEnter={() => setHighlightRow("clarity")}
                onMouseLeave={() => setHighlightRow(null)}
              >
                <td className="p-4 font-mono uppercase font-bold text-brand-green">Visual Appearance</td>
                <td className="p-4 text-brand-outline">Crystal clear, artificially colored bright gold or amber sodas.</td>
                <td className="p-4 text-brand-green font-medium">Slightly cloudy, genuine pale color, natural pulp sediment.</td>
              </tr>
              <tr
                className={`border-b border-brand-gold/10 transition-colors ${
                  highlightRow === "complexity" ? "bg-brand-gold/5 font-semibold" : ""
                }`}
                onMouseEnter={() => setHighlightRow("complexity")}
                onMouseLeave={() => setHighlightRow(null)}
              >
                <td className="p-4 font-mono uppercase font-bold text-brand-green">Supporting Botanicals</td>
                <td className="p-4 text-brand-outline">None. Heavily reliance on citric acids and artificial sodium preserves.</td>
                <td className="p-4 text-brand-green font-medium">Cardamom seeds, whole clove buds, lemongrass stalks, and lime oil.</td>
              </tr>
              <tr
                className={`transition-colors ${
                  highlightRow === "bubbles" ? "bg-brand-gold/5 font-semibold" : ""
                }`}
                onMouseEnter={() => setHighlightRow("bubbles")}
                onMouseLeave={() => setHighlightRow(null)}
              >
                <td className="p-4 font-mono uppercase font-bold text-brand-green">Fizziness Profile</td>
                <td className="p-4 text-brand-outline">Heavy, sharp macro-bubbles (bloating, fast-failing carbonation).</td>
                <td className="p-4 text-brand-green font-medium">Gentle champagne-style carbonation or natural yeasty sparkle.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. "What Makes a Great Ginger Ale?" Checklist */}
      <section id="great-checklist" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative p-2 bg-brand-white border border-brand-gold/25 rounded-xl shadow-xl max-w-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnOLCaYngAsiuuIy-T219QlYJj97CfbHqTqgJLr4vNQnB92AOlP89ARNVJkDEHFkJeZsWbDoo_RjiMeLkgHLCJNLvDrpGRpVWF1lOMWvfZBYZTZPqC-KM_UhyeEogspTBTYu3AW7JztihWQzF_ha7_5Ft-XMPHXnljYAWMD_4fHo3oX286TGplsnAS1IpEKfAmZSdWxIQGesQaSdW-QDHDE4dlqAGFmUR2mgn9Phc-fv0QVpytWB4M33loNO-yfsufYF4SJIVIlP9f"
              alt="Sliced young ginger on a rustic deck, a wooden pestle, and a fresh glass showing citrus accents"
              className="rounded-lg w-full h-[280px] md:h-[350px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-brand-gold">
            What Makes a Great Brew?
          </span>
          <h2 className="font-serif text-2xl md:text-3xl text-brand-green tracking-tight leading-snug">
            Authenticity Standard Ledger
          </h2>
          <div className="h-0.5 w-16 bg-brand-gold" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {qualityChecklist.map((item, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold text-brand-text">{item.title}</h4>
                  <p className="text-xs text-brand-outline leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brew Profiler Quiz ("What's your spice profile?") */}
      <section id="profiler-quiz" className="bg-brand-green text-brand-white rounded-3xl p-6 sm:p-12 border border-brand-gold/30 shadow-2xl relative max-w-4xl mx-auto overflow-hidden">
        
        {/* Decorative Compass */}
        <div className="absolute top-0 right-0 p-8 opacity-5 select-none pointer-events-none">
          <Compass className="w-64 h-64 animate-spin-slow" />
        </div>

        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key="quiz-step"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8 relative z-10"
            >
              <div className="text-center sm:text-left">
                <span className="font-mono text-[10px] text-brand-gold uppercase tracking-widest block mb-2 font-bold select-none">
                  INTELLIGENT BREW PROFILER
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-brand-white">
                  Discover Your Brand Match
                </h3>
                <p className="text-xs text-brand-white/70 block mt-1">
                  Answer these four diagnostic questions to determine which artisanal bottle fits your spice philosophy.
                </p>
              </div>

              <div className="flex justify-between items-center bg-brand-white/5 border border-brand-white/10 px-4 py-2.5 rounded-lg text-xs font-mono">
                <span>QUESTION {currentQuestionIndex + 1} OF {QUIZ_QUESTIONS.length}</span>
                <div className="flex gap-1">
                  {QUIZ_QUESTIONS.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded transition-all duration-300 ${
                        i === currentQuestionIndex ? "w-6 bg-brand-gold" : "w-2 bg-brand-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-serif text-lg sm:text-xl text-brand-white font-medium">
                  {QUIZ_QUESTIONS[currentQuestionIndex].question}
                </h4>

                <div className="grid grid-cols-1 gap-3.5">
                  {QUIZ_QUESTIONS[currentQuestionIndex].options.map((option, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => handleOptionSelect(option.weights)}
                      className="w-full text-left p-4 bg-brand-white/5 border border-brand-white/10 hover:border-brand-gold hover:bg-brand-white/10 rounded-xl transition-all group flex justify-between items-center"
                    >
                      <div className="space-y-1 pr-4">
                        <span className="font-serif text-sm font-semibold block text-brand-white group-hover:text-brand-gold transition-colors">
                          {option.text}
                        </span>
                        <span className="text-xs text-brand-white/60 block leading-snug">
                          {option.description}
                        </span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-brand-white/30 group-hover:text-brand-gold transition-colors flex-shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="quiz-result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center relative z-10"
            >
              {/* Recommended Brand Column */}
              <div className="md:col-span-4 flex justify-center">
                <div className="relative p-2 bg-brand-white/10 rounded-2xl border border-brand-gold/40 shadow-md">
                  <img
                    src={recommendedBrand?.imageUrl}
                    alt={recommendedBrand?.name}
                    className="rounded-xl w-44 h-60 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-brand-gold text-brand-white text-[10px] font-mono px-2 py-1 rounded">
                    {recommendedBrand?.type.toUpperCase()} MATCH
                  </div>
                </div>
              </div>

              {/* Matching Explanation Column */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/15 border border-brand-gold/10 text-brand-gold rounded font-mono text-[9px] uppercase tracking-widest font-bold">
                    <Sparkles className="w-3 h-3" />
                    YOUR PALATE PAIRING IS COMPLETE
                  </div>
                  <h3 className="font-serif text-3xl text-brand-white mt-1">
                    {recommendedBrand?.name}
                  </h3>
                  <span className="font-mono text-xs text-brand-gold block italic mt-1 font-semibold">
                    "{recommendedBrand?.tagline}"
                  </span>
                </div>

                <p className="text-xs text-brand-white/80 leading-relaxed">
                  Based on your spice heat threshold, glycemic views, carbonation choices, and herb preferences, you line up perfectly with {recommendedBrand?.name}. {recommendedBrand?.description}
                </p>

                {/* Score Chart indicators */}
                <div className="p-4 bg-brand-white/5 border border-brand-white/15 rounded-xl space-y-3">
                  <span className="block text-[9px] font-mono uppercase tracking-widest text-brand-gold mb-1 font-bold">
                    Matched Tasting Spectrum
                  </span>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-xs">
                    <div>
                      <div className="flex justify-between text-[10px] text-brand-white/75 font-mono">
                        <span>SPICE THROTTLE</span>
                        <span>{recommendedBrand?.tastingNotes.spiceHeat} / 5</span>
                      </div>
                      <div className="h-1 bg-brand-white/10 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-brand-gold rounded-full"
                          style={{ width: `${(recommendedBrand?.tastingNotes.spiceHeat || 1) * 20}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] text-brand-white/75 font-mono">
                        <span>SWEETNESS WEIGHT</span>
                        <span>{recommendedBrand?.tastingNotes.sweetness} / 5</span>
                      </div>
                      <div className="h-1 bg-brand-white/10 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-brand-gold rounded-full"
                          style={{ width: `${(recommendedBrand?.tastingNotes.sweetness || 1) * 20}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] text-brand-white/75 font-mono">
                        <span>BOTANICAL BOLDNESS</span>
                        <span>{recommendedBrand?.tastingNotes.boldness} / 5</span>
                      </div>
                      <div className="h-1 bg-brand-white/10 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-brand-gold rounded-full"
                          style={{ width: `${(recommendedBrand?.tastingNotes.boldness || 1) * 20}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] text-brand-white/75 font-mono">
                        <span>EFFERVESCENCE</span>
                        <span>{recommendedBrand?.tastingNotes.carbonation} / 5</span>
                      </div>
                      <div className="h-1 bg-brand-white/10 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-brand-gold rounded-full"
                          style={{ width: `${(recommendedBrand?.tastingNotes.carbonation || 1) * 20}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="block text-[8px] font-mono text-brand-gold uppercase tracking-wider font-bold">Key Ingredients</span>
                    <span className="text-brand-white/80 block mt-0.5">{recommendedBrand?.keyIngredients.join(", ")}</span>
                  </div>
                  <div>
                    <span className="block text-[8px] font-mono text-brand-gold uppercase tracking-wider font-bold">Perfect Serve</span>
                    <span className="text-brand-white/80 block mt-0.5">{recommendedBrand?.perfectServe}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => setTab("brands")}
                    className="px-4 py-2 bg-brand-gold text-brand-white hover:bg-brand-white hover:text-brand-green font-mono text-[10px] uppercase tracking-wider rounded transition-all"
                  >
                    View Directory Details
                  </button>
                  <button
                    onClick={onOpenStockists}
                    className="px-4 py-2 bg-brand-white/10 text-brand-white hover:bg-brand-white/20 font-mono text-[10px] uppercase tracking-wider rounded transition-all border border-brand-white/15"
                  >
                    Locate Stocking Stores
                  </button>
                  <button
                    onClick={handleRestartQuiz}
                    className="px-4 py-2 bg-transparent text-brand-white/60 hover:text-brand-white font-mono text-[10px] uppercase tracking-wider rounded transition-all flex items-center gap-1.5 ml-auto"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Restart Audit
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

    </div>
  );
}
