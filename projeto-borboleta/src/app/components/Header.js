"use client"; // Necessário para usar hooks como useState
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => setMenuAtivo(!menuAtivo);

  return (
    <header>
      <Link href="/">
        <Image src="/img/Logo.png" alt="Logo" width={150} height={50} />
      </Link>

      <button className="menu" onClick={toggleMenu} aria-label="Abrir Menu">
        <i className={`fas ${menuAtivo ? "fa-times" : "fa-bars"}`}></i>
      </button>

      <nav id="navMenu" className={menuAtivo ? "ativo" : ""}>
        <Link href="/">Home</Link>
        <Link href="/produtos">Produto</Link>
      </nav>
    </header>
  );
}