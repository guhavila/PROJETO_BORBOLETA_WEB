// Gustavo Ávila Santos - 10753199
// Guilherme Ferraz Cabral - 10749385
// João Vitor Alves de Freitas - 10756078
// Enzo Marinho Bertoldo - 10752887

import { db } from "@/lib/db.js";

export async function GET(request, context) {
    const { id } = await context.params;
    const numeroID = Number(id);

    const produto = db.produtos.find((p) => p.id === numeroID);

    return Response.json(produto);
} 