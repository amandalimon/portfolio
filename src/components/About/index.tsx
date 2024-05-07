import Image from "next/image"

export const About = () => {
    return (
        <section className="flex  h-screen justify-center items-center text-xl bg-grey">
            <div className="flex border-2 m-80 p-4">
                {/* <div className="rounded-full">
                    <Image
                        src="/images/me.gif"
                        alt="me"
                        width={500}
                        height={500}
                    />
                </div> */}
                
                <section className="flex-col">
                    <h1 className="font-inconsolata uppercase">Sobre mi</h1>
                    <p className="font-arsenal">Aspirante a desarrolladora frontend junior con sólida especialización en el framework de JavaScript React. Mi enfoque de estudio se ha centrado en dominar esta tecnología a profundidad, lo que me ha permitido comprender la arquitectura web y crear experiencias de usuario intuitivas y atractivas. Estoy emocionada por aplicar mi experiencia en un entorno profesional y contribuir al desarrollo de proyectos innovadores.</p>
                </section>

            </div>
        </section>
    )
}