# PROJETO_BORBOLETA_WEB_MOBILE
Repositório para a segunda etapa do projeto de Web Mobile

**Equipe:** 
* Gustavo Ávila Santos - 10753199
* Guilherme Ferraz Cabral - 10749385
* João Vitor Alves de Freitas - 10756078
* Enzo Marinho Bertoldo - 10752887


# Projeto: E-commerce de Acessórios de Gás

## Visão Geral
Este projeto consiste no desenvolvimento de um site de e-commerce focado na venda de acessórios de gás. A plataforma oferece navegação simples, rápida e intuitiva, permitindo que os usuários encontrem facilmente os produtos desejados e solicitem orçamentos.

## Caráter extensionista
O projeto cumpre o papel extensionista ao promover a inovação tecnológica em uma empresa sem divulgação social, conectando de forma eficiente a distribuidora, construtoras e o consumidor final. A plataforma amplifica o acesso ao público em que ao mesmo tempo fornece ao usuário informações técnicas, auxiliando o consumidor doméstico e lojistas na escolha de produtos de qualidade e segurança com serviços eficientes e transparentes. Ao oferecer uma forma de visualização de produtos referentes a instalação de gás mais expostos e intuitivos em um site, será feita uma conscientização de uso adequado e da necessidade dos compradores e interessados.
Ao entrar em contato com a empresa, um obstáculo na hora de captar novos clientes é a falta de uma apresentação do catálogo extenso para novos clientes e até clientes recorrentes. Nesse projeto o objetivo é ajudar a empresa montando um cartão de visitas para expor o que a distribuidora realmente tem a oferecer no mercado.

---

## Tutorial do projeto

### API
A chamada do get da api retornará um objeto do src/lib/db.js contendo 2 listas nele, cada lista é composta por outros objetos dentro: categoria e produtos.

A lista de categorias contém as categorias dos produtos contidos em objetos, dentro de cada objeto tem o id da categoria, nome da categoria, descrição e o caminho da imagem de cada categoria da loja.
<img width="886" height="303" alt="image" src="https://github.com/user-attachments/assets/70d16c07-f8e2-4d8f-8071-5815d2930db9" />

A lista de produtos contém todos os produtos contidos em objetos, dentro de cada objeto tem o id do produto, o id da categoria que esse produto pertence, nome do produto, descrição, preço, caminho da imagem e o código do fornecedor. 
<img width="886" height="348" alt="image" src="https://github.com/user-attachments/assets/61fd2484-006d-45cb-8e1e-f539f28d7b17" />

---

### Componentes do site:
O site é composto por diversos componentes como o Header, Footer, Carrossel, CardProduto e CardCategoria e seus respectivos módulos css.

#### 1. Header e Footer
O Header contém a logo e o link com o acesso a outras rotas do site. Quando a largura do site fica menor que 800px, ele transforma os links em um menu hamburguer.
O Footer contém a logo e as informações referentes a empresa, além de levar para rota de contato.

Tanto o Header, quanto o Footer forem adicionados no Layout.js, para que sempre que for acessado uma nova rota, não precisar recarregar eles, além de facilitar com a reutilização do código.
<img width="886" height="368" alt="image" src="https://github.com/user-attachments/assets/e6edf436-a3dc-46f6-a689-03fa0bc97530" />

#### 2. Carrossel
Exibe 3 slides com navegação por botões. Cada slide é um link:
- Slide 1 → Central de Gás ("/produtos/central-gas")
- Slide 2 → Fogões Camping ("/produtos/fogoes")
- Slide 3 → Formulário de contato ("/contato")

As imagens ficam em "public/slides/".

#### 3. CardProduto e CardCategoria
Os componentes CardProduto e CardCategoria exibem os conteúdos do objeto recebido através do Props.

---

### Rotas simples e dinâmica:
A rota simples é a de contato ("/contato"), onde dispõe de um formulário para o preenchimento do orçamento

As rotas dinâmicas são referentes a página da categoria dos produtos e do produto em si.
A rota de [categoriaId] ("/produtos/[categoriaId]") usa o useEffect no cliente side para executar a função que chama a API para pegar categorias e produtos. 
<img width="886" height="504" alt="image" src="https://github.com/user-attachments/assets/ba9d4796-077d-4a1b-82ed-2968c0b65a42" />

Usando o categoriaId do params, ele compara e pega o nome da categoria do objeto da lista de categorias para exibir na pagina.
Ele também utiliza um filter na lista de objetos produtos, onde compara o id da categoria do produto com o id da rota da url, retornando todos os produtos pertencente aquela categoria. Se o id for “todos”, ele ignora esse filter e retorna todos os produtos, independente da categoria.
Ultilizamos o .length na lista que o filter retornou (ou diretamente na lista com os produtos, caso o id seja "todos"), para mostrar a quantidade de itens daquela categoria.
<img width="886" height="463" alt="image" src="https://github.com/user-attachments/assets/ad3e80ef-b111-4ffd-ba6f-ec4def785964" />

Na rota de [id] ("/produtos/[categoriaId]/[id]"), ele mostra todas as informações do produto em específico que for solicitado pelo id dele e clicando no button, direciona o usuário para a rota de contato para fazer o orçamento.
<img width="886" height="368" alt="image" src="https://github.com/user-attachments/assets/64185765-8582-4a8c-8698-51a2c7066ad0" />

---

### Estrutura das imagens

Elas foram organizadas em diretorios dentro de "/public":
- /public/imgCategorias: as imagens das categorias.
- /public/imgProdutos: as imagens dos produtos.
- /public/slides: os slides do carrossel.
