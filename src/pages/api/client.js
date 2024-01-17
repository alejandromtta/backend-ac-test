const gnrrea = [{prop:' SOY GET'}]

const handler = (req, res) =>{
  console.log(req.method)
  if(req.method === 'GET'){
 return res?.status(200).json({ props:gnrrea })
  }
  if(req.method === 'POST'){
   return res?.status(200).json({ props:"soy post"})
  }
  return res?.status(200).json({ props: "soy otro"})
}

export default handler;