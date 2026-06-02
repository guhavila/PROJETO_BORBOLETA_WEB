// Gustavo Ávila Santos - 10753199
// Guilherme Ferraz Cabral - 10749385
// João Vitor Alves de Freitas - 10756078
// Enzo Marinho Bertoldo - 10752887

"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Carrousel.module.css";
import Link from "next/link";

const slidesData = [
  { href: "/produtos/central-gas", src: "/slides/Tudo_para_sua_instalacao.png", alt: "Centrais de Gás" },
  { href: "/produtos/fogoes", src: "/slides/slide_utencilios.png", alt: "Fogões Camping" },
  { href: "/contato", src: "/slides/slide_conheca.png", alt: "Solicitar Orçamento" },
];

export default function Carrousel() {
  const [index, setIndex] = useState(0);

  const avancar = () => setIndex((index + 1) % slidesData.length);
  const voltar = () => setIndex((index - 1 + slidesData.length) % slidesData.length);

  return (
    <section className={styles.carrosel}>
      
      <section 
        className={styles.slides}
        style={{ 
          transform: `translateX(${-index * 100}%)`, 
          transition: "transform 0.5s ease-in-out" 
        }}
      >
        {slidesData.map((slide, i) => (
          <Link key={i} href={slide.href} className={styles.slideLink}>
            <Image 
                src={slide.src} 
                alt={slide.alt} 
                width={1200} 
                height={400} 
                className={styles.imagem}
                priority={i === 0}
            />
          </Link>
        ))}
      </section>

      <button 
        className={`${styles.btnCarrosel} ${styles.voltarBtn}`} 
        onClick={voltar}>
        {"<"}
      </button>
      
      <button 
        className={`${styles.btnCarrosel} ${styles.avancarBtn}`} 
        onClick={avancar}>
        {">"}
      </button>

    </section>
  );
}