// "use client"
// import Image from 'next/image';
// import { useState, useEffect } from 'react';
// import { IoMenu } from "react-icons/io5";
// import LocalSwitcher from '../LocalSwitcher';

// type Section = 'home' | 'about' | 'skills' | 'projects' | 'contact';

// const sections: Section[] = ['home', 'about', 'skills', 'projects', 'contact'];

// const NavLink = ({ section, activeSection, handleSetActive }: { section: Section, activeSection: Section, handleSetActive: (section: Section) => void }) => (
//     <a
//         href={`#${section}`}
//         onClick={() => handleSetActive(section)}
//         className={activeSection === section ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
//     >
//         {section.charAt(0).toUpperCase() + section.slice(1)}
//     </a>
// );

// export const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeSection, setActiveSection] = useState<Section>('home');

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleSetActive = (section: Section) => {
//         setActiveSection(section);
//         setIsOpen(false);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             const offsets = sections.map(section => {
//                 const element = document.getElementById(section);
//                 return {
//                     section,
//                     offset: element ? element.offsetTop : 0
//                 };
//             });

//             const scrollPosition = window.scrollY + 100;

//             for (let i = offsets.length - 1; i >= 0; i--) {
//                 if (scrollPosition >= offsets[i].offset) {
//                     setActiveSection(sections[i]);
//                     break;
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className="fixed flex items-center justify-between w-full px-6 py-2 bg-dark/90 backdrop-blur shadow-lg z-10 font-arsenal font-bold">
//             <Image src="/images/logo.png" alt="logo" width={60} height={60} />
//             <div className="hidden md:flex gap-8">
//                 {sections.map(section => (
//                     <NavLink
//                         key={section}
//                         section={section}
//                         activeSection={activeSection}
//                         handleSetActive={handleSetActive}
//                     />
//                 ))}
//             </div>

//             <button
//                 className="md:hidden text-white"
//                 onClick={toggleMenu}
//                 aria-label="Toggle menu"
//             >
//                 <IoMenu className='w-6 h-6' />
//             </button>

//             {isOpen && (
//                 <div className="absolute top-16 left-0 right-0 bg-dark flex flex-col items-center gap-4 p-4 md:hidden font-arsenal font-bold">
//                     {sections.map(section => (
//                         <NavLink
//                             key={section}
//                             section={section}
//                             activeSection={activeSection}
//                             handleSetActive={handleSetActive}
//                         />
//                     ))}
//                 </div>
//             )}
//             <LocalSwitcher />
//         </nav>
//     );
// };


// NavbarClient.tsx
"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import LocalSwitcher from 'app/components/LocalSwitcher';
import { IoMenu } from "react-icons/io5";

interface NavbarClientProps {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
}

const NavbarClient: React.FC<NavbarClientProps> = ({ home, about, skills, projects, contact }) => {
    const [activeSection, setActiveSection] = useState('home');
    const sectionsRef = useRef<{ [key: string]: IntersectionObserverEntry }>({});

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const sections = ['home', 'about', 'skills', 'projects', 'contact'];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    sectionsRef.current[entry.target.id] = entry;
                });

                const visibleSections = sections.filter(
                    (section) =>
                        sectionsRef.current[section]?.isIntersecting
                );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0]);
                }
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="fixed flex items-center justify-between w-full px-6 py-2 bg-dark/90 backdrop-blur shadow-lg z-10 font-arsenal font-bold">
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />

            <div className="hidden md:flex gap-8">
                <button
                    onClick={() => scrollToSection('home')}
                    className={activeSection === 'home' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                >
                    {home}
                </button>
                <button
                    onClick={() => scrollToSection('about')}
                    className={activeSection === 'about' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                >
                    {about}
                </button>
                <button
                    onClick={() => scrollToSection('skills')}
                    className={activeSection === 'skills' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                >
                    {skills}
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className={activeSection === 'projects' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                >
                    {projects}
                </button>
                <button
                    onClick={() => scrollToSection('contact')}
                    className={activeSection === 'contact' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                >
                    {contact}
                </button>
            </div>

            <button
                className="md:hidden text-white"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <IoMenu className='w-6 h-6' />
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-dark flex flex-col items-center gap-4 p-4 md:hidden font-arsenal font-bold">
                    <button
                        onClick={() => scrollToSection('home')}
                        className={activeSection === 'home' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                    >
                        {home}
                    </button>
                    <button
                        onClick={() => scrollToSection('about')}
                        className={activeSection === 'about' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                    >
                        {about}
                    </button>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className={activeSection === 'skills' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                    >
                        {skills}
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className={activeSection === 'projects' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                    >
                        {projects}
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={activeSection === 'contact' ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}
                    >
                        {contact}
                    </button>
                </div>)}

            <LocalSwitcher />
        </nav>
    );
};

export default NavbarClient;