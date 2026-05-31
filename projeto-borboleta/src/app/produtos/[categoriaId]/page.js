'use client'
import Image from "next/image";
import * as React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import CardProduto from "./../../components/CardProduto";
import Link from "next/link";

export default function Categorias({ params }) {
    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    async function carregarProdutos() {
        const res = await fetch("/api/produtos");
        const dado = await res.json();
        
        setProdutos(dado.produtos);
        setCategorias(dado.categorias);
    }

    const { categoriaId } = React.use(params);

    useEffect(() => {
        carregarProdutos()
    }, []);

    const produtosDaCategoria = produtos.filter(
        (produto) => produto.categoriaId === categoriaId
    );

    useEffect(() => {
        console.log(produtosDaCategoria);
        console.log(categorias);
    }, [produtos]);

    return(
        <div>
            {produtosDaCategoria.map((produto) => (
                <Link key={produto.id} href={`/produtos/${produto.categoriaId}/${produto.id}`}>
                    <CardProduto key={produto.id} produto={produto} />
                </Link>
                        )
                    )
                }
        </div>

        /*<section>
            <Image src={categoria.caminhoImg} alt={categoria.descricao} width={500} height={350}/>
            <h2> {categoria.nome} </h2>
            <p> {categoria.descricao} </p>
        </section>*/
    );
}