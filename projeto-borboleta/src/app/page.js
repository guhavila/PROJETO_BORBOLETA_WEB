import Header from "@/app/components/Header";
import Carrousel from "@/app/components/Carrousel";
import ProductCard from "@/app/components/ProductCard";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Carrousel />

        <section id="popular">
          <section className="items">
            <h2>Mais vendidos</h2>
            <div className="container-items">
              <ProductCard link="/utensilios.html" imgSrc="/img/tabua.webp" title="Utensílios para cozinha" />
              <ProductCard link="/jarras.html" imgSrc="/img/liquidificador.webp" title="Liquidificador" />
              <ProductCard link="/kits.html" imgSrc="/img/mangueira.webp" title="Kits para instalação" />
            </div>
          </section>

          <section className="items">
            <h2>Categorias</h2>
            <div className="container-items">
              <ProductCard link="/camping.html" imgSrc="/img/fogao.webp" title="Fogões Camping" />
              <ProductCard link="/regulador.html" imgSrc="/img/Regulador.webp" title="Reguladores" />
              <ProductCard link="/central.html" imgSrc="/img/Central.png" title="Central de gás" />
            </div>
          </section>
        </section>
      </main>

      <footer id="contato">
        <article className="info-empresa">
          <h3>Canal Center</h3>
          <p><i className="fas fa-map-marker-alt"></i> Rua Major Otaviano, 232 - SP</p>
          <a href="/formulario.html" className="btn-contato">Contate-nos</a>
        </article>
      </footer>
    </>
  );
}
