import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#0b1215",
          800: "#101a1f",
          700: "#15232b",
          600: "#1c2f39"
        },
        accent: {
          500: "#2ee4c5",
          400: "#5bf5dc"
        }
      },
      boxShadow: {
        soft: "0 4px 30px rgba(0,0,0,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    },
  },
  darkMode: "class",
  plugins: [],
}
export default config
