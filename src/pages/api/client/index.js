const { prisma } = require("../../../const/db");
const handler = async (req, res) => {
  if (req.method === "GET") {
    const clients = await prisma.client.findMany({include: { certified: true}});
    return res?.status(200).json(clients);
  }
  if (req.method === "POST") {
    const newData = await prisma.client.create({
      data: req.body,
    });
    return res?.status(200).json(newData);
  }
  return res?.status(200).json({ props: "soy otro" });
};

export default handler;
