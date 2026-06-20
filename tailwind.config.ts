import type { Config } from "tailwindcss";

/* ============================================================
   INSULATION INSURANCE — "Eco Canopy" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to forest green (primary) / deep canopy
   (secondary) / lime accent.
   clay = forest green · sage = deep canopy · gold = lime accent
   cream = pale sage white · sand = light green wash
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6FAF6",
        sand: "#E8F4E8",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#1A7340",
          dark: "#0F4A28",
          light: "#2E9B5A",
          50: "#EAF5ED",
          100: "#C9E8D4",
          200: "#94D1AC",
          300: "#5AB882",
          400: "#2E9B5A",
          500: "#1A7340",
          600: "#0F4A28",
          700: "#0A3319",
          800: "#06220F",
          900: "#031107",
        },
        sage: {
          DEFAULT: "#0D4F2B",
          dark: "#082E18",
          light: "#1A7340",
          50: "#E6F0EB",
          100: "#C0D9CB",
          200: "#86B99A",
          300: "#4D9970",
          400: "#267A4C",
          500: "#0D4F2B",
          600: "#082E18",
          700: "#041C0E",
        },
        gold: {
          DEFAULT: "#52B043",
          dark: "#3B8030",
          light: "#78CC6A",
          50: "#EDF7EB",
          100: "#D0ECCB",
          200: "#A4D99A",
          300: "#78CC6A",
          400: "#52B043",
          500: "#3B8030",
          600: "#286021",
        },
        espresso: "#0A200F",
        cocoa: "#1E4428",
        mocha: "#4A7A5A",
        adobe: "#C8E8CC",
        adobeDark: "#A8D4AD",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F6FAF6 0%, #EBF5EB 40%, #E0F0E5 70%, #F6FAF6 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(26,115,64,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(82,176,67,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1A7340 0%, #2E9B5A 100%)",
        "sage-gradient": "linear-gradient(135deg, #0D4F2B 0%, #1A7340 100%)",
        "gold-gradient": "linear-gradient(135deg, #52B043 0%, #78CC6A 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(15, 74, 40, 0.22), 0 4px 12px -6px rgba(10, 32, 15, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(15, 74, 40, 0.28), 0 10px 30px -10px rgba(10, 32, 15, 0.10)",
        card: "0 2px 8px -2px rgba(10, 32, 15, 0.06), 0 1px 3px -1px rgba(10, 32, 15, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(15, 74, 40, 0.24), 0 8px 20px -8px rgba(10, 32, 15, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(15, 74, 40, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
