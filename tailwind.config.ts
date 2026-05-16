import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "var(--bg-void)",
        card: "var(--bg-card)",
        "card-hover": "var(--bg-card-hover)",
        gold: {
          400: "var(--gold-400)",
          500: "var(--gold-500)",
          600: "var(--gold-600)",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
        outfit: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, var(--gold-400) 0%, var(--gold-600) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
