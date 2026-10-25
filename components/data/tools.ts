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
    
    {
        id: 2,
        nom: "SVGL",
        description: "SVGL est une bibliothèque de logos de marques et d’outils au format SVG, nets à toutes les tailles. On les trouve par recherche ou par catégorie (IA, design, paiement, hébergement...), souvent en version claire et sombre. Le projet est ouvert et propose aussi une API et des extensions.",
        lien: "https://www.svgl.app",
        image: "/tools/svgl.png",
    },

    {
        id: 3,
        nom: "1001Fonts",
        description: "1001 Fonts est un annuaire de milliers de polices gratuites, créées par des designers indépendants et classées par style (manuscrit, serif, display...). Chaque police affiche sa licence, ce qui permet de savoir si elle est réservée à un usage personnel ou utilisable aussi dans des projets commerciaux.",
        lien: "https://www.1001fonts.com/",
        image: "/tools/1001Fonts.png",
    },
]