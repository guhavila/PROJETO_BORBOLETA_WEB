import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const carrosel = document.getElementById("carrosel");
const slides = document.getElementById("slides");
const secaoProdutos = document.getElementById('popular');

let index = 0;

function moverCarrosel() {
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function voltarIndex() {
    if (index>0) {
        index--;
    }
    moverCarrosel()
}

function avancarIndex() {
    if (index<2) {
        index++;
    }
    moverCarrosel()
}

function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('ativo');
}
  return (
<body>
    <header>
        <a href="index.html"><Image src="img/Logo.png" alt="Logo"/></a>
        
        <button className="menu" id="btnMenu" onclick="toggleMenu()" aria-label="Abrir Menu">
            <i className="fas fa-bars"></i>
        </button>

        <nav id="navMenu">
            <a href="index.html">Home</a>
            <a href="#">Produto</a>
        </nav>
    </header>

    <section id="carrosel">
        <section onclick="rolar()" id="slides">
            <a href="kits.html" className="slide-link">
                <Image src="img/Tudo para sua instalação.png" alt="slide1 - Kits"/>
            </a>
            <a href="pagina-utensilios.html" className="slide-link">
                <I src="img/slide_utencilios.png" alt="slide2 - Utensílios"/>
            </a>
            <a href="formulario.html" className="slide-link">
                <Image src="img/slide_conheca.png" alt="slide3 - Formulário"/>
            </a>
        </section>
        
        <button className="btn_carrosel" id="voltarBtn" onclick="voltarIndex()">Voltar</button>
        <button className="btn_carrosel" id="avancarBtn" onclick="avancarIndex()">Avançar</button>
    </section>

    <section id="popular">
        <section className="items">
            <h2>Mais vendidos</h2>
            <section className="container-items">
                <a href="pagina-utensilios.html" className="link-card">
                    <article>
                        <Image src="img/tabua.webp" alt="produto-1"/>
                        <p>Utensílios para cozinha</p>
                    </article>
                </a>
                <a href="jarras.html" className="link-card">
                    <article>
                        <Image src="img/liquidificador.webp" alt="produto-2"/>
                        <p>Liquidificador</p>
                    </article>
                </a>
                <a href="kits.html" className="link-card">
                    <article>
                        <Image src="img/mangueira.webp" alt="produto-3"/>
                        <p>Kits para instalação</p>
                    </article>
                </a>
            </section>
        </section>
        
        <section className="items">
            <h2>Categorias</h2>
            <section className="container-items">
                <a href="pagina-utensilios.html" className="link-card">
                    <article>
                        <Image src="img/fogao.webp" alt="categoria-1"/>
                        <p>Fogões Camping</p>
                    </article>
                </a>
                <a href="regulador.html" className="link-card">
                    <article>
                        <Image src="img/Regulador.webp" alt="categoria-2"/>
                        <p>Reguladores</p>
                    </article>
                </a>
                <a href="kits.html" className="link-card">
                    <article>
                        <Image src="img/Central.png" alt="categoria-3"/>
                        <p>Central de gás</p>
                    </article>
                </a>
            </section>
        </section>
    </section>

    <footer id="contato">
        <article className="info-empresa">
            <h3>Canal Center</h3>
            <p><i className="fas fa-map-marker-alt"></i> Rua Major Otaviano, 232, andar 2 - São Paulo, SP</p>
            <p><i className="fas fa-phone"></i> (11) 2613-3245</p>
            <p><i className="fas fa-envelope"></i> contato@canalcenter.com.br</p>

            <a href="formulario.html" className="btn-contato">Contate-nos</a>
        </article>

        <section id="redes-sociais">
            <h3>Fale Conosco</h3>
            <div className="icones-redes">
                <a href="" target="_blank" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            </div>
        </section>
     </footer>
    <script src="script.js"></script>
</body>
 );
}
