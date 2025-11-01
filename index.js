import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    //  create single user 
    const user = await prisma.user.create({
        data: {
            name: "Harsh",
            email: "harsh@gmail.com"
        }
    })
    console.log("User: ", user);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    })