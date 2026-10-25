// Liste des projets affichés dans la section Réalisations

export type Projet = {
    id: number
    titre: string
    categorie: string
    description: string
    images: string[]
}

export const projects: Projet[] = [
    // {
    //     id: 1,
    //     titre: "Prezence",
    //     categorie: "UI/UX Design",
    //     description:
    //         "Prezence est une apllication web permettant de gérer plus efficacment l'assiduité des élèves.",
    //     images: [],
    // },
    {
        id: 2,
        titre: "Corvus Design",
        categorie: "Graphisme",
        description: "Identité visuelle autour d'un corbeau.",
        images: ["/projects/Signboard_Mockup_1_V2.png", "/projects/MacBook_Mockup_3.png","/projects/Free_Baseball_Cap_Mockup_1.png", "/projects/Bag_Chair_Mockup_4.png"],
    },
]