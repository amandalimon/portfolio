import { create } from 'zustand'

export type Section = 'home' | 'about' | 'skills' | 'projects' | 'contact';

interface StoreState {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    activeSection: Section;
    setActiveSection: (section: Section) => void;
    subscribeToScroll: () => void;
}

const useNavStore = create<StoreState>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen }),
    activeSection: 'home',
    setActiveSection: (section) => set({ activeSection: section }),
    subscribeToScroll: () => {
        const handleScroll = () => {
            const sections: Section[] = ['home', 'about', 'skills', 'projects', 'contact'];
            const offsets = sections.map((section) => {
                const element = document.getElementById(section);
                return {
                    section,
                    offset: element ? element.offsetTop : 0,
                };
            });

            const scrollPosition = window.scrollY + 100;

            for (let i = offsets.length - 1; i >= 0; i--) {
                if (scrollPosition >= offsets[i].offset) {
                    set({ activeSection: sections[i] });
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },
}));

export default useNavStore;