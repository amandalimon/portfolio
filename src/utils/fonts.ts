import { Arsenal, Oxygen_Mono, Raleway, Nova_Square, } from "next/font/google";

const arsenal_init = Arsenal({
    subsets: ["latin"],
    weight: ['400', '700'],
    variable: '--font-arsenal'
});

const oxygen_mono_init = Oxygen_Mono({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-oxygen_mono'
});

const raleway_init = Raleway({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-raleway'
});

const nova_init = Nova_Square({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-nova_square'
});

export const arsenal = arsenal_init.variable
export const oxygen_mono = oxygen_mono_init.variable
export const raleway = raleway_init.variable
export const nova_square = nova_init.variable