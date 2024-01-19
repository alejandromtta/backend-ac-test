const { prisma } = require("../../../const/db");

const handler = async (req, res) => {
  if (req.method === "GET") {
    const certifieds = await prisma.certified.findMany({include: { client: true}});
    return res?.status(200).json(certifieds);
  }
  if (req.method === "POST") {
    const newData = await prisma.certified.create({
      data: req.body,
    });
    return res?.status(200).json(newData);
  }
  return res?.status(200).json({ props: "soy otro" });
};

export default handler;
