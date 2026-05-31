import Image from "next/image";
import styles from './CardProduto.module.css';

export default function CardProduto({ produto }) {
    return (
        <div className={styles.card}>
            {produto.caminhoImg ? (
                <Image 
                    src={produto.caminhoImg} 
                    alt={produto.nome} 
                    width={300} 
                    height={200}
                    className={styles.imagem} 
                />
            ) : (
                <div className={styles.semImagem}>
                    Sem imagem
                </div>
            )}
            
            <h2 className={styles.titulo}>{produto.nome}</h2>
            <p className={styles.descricao}>{produto.descricao}</p>
            <p className={styles.preco}>{produto.preco}</p>
        </div>
    );
}