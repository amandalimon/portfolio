import Image from "next/image";

export const TopProjects = () => {
    return (
        <section className='gap-6 mt-24 flex flex-col justify-center font-arsenal text-dark'>

            <h1 className='text-5xl font-nova text-white'>Projectos Principales</h1>
            <div className="w-1/12 mb-8 border-2 border-orchid"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-4">
                <figure className="bg-whitesmoke flex flex-col rounded">
                    <Image
                        src="/images/projects/futuretech.png"
                        alt="futuretech"
                        width={400}
                        height={200}
                        className="rounded-t"
                    />
                    <div className="flex flex-col gap-4 p-4">
                        <div>
                            <h1 className="font-bold text-lg">Future Tech</h1>
                            <p>Aplicación web dinámica que maximiza las funciones avanzadas de Next.js. Con rutas dinámicas y varios métodos de obtención de datos, incluido GraphQL</p>
                        </div>
                        <div>
                            <h2>Características</h2>
                            <ul>
                                <li>Integración de la API de Shopify.</li>
                                <li>Obtención de datos con GraphQL</li>
                                <li>Sistema de autenticación mediante la generación y validación de tokens de acceso.</li>
                                <li>Rutas dinámicas</li>
                                <li>Protección de rutas</li>
                                <li>Optimización de carga con enrutamiento paralelo</li>
                                <li>Manejo de cookies</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Tecnologías utilizadas</h2>
                            <p>NextJS, Typescript, Sass, GraphQL. </p>
                        </div>
                    </div>
                </figure>

                <figure className="bg-whitesmoke flex flex-col rounded">
                    <Image
                        src="/images/projects/shopi.png"
                        alt="shopi"
                        width={400}
                        height={200}
                        className="rounded-t"
                    />
                    <div>
                        <h1 className="font-bold">Shopi</h1>
                        <p>E-commerce construido con React.js, Vite.js y Tailwind CSS.</p>
                    </div>
                    <div>
                        <h2>Características</h2>
                        <ul>
                            <li>Navegación con React Router DOM</li>
                            <li>Consumo de API</li>
                            <li>Implementa un modal para ver información detallada de cada producto.</li>
                            <li>Carrito de compras.</li>
                            <li>Página de órdenes y órden individual.</li>
                            <li>Búsqueda y filtrado de productos por título y categoría</li>
                            <li>Persistencia de datos con Local Storage</li>
                            <li>Sistema de autenticación</li>
                            <li>Vistas dinámicas (Iniciar Sesión / Crear cuenta) y navbar responsivo que muestra opciones como correo electrónico, órdenes, cuenta, cerrar o iniciar sesión.</li>
                            <li>Protección de rutas</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Tecnologías utilizadas</h2>
                        <p>Tecnologias utilizadas: React, Vite, Tailwind CSS</p>
                    </div>
                </figure>

                <figure className="bg-whitesmoke flex flex-col rounded">
                    <Image
                        src="/images/projects/pokedex.png"
                        alt="pokedex"
                        width={400}
                        height={200}
                        className="rounded-t"
                    />
                    <div>
                        <h1 className="font-bold">Redux Pokedex</h1>
                        <p>Aplicación web que te permite explorar información sobre diferentes Pokémon</p>
                    </div>
                    <div>
                        <h2>Características</h2>
                        <ul>
                            <li>Gestión eficiente del manejo de estado de la aplicación, facilita el manejo de datos y la comunicación entre componentes.</li>
                            <li>Utiliza axios para hacer llamadas a la PokeAPI y obtener los datos necesarios.</li>
                            <li>Explora la lista completa de Pokémon.</li>
                            <li>Visualiza detalles de un pokemon específico, como su tipo, habilidades y estadísticas</li>
                            <li>Interactúa con una interfaz intuitiva y fácil de usar.</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Tecnologías utilizadas</h2>
                        <p>Redux.js, Redux Toolkit, Axios</p>
                    </div>
                </figure>
            </div>
        </section>
    )
}