const {get} = require('../../../const/db')
const handler = async (req, res) =>{
 
  if(req.method === 'GET'){
    //  const clients = await  prisma.client.findMany();
    console.log(await get(), 'heyyyyyyyyyy')
 return res?.status(200).json(await get())
  }
  if(req.method === 'POST'){
    // const newData = await prisma.client.create({
    //   data: req.body
    // })
   return res?.status(200).json('as')
  }
  return res?.status(200).json({ props: "soy otro"})
}

export default handler;