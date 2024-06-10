import { useTranslations } from 'next-intl';
import { NavbarClient } from '../NavbarClient';

export const NavbarServer = () => {
    const t = useTranslations("Navigation");

    const sections = [
        { id: 'home', label: t("home") },
        { id: 'about', label: t("about") },
        { id: 'skills', label: t("skills") },
        { id: 'projects', label: t("projects") },
        { id: 'contact', label: t("contact") },
    ];

    return (
        <NavbarClient sections={sections} />
    );
}