import { Categoria } from "@prisma/client";
import api from "../Api";

type CategoriaDelete ={
    id: number;
};

async function deleteCategoria(CategoriaDelete: CategoriaDelete): Promise<Categoria> {
    const { data } = await api.delete("/Categorias/delete" , { data: CategoriaDelete});

    return data;
}

export default deleteCategoria