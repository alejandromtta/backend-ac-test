const gnrrea = [{prop:'hola gnrrea'}]

const handler =(req, res) =>{
  console.log(req.method)
  res?.status(200).json({ props:gnrrea })
}

export default handler;