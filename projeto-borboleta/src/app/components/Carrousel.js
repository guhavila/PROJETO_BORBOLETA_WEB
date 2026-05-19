"use client";
import { useState } from "react";
import Image from "next/image";

const slidesData = [
  { href: "/", src: "/Tudo para sua instalação.png", alt: "Kits" },
  { href: "/", src: "/slide_utencilios.png", alt: "Utensílios" },
  { href: "/", src: "/slide_conheca.png", alt: "Formulário" },
];

export default function Carrousel() {
  const [index, setIndex] = useState(0);

  const avancar = () => setIndex((index + 1) % slidesData.length);
  const voltar = () => setIndex((index - 1 + slidesData.length) % slidesData.length);

  return (
    <section id="carrosel" style={{ overflow: "hidden", position: "relative" }}>
      <section 
        id="slides" 
        style={{ 
          display: "flex", 
          transform: `translateX(${-index * 100}%)`, 
          transition: "transform 0.5s ease-in-out" 
        }}
      >
        {slidesData.map((slide, i) => (
          <a key={i} href={slide.href} className="slide-link" style={{ minWidth: "100%" }}>
            <Image src={slide.src} alt={slide.alt} width={1200} height={400} layout="responsive" />
          </a>
        ))}
      </section>

      <button className="btn_carrosel" onClick={voltar}>Voltar</button>
      <button className="btn_carrosel" onClick={avancar}>Avançar</button>
    </section>
  );
}
