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
        shade01: "#993FFC",
        shade02: "#FC3FCF",
        shade03: "#E893FC",
        shade04: "#BCB0FF",
        shade05: "#FC3F5D",
        shade06: "blue"
      },
    },
  },
  plugins: [],
} satisfies Config;
