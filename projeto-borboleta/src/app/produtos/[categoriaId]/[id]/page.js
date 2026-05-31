'use client'
import Image from "next/image";
import * as React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import styles from "./page.module.css";

export default function Categorias({ params }) {

    const [produto, setProduto] = useState(null);
    const [carregando, setCarregando] = useState(true);
    async function carregarProdutos() {
        const res = await fetch("/api/produtos");
        const dado = await res.json();
        const item = dado.produtos.find(
                    (item) => item.id === id
                );
        setProduto(item);
        setCarregando(false);
    }

    const { id } = React.use(params);

    useEffect(() => {
        carregarProdutos();
    }, [id]);

    if (carregando) {
        return <h2 style={{ padding: "2rem" }}>Carregando produto...</h2>;
    }
    
    return(
        <main className={styles.container}>
            <section className={styles.produtoWrapper}>
                <div className={styles.imagemWrapper}>
                    <Image  src={produto.caminhoImg}
                            alt={produto.descricao}
                            width={500}
                            height={350}
                            className={styles.imagem}/>
                </div>
                <div className={styles.infoWrapper}>
                    <h1 className={styles.titulo}> {produto.nome} </h1>
                    <p className={styles.descricao}> {produto.descricao} </p>
                    <p className={styles.preco}> {produto.preco} </p>
                    <button className={styles.botao}>Adicionar ao Carrinho</button>
                </div>
            </section>
        </main>
    );
}