import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma";

async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.query.slug === "read" && req.method === "GET"){
        try{
            const where = req.body;
            const listaDejesos = await prisma.listaDesejos.findUnique({where});
            res.status(200).json(listaDejesos)
            }
            catch (e){
                res.status(404).json({error: "Produto não encontrado"})
            }
        }
    
        if(req.query.slug === "update" && req.method === "PATCH"){
            try{
                const {id, ...listaDejesosData} = req.body;
                const listaDejesos = await prisma.produtos.update({
                    where: {id},
                    data: listaDejesosData,
                });
                res.status(200).json(listaDejesos);
            }
            catch(e){
                res.status(400).json({ error: "não foi possível atualizar" });
            }
        }

        if(req.query.slug === "create" && req.method === "POST"){
            try{
                const data = req.body;
                const listaDejesos = await prisma.listaDejesos.create({data});
                res.status(200).json(listaDejesos)
            }
            catch(e){
                res.status(400).json({ error: "não foi possível criar" });
            }
        }
        if(req.query.slug === "delete" && req.method === "DELETE"){
            try{
                const where = req.body;
                const listaDejesos = await prisma.listaDejesos.delete({where})
                res.status(200).json(listaDejesos)
            }
            catch(e){
                res.status(400).json({ error: "não foi possível deletar" });
            }
        }
        
    }

    export default handler;
