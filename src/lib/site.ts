// Centralized site data — used across nav, footer, schema, CTAs
// Insulation Insurance — insulation contractor & spray foam coverage

export const SITE = {
  name: "Insulation Insurance",
  legalName: "Insulation Insurance (by Contractors Choice Agency)",
  domain: "insulationinsurance.com",
  url: "https://insulationinsurance.com",
  tagline: "Specialist Insurance for Insulation Contractors",
  description:
    "Specialist insurance for insulation contractors and spray foam installers — general liability, spray foam liability, contractor pollution liability, workers' comp, tools & equipment, commercial auto, and surety bonds. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  agency: "Contractors Choice Agency",
  agencyFull: "Contractors Choice Agency, LLC",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
  licenseStates: "Licensed in all 50 states",
} as const;

export const BRAND = {
  brandShort: "Insulation",
  brandSub: "Contractor Insurance",
  nicheShort: "insulation contractor",
  nicheShortCap: "Insulation Contractor",
  nichePlural: "insulation contractors",
  nichePluralCap: "Insulation Contractors",
  operator: "insulation operation",
  operatorCap: "Insulation Operation",
  industry: "insulation contracting",
  industryCap: "Insulation Contracting",
  audience: "insulation contractors",
  audienceCap: "Insulation Contractors",
  ownerTitle: "insulation contractor",
  regionPill: "Texas · Florida · Nationwide",
  serviceSuffix: "Insulation Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  keywords?: string[];
  isFeatured?: boolean;
}

export const SERVICES: Service[] = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "Core bodily injury and property damage coverage",
    description:
      "Core bodily injury and property damage coverage for insulation contractors. Required by most GCs and project owners before you can start work.",
    icon: "ShieldCheck",
    keywords: ["insulation contractor general liability", "insulation GL insurance", "insulation company liability"],
  },
  {
    slug: "spray-foam-liability",
    title: "Spray Foam Liability Insurance",
    short: "Specialist coverage for SPF installers",
    description:
      "Specialist liability coverage for spray polyurethane foam installers — addresses off-gassing, adhesion failures, and chemical exposure claims that standard GL excludes through the pollution exclusion.",
    icon: "Zap",
    isFeatured: true,
    keywords: ["spray foam insurance", "SPF liability", "spray foam contractor insurance", "spray polyurethane foam insurance"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Coverage",
    short: "Spray rigs, proportioners & blowing machines",
    description:
      "Covers spray rigs, proportioners, hose systems, blowing machines, and portable insulation equipment against theft and damage at job sites and in storage.",
    icon: "Wrench",
    keywords: ["insulation equipment insurance", "spray rig insurance", "tools equipment insulation"],
  },
  {
    slug: "workers-comp",
    title: "Workers' Compensation",
    short: "WC for insulation and spray foam crews",
    description:
      "Required WC for insulation installers and spray foam crews — with the right insulation class codes and carriers that understand blown-in and SPF chemical exposure.",
    icon: "HardHat",
    keywords: ["insulation workers comp", "spray foam WC", "insulation contractor workers compensation"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Spray rigs, service trucks & vans",
    description:
      "Coverage for spray rigs, service trucks, and vans used to transport insulation equipment and materials between jobs. Personal auto excludes commercial use.",
    icon: "Truck",
    keywords: ["insulation contractor commercial auto", "spray rig truck insurance", "insulation van insurance"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "Chemical exposure gap-filler for spray foam",
    description:
      "Covers chemical exposure and off-gassing claims from spray foam and insulation installation that fall outside standard GL pollution exclusions — the critical gap-filler for SPF installers.",
    icon: "Wind",
    keywords: ["contractor pollution liability insulation", "spray foam CPL", "insulation pollution coverage"],
  },
  {
    slug: "umbrella-excess",
    title: "Umbrella & Excess Liability",
    short: "Additional limits for larger projects",
    description:
      "Additional liability limits above GL and auto for larger residential and commercial insulation projects. Required by many commercial GC contracts.",
    icon: "Umbrella",
    keywords: ["insulation umbrella insurance", "excess liability insulation contractor"],
  },
  {
    slug: "surety-bonds",
    title: "Contractor Surety Bonds",
    short: "License bonds, performance & payment bonds",
    description:
      "License bonds, performance bonds, and payment bonds for insulation contractors bidding on residential, commercial, and government projects.",
    icon: "FileCheck",
    keywords: ["insulation contractor bond", "spray foam surety bond", "insulation license bond"],
  },
];

export interface Location {
  slug: string;
  name: string;
  state?: string;
  region?: string;
  blurb: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "texas",
    name: "Texas",
    state: "TX",
    region: "Statewide",
    blurb: "Insulation contractors across Texas — from Houston and Dallas to San Antonio and statewide. We place GL, spray foam liability, workers' comp, and CPL for Texas insulation operations of all sizes.",
  },
  {
    slug: "florida",
    name: "Florida",
    state: "FL",
    region: "Statewide",
    blurb: "Florida insulation contractors from Miami to Jacksonville. Florida's hot, humid climate drives strong demand for spray foam insulation, weatherization, and commercial insulation services.",
  },
  {
    slug: "california",
    name: "California",
    state: "CA",
    region: "Statewide",
    blurb: "California insulation and spray foam contractors from LA to the Bay Area. California's Title 24 energy standards drive demand for high-performance insulation with specialist insurance needs.",
  },
  {
    slug: "georgia",
    name: "Georgia",
    state: "GA",
    region: "Statewide",
    blurb: "Georgia insulation contractors in Atlanta, Savannah, and throughout the state. A growing market for residential and commercial spray foam and blown-in insulation.",
  },
  {
    slug: "ohio",
    name: "Ohio",
    state: "OH",
    region: "Statewide",
    blurb: "Ohio insulation contractors from Cleveland and Columbus to Cincinnati. We serve residential, commercial, and industrial insulation contractors with specialist programs.",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    state: "NC",
    region: "Statewide",
    blurb: "North Carolina insulation contractors across the Triangle, Charlotte, and Western NC. A fast-growing market for spray foam and weatherization insulation work.",
  },
  {
    slug: "tennessee",
    name: "Tennessee",
    state: "TN",
    region: "Statewide",
    blurb: "Tennessee insulation contractors in Nashville, Memphis, Knoxville, and statewide. We place specialist insulation insurance programs across the state's growing residential and commercial market.",
  },
  {
    slug: "nationwide",
    name: "Nationwide",
    region: "All 50 States",
    blurb: "Insulation Insurance serves insulation contractors in all 50 states through our nationwide specialist markets — one agent, one program, wherever your insulation business operates.",
  },
];

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Insulation-knowledgeable agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 900, suffix: "+", label: "Insulation contractors covered nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years placing contractor insurance", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  {
    quote: "We'd been denied twice over our spray foam work — carriers either excluded SPF entirely or the quote had a massive pollution exclusion carve-out. These guys placed a program with real spray foam liability. Night and day from what we'd been carrying.",
    name: "Marcus T.",
    role: "Owner",
    location: "Texas",
  },
  {
    quote: "Had a call about an off-gassing complaint from a homeowner. Our old GL carrier denied it immediately — pollution exclusion. The CPL policy picked it up, handled the defense, and we were covered. Saved us from a serious out-of-pocket exposure.",
    name: "Sandra R.",
    role: "Operations Manager",
    location: "Florida",
  },
  {
    quote: "The spray rig theft would have put us out of work for weeks. Tools and equipment coverage replaced everything quickly. Finally have a program that actually matches what we do on the job.",
    name: "David K.",
    role: "SPF Installer",
    location: "Georgia",
  },
] as const;
