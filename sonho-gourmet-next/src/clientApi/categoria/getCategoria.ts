import { Categoria} from "@prisma/client";
import api from "../Api";

type CategoriaGet ={
    id: number;
};
async function getCategoria(CategoriaGet: CategoriaGet): Promise<Categoria> {
    const {data}  = await api.get("/Categorias/read", {data: CategoriaGet});

    return data;
}

export default getCategoria;

