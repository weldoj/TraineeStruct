import { Contatos } from "@prisma/client";
import api from "../Api";

type ContatosGet ={
    id: number;
};
async function getContatos(ContatosGet: ContatosGet): Promise<Contatos> {
    const {data}  = await api.get("/Contatos/read", {data: ContatosGet});

    return data;
}

export default getContatos;

