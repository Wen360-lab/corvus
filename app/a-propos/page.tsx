import Image from "next/image"
import Link from "next/link"
import { categories } from "@/components/data/categories"

export const metadata = {
    title: "À propos de Corvus",
    description: "L'histoire de Corvus et de son auteur.",
}

export default function About() {
    return (
        <main className="px-3 pt-40 pb-16 md:px-12 md:pt-40 md:pb-24">
            {/* Titre et bannière */}
            <Link href="/" className="text-sm underline text-navy">Retour à l&apos;accueil</Link>
            <h1 className="text-charbon font-medium">À propos</h1>
            <div
                className="relative mt-8 h-48 overflow-hidden rounded-md md:h-72"
                style={{ background: "linear-gradient(180deg, #0050a8 0%, #001a38 100%)" }}
            >
                <Image
                    src="/about_image_corvus.svg"
                    alt="symbole_corvus"
                    fill
                    priority
                    sizes="100vw"
                    className="hidden object-cover md:block"
                />
            </div>

            {/* Description de Corvus, avec le corbeau */}
            <section className="mt-16 flex flex-col gap-8 md:mt-24 md:flex-row md:items-center md:justify-between">
                <p className="max-w-xl text-2xl md:text-4xl">
                    Description simple de ce qu&apos;est Corvus, ses objectifs, ses ambitions.
                </p>
                <Image
                    src="/Logo-1.svg"
                    alt="logo de corvus"
                    width={300}
                    height={300}
                    className="h-auto w-24 md:w-44"
                />
            </section>

            {/* À propos de l'auteur */}
            <section className="mt-16 md:mt-24">
                <h2 className="text-3xl font-medium md:text-5xl">À propos de l&apos;auteur</h2>
                <p className="mt-6 max-w-2xl text-lg md:text-2xl">
                    Mon histoire, comment je suis arrivé au design, de manière non professionnelle mais par passion.
                </p>
            </section>

            {/* Centres d'intérêts */}
            <section className="mt-16 md:mt-24">
                <h2 className="text-3xl font-medium md:text-5xl">Mes centres d&apos;intérêts</h2>
                <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
                    {categories.map((categorie) => (
                        <article key={categorie.nom}>
                            <div
                                className="relative aspect-video overflow-hidden rounded-md shadow"
                                style={{ background: categorie.fond }}
                            >
                                <div className="absolute bottom-0 left-0 p-4 text-white">
                                    <p>{categorie.numero}</p>
                                    <h3 className="font-medium">{categorie.nom}</h3>
                                </div>
                            </div>
                            <p className="mt-4 text-base md:text-xl">{categorie.pourquoi}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Pourquoi Corvus */}
            <section className="mt-16 md:mt-24">
                <h2 className="text-3xl font-medium md:text-5xl">Pourquoi Corvus ?</h2>
                <p className="mt-6 max-w-2xl text-lg md:text-2xl">
                    Toute l&apos;histoire de Corvus, de l&apos;idée à la conception.
                </p>
            </section>

            {/* Contact */}
            <section className="mt-16 md:mt-24">
                <h2 className="text-3xl font-medium md:text-5xl">Les moyens de me contacter</h2>
                <div className="mt-6 flex flex-col gap-2 text-lg md:text-2xl">
                    <a href="mailto:wenetchou330@gmail.com" target="blank" className="underline break-all">
                        wenetchou330@gmail.com
                    </a>
                    <a
                        href="https://www.behance.net/wenetchou"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        Behance
                    </a>
                </div>
                <p className="mt-8 text-sm">
                    Les créations présentées sur ce site sont protégées. Toute réutilisation nécessite mon accord.
                </p>
            </section>
        </main>
    )
}