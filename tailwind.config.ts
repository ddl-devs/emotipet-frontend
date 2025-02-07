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
        orange: "var(--orange)",
        gray: "var(--gray)",
        whiteGray: "var(--white-gray)",
        blackGray: "var(--black-gray)",
        green: "var(--green)",
        red: "var(--red)",
      },
    },
  },
  plugins: [],
} satisfies Config;
