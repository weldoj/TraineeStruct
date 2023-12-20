import { Categoria, Produtos } from "@prisma/client";
import api from "../Api";

type NewCategoria = {
  name: string;
  produtos: Produtos[];
};

async function createCategoria(newCategoria: NewCategoria): Promise<Categoria> {
  const { data } = await api.post("/Categorias/create", newCategoria);

  return data;
}

export default createCategoria;