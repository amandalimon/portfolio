"use client"
import { useState, useTransition, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { GrLanguage } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";

export const LocaleSwitcher = () => {
    const router = useRouter();
    const localeActive = useLocale();
    const switcherRef = useRef<HTMLDivElement>(null);

    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);

    const onSelectChange = (locale: string) => {
        startTransition(() => {
            router.replace(`/${locale}`);
        });
        setIsOpen(false);
    };

    const toggleOptions = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getLanguageName = (locale: string) => {
        switch (locale) {
            case 'es':
                return 'Español';
            case 'en':
            default:
                return 'English';
        }
    };

    return (
        <div ref={switcherRef} className="relative inline-block text-left">
            <button
                onClick={toggleOptions}
                disabled={isPending}
                className="inline-flex items-center justify-center py-2 gap-2 focus:outline-none"
            >
                <GrLanguage className="w-5 h-5" />
                <div className="hidden md:flex items-center">
                    <span>{getLanguageName(localeActive)}</span>
                    <MdKeyboardArrowDown />
                </div>

            </button>

            {isOpen && (
                <ul className="absolute right-0 z-10 w-28 mt-1 origin-top-right bg-white border border-gray-300 rounded shadow-lg focus:outline-none text-sm font-bold">
                    <li className={`flex items-center gap-2 cursor-pointer select-none relative py-2 px-3 text-gray-700 hover:bg-gray-100 ${localeActive === 'es' ? 'bg-gray-200' : ''}`}
                        onClick={() => onSelectChange('es')}
                    >Español
                    </li>
                    <li className={`flex items-center gap-2 cursor-pointer select-none relative py-2 px-3 text-gray-700 hover:bg-gray-100 ${localeActive === 'en' ? 'bg-gray-200' : ''}`}
                        onClick={() => onSelectChange('en')}
                    >English
                    </li>
                </ul>
            )}
        </div>
    );
};