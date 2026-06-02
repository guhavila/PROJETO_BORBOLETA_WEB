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
            <Image src="/Logo.png" alt="Canal Center" width={1030} height={630} priority className={styles.logo} />
          </Link>

          <div className={styles.containerInfo}>
            <Image src="/outros/location.png" height={64} width={64} alt="icone mapa"/>
            <p> Rua Major Otaviano, 232, Andar 2 - SP</p>  
          </div>

          <div className={styles.containerInfo}>
            <Image src="/outros/whatsapp.png" height={64} width={64} alt="icone Whatsapp"/>
            <p> (11) 2958-0768</p>  
          </div>
          
          <Link href="/contato" className={styles.btnContato}>Contate-nos</Link>
        </article>
    </footer>
  );
}


