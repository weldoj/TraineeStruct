import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma";

async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.query.slug === "read" && req.method === "GET"){
        try{
            const contatos = await prisma.contatos.findMany();
            res.status(200).json(contatos)
            }
            catch (e){
                res.status(404).json({error: "contatos não encontrado"})
            }
        }
    if(req.query.slug === "create" && req.method === "POST"){
        try{
            const data = req.body;
            const contatos = await prisma.contatos.create({data});
            res.status(200).json(contatos)
        }
        catch(e){
            res.status(400).json({ error: "não foi possível criar" });
        }
    
    }
    if(req.query.slug === "delete" && req.method === "DELETE"){
        try{
            const where = req.body;
            const contatos = await prisma.contatos.delete({where})
            res.status(200).json(contatos)
        }
        catch(e){
            res.status(400).json({ error: "não foi possível deletar" });
        }
    }
    
}

export default handler;

