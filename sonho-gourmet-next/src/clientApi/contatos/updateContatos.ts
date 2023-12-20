import { Contatos } from "@prisma/client"
import api from "../Api"

type ContatosIdentifier = {id: number}
type ContatosNewData = {
    nome: string;
    email: string;
    numeroContato: BigInt;
    informacao: string;
    }

async function updateContatos(ContatosData:ContatosIdentifier & ContatosNewData): Promise<Contatos> {
    const {data} = await api.patch("/Contatos/update", ContatosData)
    
    return data
}
    
 export default updateContatos;