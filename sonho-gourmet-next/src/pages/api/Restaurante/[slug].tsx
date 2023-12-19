import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";

export type RestaurantType  = {
    nome: String,
    descricao: String,
    links: String,
}

export function handler(req: NextApiRequest, res: NextApiResponse<RestaurantType>){
    if(req.method == "GET"){
        const slug = req.query;
        const restaurant = await prisma.restaurante.findUnique({where: {slug}});
        if(restaurant){
            res.status(200).json(restaurant)
        }
        if(!restaurant){
            res.status(404).json("Restaurante não encontrado")
        }
    }

    if(req.method == "POST"){
        const {nome, descricao, links} = req.body;
        const restaurant = await prisma.restaurante.create({
            data: {
                nome,
                descricao,
                links,
            }
        })
        res.status(200).json(restaurant)
    }

    if(req.method == "PATCH"){
        const { slug } = req.query;
        const { data } req.body;

        const restaurant = await prisma.restaurante.update({
            where: { slug },
            data 
        })

        res.status(200).json(restaurant)
    }

    if(req.method == "DELETE"){
        const { slug } = req.query;
        const restaurant = await prisma.restaurante.delete({
            where: { slug }
        })

        res.status(200).json(restaurant)
    }
}