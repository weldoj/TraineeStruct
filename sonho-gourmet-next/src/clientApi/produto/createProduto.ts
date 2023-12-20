import { Prisma, Produtos } from "@prisma/client";
import api from "../Api";

type NewProduto = {
  nome: string;
  descricao: string;
  preco: number;
  foto: String;
  Categoria: String;

};

async function createProduto(newProduto: NewProduto): Promise<Produtos> {
  const { data } = await api.post("/Produtos/create", newProduto);

  return data;
}

export default createProduto;