import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        arsenal: ['var(--font-arsenal)'],
        mono: ['var(--font-oxygen_mono)'],
        nova: ['var(--font-nova_square)'],

      },
      colors: {
        transparent: 'transparent',
        'whitesmoke': '#f5f5f5',
        'navy': '#36465d',
        'grey': '#768191',
        'rose': '#db6c79',
        'peach': '#fcde9c'
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
