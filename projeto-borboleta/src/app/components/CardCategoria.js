import Image from "next/image";
import styles from './CardCategoria.module.css';
import Link from "next/link";

export default function CardCategoria({ categoria }) {
    return (
        <Link href={`/produtos/${categoria.id}`}>
            <div className={styles.card}>
                {categoria.caminhoImg ? (
                    <Image 
                        src={categoria.caminhoImg} 
                        alt={categoria.nome} 
                        width={300} 
                        height={200}
                        className={styles.imagem} 
                    />
                ) : (
                    <div className={styles.semImagem}>
                        Sem imagem
                    </div>
                )}
                
                <h2 className={styles.titulo}>{categoria.nome}</h2>
                <p className={styles.descricao}>{categoria.descricao}</p>
            </div>
        </Link>
    );
}