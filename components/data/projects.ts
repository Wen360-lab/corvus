// Liste des projets affichés dans la section Réalisations

export type Projet = {
    id: number
    titre: string
    categorie: string
    description: string
    images: string[]
}

export const projects: Projet[] = [
    {
        id: 1,
        titre: "Portail Portfolio",
        categorie: "UI/UX Design",
        description:
            "Portail portfolio est une plateforme web dont le but est de centraliser les développeurs en formation à l'École 241, plus précisément la promo 14.",
        images: [],
    },
    {
        id: 2,
        titre: "Corvus Design",
        categorie: "Graphisme",
        description: "Identité visuelle autour d'un corbeau.",
        images: [],
    },
]