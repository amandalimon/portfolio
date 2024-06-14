import { ContactLink } from "./ContactLink";
import { IconLink } from "./IconLink";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiPlatzi } from "react-icons/si";
import { PiReadCvLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { useTranslations } from "next-intl";

export const Contact = () => {
    const t = useTranslations("ContactSection")
    
    const socialLinks = [
        { href: "https://linkedin.com/in/amandalimon", icon: FaLinkedin, label: "LinkedIn" },
        { href: "https://github.com/amandalimon", icon: FaGithub, label: "GitHub" },
        { href: "https://wa.me/528186008387", icon: FaWhatsapp, label: "Whatsapp" },
    ];

    const contactLinks = [
        {
            href: "mailto:amandalimon@outlook.com",
            icon: IoMdMail,
            label: t("emailButton"),
        },
        {
            href: "https://1drv.ms/b/c/0a11ad3baf0ea9ed/EezcD318cLhPsN5vn52uocIBmV9RcH8PO19LR1nROXq-Vw?e=0lQm3A",
            icon: PiReadCvLogoFill,
            label: t("cvButton"),
        },
        {
            href: "https://platzi.com/p/amandalimon/",
            icon: SiPlatzi,
            label: t("coursesButton"),
        },
    ];

    return (
        <section id="contact" className="h-screen w-full flex flex-col items-center justify-center py-16 gap-6">
            <h1 className="font-nova text-5xl">{t("title")}</h1>
            <div className="w-1/12 mb-8 border-2 border-orchid"></div>

            <section className="flex gap-6 mb-4">
                {socialLinks.map((link) => (
                    <IconLink key={link.href} {...link} />
                ))}
            </section>

            <section className="flex flex-col lg:flex-row lg:justify-center lg:items-center my-8 gap-4 m-2 w-2/4">
                {contactLinks.map((link) => (
                    <ContactLink key={link.href} {...link} />
                ))}
            </section>
        </section>
    );
};