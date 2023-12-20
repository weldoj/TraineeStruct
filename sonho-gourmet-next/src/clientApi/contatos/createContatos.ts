import { Contatos } from "@prisma/client";
import api from "../Api";

type NewContatos = {
  nome: string;
  email: string;
  numeroContato: number;
  informacao: string;
};

async function createContatos(newContatos: NewContatos): Promise<Contatos> {
  const { data } = await api.post("/Contatos/create", newContatos);

  return data;
}

export default createContatos;