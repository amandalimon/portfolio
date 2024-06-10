import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arsenal: ['var(--font-arsenal)'],
        mono: ['var(--font-oxygen_mono)'],
        nova: ['var(--font-nova_square)'],
      },
      colors: {
        transparent: 'transparent',
        'whitesmoke': '#f5f5f5',
        'navy': '#36465d',
        'lightnavy': '#50627b',
        'grey': '#768191',
        'rose': '#db6c79',
        'orchid': '#E8B4BC',
        'mustard': '#FFDD4A',
        'maize': '#fff275',
        'dark': '#222831',
        'airblue': '#7C9EB2',
        'silver': '#C0C5C1',
        'powderblue': '#A2B2C7',
        'purple': '#59405C',
        'violet': '#87556F',
        'payne': '#496989'
      },
    },
  },
  plugins: [],
};
export default config;
