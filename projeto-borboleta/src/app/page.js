'use client'

import Header from "@/app/components/Header";
import Carrousel from "@/app/components/Carrousel";
import ProductCard from "@/app/components/ProductCard";
import Footer from "@/app/components/Footer";
import CardProduto from "./components/CardProduto";
import CardCategoria from "./components/CardCategoria";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
    const [categorias, setCategorias] = useState([]);
    async function carregarCategorias() {
        const res = await fetch("/api/produtos");
        const dado = await res.json();
        

        setCategorias(dado.categorias);
        console.log(dado)
    }
  
    useEffect(() => {
        carregarCategorias();
    }, []);

  return (
      <main>
        <Carrousel />

        <section id="popular">
          {/*<section className="items">
            <h2>Mais vendidos</h2>
            <div className="container-items">
              <ProductCard link="/utensilios.html" imgSrc="/tabua.webp" title="Utensílios para cozinha" />
              <ProductCard link="/jarras.html" imgSrc="/liquidificador.webp" title="Liquidificador" />
              <ProductCard link="/kits.html" imgSrc="/mangueira.webp" title="Kits para instalação" />
            </div>
          </section>*/}

          <section className="items">
            <h2>Categorias</h2>
            <div className="container-items">
              {categorias.map((categoria) => (
                    <CardCategoria key={categoria.id} categoria={categoria} />
                ))}
              </div>

          </section>
        </section>
      </main>
  );
}
