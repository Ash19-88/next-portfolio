import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,jsx,js,ts, tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Alex Brush"],
        Raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
} satisfies Config;
