'use client'
import * as React from 'react';
import { useEffect, useState } from "react";
import CardProduto from "./../../components/CardProduto";
import Link from "next/link";
import styles from './page.module.css';

export default function Categorias({ params }) {
    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [carregando, setCarregando] = useState(true)
    
    async function carregarProdutos() {
        const res = await fetch("/api/produtos");
        const dado = await res.json();
        
        setProdutos(dado.produtos);
        setCategorias(dado.categorias);
        setCarregando(false);
    }

    const { categoriaId } = React.use(params);

    useEffect(() => {
        carregarProdutos()
    }, []);

    let produtosDaCategoria;
    let categoria;

    if (categoriaId === "todos") {
        produtosDaCategoria = produtos;
        categoria = {id: "todos",
                        nome: "Todos os Produtos"};
    } else {
        produtosDaCategoria = produtos.filter(
            (produto) => produto.categoriaId === categoriaId
        );
        categoria = categorias.find((cat) => cat.id === categoriaId);

    }
    
    if (carregando) {
        return <h1 style={{ padding: "2rem" }}>Carregando...</h1>
    }

    if (!categoria) {
        return <h1 style={{ padding: "2rem", textAlign: "center" }}>Categoria não encontrada!</h1>
    }

    return(
        <main className={styles.container}>
            
            <div className={styles.cabecalho}>
                <h1 className={styles.titulo}>Produtos</h1>
                <h2 className={styles.subtitulo}>
                    Categoria: {categoria.nome} | Quantidade: {produtosDaCategoria.length}
                </h2>
            </div>

            <section className={styles.gradeProdutos}>
                {produtosDaCategoria.map((produto) => (
                    <Link 
                        key={produto.id} 
                        href={`/produtos/${produto.categoriaId}/${produto.id}`}
                        className={styles.linkProduto}
                    >
                        <CardProduto produto={produto} />
                    </Link>
                ))}
            </section>

        </main>
    );
}