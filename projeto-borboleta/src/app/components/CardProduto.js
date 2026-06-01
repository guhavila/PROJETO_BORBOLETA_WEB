import Image from "next/image";
import styles from './CardProduto.module.css';

export default function CardProduto({ produto }) {
    return (
        <div className={styles.card}>
            <div className={styles.imagemBox}>
                {produto.caminhoImg ? (
                    <Image
                        src={produto.caminhoImg}
                        alt={produto.nome}
                        fill
                        className={styles.imagem}
                    />
                ) : (
                    <div className={styles.semImagem}>
                        Sem imagem
                    </div>
                )}
            </div>
            
            <h2 className={styles.titulo}>{produto.nome}</h2>
            <p className={styles.preco}>{produto.preco}</p>
        </div>
    );
}