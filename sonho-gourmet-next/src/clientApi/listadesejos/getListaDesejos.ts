import { ListaDesejos } from "@prisma/client";
import api from "../Api";

type ListaDesejosGet ={
    id: number;
};
async function getListaDesejos(ListaDesejosGet: ListaDesejosGet): Promise<ListaDesejos> {
    const {data}  = await api.get("/ListaDesejos/read", {data: ListaDesejosGet});

    return data;
}

export default getListaDesejos;

