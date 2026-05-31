export const db = {
    categorias: [
        {
            id: "fogoes",
            nome: "Fogões Camping",
            descricao: "Fogoes para usar ao ar livre.",
            caminhoImg: "/fogao.webp"
        },
        {
            id: "central-gas",
            nome: "Central de gas",
            descricao: "Aqui você encontra tudo para gas.",
            caminhoImg: "/Central.png"
        },
        {
            id: "reguladores",
            nome: "Reguladores",
            descricao: "Reguladores de todos os tipos.",
            caminhoImg: "/Regulador.webp"
        }
    ],
    produtos: [
        {
            id: "fogareiro-portatil-pequeno",
            categoriaId: "fogoes",
            nome: "Fogareiro Portátil Pequeno",
            descricao: "Leve, prático e cabe na mochila.",
            preco: "R$ 100,90",
            caminhoImg: "/fogao.webp"
        },
        {
            id: "fogareiro-portatil-grande",
            categoriaId: "fogoes",
            nome: "Fogareiro Portátil Grande",
            descricao: "Autonomia de até 3 horas em fogo máximo.",
            preco: "R$ 300,00",
            caminhoImg: "/fogao.webp"
        },
                {
            id: "fogareiro-portatil-medio",
            categoriaId: "fogoes",
            nome: "Fogareiro Portátil Medio",
            descricao: "Leve, prático e cabe na mochila.",
            preco: "R$ 200,90",
            caminhoImg: "/fogao.webp"
        },
        {
            id: "fogareiro-portatil-gigante",
            categoriaId: "fogoes",
            nome: "Fogareiro Portátil Gigante",
            descricao: "Autonomia de até 3 horas em fogo máximo.",
            preco: "R$ 400,00",
            caminhoImg: "/fogao.webp"
        },

        {
            id: "mangueira-pequena",
            categoriaId: "central-gas",
            nome: "Magueira dourada Grande",
            descricao: "Resistente, grande e elegante.",
            preco: "R$ 50,00",
            caminhoImg: "/mangueira.webp"
        },
        {
            id: "magueira-grande",
            categoriaId: "central-gas",
            nome: "Magueira dourada Pequena",
            descricao: "Resistente e elegante.",
            preco: "R$ 85,00",
            caminhoImg: "/mangueira.webp"
        }
    ]
};