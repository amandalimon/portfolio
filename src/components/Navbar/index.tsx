"use client"
import Image from 'next/image';
import useNavStore, { Section } from 'app/hooks/useNavStore';
import { IoMenu } from "react-icons/io5";

const NavLink = ({ section, activeSection, handleSetActive }: { section: Section, activeSection: Section, handleSetActive: (section: Section) => void }) => (
    <a
        href={`#${section}`}
        onClick={() => handleSetActive(section)}
        className={activeSection === section ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
    >
        {section.charAt(0).toUpperCase() + section.slice(1)}
    </a>
);

export const Navbar = () => {
    const { isOpen, setIsOpen, activeSection, setActiveSection } = useNavStore();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSetActive = (section: Section) => {
        setActiveSection(section);
        setIsOpen(false);
    };

    const sections: Section[] = ['home', 'about', 'skills', 'projects', 'contact'];

    return (
        <nav className="fixed flex items-center justify-between w-full px-6 py-2 bg-dark/90 backdrop-blur shadow-lg z-10 font-arsenal font-bold">
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />

            <div className="hidden sm:flex gap-8">
                {sections.map(section => (
                    <NavLink
                        key={section}
                        section={section}
                        activeSection={activeSection}
                        handleSetActive={handleSetActive}
                    />
                ))}
            </div>

            <button
                className="sm:hidden text-white"
                onClick={toggleMenu}
            >
                <IoMenu className='w-6 h-6' />
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-dark flex flex-col items-center gap-4 p-4 sm:hidden font-arsenal font-bold">
                    {sections.map(section => (
                        <NavLink
                            key={section}
                            section={section}
                            activeSection={activeSection}
                            handleSetActive={handleSetActive}
                        />
                    ))}
                </div>
            )}
        </nav>
    );
};
