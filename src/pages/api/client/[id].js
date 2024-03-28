import { DELETE, GET, PUT } from "@/const/request";
const { prisma } = require("../../../const/db");

const handler = async (req, res) => {
  if (req.method === GET) {
    const { id } = req.query;
    try {
      const client = await prisma.client.findFirst({
        where: { document_number: parseInt(id) },
        include: { certified: true },
      });
      return res
        ?.status(200)
        .json(!!client ? client : { message: "client not found" });
    } catch (err) {
      return res?.status(404).json(err);
    }
  }
  if (req.method === DELETE) {
    const { id } = req.query;
    const client = await prisma.client.findFirst({
      where: { document_number: parseInt(id) },
    });
    try {
      if (!client) {
        return res?.status(404).json({ message: "client not found" });
      }
      await prisma.certified.deleteMany({
        where: {
          client_id: client?.id,
        },
      });
      const clientDeleted = await prisma.client.delete({
        where: { id: client?.id },
      });

      return res
        ?.status(200)
        .json(!!client ? clientDeleted : { message: "client not found" });
    } catch (err) {
      return res
        ?.status(404)
        .json(
          !!client
            ? { err, id: id, client: client }
            : { message: "client not found" }
        );
    }
  }
  if (req.method === PUT) {
    const { id } = req.query;
    try {
      const clientUpdate = await prisma.client.update({
        where: { id: parseInt(id) },
        data: req.body,
      });
      return res?.status(200).json(clientUpdate);
    } catch (err) {
      return res?.status(404).json(err);
    }
  }

  return res?.status(404).json({ response: "Metodo no soportado." });
};

export default handler;
