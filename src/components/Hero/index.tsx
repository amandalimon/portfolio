import Image from "next/image";

export const Hero = () => {
    return (
        <section className="bg-navy h-screen flex justify-center items-center">
            <Image
                src="/images/hero.gif"
                alt="hero"
                width={700}
                height={700}
            />
            <div className="absolute flex flex-col justify-center items-center">
                <h1
                    className="font-nova text-2xl font-bold text-center">Amanda Carolina Limón Fernández
                </h1>
                <h2
                    className="font-mono text-xl text-center">Frontend Developer Junior
                </h2>
            </div>
        </section>
    )
}