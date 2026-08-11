import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#0B0A08",
          900: "#12100D",
          800: "#1B1815",
          700: "#262119",
          600: "#332C22",
        },
        cream: {
          DEFAULT: "#EFE9DE",
          muted: "#A79E8F",
          dim: "#6E6659",
        },
        gold: {
          DEFAULT: "#C9A15E",
          light: "#E3C88F",
          soft: "#D9B878",
          dark: "#8A6A35",
          glow: "rgba(201,161,94,0.35)",
        },
        border: "rgba(239,233,222,0.08)",
        background: "#0B0A08",
        foreground: "#EFE9DE",
        primary: {
          DEFAULT: "#C9A15E",
          foreground: "#12100D",
        },
      },
      boxShadow: {
        "gold-sm": "0 0 20px -6px rgba(201,161,94,0.35)",
        "gold-lg": "0 18px 60px -18px rgba(201,161,94,0.35)",
        "card": "0 1px 0 0 rgba(239,233,222,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.8)",
        "card-hover": "0 1px 0 0 rgba(201,161,94,0.2) inset, 0 32px 80px -32px rgba(0,0,0,0.9), 0 0 60px -20px rgba(201,161,94,0.25)",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      },
      letterSpacing: {
        "widest-2": "0.28em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "shine": {
          from: { transform: "translateX(-120%) skewX(-18deg)" },
          to: { transform: "translateX(240%) skewX(-18deg)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 32s linear infinite",
        "shine": "shine 2.8s ease-in-out infinite",
        "float-y": "float-y 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 7s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
