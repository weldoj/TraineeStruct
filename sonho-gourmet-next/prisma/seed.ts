import { prisma } from "./prisma";

async function seed() {
    //Create:
    await prisma.restaurante.create({
        data: {
            nome: "Sonho Goumert",
            descricao: "um restaurante",
            links: "restaurante.com"
        }
    })
    
   
}

seed().then(() => {
    console.log("seed realizada com sucesso")
})