import { Brand, TimelineEvent, Stockist, QuizQuestion } from "./types";

export const BRANDS_DATA: Brand[] = [
  {
    id: "sepoy-co",
    name: "Sepoy & Co.",
    tagline: "Classical balance with floral botanical complexity",
    type: "Artisanal",
    origin: "Delhi",
    yearEstablished: 2018,
    description: "Award-winning premium ginger ale curated using natural ginger juice sourced from local Indian farms, combined with light citrus oils and warm botanical notes.",
    brewProcess: "Cold carbonation combined with delicate steam-distilled essential oils.",
    keyIngredients: ["Fresh Ginger Juice", "Lemon Peel Extract", "Distilled Floral Botanicals", "Carbonated Spring Water"],
    tastingNotes: {
      boldness: 3,
      spiceHeat: 3,
      sweetness: 3,
      carbonation: 4,
      primaryNotes: ["Mild Ginger Heat", "Citrus Zest", "White Floral Tones"]
    },
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsxUFbc_0ctFSXLZlQFL_yTnqyL3tk6-71dJ-EATyCSYnyNVq_PlUtC1xMuGQ2FQXy0h6NpMFV-VRogVMnhwHrJseEv0FJl83RDdeN05vWrPyEY1e_8nq3LF8HGOhxM5UqLSnhJzIg_9BWUEeO07NVuPu9TcAIvoaic7yOxSJRYB81l7-_hKRnFHZuBP4N9b-_Ff4b0rjdHegGbHbwtMmJE-nJQNLSEvvwP0BsrtMxPs2E3wsNbRfV2aGFIAR1CVkq9s3lVZpI7Nb8",
    tags: ["Botanical", "Highly Carbonated", "Bestseller"],
    sourcingStory: "Grown in the foothills of the Himalayas, the ginger crop is picked by hand when young to ensure robust flavour without overly harsh woodiness.",
    perfectServe: "Garnished with a thin twist of fresh lemon peel and a sprig of fresh mint over crushed ice.",
    alcoholByVolume: "0.0%"
  },
  {
    id: "svami",
    name: "Svami Spice",
    tagline: "Ultra-lean, high-heat adrak dry profile",
    type: "Artisanal",
    origin: "Mumbai",
    yearEstablished: 2017,
    description: "Extremely dry and forward ginger ale with a heavy ginger throttle. It uses raw local adrak pressings, stripped back sugar, and zero synthetic ingredients.",
    brewProcess: "Double-infused root decoction for maximal spice extraction, followed by quick-burst carbonation.",
    keyIngredients: ["Raw Ginger Pressings", "Organic Cane Sugar", "Lime Solution", "Champagne-Style Bubbles"],
    tastingNotes: {
      boldness: 4,
      spiceHeat: 5,
      sweetness: 1,
      carbonation: 3,
      primaryNotes: ["Assertive Spice Searing", "Dry Earthy Root", "Zesty Lime"]
    },
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_I8xzWnqHH2NGuJG6RjbMEW12KKa85rB81CTdGCIm4OXyRFZil6yfVBjejdpHuhDQoiaIZa0WbiGnycjeShij2NXSN_JPTXblBzqJThraxlMDeEMDOO4QXCR_6qaoIem8q2CX4EFJ9H6p_HX5qx7Dp1EjIliarvTGyMBNCxyqktdxKxR90BsduO7h3b78CE1BM6jbDNr8mCrIQYT7L6n-bxPUM2zOCqfE8nBI0nXEA760LSuUiRHWhKFfM6wPdx-IvPElalcsbE8e",
    tags: ["Extra Spicy", "Low Sugar", "Earthy"],
    sourcingStory: "Our ginger is sourced from Satara, Maharashtra, known for its small, fiery cultivars that carry exceptionally high levels of gingerol.",
    perfectServe: "Best enjoyed straight, slightly chilled, or layered under a dark aged single-malt whisky.",
    alcoholByVolume: "0.0%"
  },
  {
    id: "jade-forest",
    name: "Jade Forest",
    tagline: "Bright citrus forwardness with fresh lemongrass undertones",
    type: "Artisanal",
    origin: "Gurugram",
    yearEstablished: 2019,
    description: "A playful, vibrant brew combining genuine ginger bite with refreshing lemongrass and key lime notes. Highly versatile and extremely aromatic.",
    brewProcess: "Cold pressed juice filtration with automated continuous bubble stream carbonation.",
    keyIngredients: ["Pressed Ginger Root", "Lemongrass Extract", "Key Lime Essences", "Filtered Artesian Water"],
    tastingNotes: {
      boldness: 3,
      spiceHeat: 2,
      sweetness: 4,
      carbonation: 5,
      primaryNotes: ["Zesty Lemongrass", "Subtle Ginger Glow", "Balanced Sweetness"]
    },
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFYBSzYSp5dxkfWKBM8bsoXb7C_I535Qw4h-tBWkTmhc7CB2BWjR6vfP8MrXynputYkGdFYqiWA690TF5CwH6Cbeq1LpVoKCydYRWo5vVBttc8UKzgRyuCt6rGMcLq47Rws4Hc3Z5wWpwb65MOeEVNjglr75F0UKUE9Agmk8XSJwXtZWUnsw-VYsAHuWW5Vz4wyVSLgTro5zlU_iTPegG3Alhzs49koLHHa8ikrGFOe0tq3NHJ0Ui6ghQivft2leH9Eu674yo4_M3I",
    tags: ["Botanical", "Refreshing", "Highly Carbonated"],
    sourcingStory: "Fresh lemongrass is harvested in the humid plains of Kerala and steam distilled on-site to lock in the absolute freshest citrus aromatics.",
    perfectServe: "Served in a highball glass filled with large square ice blocks, garnished with a bruised lemongrass stalk.",
    alcoholByVolume: "0.0%"
  },
  {
    id: "schweppes-classic",
    name: "Schweppes Classic",
    tagline: "The timeless commercial standard of carbonation",
    type: "Stalwart",
    origin: "Global",
    yearEstablished: 1783,
    description: "The historic benchmark for sparkling tonics and mixers. Clean, high in sugar and heavy champagne-style carbonation, serving as the gold standard of mixology for centuries.",
    brewProcess: "Syrup dissolution in highly carbonated demineralized water with added preservative salts.",
    keyIngredients: ["Siberian Ginger Extract Essence", "Fructose Syrup", "Citric Acid", "Purified Carbonated Water"],
    tastingNotes: {
      boldness: 2,
      spiceHeat: 1,
      sweetness: 5,
      carbonation: 5,
      primaryNotes: ["Sweet Soda Base", "Faint Ginger Scent", "High Bubble Fizz"]
    },
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyk5a9Y_H_hWoH7mr6dNjhSbusfSCPHsbAGVXXX-g5xzMKnbbDXPlt8OGh1L4art9WgtpV_ypBztR8iBxVm7jE9bARWQzDM7w8MSqC879_hwRJUlNdwTZqILy9MVUz0P6HNN810XL4WgL3jeF0JpUu75v9SfbD2C4VNwezgWYcmLK4zNfEai7N3xIw6f8TWQ_qK6wpTo8RAVahZfs9unghdefA5cAKmDuf5OSbpzommD1ubxdT-pcQrsMJMAjCjBRDjCtYILBTaQwK",
    tags: ["Sweet", "Highly Carbonated", "Stalwart"],
    sourcingStory: "Engineered in Jacob Schweppe’s historic Geneva laboratories in 1783, using precision pressure carbonation systems.",
    perfectServe: "The perfect companion for a classic London Dry Gin or chilled on its own with lime.",
    alcoholByVolume: "0.0%"
  },
  {
    id: "begal-brew",
    name: "Bengal Brew",
    tagline: "Artisanal wild card with cardamom, clove, and rich jaggery depth",
    type: "Reserve",
    origin: "Kolkata",
    yearEstablished: 2021,
    description: "An incredibly aromatic craft reserve. It relies on wood-fired ginger reduction, organic regional palm jaggery, and an intimate blend of spices that evoke old Calcutta.",
    brewProcess: "Slow stovetop decoction of sliced ginger root, steeped with green cardamom pods, cloves, and natural jaggery.",
    keyIngredients: ["Old-Stump Ginger Root", "Cardamom & Cloves", "Organic Palm Jaggery", "Natural Fizzing Yeast"],
    tastingNotes: {
      boldness: 5,
      spiceHeat: 4,
      sweetness: 4,
      carbonation: 2,
      primaryNotes: ["Caramel Jaggery Depth", "Cardamom Aroma", "Lingering Warm Clove"]
    },
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsacDEOO2RyrJRfwuqjl0VDSlkE3BGUain8wyo5rwE3Dq6Oprr4s7v2DM7U2wsNLRlqgG-QrkuEZRBLWzAguqjve1TR1zo-IJGaBJo6U48ac0SDIWIUo75U29YbiUyxdDzCDqlyZ6PrWxKsLcIht4zvprFITM88LQ0LX3DL-IbWCx7WUt6wYR_fK0rq3HqSz_Dk7g5KTQXCdxZf368Ggu36SOuIkfsp6pL1DWf10_g5p4ho-08cwj-hTpyUk9dAv_-eSPg704TOL3h",
    tags: ["Indian Botanicals", "Spiced Reserve", "Earthy"],
    sourcingStory: "Hand-boiled in micro-batches near the Hooghly river, using ginger hand-pressed in heavy stone mortar-pestle equipment.",
    perfectServe: "Serve warm-ish with single clove garnish, or over thick ice blocks with a stick of cinnamon.",
    alcoholByVolume: "0.0%"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1750,
    title: "The Colonial Spark",
    subtitle: "Bombay Presidency & Calcutta Clubs",
    description: "The earliest documented encounters of hand-ground Indian ginger root combined with pressure-carbonated spring water inside copper-lined siphons. Served inside Officers' messes and early social clubs.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMm1MQHoq1RFks6ReyM2zxKW897o1guZc7iqY5cPlLXeavpf9RhbR-oc2gl_spBwh9BdTR5_IZ58EpErK3oeyD3FsVzWW-RcqVK3RApta-enCNr683XfmmtTea-b9W9NW6G4SI8afCstPIwdR_i_LQFMYQErM4cfNOSFUJG7LOrzAw3c9Gj5SRkhvTEw7TEeHt1ns47OT_KgHntaVHl8pZsqAR1IN15wPDAv6S_1UYPXSa30IMiIxQ8UcQKrUV8U6xCHzuPUinJrK0",
    location: "Bombay Fort & Fort William, Calcutta",
    keyTakeaway: "Unfiltered ginger, dynamic carbonation",
    historicalContext: "Designed to counteract colonial fatigue, this raw carbonated tonic is heavily documented in botanical logs."
  },
  {
    year: 1820,
    title: "The Adrak Advantage",
    subtitle: "Traditional Apothecaries & Spice Mergers",
    description: "Indian spice herbalists (vaidyas and hakims) infused the carbonated elixir with traditional cooling herbs: green cardamom, tellicherry black peppercorns, and bruised clove buds to preserve freshness and balance digestive properties.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWPFAjL6Wi-hmmZBmkeuhiinUTwBEJ5pm-HPYFz62_L9E22t3x4uRpUO-IlS65LjTETiiLdkWsM4pz-x5mGKRi4gJ9Q6TjMayCcSdHUy_3_THRznSz3TyCBET9oDtNbXuJQrSZWP5ypgwgsPuaQgJCo3zBTYXOIzBoWzDiikYm3WcC04XjPfOAiazWSjI7iDk86IG2dXz_IN2CZIyrquoNOqXg0gRPXtveMoHnLtsMv4xSYaBinpFsOIY3o1bOo2x4LY_r8An4r4rJ",
    location: "Malabar Coast & Old Delhi Bazaar",
    keyTakeaway: "Introduction of cardamom, black pepper",
    historicalContext: "The ginger drink makes a shift from a clinical tonic to an esteemed digestive drink for royal tables and public markets."
  },
  {
    year: 1910,
    title: "The Industrial Era",
    subtitle: "Steam-Powered Bottling & Mass Transport",
    description: "The rise of corporate steam-operated bottling factories nationwide led to mechanical cap sealing. Heavy export and distribution began, but fresh root juices were slowly replaced with ginger oleoresin and syrups for shelf stability.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHqaBCzp8cvJjo2OWYhNhSwm1qlq8w7G4O9OTIKTr3Rxzb_Q5dZLf_1k8Bnch7gymBNlrLXre6-5S9QVG_HxsBrwJBnnDk2KU9eKnY3b76Hdv2gYGRMlhqYl0R55P8B2ISbp4sP1Mw-csWi_cr0ex39yngIG1kgYAKJPQi2kGFu9gHfz4WJhYfYgGh23xtWORUeyfe76UNbqm5sk3oQx4a_tcI5T7GC2DzYYIw_IpbJjtT78UIdrSl64MzsBlQeLhHp4xpJ1ehgwSZ",
    location: "Calcutta Industrial Units",
    keyTakeaway: "Preservatives, mass distribution",
    historicalContext: "Classic dry style ginger ale became highly accessible, though the characteristic fresh root sting began to decline."
  },
  {
    year: 2020,
    title: "The Craft Renaissance",
    subtitle: "Return of Squeezed Root Juice & Low Glycemics",
    description: "Modern young artisans reject industrial syrups. Driven by a passion to restore the crisp, bold bite of high-gingerol Satara ginger, we return to cold extraction, local herbs, citrus peel, and real organic honey or jaggery.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8WjO6aXo-WzmyF1zcwDQJVO3DROpTd6W2TH2D7HREE7suTtaO99KetqdzB-Nhl80D4aEcVWyxHanOanZTQQzFrXuFL39rnvGBb8dDDDpaNG45v4MF2NVZ4tYc8wRxkw6GJcLfXQZUSLadWQBk_vr4HikTuBn5PYrxsXMVQ6ZTtUDg5DtDJ8PM_OObuK--gVNkFTj2bCvxONEnn6OQ_Bz6NU8pD3-mw09c7IbMJOY83oVTYQ8-jnJURDY2Y65HYya750w3EpVo96qe",
    location: "Boutique Micro-Brews Statewide",
    keyTakeaway: "Zero synthetic preservatives, high-gingerol crops",
    historicalContext: "The consumer demands real authenticity. Ginger ale is again honored as an iconic artisanal craft beverage."
  }
];

export const STOCKISTS_DATA: Stockist[] = [
  {
    id: "st-1",
    name: "The Adrak Club & Delicatessen",
    type: "Gourmet Store",
    address: "Bespoke Arcade, Level 1, Colaba",
    city: "Mumbai",
    hours: "09:00 AM - 11:00 PM",
    featuredBrands: ["sepoy-co", "svami"],
    contact: "+91 22 5556 9081",
    coordinates: { lat: 18.9218, lng: 72.8347 }
  },
  {
    id: "st-2",
    name: "Himalayan Herbs & Brew Lounge",
    type: "Bespoke Lounge",
    address: "Khan Market Landmark, Inner Circle",
    city: "Delhi NCR",
    hours: "11:00 AM - Midnight",
    featuredBrands: ["sepoy-co", "begal-brew"],
    contact: "+91 11 4432 0928",
    coordinates: { lat: 28.6003, lng: 77.2273 }
  },
  {
    id: "st-3",
    name: "Soma Organic Farm Shop",
    type: "Gourmet Store",
    address: "80 Feet Road, Indiranagar",
    city: "Bangalore",
    hours: "08:00 AM - 09:30 PM",
    featuredBrands: ["jade-forest", "svami"],
    contact: "+91 80 4390 1289",
    coordinates: { lat: 12.9719, lng: 77.6412 }
  },
  {
    id: "st-4",
    name: "The Calcutta Coffee House & Gin Lounge",
    type: "Artisanal Bar",
    address: "Park Street Colonial Row",
    city: "Kolkata",
    hours: "12:00 PM - 01:00 AM",
    featuredBrands: ["begal-brew", "schweppes-classic"],
    contact: "+91 33 2287 0922",
    coordinates: { lat: 22.5539, lng: 88.3522 }
  },
  {
    id: "st-5",
    name: "The Sunset Botanical Deck",
    type: "Artisanal Bar",
    address: "Ozran Beach Cliff Road, Vagator",
    city: "Goa",
    hours: "11:00 AM - 02:00 AM",
    featuredBrands: ["jade-forest", "svami", "sepoy-co"],
    contact: "+91 832 2271 2341",
    coordinates: { lat: 15.5996, lng: 73.7381 }
  },
  {
    id: "st-6",
    name: "Saffron Spices Warehouse",
    type: "Gourmet Store",
    address: "Fort Nagar, Mattancherry",
    city: "Kochi",
    hours: "09:00 AM - 08:30 PM",
    featuredBrands: ["begal-brew", "sepoy-co"],
    contact: "+91 484 2221 0049",
    coordinates: { lat: 9.9599, lng: 76.2612 }
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you prefer your ginger's signature heat?",
    options: [
      {
        text: "Searing & Throat-Burning",
        description: "I want to feel the raw, intense fire of Satara adrak juice.",
        weights: { spiceHeat: 5, sweetness: 1, boldness: 5 }
      },
      {
        text: "Balanced & Refreshing Warmth",
        description: "A pleasant, smooth sizzle with subtle, rounded citrus hints.",
        weights: { spiceHeat: 3, sweetness: 3, boldness: 3 }
      },
      {
        text: "Faint, Conversational Glow",
        description: "A delicate soda crispness with ginger serving as a clean background aroma.",
        weights: { spiceHeat: 1, sweetness: 4, boldness: 2 }
      }
    ]
  },
  {
    id: 2,
    question: "Select your sweetness & sugar philosophy:",
    options: [
      {
        text: "Zero or Very Low Sugar (Keto / Dry)",
        description: "Let the dry root shine. No syrupy residues, absolute crisp bite.",
        weights: { sweetness: 1, boldness: 4, spiceHeat: 4 }
      },
      {
        text: "Natural Artisanal Sweetness (Jaggery / Honey)",
        description: "Earthiness of palm jaggery, bringing a caramel, warm spice finish.",
        weights: { sweetness: 4, boldness: 5, spiceHeat: 4 }
      },
      {
        text: "Classic Fine Cane Sugar or Sweet Soda Style",
        description: "High-level sweetness to perfectly blend into spirits, high-energy carbonation.",
        weights: { sweetness: 5, carbonation: 5, boldness: 2 }
      }
    ]
  },
  {
    id: 3,
    question: "What botanical elements should accompany your brew?",
    options: [
      {
        text: "Earthy Indian Spices (Cardamom, Clove)",
        description: "Evoking colonial heritage, apothecary formulations, and warm spice logs.",
        weights: { boldness: 5, spiceHeat: 4 }
      },
      {
        text: "Crisp Lemongrass & Citrus Zest",
        description: "Clean, floral, summery and exceptionally aromatic nose.",
        weights: { carbonation: 4, sweetness: 3 }
      },
      {
        text: "No Frills - Strictly Pure Unadulterated Ginger",
        description: "Just dynamic sparkles, acidic balance, and pure organic root.",
        weights: { spiceHeat: 5, sweetness: 2 }
      }
    ]
  },
  {
    id: 4,
    question: "Describe your ideal effervescence & bubble density:",
    options: [
      {
        text: "Champagne-like High Fizz",
        description: "Ultra packed micro-bubbles that dance on the tongue and keep cocktails lively.",
        weights: { carbonation: 5, sweetness: 3 }
      },
      {
        text: "Gently Fermented / Mild Carbonation",
        description: "Smooth, slightly cloudy, slow-pouring style which leaves room for spices.",
        weights: { carbonation: 2, boldness: 4 }
      }
    ]
  }
];
