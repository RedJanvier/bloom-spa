export type ServiceCategory = "massage" | "facial" | "waxing" | "scrub";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  durationMin: number;
  priceRwf: number;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  image: string;
  featured?: boolean;
};

export const CATEGORY_LABEL: Record<ServiceCategory, string> = {
  massage: "Massage",
  facial: "Facials",
  waxing: "Waxing",
  scrub: "Body Scrubs",
};

const UNSPLASH = "https://images.unsplash.com/";

export const SERVICES: Service[] = [
  // ─── MASSAGE ─────────────────────────────────────────────────────────────
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    category: "massage",
    durationMin: 60,
    priceRwf: 25000,
    shortDescription:
      "Long, gliding strokes to ease tension and quiet a busy mind.",
    longDescription:
      "Our signature Swedish massage uses slow, flowing strokes and gentle kneading to release everyday tension, improve circulation, and deliver a deep sense of calm. Ideal as a first-time spa experience.",
    benefits: [
      "Relieves muscle tension",
      "Improves circulation",
      "Reduces stress and anxiety",
      "Promotes restful sleep",
    ],
    image:
      UNSPLASH +
      "photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "deep-tissue-massage-60",
    name: "Deep Tissue Massage · 60 min",
    category: "massage",
    durationMin: 60,
    priceRwf: 35000,
    shortDescription:
      "Focused, slow pressure that reaches the layers beneath the surface.",
    longDescription:
      "Sustained pressure and targeted strokes work into the deeper layers of muscle and connective tissue to break up adhesions, relieve chronic tightness, and restore range of motion.",
    benefits: [
      "Releases chronic muscle knots",
      "Improves posture",
      "Eases lower back and shoulder pain",
      "Speeds recovery from training",
    ],
    image:
      UNSPLASH +
      "photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "deep-tissue-massage-90",
    name: "Deep Tissue Massage · 90 min",
    category: "massage",
    durationMin: 90,
    priceRwf: 55000,
    shortDescription:
      "An extended deep-tissue session for full-body release.",
    longDescription:
      "Ninety minutes lets the therapist work every region without rushing — perfect when stress, training, or long workdays have left you completely knotted up.",
    benefits: [
      "Full-body chronic-pain relief",
      "Deeper postural reset",
      "Lasting flexibility gains",
    ],
    image:
      UNSPLASH +
      "photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "aromatherapy-massage-60",
    name: "Aromatherapy Massage · 60 min",
    category: "massage",
    durationMin: 60,
    priceRwf: 30000,
    shortDescription:
      "Bespoke essential-oil blend paired with gentle, rhythmic strokes.",
    longDescription:
      "Choose from a flight of essential oils — lavender for calm, eucalyptus for clarity, ylang ylang for warmth — blended into a carrier oil and worked through every meridian for a deeply sensory escape.",
    benefits: [
      "Calms the nervous system",
      "Lifts mood",
      "Deepens breath",
      "Softens skin",
    ],
    image:
      UNSPLASH +
      "photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "aromatherapy-massage-90",
    name: "Aromatherapy Massage · 90 min",
    category: "massage",
    durationMin: 90,
    priceRwf: 50000,
    shortDescription: "An extended aromatherapy ritual — head, neck, back, limbs.",
    longDescription:
      "An extra half-hour of warm, oil-rich strokes carries you well past relaxation and into stillness.",
    benefits: ["Deep emotional reset", "All-over skin nourishment"],
    image:
      UNSPLASH +
      "photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "sports-massage-60",
    name: "Sports Massage · 60 min",
    category: "massage",
    durationMin: 60,
    priceRwf: 45000,
    shortDescription:
      "Targeted athletic recovery for active bodies.",
    longDescription:
      "Trigger-point work, deep compression, and assisted stretching tuned to your sport. Great before a race, after a long ride, or anytime training has caught up with you.",
    benefits: [
      "Faster muscle recovery",
      "Injury prevention",
      "Restored range of motion",
    ],
    image:
      UNSPLASH +
      "photo-1612888077748-89b1a26c9015?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "sports-massage-90",
    name: "Sports Massage · 90 min",
    category: "massage",
    durationMin: 90,
    priceRwf: 60000,
    shortDescription:
      "A full athletic recovery session — every muscle group.",
    longDescription:
      "Ninety minutes of sport-specific therapy: pre-event activation, post-event flush, or full-body maintenance.",
    benefits: ["Total recovery", "Stretch + release combo"],
    image:
      UNSPLASH +
      "photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "thai-massage-60",
    name: "Thai Massage · 60 min",
    category: "massage",
    durationMin: 60,
    priceRwf: 40000,
    shortDescription:
      'Assisted stretching and rhythmic compression — "lazy person\'s yoga".',
    longDescription:
      "Performed clothed on a low mat, Thai massage combines compression, acupressure, and assisted yoga-like stretches to open energy lines and free the joints.",
    benefits: [
      "Improves flexibility",
      "Releases joint tension",
      "Energising",
    ],
    image:
      UNSPLASH +
      "photo-1554232456-8727aae0cfa4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "thai-massage-90",
    name: "Thai Massage · 90 min",
    category: "massage",
    durationMin: 90,
    priceRwf: 60000,
    shortDescription:
      "An extended Thai session — every stretch, every meridian.",
    longDescription:
      "A longer practice for deeper opening through hips, hamstrings, spine, and shoulders.",
    benefits: ["Deep mobility work", "Whole-body energy reset"],
    image:
      UNSPLASH +
      "photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "hot-stone-massage-60",
    name: "Hot Stone Massage · 60 min",
    category: "massage",
    durationMin: 60,
    priceRwf: 50000,
    shortDescription:
      "Warmed basalt stones glide across the body — deeply melting.",
    longDescription:
      "Smooth, heated stones are placed along the spine and used as massage tools, letting warmth penetrate deeper than the hands alone could reach.",
    benefits: [
      "Profound muscle release",
      "Improves circulation",
      "Soothes joint stiffness",
    ],
    image:
      UNSPLASH +
      "photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "hot-stone-massage-90",
    name: "Hot Stone Massage · 90 min",
    category: "massage",
    durationMin: 90,
    priceRwf: 75000,
    shortDescription:
      "An extended hot-stone ritual — the deepest melt in the menu.",
    longDescription:
      "Ninety minutes of heat, weight, and slow strokes. Recommended for anyone carrying long-term tension or coming out of a stressful season.",
    benefits: ["Deepest relaxation", "Profound stress relief"],
    image:
      UNSPLASH +
      "photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "prenatal-postnatal-massage",
    name: "Prenatal & Postnatal Massage",
    category: "massage",
    durationMin: 60,
    priceRwf: 40000,
    shortDescription:
      "Gentle, side-lying massage for expecting and new mothers.",
    longDescription:
      "Performed by therapists trained in pregnancy care, with bolstered side-lying positioning, lighter pressure, and a focus on lower back, hips, and shoulders.",
    benefits: [
      "Eases pregnancy-related back pain",
      "Reduces swelling",
      "Calms the nervous system",
    ],
    image:
      UNSPLASH +
      "photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "couples-massage",
    name: "Couples Massage",
    category: "massage",
    durationMin: 60,
    priceRwf: 90000,
    shortDescription:
      "Side-by-side massage for two in our private couples suite.",
    longDescription:
      "Share the experience — two therapists, two tables, candles, and a private suite. Choose your style independently.",
    benefits: ["Shared escape", "Private suite", "Choose your own style"],
    image:
      UNSPLASH +
      "photo-1591343395082-e120087004b4?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "four-hands-60",
    name: "Four Hands Massage · 60 min",
    category: "massage",
    durationMin: 60,
    priceRwf: 60000,
    shortDescription:
      "Two therapists, perfectly synchronized — twice the relaxation.",
    longDescription:
      "Two trained therapists move in mirrored choreography, doubling the sensory input until the mind simply lets go.",
    benefits: ["Twice the touch", "Faster, deeper release"],
    image:
      UNSPLASH +
      "photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "four-hands-90",
    name: "Four Hands Massage · 90 min",
    category: "massage",
    durationMin: 90,
    priceRwf: 75000,
    shortDescription:
      "An extended four-hands session — pure transcendence.",
    longDescription:
      "Ninety minutes of mirrored four-handed work. The single most-requested experience for special occasions.",
    benefits: ["Signature experience", "Unparalleled relaxation"],
    image:
      UNSPLASH +
      "photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "lymphatic-drainage",
    name: "Lymphatic Drainage",
    category: "massage",
    durationMin: 60,
    priceRwf: 40000,
    shortDescription:
      "Light, rhythmic strokes that help the body de-puff and detoxify.",
    longDescription:
      "Specialised featherlight pumping movements stimulate lymph flow to reduce swelling, support immunity, and leave the body feeling lighter.",
    benefits: [
      "Reduces water retention",
      "Brightens complexion",
      "Supports immunity",
    ],
    image:
      UNSPLASH +
      "photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "wood-therapy",
    name: "Wood Therapy",
    category: "massage",
    durationMin: 60,
    priceRwf: 50000,
    shortDescription:
      "Hand-shaped wooden tools sculpt and contour the body.",
    longDescription:
      "Maderoterapia — a Colombian technique using anatomically shaped wooden tools to break down stored fat, smooth cellulite, and contour curves.",
    benefits: [
      "Smooths cellulite",
      "Contours and tones",
      "Improves circulation",
    ],
    image:
      UNSPLASH +
      "photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "foot-reflexology",
    name: "Foot Reflexology",
    category: "massage",
    durationMin: 30,
    priceRwf: 20000,
    shortDescription:
      "Pressure-point work on the soles — small treatment, full-body effect.",
    longDescription:
      "Targeted thumb-walking pressure on reflex points in the feet, traditionally linked to organs and systems throughout the body.",
    benefits: [
      "Whole-body relaxation",
      "Eases tired feet",
      "Supports better sleep",
    ],
    image:
      UNSPLASH +
      "photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "cupping",
    name: "Cupping (Additional)",
    category: "massage",
    durationMin: 30,
    priceRwf: 25000,
    shortDescription:
      "Suction cups lift the fascia for fast, deep release.",
    longDescription:
      "Silicone or glass cups create gentle suction that lifts soft tissue, increases local blood flow, and releases stubborn adhesions. Often added to a deep-tissue or sports session.",
    benefits: [
      "Releases fascia",
      "Reduces inflammation",
      "Speeds recovery",
    ],
    image:
      UNSPLASH +
      "photo-1612888077748-89b1a26c9015?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "head-massage",
    name: "Head Massage",
    category: "massage",
    durationMin: 30,
    priceRwf: 10000,
    shortDescription:
      "Scalp and temple work — instant relief for tired minds.",
    longDescription:
      "Focused scalp, temple, and neck work to release the tension that builds from screens and long meetings.",
    benefits: ["Eases tension headaches", "Calms the mind"],
    image:
      UNSPLASH +
      "photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "leg-massage",
    name: "Leg Massage",
    category: "massage",
    durationMin: 30,
    priceRwf: 15000,
    shortDescription:
      "Focused work on calves, thighs, and feet — for legs that have done a lot.",
    longDescription:
      "Deep flushing strokes through quads, hamstrings, and calves. Ideal after travel or long days on your feet.",
    benefits: ["Reduces heaviness", "Eases tired calves"],
    image:
      UNSPLASH +
      "photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "back-massage",
    name: "Back Massage",
    category: "massage",
    durationMin: 30,
    priceRwf: 18000,
    shortDescription:
      "Concentrated back, neck, and shoulder relief in half an hour.",
    longDescription:
      "Thirty minutes spent entirely on where most of us hold tension — the upper back, neck, and shoulders.",
    benefits: ["Lunch-break ready", "Targeted shoulder release"],
    image:
      UNSPLASH +
      "photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "candle-massage",
    name: "Candle Massage",
    category: "massage",
    durationMin: 60,
    priceRwf: 45000,
    shortDescription:
      "Warm, melted massage candle oil poured directly onto the skin.",
    longDescription:
      "A massage candle made from skin-safe oils and shea butter is lit and allowed to melt into warm, scented oil — then poured straight onto the body for an unusually warm, nourishing massage.",
    benefits: [
      "Deep skin nourishment",
      "Sensorial, candle-lit experience",
    ],
    image:
      UNSPLASH +
      "photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },

  // ─── SCRUBS ──────────────────────────────────────────────────────────────
  {
    slug: "coffee-body-scrub",
    name: "Coffee Body Scrub",
    category: "scrub",
    durationMin: 45,
    priceRwf: 20000,
    shortDescription:
      "Invigorating coffee-ground exfoliation — wakes up the whole body.",
    longDescription:
      "Made with coffee grounds, known for their invigorating and antioxidant properties. The fine grit polishes away dead skin while caffeine helps reduce the appearance of cellulite.",
    benefits: [
      "Exfoliates",
      "Reduces appearance of cellulite",
      "Antioxidant-rich",
    ],
    image:
      UNSPLASH +
      "photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "plant-based-body-scrub",
    name: "Plant-Based / Natural Body Scrub",
    category: "scrub",
    durationMin: 45,
    priceRwf: 25000,
    shortDescription:
      "Crushed seeds, plant fibres, and oatmeal — gentle, nourishing exfoliation.",
    longDescription:
      "Crushed seeds, plant fibres, and oatmeal exfoliate and nourish the skin without irritation — ideal for sensitive skin.",
    benefits: ["Gentle exfoliation", "Nourishes dry skin", "100% natural"],
    image:
      UNSPLASH +
      "photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=1600&q=80",
  },

  // ─── FACIALS ─────────────────────────────────────────────────────────────
  {
    slug: "basic-cleanup-facial",
    name: "Basic Cleanup Facial",
    category: "facial",
    durationMin: 45,
    priceRwf: 30000,
    shortDescription:
      "Cleanse, exfoliate, extractions, mask — the essential reset.",
    longDescription:
      "A classic four-step cleanup to remove buildup, unclog pores, and leave skin visibly clearer. A perfect first facial.",
    benefits: ["Clears pores", "Brightens dull skin", "Hydrates"],
    image:
      UNSPLASH +
      "photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "anti-aging-facial",
    name: "Anti-Wrinkle / Aging Facial",
    category: "facial",
    durationMin: 60,
    priceRwf: 70000,
    shortDescription:
      "Peptide- and retinol-rich treatment that softens fine lines.",
    longDescription:
      "Built around peptides, retinol, and a sculpting facial massage to plump skin, smooth fine lines, and restore a more youthful glow.",
    benefits: ["Softens fine lines", "Lifts and firms", "Restores radiance"],
    image:
      UNSPLASH +
      "photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "brightening-facial",
    name: "Brightening Facial",
    category: "facial",
    durationMin: 60,
    priceRwf: 40000,
    shortDescription:
      "Vitamin-C–led treatment to even tone and revive dull skin.",
    longDescription:
      "A radiance-restoring facial using vitamin C, niacinamide, and gentle enzymatic exfoliation to fade pigmentation and even out skin tone.",
    benefits: ["Evens tone", "Fades dark spots", "Adds glow"],
    image:
      UNSPLASH +
      "photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "hydra-facial",
    name: "Hydra Facial",
    category: "facial",
    durationMin: 60,
    priceRwf: 60000,
    shortDescription:
      "Cleanse, extract, hydrate, and infuse serums in a single treatment.",
    longDescription:
      "A multi-step facial that combines cleansing, gentle exfoliation, vacuum-assisted extraction, and serum infusion to leave skin instantly plumper and clearer.",
    benefits: [
      "Deep hydration",
      "Painless extractions",
      "Instant glow — no downtime",
    ],
    image:
      UNSPLASH +
      "photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "acne-reduction-facial",
    name: "Acne Reduction Facial",
    category: "facial",
    durationMin: 90,
    priceRwf: 50000,
    shortDescription:
      "Targeted treatment for breakouts and congested skin.",
    longDescription:
      "Salicylic and lactic acids paired with thorough extractions and a calming mask address breakouts, congestion, and post-acne marks.",
    benefits: [
      "Clears breakouts",
      "Reduces redness",
      "Improves texture",
    ],
    image:
      UNSPLASH +
      "photo-1570194065650-d99fb4bedf0a?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "led-light-therapy",
    name: "LED Light Therapy",
    category: "facial",
    durationMin: 60,
    priceRwf: 40000,
    shortDescription:
      "Medical-grade LED panels treat acne, redness, and signs of aging.",
    longDescription:
      "Different LED wavelengths target different concerns: red for collagen and aging, blue for acne-causing bacteria, near-infrared for inflammation. Completely painless.",
    benefits: [
      "Boosts collagen",
      "Calms acne",
      "Reduces redness",
    ],
    image:
      UNSPLASH +
      "photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
  },

  // ─── WAXING ──────────────────────────────────────────────────────────────
  {
    slug: "brazilian-wax",
    name: "Brazilian Wax",
    category: "waxing",
    durationMin: 45,
    priceRwf: 25000,
    shortDescription: "Full intimate waxing by a trained, discreet therapist.",
    longDescription:
      "Performed with warm or hard wax in a private room, by therapists trained in fast, comfortable Brazilian waxing.",
    benefits: ["Long-lasting smoothness", "Private, discreet care"],
    image:
      UNSPLASH +
      "photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "bikini-wax",
    name: "Bikini Wax",
    category: "waxing",
    durationMin: 30,
    priceRwf: 20000,
    shortDescription: "Clean bikini-line waxing — quick and comfortable.",
    longDescription:
      "Removes hair outside the bikini line for a clean, beach-ready finish.",
    benefits: ["Quick and clean", "Smooth for weeks"],
    image:
      UNSPLASH +
      "photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "full-body-wax",
    name: "Full Body Wax",
    category: "waxing",
    durationMin: 90,
    priceRwf: 100000,
    shortDescription: "Head to toe — every region in a single appointment.",
    longDescription:
      "Includes arms, legs, underarms, back/chest, face and bikini. Plan ahead — this one fills up quickly.",
    benefits: ["Everything in one visit", "Best-value bundle"],
    image:
      UNSPLASH +
      "photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "upper-lip-wax",
    name: "Upper Lip Wax",
    category: "waxing",
    durationMin: 20,
    priceRwf: 5000,
    shortDescription: "Quick, precise upper-lip waxing.",
    longDescription:
      "Two minutes of waxing for a clean upper lip — ideal as an add-on.",
    benefits: ["Express service", "Pairs well with a facial"],
    image:
      UNSPLASH +
      "photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "chin-wax",
    name: "Chin Wax",
    category: "waxing",
    durationMin: 20,
    priceRwf: 5000,
    shortDescription: "Quick, gentle chin waxing.",
    longDescription:
      "Removes fine chin hair with hard wax, ideal for sensitive skin.",
    benefits: ["Quick and gentle", "Smooth jawline"],
    image:
      UNSPLASH +
      "photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "full-face-wax",
    name: "Full Face Wax",
    category: "waxing",
    durationMin: 30,
    priceRwf: 15000,
    shortDescription:
      "Upper lip, chin, sideburns, and forehead — fully refined.",
    longDescription:
      "A complete facial waxing service — upper lip, chin, sideburns, and forehead — for smooth, even skin.",
    benefits: ["Clean, even skin", "Better makeup application"],
    image:
      UNSPLASH +
      "photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "underarm-wax",
    name: "Underarm Wax",
    category: "waxing",
    durationMin: 30,
    priceRwf: 5000,
    shortDescription: "Fast, comfortable underarm waxing.",
    longDescription:
      "Removes underarm hair in minutes with hard wax for less irritation.",
    benefits: ["Fast service", "Long-lasting smoothness"],
    image:
      UNSPLASH +
      "photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "half-arm-wax",
    name: "Half Arm Wax",
    category: "waxing",
    durationMin: 30,
    priceRwf: 15000,
    shortDescription: "From wrist to elbow.",
    longDescription:
      "Waxes the forearm — perfect when you want smooth lower arms without committing to a full arm wax.",
    benefits: ["Smooth lower arms"],
    image:
      UNSPLASH +
      "photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "full-arm-wax",
    name: "Full Arm Wax",
    category: "waxing",
    durationMin: 30,
    priceRwf: 25000,
    shortDescription: "Shoulder to fingertips.",
    longDescription: "Complete arm waxing — shoulder all the way to fingertips.",
    benefits: ["Sleeveless-ready"],
    image:
      UNSPLASH +
      "photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "half-leg-wax",
    name: "Half Leg Wax",
    category: "waxing",
    durationMin: 30,
    priceRwf: 15000,
    shortDescription: "Knee to ankle — fast and clean.",
    longDescription: "Waxes the lower leg from knee to ankle.",
    benefits: ["Quick", "Great for short hemlines"],
    image:
      UNSPLASH +
      "photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "full-leg-wax",
    name: "Full Leg Wax",
    category: "waxing",
    durationMin: 30,
    priceRwf: 30000,
    shortDescription: "Top of thigh to ankle.",
    longDescription:
      "Complete leg waxing for silky, smooth skin from thigh to ankle.",
    benefits: ["Long-lasting smoothness"],
    image:
      UNSPLASH +
      "photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "chest-wax",
    name: "Chest Wax",
    category: "waxing",
    durationMin: 30,
    priceRwf: 15000,
    shortDescription: "Comfortable chest waxing for a clean, even finish.",
    longDescription:
      "Full chest waxing performed with hard wax for less irritation.",
    benefits: ["Smooth, even finish"],
    image:
      UNSPLASH +
      "photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "back-wax",
    name: "Back Wax",
    category: "waxing",
    durationMin: 30,
    priceRwf: 20000,
    shortDescription: "Full back waxing — neck to lower back.",
    longDescription: "Removes hair across the full back for a clean finish.",
    benefits: ["Smooth back", "Less ingrown-hair risk"],
    image:
      UNSPLASH +
      "photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=80",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}

export function getFeaturedServices(): Service[] {
  return SERVICES.filter((s) => s.featured);
}

export function getRelatedServices(slug: string, limit = 3): Service[] {
  const target = getServiceBySlug(slug);
  if (!target) return [];
  return SERVICES.filter(
    (s) => s.category === target.category && s.slug !== slug,
  ).slice(0, limit);
}
