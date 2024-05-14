import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from "react-icons/fa";
import { SiPlatzi } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { PiReadCvLogoFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";


export const Contact = () => {
    return (
        <section className="bg-navy flex flex-col justify-center items-center py-20 gap-10">
            <h2 className="font-nova text-5xl mb-2">Contacto</h2>

            <section className="flex gap-8">
                <a
                    className="bg-airblue hover:bg-violet p-3 rounded-full"
                    href="https:/linkedin.com/in/amandalimon">
                    <FaLinkedin className="w-8 h-8" />
                </a>
                <a
                    className="bg-airblue hover:bg-violet p-3 rounded-full" href="https://github.com/amandalimon">
                    <FaGithub className="w-8 h-8" />
                </a>
                <a
                    className="bg-airblue hover:bg-violet p-3 rounded-full" href="https://www.instagram.com/wea_limon/">
                    <FaInstagram className="w-8 h-8" />
                </a>
            </section>

            <section className="flex gap-4">
                <a href="mailto:amandalimon@outlook.com" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-navy transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-whitesmoke group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-airblue group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <IoMdMail className="text-violet w-5 h-5" />
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <IoMdMail className="w-5 h-5" />
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Envíame un correo</span>
                </a>

                <a href="mailto:amandalimon@outlook.com" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-navy transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-whitesmoke group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-airblue group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <PiReadCvLogoFill className="text-violet w-5 h-5" />
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <PiReadCvLogoFill className="w-5 h-5" />
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Ver mi curriculum</span>
                </a>

                <a href="mailto:amandalimon@outlook.com" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-navy transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-whitesmoke group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-airblue group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <SiPlatzi className="text-violet w-5 h-5" />
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <SiPlatzi className="w-5 h-5" />
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Ver mis cursos</span>
                </a>
            </section>
        </section>
    )
}