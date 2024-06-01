import { useTranslations } from "next-intl"

export const About = () => {
    const t = useTranslations("AboutPage")
    return (
        <section id="sobre-mi" className="bg-lightnavy flex items-center justify-center">
            <div className="gap-6 flex flex-col p-10 md:p-12 lg:p-24 xl:p-28">

                <h1 className="uppercase font-nova text-4xl">
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