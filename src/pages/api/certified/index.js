//const { PrismaClient } = require("@prisma/client")

//const prisma = new PrismaClient()

const handler = async (req, res) =>{
  console.log(req.method)
  if(req.method === 'GET'){
    //const certifieds = await  prisma.certified.findMany();
 return res?.status(200).json(["certifieds"])
  }
  if(req.method === 'POST'){
    // const newData = await prisma.certified.create({
    //   data: req.body
    // })
   return res?.status(200).json([])
  }
  return res?.status(200).json({ props: "soy otro"})
}

export default handler;