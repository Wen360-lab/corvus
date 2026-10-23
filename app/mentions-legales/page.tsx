import Link from "next/link"

export const metadata = {
    title: "Mentions légales | Corvus",
}

export default function MentionsLegales() {
    return (
        <main className="px-3 pt-40 pb-16 md:px-12 md:pt-40 md:pb-24">
            <Link href="/" className="text-sm underline text-navy">Retour à l&apos;accueil</Link>
            <h1 className="text-black font-medium">Mentions légales</h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-8 text-sm text-charbon md:text-base">
                <section>
                    <h2 className="text-black font-medium">Éditeur du site</h2>
                    <p className="mt-2">
                        Ce site est édité par MAKANAGA ETCHOU Wen Joanel.
                        Contact : <a href="mailto:wenetchou330@gmail.com" className="underline">wenetchou330@gmail.com</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-black font-medium">Hébergement</h2>
                    <p className="mt-2">
                        Le site est hébergé par Vercel Inc. [adresse à copier depuis le site de Vercel].
                    </p>
                </section>

                <section>
                    <h2 className="text-black font-medium">Propriété intellectuelle</h2>
                    <p className="mt-2">
                        Les créations présentées sur ce site (logos, identités visuelles, maquettes,
                        illustrations) sont protégées. Toute reproduction ou réutilisation nécessite
                        mon accord préalable.
                    </p>
                </section>

                <section>
                    <h2 className="text-black font-medium">Données personnelles</h2>
                    <p className="mt-2">
                        Ce site ne collecte aucune donnée personnelle de ses visiteurs. Pour me
                        contacter, vous pouvez m&apos;écrire par email ou passer par mon profil Behance.
                    </p>
                </section>
            </div>
        </main>
    )
}