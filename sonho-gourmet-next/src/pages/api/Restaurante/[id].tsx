// implementar o switch aqui:

import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse,
)
{
    const postId = req.query.id

    switch(req.method){
        case 'CREATE':
            return //crud para criar
        case 'READ':
            return //crud para ler
        case 'UPDATE':
            return //crud para atualizar
        case 'DELETE':
            return //crud para deletar

    }
}