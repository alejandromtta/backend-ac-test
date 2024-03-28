import { GET, POST } from "@/const/request";

const { prisma } = require("../../../const/db");
const handler = async (req, res) => {
  if (req.method === GET) {
    try {
      const clients = await prisma.client.findMany({
        include: { certified: true },
      });
      return res?.status(200).json(clients);
    } catch (err) {
      return res?.status(404).json(err);
    }
  }
  if (req.method === POST) {
    try {
      const newData = await prisma.client.create({
        data: req.body,
      });
      return res?.status(200).json(newData);
    } catch (err) {
      return res?.status(404).json(newData);
    }
  }
  return res?.status(404).json({ response: "Metodo no soportado." });
};

export default handler;
