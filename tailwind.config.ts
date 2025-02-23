import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white)",
        blue: "var(--blue)",
        purple: "var(--purple)",
        purpleHover: "var(--light-purple)",
        orange: "var(--orange)",
        whiteOrange: "var(--white-orange)",
        gray: "var(--gray)",
        whiteGray: "var(--white-gray)",
        blackGray: "var(--black-gray)",
        green: "var(--green)",
        red: "var(--red)",
        whiteGray2: "var(--white-gray2)",
      },
      variants: {
        extend: {
          z50: "z-index: 50",
          z40: "z-index: 40",
          z30: "z-index: 30",
          z20: "z-index: 20",
          z10: "z-index: 10",
          z0: "z-index: 0",
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
