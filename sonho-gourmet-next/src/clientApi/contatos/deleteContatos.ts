import { Contatos } from "@prisma/client";
import api from "../Api";

type ContatosDelete ={
    id: number;
};

async function deleteContatos(ContatosDelete: ContatosDelete): Promise<Contatos> {
    const { data } = await api.delete("/Contatos/delete" , { data: ContatosDelete});

    return data;
}

export default deleteContatos