// Liste des outils affichés dans la section Trouvailles

export type Outil = {
    id: number
    nom: string
    description: string
    lien: string
    image?: string
}

export const tools: Outil[] = [
    {
        id: 1,
        nom: "Nom de l'outil",
        description: "Description de ce que fait l'outil.",
        lien: "https://www.outils.com",
        image: "/tools/",
    }, 
    
    {
        id: 2,
        nom: "Nom de l'outil",
        description: "Description de ce que fait l'outil.",
        lien: "https://www.outils.com",
        image: "/tools/",
    },
]