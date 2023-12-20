import { Produtos } from "@prisma/client"
import api from "../Api"

type ProdutoIdentifier = {id: number}
type ProdutoNewData = {
    name: string,
    descricao: string;
    preco: number;
    }

async function updateProduto(ProdutoData: ProdutoIdentifier & ProdutoNewData): Promise<Produtos> {
    const {data} = await api.patch("/Produtos/update", ProdutoData)
    
    return data
}
    
 export default updateProduto;