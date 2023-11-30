import { prisma } from "./prisma";

async function seed() {
    //Create:
    await prisma.restaurante.create({
        data: {
            namo: "Sonho Goumert",
            descricao: "um restaurante",
            links: "restaurante.com"
        }
    })
    
   
}

seed().then(() => {
    console.log("seed realizada com sucesso")
})