import { db } from "@/lib/db.js";

// GET (buscar) por ID do produto
export async function GET(request, context) {
    const { id } = await context.params;
    const numeroID = Number(id);

    const produto = db.produtos.find((p) => p.id === numeroID);

    return Response.json(produto);
}