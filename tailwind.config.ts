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
        raleway: ['var(--font-raleway)'],
      },
      colors: {
        transparent: 'transparent',
        'whitesmoke': '#f5f5f5',
        'navy': '#36465d',
        'lightnavy': '#50627b',
        'grey': '#768191',
        'rose': '#db6c79',
        'orchid': '#E8B4BC',
        'peach': '#fcde9c',
        'dark': '#222831',
        'airblue': '#7C9EB2',
        'silver': '#C0C5C1',
        'powderblue': '#A2B2C7',
        'purple': '#59405C',
        'violet': '#87556F',
        'payne':'#496989'
      },
    },
  },
  plugins: [],
};
export default config;
