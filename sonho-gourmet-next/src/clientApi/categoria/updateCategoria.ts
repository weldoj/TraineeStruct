import { Categoria, Produtos } from "@prisma/client"
import api from "../Api"

type CategoriaIdentifier = {id: number}
type CategoriaNewData = {
    name?: string;
    produtos: Produtos[];
    }

async function updateCategoria(categoriaData: CategoriaIdentifier & CategoriaNewData): Promise<Categoria> {
    const {data} = await api.patch("/Categorias/update", categoriaData)
    
    return data
}
    
 export default updateCategoria;