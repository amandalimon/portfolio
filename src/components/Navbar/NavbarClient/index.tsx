"use client"
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { LocaleSwitcher } from 'app/components/LocalSwitcher';
import { SectionButton } from './SectionButton';
import { MobileMenu } from './MobileMenu';
import { IoMenu } from "react-icons/io5";

interface Section {
    id: string;
    label: string;
}

interface NavbarClientProps {
    sections: Section[];
}

export const NavbarClient: React.FC<NavbarClientProps> = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('home');
    const sectionsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    sectionsRef.current[entry.target.id] = entry;
                });
                const visibleSection = sections.find(
                    (section) => sectionsRef.current[section.id]?.isIntersecting
                );
                if (visibleSection) {
                    setActiveSection(visibleSection.id);
                }
            },
            { threshold: 0.1 }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);

    return (
        <nav className="fixed z-50 flex items-center justify-between w-full h-16 px-6 font-nova bg-slate-700">
            <Image
                src="/images/logo.png"
                alt="logo"
                width={60}
                height={60}
            />
            <div className="flex items-center justify-center">
                <div className="hidden md:flex gap-8">
                    {sections.map((section) => (
                        <SectionButton
                            key={section.id}
                            id={section.id}
                            label={section.label}
                            active={activeSection === section.id}
                            onClick={() => scrollToSection(section.id)}
                        />
                    ))}
                </div>
                <button className="absolute right-16 md:hidden" onClick={toggleMenu}>
                    <IoMenu className='w-6 h-6' />
                </button>
            </div>
            <LocaleSwitcher />
            <MobileMenu
                sections={sections}
                activeSection={activeSection}
                isOpen={isOpen}
                onClose={toggleMenu}
                onNavigate={scrollToSection}
            />
        </nav>
    );
};
