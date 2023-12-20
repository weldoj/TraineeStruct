import { Produtos } from "@prisma/client";
import api from "../Api";

type produtoDelete ={
    id: number;
};

async function deleteProduto(produtoDelete: produtoDelete): Promise<Produtos> {
    const { data } = await api.delete("./Produtos/delete" , { data: produtoDelete});

    return data;
}

export default deleteProduto;