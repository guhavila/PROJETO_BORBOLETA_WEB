import Header from "@/app/components/Header";
import Carrousel from "@/app/components/Carrousel";
import ProductCard from "@/app/components/ProductCard";
import Footer from "@/app/components/Footer";

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
              <ProductCard link="/utensilios.html" imgSrc="/tabua.webp" title="Utensílios para cozinha" />
              <ProductCard link="/jarras.html" imgSrc="/liquidificador.webp" title="Liquidificador" />
              <ProductCard link="/kits.html" imgSrc="/mangueira.webp" title="Kits para instalação" />
            </div>
          </section>

          <section className="items">
            <h2>Categorias</h2>
            <div className="container-items">
              <ProductCard link="/produtos/fogoes" imgSrc="/fogao.webp" title="Fogões Camping" />
              <ProductCard link="/regulador.html" imgSrc="/Regulador.webp" title="Reguladores" />
              <ProductCard link="/central.html" imgSrc="/Central.png" title="Central de gás" />
            </div>
          </section>
        </section>
      </main>

      <Footer/>
    </>
  );
}
