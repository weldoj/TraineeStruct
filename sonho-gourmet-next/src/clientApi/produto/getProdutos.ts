import { Produtos } from "@prisma/client";
import api from "../Api";

async function getProdutos(): Promise<Produtos[]> {
    const {data}  = await api.get("/Produtos/index")

    return data
}

export default getProdutos;