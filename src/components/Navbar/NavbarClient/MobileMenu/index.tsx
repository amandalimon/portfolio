interface Section {
    id: string;
    label: string;
}

export const MobileMenu: React.FC<{ sections: Section[], activeSection: string, isOpen: boolean, onClose: () => void, onNavigate: (id: string) => void }> = ({ sections, activeSection, isOpen, onClose, onNavigate }) => (
    <div className={`md:hidden fixed left-0 top-0 bottom-0 w-full h-screen bg-black/50 z-50 backdrop-blur flex justify-center items-center p-4 transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`absolute z-50 right-0 bg-dark flex flex-col items-start h-screen w-80 gap-6 p-14 duration-500 transform ease-in-out transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button onClick={onClose} className='absolute top-6 right-6'>x</button>
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => {
                        onNavigate(section.id);
                        onClose();
                    }}
                    className={`${activeSection === section.id ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}`}
                >
                    {section.label}
                </button>
            ))}
        </div>
    </div>
);