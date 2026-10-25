import Link from "next/link"

export const metadata = {
    title: "Mentions légales - Corvus",
}

export default function MentionsLegales() {
    return (
        <main className="px-3 pt-40 pb-16 md:px-12 md:pt-40 md:pb-24">
            <Link href="/" className="text-sm underline text-navy">Retour à l&apos;accueil</Link>
            <h1 className="text-charbon font-semibold">Mentions légales</h1>

            <div className="mt-8 flex max-w-2xl flex-col gap-8 text-sm text-charbon md:text-base">
                <section>
                    <h2 className="text-charbon font-semibold">Éditeur du site</h2>
                    <p className="mt-2">
                        Ce site est édité par <span className="font-bold">Wen ETCHOU</span>.
                        Contact : <a href="mailto:wenetchou330@gmail.com" target="blank" className="underline">wenetchou330@gmail.com</a>
                    </p>
                </section>

                <section>
                    <h2 className="text-charbon font-semibold">Hébergement</h2>
                    <p className="mt-2">
                        Le site est hébergé par Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.
                        Site web :{" "}
                        <a
                            href="https://vercel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            vercel.com
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="text-charbon font-semibold">Propriété intellectuelle</h2>
                    <p className="mt-2">
                        Les créations présentées sur ce site (logos, identités visuelles, maquettes,
                        illustrations) sont protégées. Toute reproduction ou réutilisation nécessite
                        mon accord préalable.
                    </p>
                </section>

                <section>
                    <h2 className="text-charbon font-semibold">Données personnelles</h2>
                    <p className="mt-2">
                        Ce site ne collecte aucune donnée personnelle de ses visiteurs. Pour me
                        contacter, vous pouvez m&apos;écrire par email ou passer par mon profil Behance.
                    </p>
                </section>
            </div>
        </main>
    )
}