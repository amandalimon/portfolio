import { MouseEventHandler } from "react"
import Image from "next/image";

interface ModalProps {
    show: boolean;
    onClose: MouseEventHandler<HTMLButtonElement>;
    selectedProject: 'future-tech-nextjs' | 'ecommerce-practice-react-vite-tailwind' | 'react-redux-pokedex' | 'TodoMachine';
}

interface ProjectDetailsProps {
    title: string
    description: string
    imageSrc: string
    features: string[]
    technologies: string[]
}

export const ProjectDetails = ({ title, description, imageSrc, features, technologies }: ProjectDetailsProps) => (
    <figure className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section className="col-span-1 flex flex-col gap-6">
            <h1 className="font-bold text-lg">{title}</h1>
            <p>{description}</p>
            <Image
                src={imageSrc}
                alt={title}
                width={650}
                height={500} className="rounded"
            />
        </section>

        <div className="col-span-1 flex flex-col gap-6">
            <h2>Características</h2>
            <ul className="list-disc ml-8">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
            <h2>Tecnologías utilizadas: </h2>
            <p className="">{technologies.join(', ')}</p>
        </div>
    </figure>
);

export const projectData = {
    "future-tech-nextjs": {
        title: "Future Tech",
        description: "Aplicación web dinámica que maximiza las funciones avanzadas de Next.js. Con rutas dinámicas y varios métodos de obtención de datos, incluido GraphQL.",
        imageSrc: "/images/projects/futuretech.png",
        features: [
            "Integración de la API de Shopify.",
            "Obtención de datos con GraphQL",
            "Sistema de autenticación mediante la generación y validación de tokens de acceso.",
            "Rutas dinámicas",
            "Protección de rutas",
            "Optimización de carga con enrutamiento paralelo",
            "Manejo de cookies"
        ],
        technologies: ["NextJS", "Typescript", "Sass", "GraphQL"]
    },
    "ecommerce-practice-react-vite-tailwind": {
        title: "Shopi",
        description: "E-commerce construido con React.js, Vite.js y Tailwind CSS.",
        imageSrc: "/images/projects/shopi.png",
        features: [
            "Navegación con React Router DOM",
            "Consumo de API",
            "Implementa un modal para ver información detallada de cada producto.",
            "Carrito de compras.",
            "Página de órdenes y órden individual.",
            "Búsqueda y filtrado de productos por título y categoría",
            "Persistencia de datos con Local Storage",
            "Sistema de autenticación",
            "Vistas dinámicas (Iniciar Sesión / Crear cuenta) y navbar responsivo que muestra opciones como correo electrónico, órdenes, cuenta, cerrar o iniciar sesión.",
            "Protección de rutas"
        ],
        technologies: ["React", "Vite", "Tailwind CSS"]
    },
    "react-redux-pokedex": {
        title: "Redux Pokedex",
        description: "Aplicación web que te permite explorar información sobre diferentes Pokémon.",
        imageSrc: "/images/projects/pokedex.png",
        features: [
            "Gestión eficiente del manejo de estado de la aplicación, facilita el manejo de datos y la comunicación entre componentes.",
            "Utiliza axios para hacer llamadas a la PokeAPI y obtener los datos necesarios.",
            "Explora la lista completa de Pokémon.",
            "Visualiza detalles de un pokemon específico, como su tipo, habilidades y estadísticas",
            "Interactúa con una interfaz intuitiva y fácil de usar."
        ],
        technologies: ["Redux.js", "Redux Toolkit", "Axios"]
    },
    "TodoMachine": {
        title: "TODO Machine",
        description: "Aplicación web",
        imageSrc: "/images/projects/todomachine.png",
        features: [
            ""
        ],
        technologies: ["React.js", "React Router", "CSS", "Html"]
    }
};

export const Modal = ({ show, onClose, selectedProject }: ModalProps) => {
    if (!show) { return null }
    const project = projectData[selectedProject];
    if (!project) return null;

    return (
        <div className="fixed left-0 top-0 w-full h-full bg-black/50 z-50 backdrop-blur flex justify-center items-center p-4 sm:p-0">
            <div className="bg-white rounded w-full max-w-lg md:max-w-2xl lg:max-w-4xl h-5/6 sm:h-auto p-6 overflow-y-auto">
                <button
                    onClick={onClose}
                    className="w-4 h-4 bg-red-400 text-red-400 rounded-full flex items-center justify-center mb-4 hover:text-red-900">&times;</button>
                <ProjectDetails {...project} />
            </div>
        </div>
    );
}