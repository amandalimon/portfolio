interface ContactLinkProps {
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}

export const ContactLink = ({ href, icon: Icon, label }: ContactLinkProps) => (
    <a
        href={href}
        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-navy font-arsenal transition-all duration-300 ease-in-out rounded hover:pl-10 hover:pr-6 bg-whitesmoke group"
        aria-label={label}
    >
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-airblue group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <Icon className="text-violet w-5 h-5" />
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <Icon className="w-5 h-5" />
        </span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
            {label}
        </span>
    </a>
);