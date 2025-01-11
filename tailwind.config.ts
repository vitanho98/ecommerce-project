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
        green: {
          500: "#249B3E",
          800: "#397947",
        },
        gray: {
          100: "#F5F5F5",
          300: "#666666",
          800: "#2E2E2E",
        },
        blue: {
          100: "#F3F9FB",
          500: "#008ECC",
        },
        red: {
          500: "#FF4242",
        },
        orange: {
          800: "#F89828",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
