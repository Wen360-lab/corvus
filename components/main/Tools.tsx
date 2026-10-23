import Image from "next/image"
import { tools } from "@/components/data/tools"

// Section Trouvailles : ressources et outils utiles
export default function Tools() {
    return (
        <section id="tools" className="w-full scroll-mt-24">
            {/* Bande blanche : le titre */}
            <div className="px-3 py-6 md:px-12 md:py-20">
                <h2 className="text-black font-medium text-4xl">Trouvailles</h2>
                <p className="text-charbon text-xl">Toutes les ressources utiles et inimaginables</p>
            </div>

            {/* Un bloc bleu marine par outil */}
            {tools.map((outil) => (
                <article
                    key={outil.id}
                    className="flex flex-col gap-6 bg-navy px-3 py-8 text-white md:flex-row md:gap-12 md:px-12 md:py-12 border-t-8 border-whitesmoke"
                >
                    {/* Image à gauche */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-md bg-white md:aspect-square md:w-2/5">
                        {outil.image && (
                            <Image src={outil.image} alt={outil.nom} fill className="object-cover" />
                        )}
                    </div>

                    {/* Texte à droite */}
                    <div className="flex flex-1 flex-col justify-between gap-6">
                        <h3 className="text-right text-2xl italic">{outil.nom}</h3>
                        <p className="text-sm md:text-right">{outil.description}</p>
                        <p className="text-right text-sm">
                            Lien de l&apos;outil :{" "}
                            <a
                                href={outil.lien}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:opacity-80"
                            >
                                {outil.lien}
                            </a>
                        </p>
                    </div>
                </article>
            ))}
        </section>
    )
}