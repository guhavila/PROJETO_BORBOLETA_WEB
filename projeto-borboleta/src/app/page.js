'use client'

import Carrousel from "@/app/components/Carrousel";
import CardCategoria from "./components/CardCategoria";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
    const [categorias, setCategorias] = useState([]);
    
    async function carregarCategorias() {
      const res = await fetch("/api/produtos");
      const dado = await res.json();
      setCategorias(dado.categorias);
    }
  
    useEffect(() => {
        carregarCategorias();
    }, []);

    return (
        <main>
            <Carrousel />

            <section id="popular">
                <section className={styles.secao}>
                    <h2>Categorias</h2>
                    
                    <div className={styles.items}>
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </section>
            </section>
        </main>
    );
}