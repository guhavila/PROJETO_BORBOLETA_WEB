# PROJETO_BORBOLETA_WEB_MOBILE
Repositório para a segunda etapa do projeto de Web Mobile

**Equipe:** 
* Gustavo Ávila Santos - 10753199
* Guilherme Ferraz Cabral - 10749385
* João Vitor Alves de Freitas - 10756078
* Enzo Marinho Bertoldo - 10752887


# Projeto: E-commerce de Acessórios de Gás

## 📌 Visão Geral
Este projeto consiste no desenvolvimento de um site de e-commerce focado na venda de acessórios de gás. A plataforma oferece navegação simples, rápida e intuitiva, permitindo que os usuários encontrem facilmente os produtos desejados e solicitem orçamentos.

## 🎯 Objetivos
- Exibir produtos organizados por categorias
- Facilitar a navegação e busca por itens específicos
- Criar uma experiência visual moderna e responsiva
- Direcionar o usuário rapidamente para os produtos de interesse

---

## 🗂️ Banco de Dados

Os dados do site ficam em `src/lib/db.js`. O arquivo exporta um objeto com dois arrays:
- `categorias` — cada item tem `id`, `nome`, `descricao` e `caminhoImg`
- `produtos` — cada item tem `id`, `categoriaId`, `nome`, `descricao`, `preco`, `caminhoImg` e `codigoFornecedor`

Para adicionar ou editar produtos e categorias basta mexer nesse arquivo.

`src/lib/db.js`, linha 1–141

---

## 🔌 API

A API é uma Route Handler do Next.js que lê o `db.js` e retorna os dados em JSON.

**GET /api/produtos** — retorna todas as categorias e produtos  
`src/app/api/produtos/route.js`, linha 1–5

**GET /api/produtos/[id]** — retorna um produto pelo ID  
`src/app/api/produtos/[id]/route.js`, linha 1–10

---

## 🖥️ Estrutura das Páginas

### 1. Layout Global
Envolve todas as páginas. Define o título da aba ("Canal Center"), importa o CSS global e renderiza o Header e Footer em torno do conteúdo.

`src/app/layout.js`, linha 1–35

---

### 2. Header
Localizado no topo de todas as páginas. Contém a logo clicável (link para a home), menu hambúrguer para mobile e links de navegação: Home, Produtos e Contato.

`src/app/components/Header.js`, linha 1–31  
`src/app/components/Header.module.css`

---

### 3. Home Page
Busca as categorias via API e as exibe em cards clicáveis. Cada card redireciona para a página de produtos daquela categoria. Acima das categorias há um carrossel de banners.

`src/app/page.js`, linha 1–38  
`src/app/page.module.css`

---

### 4. Carrossel
Exibe 3 slides com navegação por botões. Cada slide é um link:
- Slide 1 → Central de Gás (`/produtos/central-gas`)
- Slide 2 → Fogões Camping (`/produtos/fogoes`)
- Slide 3 → Formulário de contato (`/contato`)

As imagens ficam em `public/slides/`.

`src/app/components/Carrousel.js`, linha 1–57  
`src/app/components/Carrousel.module.css`

---

### 5. Card de Categoria
Componente reutilizável exibido na home. Mostra imagem em box fixo (300×200), nome e descrição da categoria.

`src/app/components/CardCategoria.js`, linha 1–28  
`src/app/components/CardCategoria.module.css`

---

### 6. Página de Categoria (Lista de Produtos)
Rota dinâmica que recebe o `categoriaId` pela URL. Filtra e exibe os produtos daquela categoria em cards clicáveis. Aceita também `/produtos/todos` para exibir todos os produtos.

`src/app/produtos/[categoriaId]/page.js`, linha 1–75  
`src/app/produtos/[categoriaId]/page.module.css`

---

### 7. Card de Produto
Componente reutilizável exibido na listagem de produtos. Mostra imagem em box fixo (300×200), nome e preço do produto.

`src/app/components/CardProduto.js`, linha 1–25  
`src/app/components/CardProduto.module.css`

---

### 8. Página de Produto
Rota dinâmica que recebe o `id` do produto pela URL. Exibe imagem, nome, descrição, preço, código do fornecedor e botão "Solicitar Orçamento" que redireciona para o formulário de contato.

`src/app/produtos/[categoriaId]/[id]/page.js`, linha 1–67  
`src/app/produtos/[categoriaId]/[id]/page.module.css`

---

### 9. Formulário de Contato
Página com formulário de solicitação de orçamento. Possui campos de nome, e-mail, telefone, CPF/CNPJ (com formatação automática), nome da empresa (exibido apenas para CNPJ) e descrição do projeto. Ao enviar, exibe uma mensagem de confirmação.

`src/app/contato/page.js`, linha 1–152  
`src/app/contato/contato.module.css`

---

### 10. Footer
Exibe a logo (link para a home), endereço, telefone e botão "Contate-nos" que leva ao formulário.

`src/app/components/Footer.js`, linha 1–18  
`src/app/components/Footer.module.css`

---

## 🔀 Navegação e Rotas

| Rota | Descrição |
|---|---|
| `/` | Home — carrossel + categorias |
| `/produtos/todos` | Lista todos os produtos |
| `/produtos/[categoriaId]` | Lista produtos de uma categoria |
| `/produtos/[categoriaId]/[id]` | Detalhe de um produto |
| `/contato` | Formulário de orçamento |

---

## 🗃️ Estrutura de Pastas

```
projeto-borboleta/
├── public/
│   ├── Logo.png
│   ├── slides/          # Imagens do carrossel
│   ├── imgCategorias/   # Imagens das categorias
│   └── imgProdutos/     # Imagens dos produtos
├── src/
│   ├── lib/
│   │   └── db.js        # Dados (categorias e produtos)
│   └── app/
│       ├── api/produtos/ # API Routes
│       ├── components/   # Header, Footer, Cards, Carrossel
│       ├── produtos/     # Páginas de categoria e produto
│       ├── contato/      # Formulário de orçamento
│       ├── globals.css
│       └── layout.js
```
