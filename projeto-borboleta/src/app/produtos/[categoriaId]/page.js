'use client'
import Image from "next/image";
import * as React from 'react'
import { useEffect } from "react";

export default function Categorias({ params }) {
    const dadoscategorias = {
        fogoes: {
            nome: "Fogões",
            descricao: "O Brasil, na real, tem dunas.",
            caminhoImg: "/fogao.webp"
        },
        utencilios: {
            nome: 'Maldivas',
            descricao: 'Lindo para caramba, era meu sonho.',
            caminhoImg: '/maldivas.jpg'
        },
        kits: {
            nome: 'Malibu',
            descricao: 'Bonito, mas ninguém fica na praia sentadinho com uma cervejinha.',
            caminhoImg: '/malibu.jpg'
        }
    }

    const { id } = React.use(params);
    const categoria = dadoscategorias[id];

    useEffect(() => {
        console.log(categoria)
    }, []);

    return(
        <section>
            {/* <Image src={categoria.caminhoImg} alt={categoria.descricao} width={500} height={350}/>
            <h2> {categoria.nome} </h2>
            <p> {categoria.descricao} </p> */}
        </section>
    );
}