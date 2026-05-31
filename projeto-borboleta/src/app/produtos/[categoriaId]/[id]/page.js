'use client'
import Image from "next/image";
import * as React from 'react'
import { useEffect } from "react";
import { useState } from "react";

export default function Categorias({ params }) {

    const [produto, setProduto] = useState(null);
    async function carregarProdutos() {
        const res = await fetch("/api/produtos");
        const dado = await res.json();
        const item = dado.produtos.find(
                    (item) => item.id === id
                );
        setProduto(item);
    }

    const { id } = React.use(params);

    useEffect(() => {
        carregarProdutos()
        console.log("TESTE")
    }, [id]);

    if (!produto) {
        return <h2 style={{ padding: "2rem" }}>Carregando produto...</h2>;
    }
    
    return(
        <section>
            <Image src={produto.caminhoImg} alt={produto.descricao} width={500} height={350}/>
            <h2> {produto.nome} </h2>
            <p> {produto.descricao} </p>
            <p> {produto.preco} </p>
        </section>
    );
}