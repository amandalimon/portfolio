import { useTranslations } from "next-intl"

export const About = () => {
    const t = useTranslations("AboutSection")
    return (
        <section id="about" className="bg-lightnavy flex items-center justify-center">
            <div className="gap-6 flex flex-col py-20 px-10 md:px-20">

                <h1 className="font-nova text-4xl">
                    {t('title')}
                </h1>
                <div className="w-1/12 mb-8 border-2 border-orchid"></div>
                <p className="font-mono text-lg mb-12">
                    {t('description')}
                </p>
            </div>
        </section >
    )
}