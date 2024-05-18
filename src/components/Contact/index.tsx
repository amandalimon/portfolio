import { ContactLink } from "./ContactLink";
import { IconLink } from "./IconLink";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiPlatzi } from "react-icons/si";
import { PiReadCvLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

const socialLinks = [
    { href: "https:/linkedin.com/in/amandalimon", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/amandalimon", icon: FaGithub, label: "GitHub" },
    { href: "https://wa.me/528186008387", icon: FaWhatsapp, label: "Whatsapp" },
];

const contactLinks = [
    {
        href: "mailto:amandalimon@outlook.com",
        icon: IoMdMail,
        label: "Envíame un correo",
    },
    {
        href: "https://1drv.ms/b/c/0a11ad3baf0ea9ed/EfyxFFIyrLpGsdYixIRgRiIBDupiBUtGpTr04VmuTWq-2Q?e=E39gdJ",
        icon: PiReadCvLogoFill,
        label: "Ver mi curriculum",
    },
    {
        href: "https://platzi.com/p/amandalimon/",
        icon: SiPlatzi,
        label: "Ver mis cursos",
    },
];

export const Contact = () => {
    return (
        <section id="contact" className="h-screen flex flex-col items-center justify-center py-16 gap-6">
            <h1 className="font-nova text-5xl">Contacto</h1>
            <div className="w-1/12 mb-8 border-2 border-orchid"></div>

            <section className="flex gap-6 mb-4">
                {socialLinks.map((link) => (
                    <IconLink key={link.href} {...link} />
                ))}
            </section>

            <section className="flex gap-4 m-2">
                {contactLinks.map((link) => (
                    <ContactLink key={link.href} {...link} />
                ))}
            </section>
        </section>
    );
};