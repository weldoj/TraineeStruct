import { ListaDesejos, Produtos_Desejos } from "@prisma/client"
import api from "../Api"

type ListaDesejosIdentifier = {id: number}
type ListaDesejosNewData = {
    quantidade: number;
    produtos_Desejos: Produtos_Desejos[];
    }

async function updateListaDesejos(ListaDesejosData:ListaDesejosIdentifier & ListaDesejosNewData): Promise<ListaDesejos> {
    const {data} = await api.patch("/ListaDesejos/update", ListaDesejosData)
    
    return data
}
    
 export default updateListaDesejos;