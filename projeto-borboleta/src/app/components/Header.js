// Gustavo Ávila Santos - 10753199
// Guilherme Ferraz Cabral - 10749385
// João Vitor Alves de Freitas - 10756078
// Enzo Marinho Bertoldo - 10752887

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css"

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);

  const toggleMenu = () => setMenuAtivo(!menuAtivo);

  return (
    <header className={styles.Header}>
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" width={150} height={80} priority/>
      </Link>

      <button className={styles.menuBtn} onClick={toggleMenu} aria-label="Abrir Menu">
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <span className={styles.linha}></span>
        <i className={`fas ${menuAtivo ? "fa-times" : "fa-bars"}`}></i>
      </button>

      <nav id={styles.navMenu} className={menuAtivo ? styles.ativo : ""}>
        <Link href="/">Home</Link>
        <Link href="/produtos/todos">Produtos</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  );
}
