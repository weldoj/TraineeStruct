import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma";

async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.query.slug === "read" && req.method === "GET"){
        try{
            const where = req.body;
            //const {id} = req.query;
            const categoria = await prisma.categoria.findUnique({where});
            res.status(200).json(categoria)
            }
            catch (e){
                res.status(404).json({error: "Restaurante não encontrado"})
            }
        }
        if (req.query.slug === "index" && req.method === "GET") {
            try {
              const categoria = await prisma.categoria.findMany();
              res.status(200).json(categoria);
            } catch (e) {
              res.status(500).json({ error: "erro no servidor" });
            }
          }
    
        if(req.query.slug === "update" && req.method === "PATCH"){
            try{
                const {id, ...categoriasData} = req.body;
                const categoria = await prisma.categoria.update({
                    where: {id},
                    data: categoriasData,
                });
                res.status(200).json(categoria);
            }
            catch(e){
                res.status(400).json({ error: "não foi possível atualizar" });
            }
        }

        if(req.query.slug === "create" && req.method === "POST"){
            try{
                const data = req.body;
                const categoria = await prisma.categoria.create({data});
                res.status(200).json(categoria)
            }
            catch(e){
                res.status(400).json({ error: "não foi possível criar" });
            }
        }
        if(req.query.slug === "delete" && req.method === "DELETE"){
            try{
                //const where = req.body;
                const {id} = req.query;
                const categoria = await prisma.categoria.delete({where: {id: Number(id)}})
                res.status(200).json(categoria)
            }
            catch(e){
                res.status(400).json({ error: "não foi possível deletar" });
            }
        }
        
    }

    export default handler;
