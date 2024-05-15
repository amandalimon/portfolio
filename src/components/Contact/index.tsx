import { ContactLink } from "./ContactLink";
import { IconLink } from "./IconLink";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiPlatzi } from "react-icons/si";
import { PiReadCvLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";

const socialLinks = [
    { href: "https:/linkedin.com/in/amandalimon", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/amandalimon", icon: FaGithub, label: "GitHub" },
    { href: "https://www.instagram.com/wea_limon", icon: FaInstagram, label: "Instagram" },
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
        <section className="bg-navy flex flex-col justify-center items-center py-16 gap-12">
            <h2 className="font-nova text-5xl">Contacto</h2>

            <section className="flex gap-6">
                {socialLinks.map((link) => (
                    <IconLink key={link.href} {...link} />
                ))}
            </section>

            <section className="flex gap-4">
                {contactLinks.map((link) => (
                    <ContactLink key={link.href} {...link} />
                ))}
            </section>
        </section>
    );
};