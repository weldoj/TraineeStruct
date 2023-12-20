import { ListaDesejos } from "@prisma/client";
import api from "../Api";

type ListaDesejosDelete ={
    id: number;
};

async function deleteListaDesejos(ListaDesejosDelete: ListaDesejosDelete): Promise<ListaDesejos> {
    const { data } = await api.delete("/ListaDesejos/delete" , { data: ListaDesejosDelete});

    return data;
}

export default deleteListaDesejos