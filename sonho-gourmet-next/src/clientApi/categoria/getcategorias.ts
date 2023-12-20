import { Categoria } from "@prisma/client";
import api from "../Api";

async function getCategorias(): Promise<Categoria[]> {
    const {data}  = await api.get("/gender/index")

    return data
}

export default getCategorias;