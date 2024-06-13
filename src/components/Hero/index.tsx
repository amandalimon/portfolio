import { useTranslations } from "next-intl";
import Image from "next/image";

export const Hero = () => {
    const t = useTranslations("Home")
    return (
        <section id="home" className="relative h-screen flex flex-col justify-center items-center md:grid grid-cols-4 md:pt-14 md:ml-20 overflow-hidden">
            <div className="z-10 flex flex-col gap-8 w-2/3 col-span-3 xl:w-full xl:flex-row xl:items-center xl:gap-0 xl:text-start">
                <h1 className="font-nova text-4xl w-full pr-4 xl:leading-tight xl:w-1/2 sm:text-5xl">
                    Amanda Carolina Limón Fernández
                </h1>
                <p className="font-mono text-xl leading-relaxed border-l-4 border-orchid pl-6 py-2" >
                    {t("description-p1")}<br />{t("description-p2")}
                </p>
            </div>
            <Image
                src="/images/hero.gif"
                alt="hero"
                width={700}
                height={700}
                priority={true}
                className="absolute opacity-15 md:opacity-70 md:-right-80 mt-14"
            />
        </section>
    );
}