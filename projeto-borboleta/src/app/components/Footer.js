import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer id={styles.Footer}>
        <article className="info-empresa">
          <h3>Canal Center</h3>
          <p><i className="fas fa-map-marker-alt"></i> Rua Major Otaviano, 232 - SP</p>
          <a href="/contato" className="btn-contato">Contate-nos</a>
        </article>
    </footer>

  );
}


