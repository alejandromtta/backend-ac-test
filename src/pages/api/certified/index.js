const { prisma } = require("../../../const/db");

const handler = async (req, res) => {
  if (req.method === GET) {
    const certifieds = await prisma.certified.findMany({
      include: { client: true },
    });
    return res?.status(200).json(certifieds);
  }
  if (req.method === POST) {
    const newCertified = await prisma.certified.create({
      data: req.body,
    });
    return res?.status(200).json(newCertified);
  }
  return res?.status(404).json({ response: "Metodo no soportado." });
  s;
};

export default handler;
