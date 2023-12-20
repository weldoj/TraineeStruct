import { ListaDesejos, Produtos_Desejos } from "@prisma/client";
import api from "../Api";

type NewListaDesejos = {
  quantidade: number;
  produtos_Desejos: Produtos_Desejos[];
};

async function createListaDesejos(newListaDesejos: NewListaDesejos): Promise<ListaDesejos> {
  const { data } = await api.post("/ListaDesejos/create", newListaDesejos);

  return data;
}

export default createListaDesejos;