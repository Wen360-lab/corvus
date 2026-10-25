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
        nom: "FeralUI",
        description: "FeralUI est un générateur de dégradés en ligne et gratuit. On y mélange des couleurs inspirées des teintes traditionnelles japonaises pour créer des fonds doux, granuleux ou animés. Le résultat s’exporte en image (SVG, PNG), en vidéo (MP4) ou en code prêt à l’emploi (React, HTML, CSS, JSON). Aucun compte n’est nécessaire.",
        lien: "https://feralui.dev/gradients",
        image: "/tools/feralui.dev_gradient_sceenshot.png",
    }, 
    
    // {
    //     id: 2,
    //     nom: "Nom de l'outil",
    //     description: "Description de ce que fait l'outil.",
    //     lien: "https://www.outils.com",
    //     image: "/tools/",
    // },
]