export const SectionButton: React.FC<{ id: string, label: string, active: boolean, onClick: () => void }> = ({ id, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`text-center ${active ? 'underline underline-offset-8 decoration-orchid decoration-2' : ''}`}
        style={{ minWidth: "40px" }}
    >
        {label}
    </button>
);