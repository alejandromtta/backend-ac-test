const { PrismaClient } = require("@prisma/client")
export const prisma = new PrismaClient()

export const  get = async () => await prisma.client.findMany();