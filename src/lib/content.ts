// Rich, niche-accurate content blocks + centralized COPY for Insulation Insurance.

export const US_STATES = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware",
  "Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky",
  "Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
  "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico",
  "New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania",
  "Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont",
  "Virginia","Washington","West Virginia","Wisconsin","Wyoming",
] as const;

export const YEARS_OPTIONS = [
  "Less than 1 year","1–2 years","3–5 years","6–10 years","11–20 years","20+ years",
] as const;

export const QUOTE_SERVICE_TYPES = [
  "General Liability",
  "Spray Foam Liability",
  "Contractor Pollution Liability (CPL)",
  "Workers' Compensation",
  "Tools & Equipment",
  "Commercial Auto",
  "Umbrella / Excess Liability",
  "Surety Bond",
  "Full Program (GL + CPL + WC + T&E)",
  "Not sure — need guidance",
] as const;

import {
  PhoneCall,
  FileSearch,
  FileSignature,
  ShieldCheck,
  Zap,
  Wrench,
  HardHat,
  Truck,
  Wind,
  Umbrella,
  FileCheck,
} from "lucide-react";

/* ============================================================
   COPY — centralized display strings consumed by components/pages.
   ============================================================ */
export const COPY = {
  hero: {
    h1Lead: "Insurance built for",
    h1Highlight: "insulation contractors and spray foam installers",
    subcopy:
      "Spray foam liability, general liability, contractor pollution liability, workers' comp, tools & equipment, and surety bonds — purpose-built for the insulation trade. A-rated carriers. 15-minute quotes.",
    statValue: "900+",
    statLabel: "Insulation contractors covered — spray foam, blown-in, batt, and weatherization",
    imageAlt: "Professional spray foam insulation contractors working on a commercial building",
  },
  nav: { ariaLabel: "Insulation Insurance home" },
  footer: {
    ctaTitle: "Ready to protect your insulation business?",
    ctaSubcopy: "15-minute quotes. Specialist insulation markets. Coverage that actually covers the work you do.",
    description:
      "Specialist insurance for insulation contractors and spray foam installers — general liability, spray foam liability, contractor pollution liability, workers' comp, tools & equipment, commercial auto, and surety bonds. A division of Contractors Choice Agency — founded 2005, licensed all 50 states.",
  },
  servicesGrid: {
    h2Lead: "Coverage built specifically for",
    h2Highlight: "insulation contractors",
    lead: "Standard contractor policies have broad pollution exclusions — and in spray foam, that exclusion hits your biggest real-world exposure. We build programs designed for how insulation work actually runs.",
  },
  why: {
    eyebrow: "Why insulation contractors switch to us",
    h2Lead: "The coverage gaps that",
    h2Highlight: "cost insulation contractors the most",
    lead: "Most agents hand an insulation contractor a generic GL policy and call it done. Then a spray foam off-gassing complaint hits and the pollution exclusion kicks in. We underwrite the parts of your operation everyone else leaves out.",
    sidebarTitle: "Run by people who know contracting",
    sidebarBody:
      "Contractors Choice Agency was founded in 2005 by Josh Cotner, who came from the trades. We know what happens when a spray foam chemical exposure claim hits the GL pollution exclusion — and we build programs that cover it.",
  },
  coverage: {
    eyebrow: "Where we write",
    h2Lead: "Insulation contractor coverage.",
    h2Highlight: "All 50 states.",
    lead: "From Texas and Florida to the Midwest and West Coast, Contractors Choice Agency writes insulation contractor insurance in every state where spray foam and insulation businesses operate.",
    imageAlt: "Insulation contractors working on a commercial building — national insulation coverage",
    badgeTitle: "National coverage for insulation contractors.",
    badgeSub: "Writing insulation programs in all 50 states since 2005.",
  },
  process: {
    lead: "No two-week back-and-forth. A real conversation, real markets, and a program that covers spray foam, blown-in, and weatherization — built around how your insulation business actually runs.",
  },
  testimonials: {
    eyebrow: "From insulation contractors",
    h2Lead: "Contractors who found",
    h2Highlight: "coverage that actually pays",
  },
  finalCta: {
    h2Lead: "Protect Your Insulation Business",
    h2Highlight: "with coverage built for the trade.",
    lead: "Whether you need spray foam liability today or a full program — GL, CPL, workers' comp, tools & equipment, and auto — one call gets you real quotes from specialist insulation markets. Not a voicemail and a two-week wait.",
  },
  ctaBand: {
    defaultTitle: "Ready to protect your insulation business?",
    defaultDescription:
      "Get a 15-minute quote from specialists who understand insulation contracting — spray foam liability, pollution coverage, and equipment protection.",
  },
  faq: {
    defaultTitleLead: "Insulation contractor insurance,",
    defaultTitleHighlight: "in plain English",
  },
  servicesPage: {
    metaTitle: "Insulation Contractor Insurance Coverage & Services",
    metaDescription:
      "Eight lines of insurance built for insulation contractors: general liability, spray foam liability, tools & equipment, workers' comp, commercial auto, contractor pollution liability, umbrella, and surety bonds. Licensed all 50 states.",
    h1Lead: "Insurance built line-by-line for",
    h1Highlight: "insulation contractors",
    lead: "Each policy below addresses a specific exposure in insulation contracting — from spray foam liability (the coverage gap that standard GL leaves open) to contractor pollution liability for chemical off-gassing.",
    ogTitle: "Insulation Contractor Insurance Coverage | Contractors Choice Agency",
    ogDescription:
      "General liability, spray foam liability, tools & equipment, workers' comp, commercial auto, contractor pollution liability, umbrella, and surety bonds — written for insulation contractors.",
    ctaTitle: "Not sure which lines you need?",
    ctaDescription:
      "Most insulation contractors bundle GL + spray foam liability + CPL + workers' comp + tools & equipment into one coordinated program. We'll build the right mix in one call.",
  },
  blogPage: {
    metaTitle: "Insulation Contractor Insurance Blog — Guides & Insights",
    metaDescription:
      "Practical insurance guidance for insulation contractors: spray foam liability, contractor pollution liability, workers' comp, tools & equipment, and surety bonds.",
    h1Lead: "Insulation contractor insurance,",
    h1Highlight: "decoded",
    lead: "Plain-English guides on the coverage that matters for insulation contractors — spray foam liability, pollution coverage, equipment protection, and workers' comp for your crew.",
    ogTitle: "Insulation Insurance Blog | Contractors Choice Agency",
    ogDescription:
      "Practical insurance guidance for insulation contractors: spray foam liability, contractor pollution liability, workers' comp, tools & equipment, and surety bonds.",
  },
  serviceDetail: {
    h1Suffix: "for insulation contractors",
    imageAltSuffix: "insulation contracting",
    category: "Insulation Contractor Insurance",
  },
  about: {
    metaTitle: "About Insulation Insurance | Contractors Choice Agency",
    metaDescription:
      "Insulation Insurance is the insulation contractor division of Contractors Choice Agency, founded in 2005 by Josh Cotner. Spray foam liability, GL, CPL, workers' comp, and tools & equipment for insulation contractors. Licensed all 50 states.",
    h1Lead: "Built by people who know contracting,",
    h1Highlight: "for insulation operations",
    lead: "Insulation Insurance is the insulation-contractor division of Contractors Choice Agency — founded in 2005 by Josh Cotner, who knows exactly what happens when a spray foam pollution exclusion shows up in a claim denial.",
    imageAlt: "A professional insulation contractor standing in front of spray foam equipment",
    storyEyebrow: "Our story",
    storyTitle: "From the jobsite to the agency.",
    storyLead:
      "Josh Cotner worked in the trades before founding CCA in 2005. That background is why we understand what's at stake when a spray foam claim hits the GL pollution exclusion and the carrier denies coverage.",
    valuesTitle: "Four things we won't compromise on.",
    timeline: [
      { year: "2005", title: "Contractors Choice Agency founded", desc: "Josh Cotner opens CCA in Chandler, AZ, after years working in the trades — built to insure specialty contractors the right way." },
      { year: "15 yrs", title: "Expanded to specialty contractor markets", desc: "After placing programs for dozens of specialty contractor and trade categories, CCA develops deep expertise in spray foam and insulation contractor risk." },
      { year: "Today", title: "Dedicated insulation division", desc: "Insulation Insurance focuses CCA's expertise on insulation contractors — where spray foam liability, CPL, and the right WC class codes are the real issues." },
    ],
    values: [
      { icon: "HardHat", title: "Contractor-first, always", desc: "Josh spent years in the trades before starting the agency. We speak the language of insulation contracting because we know what happens when coverage fails at claim time." },
      { icon: "ShieldCheck", title: "Coverage that closes the gaps", desc: "Spray foam pollution exclusions, wrong WC class codes, and equipment coverage gaps — we address the risks standard contractor markets miss." },
      { icon: "Award", title: "A-rated markets only", desc: "We shop carriers with the financial strength and specialty-contractor experience to be there when a spray foam off-gassing claim or equipment theft hits." },
      { icon: "Handshake", title: "Honest, no-pressure advice", desc: "If you don't need a line of coverage, we'll tell you. We earn trust by being straight about what your insulation operation actually requires." },
    ],
  },
  quote: {
    h1Lead: "Get your",
    h1Highlight: "insulation contractor insurance quote",
    lead: "Tell us about your insulation business. We'll shop specialist markets and come back with real quotes in about 15 minutes — no obligation.",
    businessPlaceholder: "Green Shield Insulation LLC",
    emailPlaceholder: "owner@greeninsulation.com",
    phonePlaceholder: "(512) 555-0100",
    messagePlaceholder:
      "Services (spray foam, blown-in, batt, weatherization), states you work in, annual revenue, payroll, employee count, equipment value, coverage lines needed, current insurer, loss history, or anything else that helps us quote accurately…",
    errorMessage: "Something went wrong. Please call us at 844-967-5247 or try again.",
    trustNicheTitle: "Built for insulation contractors",
    trustNicheDesc: "Policies written for the insulation trade — not generic contractor coverage.",
  },
  contact: {
    h1Lead: "Let's talk about your",
    h1Highlight: "insulation contractor coverage",
    lead: "Questions, a quote, or a claim — reach a person who knows insulation contracting, not a queue.",
    errorMessage: "Something went wrong. Please call us at 844-967-5247.",
  },
  coveragePage: {
    metaTitle: "Insulation Contractor Insurance — Nationwide Coverage, All 50 States",
    metaDescription:
      "Contractors Choice Agency writes insulation contractor insurance in all 50 states — Texas, Florida, California, Georgia, Ohio, North Carolina, Tennessee, and wherever insulation contractors operate.",
    h1Lead: "National reach.",
    h1Highlight: "All 50 states, every insulation market.",
    lead: "Contractors Choice Agency places insulation contractor insurance programs in all 50 states — from Texas and Florida to California, the Midwest, and the Northeast.",
    sectionTitle: "Key insulation contractor markets we serve.",
    nationwideLead:
      "Whether your insulation business is in Texas, Florida, California, the Southeast, or anywhere in between — one agent, one coordinated program. NPN #8608479.",
    faqs: [
      { q: "Do you only insure insulation contractors in certain states?", a: "No. Contractors Choice Agency is licensed in all 50 states and writes insulation contractor programs for businesses anywhere in the country — Texas, Florida, California, the Southeast, the Midwest, and everywhere in between." },
      { q: "Can you write coverage if we work across multiple states?", a: "Yes. We structure programs so your GL, CPL, workers' comp, and commercial auto coverage coordinate across state lines without gaps. Workers' comp requires separate policies in most states, but we handle the placement across all states where you operate." },
      { q: "Do you understand the specific risks of spray foam installation?", a: "Yes. We work with specialist markets that understand spray polyurethane foam — the isocyanate exposure, the off-gassing liability, the pollution exclusion gap in standard GL, and the CPL coverage needed to fill it." },
      { q: "Can you coordinate coverage across multiple locations or job sites?", a: "Yes. If you operate from multiple locations or work across a wide geographic area, we build one coordinated program so there are no gaps between your operations, vehicles, and equipment." },
    ],
  },
} as const;

/* ============================================================
   AZ_REGIONS — used by coverage page
   ============================================================ */
export const AZ_REGIONS = [
  { name: "Texas & the South", note: "Houston, Dallas, San Antonio, statewide TX and surrounding southern states" },
  { name: "Florida & the Southeast", note: "Miami, Orlando, Jacksonville, GA, NC, SC, and the broader southeast" },
  { name: "California & the West", note: "Los Angeles, Bay Area, San Diego, Pacific Northwest, Rocky Mountain states" },
  { name: "Midwest & Great Plains", note: "Ohio, Indiana, Illinois, Michigan, and the broader midwest" },
  { name: "Northeast & Mid-Atlantic", note: "New York, New Jersey, Pennsylvania, New England, Maryland, Virginia" },
  { name: "Mountain & Southwest", note: "Arizona, Colorado, Nevada, New Mexico, and the broader mountain west" },
  { name: "Tennessee & Kentucky", note: "Nashville, Memphis, Knoxville, Louisville, Lexington, and surrounding areas" },
  { name: "Nationwide Programs", note: "Multi-state operations with consistent coverage across all states you serve" },
] as const;

/* ============================================================
   PROCESS
   ============================================================ */
export const PROCESS = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Quick Intake Call",
    description:
      "A 15-minute call to understand your insulation services, states, payroll, and equipment. No forms to fill out first.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Specialist Market Access",
    description:
      "We access admitted and E&S markets that specifically write insulation contractors and spray foam installers.",
  },
  {
    icon: FileSignature,
    step: "03",
    title: "Coverage Recommendation",
    description:
      "We present your options — GL, spray foam liability, CPL, WC, tools & equipment — with clear explanations of what each covers.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Bound and Ready",
    description:
      "We bind your coverage, issue certificates of insurance, and stay available as your insulation business grows.",
  },
] as const;

/* ============================================================
   WHY CHOOSE US
   ============================================================ */
export const WHY_CHOOSE = [
  {
    icon: ShieldCheck,
    title: "Spray Foam Specialists",
    description:
      "We understand spray polyurethane foam liability — off-gassing, adhesion failures, and chemical exposure claims that standard GL policies often exclude.",
  },
  {
    icon: Zap,
    title: "Right Class Codes",
    description:
      "Insulation WC requires the right class codes for blown-in, batt, and spray foam work. Wrong codes create audit problems and coverage gaps.",
  },
  {
    icon: Wind,
    title: "Pollution Liability Gap-Filling",
    description:
      "Spray foam chemicals and off-gassing can trigger the pollution exclusion in standard GL. Our CPL coverage fills that gap.",
  },
  {
    icon: Wrench,
    title: "Equipment Protection",
    description:
      "Spray rigs, proportioners, hose systems, and blowing machines represent major investment. We cover them properly with the right T&E and inland marine.",
  },
  {
    icon: HardHat,
    title: "Licensed in All 50 States",
    description:
      "Whether you're operating in one state or expanding nationally, we can place your insulation contractor program across state lines.",
  },
  {
    icon: FileCheck,
    title: "20+ Years Contractor Focus",
    description:
      "Contractors Choice Agency has served specialty contractors since 2005. We know what insulation contractors need — and what they don't.",
  },
] as const;

/* ============================================================
   HOME FAQs (20)
   ============================================================ */
export const HOME_FAQS = [
  {
    q: "What insurance do insulation contractors need?",
    a: "At minimum: general liability (GL), workers' compensation (if you have employees), and commercial auto. If you do spray foam work, you also need spray foam liability or contractor pollution liability to cover chemical exposure claims that standard GL excludes. Tools and equipment coverage protects your spray rigs and blowing machines.",
  },
  {
    q: "Does standard GL cover spray foam liability?",
    a: "Often not fully. Standard GL has a pollution exclusion, and spray polyurethane foam chemicals — including isocyanates and polyols — can be classified as pollutants. Off-gassing claims, chemical exposure claims, and adhesion failure claims may trigger the exclusion. Spray foam-specific liability coverage or contractor pollution liability fills this gap.",
  },
  {
    q: "What is spray foam liability insurance?",
    a: "Spray foam liability insurance is coverage specifically designed for spray polyurethane foam (SPF) installers. It covers claims arising from foam off-gassing, chemical exposure, adhesion failures, and property damage from SPF application — claims that standard GL often excludes under the pollution exclusion.",
  },
  {
    q: "Do insulation contractors need contractor pollution liability (CPL)?",
    a: "If you use spray foam, aerosol-based insulation, or apply chemical coatings, CPL is worth considering. CPL covers third-party bodily injury and property damage from pollutants released during your work — including foam chemicals, isocyanates, and vapors. It fills the pollution exclusion gap in standard GL.",
  },
  {
    q: "What WC class codes apply to insulation work?",
    a: "WC class codes for insulation work vary by state and carrier. The right code depends on your state and work type — blown-in, batt, or spray foam. Wrong codes create audit surprises. We help you get the right classification from the start.",
  },
  {
    q: "How much does insulation contractor insurance cost?",
    a: "Cost depends on revenue, payroll, states, work type, and loss history. A solo insulation contractor might pay $1,500–$4,000 per year for GL. Spray foam operations typically pay more due to the specialized risk. WC costs vary by state and payroll. We quote the full program so you know the total cost.",
  },
  {
    q: "Does insulation insurance cover spray foam off-gassing complaints?",
    a: "Standard GL likely won't — the pollution exclusion typically applies to off-gassing claims. Spray foam liability or CPL coverage is designed to handle these exposures. When properly structured, your program should include coverage for third-party bodily injury and property damage from foam off-gassing.",
  },
  {
    q: "What happens if spray foam is applied incorrectly?",
    a: "Improper SPF application can cause adhesion failures, moisture problems, or chemical exposure — leading to costly remediation claims. GL covers property damage claims from faulty workmanship in some circumstances, but adhesion and chemical exposure claims may require spray foam-specific coverage.",
  },
  {
    q: "Can insulation contractors get coverage for commercial jobs?",
    a: "Yes. Many insulation contractors work on commercial buildings, warehouses, and industrial facilities. Commercial GL limits typically need to be higher for commercial projects — $2M per occurrence / $4M aggregate or higher. Umbrella/excess coverage provides additional limits for large commercial contracts.",
  },
  {
    q: "Is insulation equipment covered under GL?",
    a: "No. GL covers bodily injury and property damage to third parties — not your own equipment. Spray rigs, proportioners, hose systems, and blowing machines need separate tools and equipment coverage or inland marine insurance.",
  },
  {
    q: "What is the difference between tools and equipment and inland marine for insulation contractors?",
    a: "Tools and equipment (T&E) covers your insulation equipment at the job site and in storage. Inland marine covers equipment while it's being transported between jobs. A complete program typically includes both so there's no coverage gap when your spray rig is on the road.",
  },
  {
    q: "Do insulation contractors need commercial auto?",
    a: "Yes, if you use a truck, van, or trailer for work. Personal auto policies exclude commercial use. Commercial auto covers your vehicle, the equipment in it, and liability if your vehicle is involved in an accident while going to or from a job.",
  },
  {
    q: "Can I add additional insureds to my insulation GL policy?",
    a: "Yes. General contractors and property owners typically require insulation subcontractors to name them as additional insureds. Most GL policies allow additional insureds via endorsement. We structure your program so certificates and additional insured endorsements are available quickly.",
  },
  {
    q: "Does insulation insurance cover mold remediation if SPF causes moisture problems?",
    a: "Mold claims arising from insulation failures are complex. Some GL policies exclude mold; others cover it as property damage. Spray foam liability policies may cover mold damage resulting from improper SPF installation. We review your specific policy language to make sure you understand what's covered.",
  },
  {
    q: "What states do you cover for insulation contractor insurance?",
    a: "We place insulation contractor insurance in all 50 states. We have specialist markets for high-volume insulation states including Texas, Florida, California, Georgia, Ohio, and North Carolina.",
  },
  {
    q: "Do I need a surety bond as an insulation contractor?",
    a: "It depends on your state and the type of work you're bidding. Many states require contractor license bonds for insulation contractors. Government and commercial projects may require performance bonds and payment bonds. We place both.",
  },
  {
    q: "What does completed operations coverage cover for insulation contractors?",
    a: "Completed operations coverage (part of standard GL) covers claims that arise after you've finished a job — for example, if insulation you installed is later found to have caused property damage or if a spray foam adhesion failure causes problems months after installation.",
  },
  {
    q: "Can a spray foam contractor get GL if they have prior losses?",
    a: "Yes, though the market narrows with adverse loss history. We access E&S (excess and surplus lines) markets that write insulation contractors with prior claims. The key factors are claim frequency, severity, and what controls you've put in place to prevent recurrence.",
  },
  {
    q: "What is umbrella liability insurance for insulation contractors?",
    a: "Umbrella (or excess liability) sits above your GL and commercial auto, providing additional coverage limits. If a major claim exhausts your GL limits, the umbrella responds. For commercial insulation projects with high contract values, umbrella coverage is often a contract requirement.",
  },
  {
    q: "How quickly can I get a certificate of insurance?",
    a: "Once your policy is bound, certificates of insurance are typically available same-day or next business day. If you need a COI for a specific job, contact us and we'll prioritize getting it issued.",
  },
] as const;

/* ============================================================
   GENERAL FAQs (14)
   ============================================================ */
export const GENERAL_FAQS = [
  {
    q: "Who is Contractors Choice Agency?",
    a: "Contractors Choice Agency (NPN 8608479) is a specialty insurance agency licensed in all 50 states, founded in 2005 and based in Chandler, Arizona. We focus exclusively on contractors — with particular depth in specialty trades like insulation, spray foam, and other specialty contractor niches.",
  },
  {
    q: "What markets do you use for insulation contractor insurance?",
    a: "We use a mix of admitted carriers (licensed and rate-regulated in the state) and E&S (excess and surplus lines) carriers for insulation contractors. Spray foam and CPL coverage typically requires E&S markets. GL and WC for standard insulation work may be available with admitted carriers.",
  },
  {
    q: "How do I get a quote for insulation insurance?",
    a: "Call 844-967-5247 or use our online quote form. We'll need to know your business type (residential, commercial, or both), services offered (blown-in, batt, spray foam, etc.), states you operate in, annual revenue or payroll, employee count, and loss history.",
  },
  {
    q: "Can I get a COI immediately after purchase?",
    a: "Yes. Once your policy is bound, we issue certificates of insurance typically within the same business day. If a specific additional insured or job-specific certificate is needed, provide the details and we'll issue it promptly.",
  },
  {
    q: "What is your claims process?",
    a: "Claims are filed directly with your carrier. We assist with the claims reporting process and can help you communicate with the carrier if you have questions. Contact us at josh@contractorschoiceagency.com or 844-967-5247 when a claim arises.",
  },
  {
    q: "Do you offer pay-per-month options?",
    a: "Yes. Most of our carrier partners offer premium financing and monthly payment options. Ask about payment plans when we provide your quote.",
  },
  {
    q: "What is the minimum annual revenue to qualify for insulation insurance?",
    a: "There's no minimum, though smaller operations may have fewer carrier options. We work with startups, solo operators, and established insulation businesses. Tell us your situation and we'll find what's available.",
  },
  {
    q: "Do you serve insulation contractors who work for general contractors?",
    a: "Yes. Many insulation contractors work as subcontractors to GCs. We structure your program to meet standard GC insurance requirements — including waiver of subrogation endorsements, additional insured status for GCs, and adequate limits.",
  },
  {
    q: "Can I get coverage for both residential and commercial insulation work on one policy?",
    a: "Yes. Most commercial GL policies cover both residential and commercial work operations. If the mix shifts significantly toward commercial, your limits and pricing may change at renewal. We'll structure the policy to reflect your actual work mix.",
  },
  {
    q: "Is there a difference in coverage for open-cell vs. closed-cell spray foam?",
    a: "Not typically in the GL policy structure, but underwriters are aware of the different risk profiles. Closed-cell foam is denser and requires more chemical per square foot; open-cell is softer and more vapor-permeable. Some CPL underwriters ask specifically which SPF types you install.",
  },
  {
    q: "Do you cover insulation contractors who also do weatherization work?",
    a: "Yes. Weatherization work — air sealing, vapor barriers, insulation upgrades — is typically covered under insulation contractor GL policies. If weatherization includes HVAC or mechanical work, that should be disclosed to the underwriter.",
  },
  {
    q: "What if I need to add a state mid-policy?",
    a: "Most commercial GL policies can be endorsed to add new states as you expand. WC requires separate policies in most states, so adding a state for WC means a new policy in that state. Contact us when you're expanding to a new state and we'll get the endorsements in place.",
  },
  {
    q: "How does renewal work for insulation contractor insurance?",
    a: "We review your program 60–90 days before renewal. If your operations have changed — new services, new states, more employees — update us so we can re-market if needed. We proactively shop your renewal to make sure you're still in the right market at the right price.",
  },
  {
    q: "What is errors and omissions (E&O) insurance for insulation contractors?",
    a: "E&O (also called professional liability) covers claims arising from professional advice or design errors — for example, if you specified an SPF product for a particular R-value and the recommendation was wrong, leading to energy performance failures. Not all insulation contractors need E&O, but those who provide energy audit advice or system design should consider it.",
  },
] as const;

/* ============================================================
   SERVICE DETAIL
   ============================================================ */
export interface ServiceDetail {
  fullTitle: string;
  intro: string;
  coveragePoints: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_DETAIL: Record<string, ServiceDetail> = {
  "general-liability": {
    fullTitle: "General Liability Insurance for Insulation Contractors",
    intro:
      "General liability (GL) is the foundation of every insulation contractor's insurance program — covering third-party bodily injury and property damage claims that arise from your operations, completed work, and job-site presence. Most general contractors and property owners require GL before you can start work, and standard contracts typically specify minimum limits.",
    coveragePoints: [
      "Third-party bodily injury on job sites",
      "Property damage caused by your insulation work",
      "Completed operations coverage for post-job claims",
      "Personal and advertising injury",
      "Products liability for materials you supply",
      "Defense costs for covered claims",
      "Additional insured endorsements for GCs and property owners",
    ],
    faqs: [
      {
        q: "What GL limits do insulation contractors typically need?",
        a: "$1M per occurrence / $2M aggregate is the most common minimum for residential work. Commercial projects often require $2M per occurrence / $4M aggregate. Umbrella coverage can add limits above GL when projects require higher totals.",
      },
      {
        q: "Does GL cover spray foam claims?",
        a: "Standard GL covers property damage and bodily injury claims, but the pollution exclusion in most GL policies may exclude claims arising from foam off-gassing, chemical exposure, or chemical contamination. Spray foam liability or contractor pollution liability fills this gap.",
      },
      {
        q: "Can I get GL as a subcontractor to a GC?",
        a: "Yes. We structure your GL to meet standard GC requirements — including additional insured endorsements, waiver of subrogation, and primary/non-contributory endorsements that GCs commonly require.",
      },
    ],
  },
  "spray-foam-liability": {
    fullTitle: "Spray Foam Liability Insurance for SPF Installers",
    intro:
      "Spray polyurethane foam (SPF) is one of the fastest-growing insulation materials — and one of the hardest to insure properly. Standard GL policies have broad pollution exclusions, and spray foam chemicals (isocyanates, polyols, and their reaction products) can be classified as pollutants. Spray foam liability insurance is specifically designed to cover the exposures that standard GL leaves out.",
    coveragePoints: [
      "Off-gassing and airborne chemical exposure claims",
      "Third-party bodily injury from SPF chemical exposure",
      "Property damage from improper SPF adhesion or application",
      "Completed operations coverage for post-installation claims",
      "Defense costs for covered claims",
      "Coverage for both open-cell and closed-cell SPF",
      "First and third-party coverage options",
    ],
    faqs: [
      {
        q: "Why does standard GL often exclude spray foam claims?",
        a: "The pollution exclusion in standard CGL policies applies to bodily injury or property damage arising from the release of pollutants — defined to include particulate matter, contaminants, and irritants. Spray foam isocyanates and off-gassing chemicals fall within this definition, giving GL carriers a basis to deny spray foam claims.",
      },
      {
        q: "What are isocyanates and why do they matter for spray foam insurance?",
        a: "Isocyanates are the reactive chemicals in the A-side component of spray foam. They are known respiratory sensitizers and carcinogens at certain exposure levels. OSHA has strict exposure limits, and isocyanate-related health claims are a significant liability exposure for SPF installers.",
      },
      {
        q: "Does spray foam liability cover adhesion failures?",
        a: "Yes, in most cases. If spray foam fails to adhere properly and causes property damage — delamination from a substrate, foam falling from a ceiling, or moisture intrusion from a failed air barrier — spray foam liability or GL completed operations coverage typically responds to the property damage claim.",
      },
    ],
  },
  "tools-equipment": {
    fullTitle: "Tools & Equipment Coverage for Insulation Contractors",
    intro:
      "Insulation contractors invest significantly in spray rigs, proportioners, blowing machines, hose systems, and portable equipment. These assets are essential to your operation — and they're not covered by your GL policy. Tools and equipment insurance covers your insulation gear against theft, physical damage, and vandalism.",
    coveragePoints: [
      "Spray rigs and proportioner units",
      "Blowing machines for blown-in insulation",
      "Hose reels and fluid hoses",
      "Generators and compressors",
      "Hand tools and small equipment",
      "Equipment stored at the yard or at job sites",
      "Replacement cost or ACV options",
    ],
    faqs: [
      {
        q: "What does a spray rig cost to replace?",
        a: "A professional spray polyurethane foam rig — proportioner, heated hose system, and generator — typically runs $30,000 to $80,000 or more. Without tools and equipment coverage, equipment theft or damage becomes a major out-of-pocket expense.",
      },
      {
        q: "Is my spray rig covered while being transported to a job?",
        a: "Standard tools and equipment policies cover equipment at job sites and in storage. Equipment in transit may need inland marine coverage to be covered during transport between job sites. We structure the program so there's no gap.",
      },
      {
        q: "Does tools and equipment cover mechanical breakdown?",
        a: "Basic T&E policies typically cover theft and physical damage but not mechanical breakdown. Equipment breakdown coverage is a separate add-on. For proportioners and heated hose systems that are expensive to repair when they fail, equipment breakdown coverage is worth considering.",
      },
    ],
  },
  "workers-comp": {
    fullTitle: "Workers' Compensation for Insulation Contractors",
    intro:
      "Workers' compensation insurance is required in most states if you have employees — and insulation work carries real occupational hazards: chemical exposure from spray foam, respiratory risks from blown-in materials, working in tight attic spaces, and fall hazards. WC must be placed with the right insulation class codes and carriers that understand the trade.",
    coveragePoints: [
      "Medical benefits for work-related injuries",
      "Lost wage replacement for injured workers",
      "Occupational disease coverage for chemical exposure",
      "Employer's liability protection",
      "Correct insulation and spray foam class codes",
      "Coverage for attic, crawlspace, and confined space work",
      "Nationwide WC placement",
    ],
    faqs: [
      {
        q: "What WC class codes apply to spray foam installation?",
        a: "WC class codes for spray foam and insulation work vary by state and carrier. The critical issue is that spray foam installers must not be coded under generic construction or maintenance codes — the insulation-specific chemical exposure profile requires the right code for both coverage and audit accuracy.",
      },
      {
        q: "Is chemical exposure from spray foam covered by WC?",
        a: "Yes. Occupational disease claims from spray foam chemical exposure — including isocyanate sensitization and respiratory conditions — are WC claims. Workers who develop health conditions from spray foam exposure are entitled to WC medical and wage benefits.",
      },
      {
        q: "What is employer's liability and why does it matter for insulation contractors?",
        a: "Employer's liability (Part B of a WC policy) covers claims by injured employees who sue the employer beyond standard WC benefits. For spray foam contractors where workers may allege that the employer's failure to control isocyanate exposure caused their illness, employer's liability provides an additional layer of protection.",
      },
    ],
  },
  "commercial-auto": {
    fullTitle: "Commercial Auto Insurance for Insulation Contractors",
    intro:
      "Your spray rig trailer, box trucks, and service vans are commercial vehicles — not personal vehicles. Personal auto policies exclude commercial use, which means any accident in a work vehicle is potentially uninsured if you're relying on personal auto. Commercial auto provides liability, physical damage, and uninsured motorist coverage for your insulation operation's vehicles.",
    coveragePoints: [
      "Bodily injury and property damage liability",
      "Physical damage coverage for trucks and vans",
      "Coverage for spray rig trailers",
      "Hired and non-owned auto (for employee-owned vehicles used for work)",
      "Uninsured and underinsured motorist coverage",
      "Medical payments coverage",
    ],
    faqs: [
      {
        q: "Does commercial auto cover my trailer with the spray rig?",
        a: "Commercial auto covers the trailer for liability when it's attached to a covered vehicle. Physical damage to the trailer and equipment on it typically requires separate coverage — either as part of commercial auto or under tools and equipment/inland marine.",
      },
      {
        q: "What is hired and non-owned auto coverage?",
        a: "Hired auto covers vehicles you rent for business use. Non-owned auto covers employee-owned vehicles used for work — for example, if a worker drives their personal truck to pick up supplies. Both are important for insulation contractors who may use rented vehicles or have employees using personal vehicles for work tasks.",
      },
      {
        q: "Can I add commercial auto to my existing GL program?",
        a: "Yes. Commercial auto is typically a separate policy but can be written with the same carrier as GL or a different carrier. We'll structure the program to avoid coverage gaps between your auto and GL.",
      },
    ],
  },
  "contractor-pollution-liability": {
    fullTitle: "Contractor Pollution Liability for Insulation Contractors",
    intro:
      "Contractor pollution liability (CPL) covers bodily injury and property damage from pollutants released during insulation operations — specifically the chemical exposure gap that standard GL policies exclude through the pollution exclusion. For spray foam installers and contractors using chemical-based insulation products, CPL is the coverage that fills the hole in a standard program.",
    coveragePoints: [
      "Third-party bodily injury from chemical off-gassing",
      "Property damage from pollutants released during installation",
      "Isocyanate and chemical exposure claims",
      "Cleanup costs for released materials",
      "Completed operations CPL coverage",
      "Defense costs for pollution claims",
      "Claims-made with retroactive date to business start",
    ],
    faqs: [
      {
        q: "Why does the pollution exclusion matter so much for insulation contractors?",
        a: "The pollution exclusion in standard GL is broader than most contractors realize. It excludes claims from the 'discharge, dispersal, seepage, migration, release or escape of pollutants.' For spray foam installers, isocyanates and foam off-gassing chemicals fall within this definition — meaning GL may deny claims that seem like straightforward bodily injury or property damage.",
      },
      {
        q: "Does CPL cover both during-installation and after-installation claims?",
        a: "Yes, most CPL policies cover claims arising from pollutants released during your operations as well as completed operations claims — for example, a homeowner who reports health symptoms weeks after spray foam installation. The retroactive date on a claims-made CPL policy determines how far back the coverage reaches.",
      },
      {
        q: "How does CPL coordinate with my GL policy?",
        a: "GL and CPL work as complementary policies — GL covers non-pollution bodily injury and property damage; CPL covers the pollution exposure that GL excludes. We structure both policies together to ensure there are no gaps and that the two policies don't create conflicting exclusions.",
      },
    ],
  },
  "umbrella-excess": {
    fullTitle: "Umbrella & Excess Liability for Insulation Contractors",
    intro:
      "Umbrella and excess liability insurance adds coverage limits above your underlying GL and commercial auto policies. When a major claim exhausts your primary policy limits, umbrella coverage responds. For insulation contractors working on large commercial buildings, high-value residential projects, or government work, umbrella coverage is often required and always worth having.",
    coveragePoints: [
      "Additional limits above GL per occurrence and aggregate",
      "Excess limits above commercial auto liability",
      "Drop-down coverage if underlying policy is exhausted",
      "$1M to $10M+ umbrella limits available",
      "Required by many commercial GC contracts",
      "Covers the same claims as underlying GL",
    ],
    faqs: [
      {
        q: "How much umbrella coverage do insulation contractors typically need?",
        a: "$1M to $5M is common for residential contractors. Commercial insulation projects on larger buildings may require $5M to $10M or more. GC contracts specify minimum umbrella requirements — we review contract requirements and structure the right limits.",
      },
      {
        q: "Is umbrella the same as excess liability?",
        a: "They're similar but not identical. Umbrella policies typically drop down to cover claims not covered by the underlying policy (e.g., if the underlying aggregate is exhausted). Excess liability follows the same terms as the underlying policy without drop-down. For most insulation contractors, umbrella is the more protective option.",
      },
      {
        q: "Does umbrella cover spray foam liability claims?",
        a: "Umbrella coverage follows the underlying policy terms — it covers what GL covers, and excludes what GL excludes. If your GL has a pollution exclusion, the umbrella typically has the same exclusion. CPL is the correct coverage for spray foam pollution claims; umbrella adds limits above GL for non-pollution claims.",
      },
    ],
  },
  "surety-bonds": {
    fullTitle: "Surety Bonds for Insulation Contractors",
    intro:
      "Surety bonds are required for insulation contractor licensing in many states and for performance on government and commercial projects. A contractor license bond guarantees your compliance with state licensing laws; a performance bond guarantees you'll complete a specific contract. We place both for insulation contractors nationwide.",
    coveragePoints: [
      "Contractor license bonds — state licensing requirements",
      "Performance bonds — project completion guarantee",
      "Payment bonds — subcontractor and supplier payment",
      "Bid bonds — required to bid on certain projects",
      "Available in all 50 states",
      "A-rated surety markets",
      "Fast issuance for license bonds",
    ],
    faqs: [
      {
        q: "What is a contractor license bond and do insulation contractors need one?",
        a: "A contractor license bond (also called a license and permit bond) is required to obtain a contractor license in many states. It guarantees that you'll comply with state contractor licensing laws and regulations. If you violate licensing requirements, customers or the state can make claims against the bond. Many states require license bonds for insulation and specialty contractors.",
      },
      {
        q: "Do insulation contractors need performance bonds?",
        a: "Performance bonds are typically required for government projects (federal, state, and local) and large commercial projects above certain dollar thresholds. If you're bidding on public school, municipal building, or infrastructure insulation projects, performance bonds are commonly required by the project owner or general contractor.",
      },
      {
        q: "How quickly can I get a surety bond for an insulation contract?",
        a: "Contractor license bonds are typically issued same-day or next-day once your application and credit check are processed. Performance bonds for larger contracts require financial underwriting and may take 3–7 business days. Contact us with your deadline and we'll work to meet it.",
      },
    ],
  },
};
