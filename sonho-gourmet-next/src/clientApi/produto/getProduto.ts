import { Produtos } from "@prisma/client";
import api from "../Api";

type ProdutoGet ={
    id: number;
};
async function getProduto(ProdutoGet: ProdutoGet): Promise<Produtos> {
    const {data}  = await api.get("/Produtos/read", {data: ProdutoGet});

    return data
}

export default getProduto;

