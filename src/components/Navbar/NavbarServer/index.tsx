import { useTranslations } from 'next-intl';
import NavbarClient from '../NavbarClient';

export default function NavbarServer() {
    const t = useTranslations("Navigation");

    return (
        <NavbarClient
            home={t("home")}
            about={t("about")}
            skills={t("skills")}
            projects={t("projects")}
            contact={t("contact")}
        />
    );
}