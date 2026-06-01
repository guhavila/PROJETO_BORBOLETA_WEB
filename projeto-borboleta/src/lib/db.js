export const db = {
    categorias: [
        {
            id: "fogoes",
            nome: "Fogões Camping",
            descricao: "Fogões para usar ao ar livre.",
            caminhoImg: "/imgProdutos/fogaoscamingPT.png"
        },
        {
            id: "central-gas",
            nome: "Central de Gás",
            descricao: "Aqui você encontra tudo para gás.",
            caminhoImg: "/imgProdutos/Centralgas.png"
        },
        {
            id: "reguladores",
            nome: "Reguladores",
            descricao: "Reguladores de gás de todos os tipos.",
            caminhoImg: "/imgProdutos/valvula.png"
        },
        {
            id: "kits-gas",
            nome: "Kits Gás",
            descricao: "Kits completos para instalação de gás.",
            caminhoImg: "/imgProdutos/mangueira.png"
        }
    ],
    produtos: [
        {
            id: "fogao-portatil-2-bocas-camping-preto",
            categoriaId: "fogoes",
            nome: "Fogão Portátil 2 Bocas Camping - Preto",
            descricao: "Ideal para camping, acampamento, festas e uso doméstico. Baixa pressão, compatível com botijão com válvula reguladora de gás GLP.",
            preco: "R$ 72,00",
            caminhoImg: "/imgProdutos/fogaoscamingPT.png",
            codigoFornecedor: "FGCAMPING-1UN"
        },
        {
            id: "fogao-portatil-2-bocas-camping-bege",
            categoriaId: "fogoes",
            nome: "Fogão Portátil 2 Bocas Camping - Bege",
            descricao: "Ideal para camping, acampamento, festas e uso doméstico. Baixa pressão, compatível com botijão com válvula reguladora de gás GLP.",
            preco: "R$ 72,00",
            caminhoImg: "/imgProdutos/fogaoscamingBG.png",
            codigoFornecedor: "FGCAMPING-BG-1UN"
        },
        {
            id: "fogao-portatil-2-bocas-camping-azul",
            categoriaId: "fogoes",
            nome: "Fogão Portátil 2 Bocas Camping - Azul",
            descricao: "Ideal para camping, acampamento, festas e uso doméstico. Baixa pressão, compatível com botijão com válvula reguladora de gás GLP.",
            preco: "R$ 72,00",
            caminhoImg: "/imgProdutos/fogaoscamingAZ.png",
            codigoFornecedor: "FGCAMPING-AZ-1UN"
        },
        {
            id: "fogao-portatil-2-bocas-camping-marrom",
            categoriaId: "fogoes",
            nome: "Fogão Portátil 2 Bocas Camping - Marrom",
            descricao: "Ideal para camping, acampamento, festas e uso doméstico. Baixa pressão, compatível com botijão com válvula reguladora de gás GLP.",
            preco: "R$ 72,00",
            caminhoImg: "/imgProdutos/fogaoscamingMARROM.png",
            codigoFornecedor: "FGCAMPING-MARROM-1UN"
        },
        {
            id: "fogao-portatil-2-bocas-camping-vermelho",
            categoriaId: "fogoes",
            nome: "Fogão Portátil 2 Bocas Camping - Vermelho",
            descricao: "Ideal para camping, acampamento, festas e uso doméstico. Baixa pressão, compatível com botijão com válvula reguladora de gás GLP.",
            preco: "R$ 72,00",
            caminhoImg: "/imgProdutos/fogaoscamingVL.png",
            codigoFornecedor: "FGCAMPING-VL-1UN"
        },
        {
            id: "fogao-portatil-2-bocas-camping-branco",
            categoriaId: "fogoes",
            nome: "Fogão Portátil 2 Bocas Camping - Branco",
            descricao: "Ideal para camping, acampamento, festas e uso doméstico. Baixa pressão, compatível com botijão com válvula reguladora de gás GLP.",
            preco: "R$ 72,00",
            caminhoImg: "/imgProdutos/fogaoscamingBC.jpg",
            codigoFornecedor: "FGCAMPING-BC-1UN"
        },

        {
            id: "central-p13-regulador-7kg-2-botijoes",
            categoriaId: "central-gas",
            nome: "Central P13 Regulador 7kg Saída 1/2 2 Botijões",
            descricao: "Kit completo com regulador Aliança 7kg, té reversível, borboletas zamak P-13, pig tails, registros e união. Ideal para instalação de central com 2 botijões P-13.",
            preco: "R$ 169,99",
            caminhoImg: "/imgProdutos/50603-P13-1KIT.png",
            codigoFornecedor: "506/03-P13-1KIT"
        },
        {
            id: "central-gas-2-botijoes-p13-baixa-pressao",
            categoriaId: "central-gas",
            nome: "Central de Gás Para 2 Botijões P13 Regulador Baixa Pressão",
            descricao: "Kit completo com regulador Aliança 76511 12kg/h, coletor GLP com manômetro colorido, válvulas esfera, válvulas de retenção, pig tails, suportes e fixações para instalação em parede.",
            preco: "R$ 492,00",
            caminhoImg: "/imgProdutos/CENTRAL11KGP13COL-KIT.png",
            codigoFornecedor: "CENTRAL11KGP13COL-KIT"
        },

        {
            id: "kit-instalacao-mangueira-100cm",
            categoriaId: "kits-gas",
            nome: "Kit Instalação Gás Encanado Mangueira 100cm",
            descricao: "Mangueira flexível de 1,00 m para instalação de gás em fogão, forno e cooktop. Acompanha adaptador e veda rosca.",
            preco: "R$ 99,22",
            caminhoImg: "/imgProdutos/kit100cm.png",
            codigoFornecedor: "100TOMB-ADAP-VEDA-KIT"
        },

        {
            id: "regulador-medidor-alianca-manometro",
            categoriaId: "reguladores",
            nome: "Regulador Medidor de Gás Aliança com Manômetro",
            descricao: "Com visor de nível de gás, saiba se o botijão está cheio após a compra e verifique o nível quando quiser, evitando surpresas durante o preparo.",
            preco: "R$ 62,00",
            caminhoImg: "/imgProdutos/50401BT.png",
            codigoFornecedor: "504/01BT-1UN"
        },
        {
            id: "regulador-alianca-76511-12kgh",
            categoriaId: "reguladores",
            nome: "Regulador Registro Válvula Aliança 76511/01 12kg/h",
            descricao: "Regulador para gás de baixa pressão, uso comercial e industrial. Segundo estágio com capacidade de vazão de até 12 kg/h.",
            preco: "R$ 80,00",
            caminhoImg: "/imgProdutos/REG51101-1UN.png",
            codigoFornecedor: "REG511/01-1UN"
        },
        {
            id: "regulador-alianca-506-03-7kg",
            categoriaId: "reguladores",
            nome: "Regulador de Pressão Gás Aliança 506/03 7kg/h",
            descricao: "Regulador estágio único com compressão nominal de saída de 2,8 kPa. Projetado para GLP em botijões com consumo de até 7 kg por hora.",
            preco: "R$ 62,30",
            caminhoImg: "/imgProdutos/AL7650603-1UN.png",
            codigoFornecedor: "AL76506/03-1UN"
        }
    ]
};