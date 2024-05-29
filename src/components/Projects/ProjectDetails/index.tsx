import Image from "next/image";

interface ProjectDetailsProps {
    title: string
    description: string
    imageSrc: string
    features: string[]
    technologies: string[]
}

export const ProjectDetails = ({ title, description, imageSrc, features, technologies }: ProjectDetailsProps) => (
    <figure className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
        <section className="col-span-1">
            <Image
                src={imageSrc}
                alt={title}
                width={650}
                height={500} className=""
            />
            <div className="flex flex-col gap-4 py-4 px-6">
                <h1 className="font-nova text-2xl">{title}</h1>
                <div className="w-1/12 mb-6 border-2 border-violet"></div>
                <p className="">{description}</p>
            </div>
        </section>

        <section className="col-span-1 flex flex-col gap-8 py-6 px-8 bg-whitesmoke">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-6 bg-violet"></div>
                    <h2 className="font-nova text-lg h-8 ">Características</h2>
                </div>
                <ul className="list-disc ml-9 m-1">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-6 bg-violet"></div>
                    <h2 className="font-nova text-lg">Tecnologías utilizadas</h2>
                </div>
                <p className="ml-5">{technologies.join(', ')}</p>
            </div>
        </section>
    </figure>
);

export const projectData = {
    "future-tech-nextjs": {
        "title": "Future Tech",
        "description": "Future Tech es una tienda en línea que aprovecha al máximo las capacidades de Next.js, incluyendo enrutamiento dinámico, renderizado en el servidor y optimización de SEO.",
        "imageSrc": "/images/projects/futuretech.png",
        "features": [
            "Integración de la API de Shopify.",
            "Obtención de datos con GraphQL.",
            "Sistema de autenticación robusto mediante generación y validación de tokens de acceso.",
            "Server actions para la creación y autenticación de usuarios, así como la gestión del carrito de compras y el proceso de compra.",
            "Revalidación de caché por tag o ruta para mantener los datos actualizados.",
            "Gestión avanzada de cookies.",
            "Manejo de estado en componentes del servidor con Zustand.",
            "Optimización de carga con enrutamiento paralelo.",
            "Implementación de rutas dinámicas y protección de rutas.",
        ],
        "technologies": ["React.js", "Next.js", "Typescript", "Sass", "GraphQL"]
    },
    "ecommerce-practice-react-vite-tailwind": {
        title: "Shopi",
        description: "Shopi es una tienda en línea construída con React.js como proyecto de práctica. Permite filtrar productos por su título y categoría, consultar detalles de un producto, agregar productos al carrito de compras, hacer checkout y revisar historial de compras.",
        imageSrc: "/images/projects/shopi.png",
        features: [
            "Consumo de API.",
            "Persistencia de datos con Local Storage.",
            "Información detallada de los productos a través de un modal.",
            "Búsqueda y filtrado de productos por título y categoría.",
            "Navegación con React Router DOM.",
            "Protección de rutas.",
            "Carrito de compras.",
            "Página de órdenes y órden individual.",
            "Sistema de autenticación.",
            "Vistas de usuario: Log In, Create Account, Sign in, Sign Up.",
            "Navbar dinámico dependiendo de si el usuario está auteticado o no (e-mail, My Orders, My Account)",
        ],
        technologies: ["React.js", "Vite.js", "Tailwind CSS"]
    },
    "react-redux-pokedex": {
        "title": "Redux Pokedex",
        "description": "Aplicación web que permite explorar información detallada sobre diferentes Pokémon, integrando gestión de estado avanzada y llamadas a APIs.",
        "imageSrc": "/images/projects/pokedex.png",
        "features": [
            "Integración con la PokeAPI utilizando Axios para la recuperación de datos.",
            "Configuración del store con Redux Toolkit, definiendo reducers de manera eficiente.",
            "Uso de slices para definir el estado inicial y las acciones, optimizando la estructura de los árboles de estado de la aplicación.",
            "Implementación de acciones asíncronas con createAsyncThunk de Redux Toolkit para obtener y organizar datos de Pokémon por región.",
            "Gestión eficiente del estado de la aplicación, facilitando el manejo de datos y la comunicación entre componentes."
        ],
        "technologies": ["React.js", "Redux.js", "Redux Toolkit", "Axios"]
    },
    "TodoMachine": {
        "title": "TO DO Machine",
        "description": "TO DO Machine es una aplicación web desarrollada en React.js que simplifica la gestión de tareas. Permite agregar, editar, completar y eliminar tareas fácilmente, además de buscar y contar tareas.",
        "imageSrc": "/images/projects/todomachine.png",
        "features": [
            // "Agregar, editar, completar y eliminar tareas.",
            // "Buscar y contar tareas.",
            "Estados de carga y error.",
            "Uso del hook useEffect para manejar efectos secundarios.",
            "Uso del hook useReducer para manejar el estado y acciones en el almacenamiento local.",
            "Custom Hooks: useLocalStorage y useTodos para gestionar el almacenamiento local y la lógica de las tareas.",
            "React Router DOM: Navegación entre vistas utilizando HashRouter.",
            "Render props y render functions para reutilización y flexibilidad de componentes.",
            "ChangeAlert: Componente de orden superior para alertar a los usuarios sobre cambios en la aplicación.",
        ],
        "technologies": ["React.js", "React Router", "CSS", "HTML"]
    }
};