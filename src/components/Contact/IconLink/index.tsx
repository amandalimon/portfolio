interface IconLinkProps {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}

export const IconLink = ({ href, icon: Icon, label }: IconLinkProps) => (
    <a
        href={href}
        className="relative inline-flex items-center justify-center p-3 overflow-hidden tracking-tighter bg-dark rounded-full group"
        aria-label={label}
    >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-airblue rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 rounded-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <Icon className="relative w-8 h-8" />
    </a>
);