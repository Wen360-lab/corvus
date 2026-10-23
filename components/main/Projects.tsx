import Image from "next/image"
import { projects } from "@/components/data/projects"

// Un rectangle pour une image. S'il n'y a pas encore d'image, il reste blanc
function Visuel({ src, alt, className }: { src?: string; alt: string; className: string }) {
    return (
        <div className={`relative overflow-hidden rounded-md bg-white ${className}`}>
            {src && <Image src={src} alt={alt} fill className="object-cover" />}
        </div>
    )
}

// Section Réalisations : projets réalisés
export default function Projects() {
    return (
        <section id="projects" className="w-full scroll-mt-24">
            {/* Bande blanche : le titre */}
            <div className="px-3 py-6 md:px-12 md:py-20">
                <h2 className="text-black font-medium text-4xl">Réalisations</h2>
                <p className="text-charbon text-xl">Des idées à des projets concrets</p>
            </div>

            {/* Un bloc bleu marine par projet */}
            {projects.map((projet, index) => (
                <article key={projet.id} className="bg-navy px-3 py-8 text-white md:px-12 md:py-16 border-t-8 border-whitesmoke">
                    <div className="text-right">
                        <p className="font-medium">PROJET N°{index + 1}</p>
                        <p className="text-sm">{projet.categorie}</p>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="md:max-w-xs">
                            <p className="text-sm underline">Description du projet</p>
                            <p className="mt-2 text-sm">{projet.description}</p>
                        </div>
                        <h3 className="text-2xl italic uppercase md:text-4xl">{projet.titre}</h3>
                    </div>

                    <div className="mt-8 flex flex-col gap-4">
                        <Visuel src={projet.images[0]} alt={projet.titre} className="h-75 w-full md:h-150" />
                        <div className="flex gap-4">
                            <Visuel src={projet.images[1]} alt={projet.titre} className="h-60 flex-1 md:h-90" />
                            <Visuel src={projet.images[2]} alt={projet.titre} className="h-60 flex-1 md:h-90" />
                        </div>
                    </div>
                </article>
            ))}
        </section>
    )
}