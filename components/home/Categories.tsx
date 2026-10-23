import Image from "next/image"
import { categories } from "@/components/data/categories"

// Section Catégories : les domaines de création
export default function Categories() {
    return (
        <section id="categories" className="w-full scroll-mt-24 px-3 py-12 md:px-12 md:pt-20">
            <h2 className="text-black font-medium text-4xl">Catégories</h2>
            <p className="text-charbon text-xl">Explorer la diversité de l&apos;art</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
                {categories.map((categorie) => (
                    <article
                        key={categorie.nom}
                        className="relative aspect-4/3 overflow-hidden rounded-md shadow md:aspect-3/4"
                        style={{ background: categorie.fond }}
                    >
                        {/* Image par-dessus le dégradé */}
                        {categorie.image && (
                            <>
                                <Image src={categorie.image} alt="" fill className="object-cover" />
                                {/* Voile sombre pour que le texte reste lisible */}
                                <div className="absolute inset-0 bg-black/30" />
                            </>
                        )}

                        {/* Texte en bas à gauche */}
                        <div className="absolute bottom-0 left-0 p-5 text-white">
                            <p className="text-lg">{categorie.numero}</p>
                            <h3 className="text-xl font-medium">{categorie.nom}</h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}