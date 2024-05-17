"use client"
import { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";

type Section = 'home' | 'about' | 'skills' | 'projects' | 'contact';

const sections: Section[] = ['home', 'about', 'skills', 'projects', 'contact'];

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
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<Section>('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSetActive = (section: Section) => {
        setActiveSection(section);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offsets = sections.map(section => {
                const element = document.getElementById(section);
                return {
                    section,
                    offset: element ? element.offsetTop : 0
                };
            });

            const scrollPosition = window.scrollY + 100;

            for (let i = offsets.length - 1; i >= 0; i--) {
                if (scrollPosition >= offsets[i].offset) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed flex items-center justify-between w-full px-14 py-3 bg-dark opacity-80 border-dark border-b-2 shadow-lg z-10 font-arsenal">
            <a href="https://portfolio.vercel.app/" className="font-mono bg-orchid rounded-full px-2 font-bold">Logo</a>
            <div className="hidden md:flex gap-8">
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
                className="md:hidden text-white"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <IoMenu className='w-6 h-6' />
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-dark flex flex-col items-center gap-4 p-4 md:hidden font-arsenal">
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
