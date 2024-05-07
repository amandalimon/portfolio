import { Arsenal, Oxygen_Mono, Zilla_Slab, Nova_Square } from "next/font/google";

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

const zilla_slab_init = Zilla_Slab({
    subsets: ["latin"],
    weight: ['400', '600', '700'],
    variable: '--font-zylla_slab'
});

const nova_square_init = Nova_Square({
    subsets: ["latin"],
    weight: ['400'],
    variable: '--font-nova_square'
});

export const arsenal = arsenal_init.variable
export const oxygen_mono = oxygen_mono_init.variable
export const zilla_slab = zilla_slab_init.variable
export const nova_square = nova_square_init.variable