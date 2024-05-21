import Image from "next/image";

export const ProjectDetails = ({ title, description, imageSrc, features, technologies }) => (
    <figure className="bg-whitesmoke flex flex-col rounded">
        <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={200}
            className="rounded-t"
        />
        <div className="flex flex-col gap-4 p-4">
            <div>
                <h1 className="font-bold text-lg">{title}</h1>
                <p>{description}</p>
            </div>
            <div>
                <h2>Características</h2>
                <ul>
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Tecnologías utilizadas</h2>
                <p>{technologies.join(', ')}</p>
            </div>
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
    }
};