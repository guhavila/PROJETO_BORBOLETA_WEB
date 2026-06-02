// Gustavo Ávila Santos - 10753199
// Guilherme Ferraz Cabral - 10749385
// João Vitor Alves de Freitas - 10756078
// Enzo Marinho Bertoldo - 10752887

import styles from "./Footer.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id={styles.Footer}>
        <article className={styles.infoEmpresa}>
          <Link href="/">
            <Image src="/Logo.png" alt="Canal Center" width={160} height={55} className={styles.logo} />
          </Link>
          <p><i className="fas fa-map-marker-alt"></i> Rua Major Otaviano, 232, Andar 2 - SP</p>
          <p><i className="fas fa-phone"></i> (11) 2958-0768</p>
          <Link href="/contato" className={styles.btnContato}>Contate-nos</Link>
        </article>
    </footer>
  );
}


