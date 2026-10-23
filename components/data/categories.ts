// Liste des catégories affichées dans la section Catégories

export type Categorie = {
    numero: string
    nom: string
    fond: string      // le dégradé de couleur (utilisé tant qu'il n'y a pas d'image)
    image?: string    
}

export const categories: Categorie[] = [
    {
        numero: "01",
        nom: "UI/UX Design",
        fond: "linear-gradient(180deg, #0b4a80 0%, #6f93bb 55%, #001f3d 100%)",
    },
    {
        numero: "02",
        nom: "Graphisme",
        fond: "linear-gradient(180deg, #001a38 0%, #003566 60%, #00408a 100%)",
    },
    {
        numero: "03",
        nom: "Illustrations",
        fond: "linear-gradient(180deg, #003566 0%, #002a52 50%, #001428 60%, #003a70 100%)",
    },
]