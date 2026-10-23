import Image from "next/image"
import Link from "next/link"

// Liens utiles
const liensRapides = [
    { label: "Accueil", href: "/" },
    { label: "Réalisations", href: "/#projects" },
    { label: "Trouvailles", href: "/#tools" },
    { label: "À propos", href: "/#about" },
]

// Domaines : une simple liste de mots
const domaines = ["Graphisme", "Arts", "UI/UX Design", "Illustrations"]

const reseaux = [
    { label: "Behance", href: "https://www.behance.net/wenetchou" },
    // { label: "Instagram", href: "https://www.instagram.com/" },
]

export default function Footer() {
    return (
        <footer className="w-full overflow-hidden bg-white text-charbon">
            <div className="px-3 pt-12 md:px-12 md:pt-20">
                {/* Haut : logo à gauche, colonnes à droite */}
                <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                    <div className="max-w-xs">
                        <Image
                            src="/corvus-logotype2.svg"
                            alt="Corvus"
                            width={90}
                            height={30}
                            className="h-auto w-28"
                        />
                        <p className="mt-2 text-sm">Corvus rassemble mes réalisations en design et une sélection de ressources utiles pour créer. Un espace pour laisser libre cours à ma créativité en fait.</p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 md:flex md:gap-16">
                        {/* Colonne 1 : liens vers les sections du site */}
                        <div>
                            <h3 className="mb-3 text-sm font-medium">Liens rapides</h3>
                            <ul className="flex flex-col gap-2 text-sm">
                                {liensRapides.map((lien) => (
                                    <li key={lien.label}>
                                        <Link href={lien.href} className="hover:opacity-70 transition-opacity">
                                            {lien.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Colonne 2 : simples textes */}
                        <div>
                            <h3 className="mb-3 text-sm font-medium">Centres d&apos;intérêt</h3>
                            <ul className="flex flex-col gap-2 text-sm">
                                {domaines.map((domaine) => (
                                    <li key={domaine}>{domaine}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Colonne 3 : réseaux sociaux */}
                        <div>
                            <h3 className="mb-3 text-sm font-medium">Réseaux sociaux</h3>
                            <ul className="flex flex-col gap-2 text-sm">
                                {reseaux.map((reseau) => (
                                    <li key={reseau.label}>
                                        <a
                                            href={reseau.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:opacity-70 transition-opacity"
                                        >
                                            {reseau.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Milieu : mentions */}
                <div className="mt-16 flex flex-col gap-2 text-xs md:mt-24 md:flex-row md:justify-between">
                    <p>©2026 Corvus Tous droits réservés.</p>
                    <p>Conception et réalisation par Wen Etchou</p>
                </div>
            </div>

            {/* Bas : le grand logo, sur toute la largeur */}
            <Image
                src="/corvus-logotype2.svg"
                alt=""
                width={1600}
                height={500}
                className="mt-10 h-auto w-full md:mt-16"
            />
        </footer>
    )
}