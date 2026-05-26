import { db } from "@/lib/db.js";

// GET (buscar) de todos os produtos
export async function GET() {
    return Response.json(db.produtos);
}
 