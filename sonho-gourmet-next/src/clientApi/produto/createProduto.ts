import { Produtos } from "@prisma/client";
import api from "../Api";

type NewProduto = {
  name: string;
  descricao: string;
  preco: number;

};

async function createProduto(newProduto: NewProduto): Promise<Produtos> {
  const { data } = await api.post("/Produtos/create", newProduto);

  return data;
}

export default createProduto;