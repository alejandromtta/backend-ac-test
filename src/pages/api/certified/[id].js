const { prisma } = require("../../../const/db");
import { DELETE, GET, PUT } from "@/const/request";

const handler = async (req, res) => {
  const { id } = req.query;
  if (req.method === GET) {
    try {
      const certified = await prisma.certified.findFirst({
        where: { id: parseInt(id) },
        include: { client: true },
      });
      return res
        ?.status(200)
        .json(!!certified ? certified : { message: "certified not found" });
    } catch (err) {
      return res?.status(404).json(err);
    }
  }
  if (req.method === DELETE) {
    const certified = await prisma.certified.findFirst({
      where: { id: parseInt(id) },
    });
    try {
      if (!certified) {
        return res?.status(404).json({ message: "certified not found" });
      }

      const certifiedDeleted = await prisma.certified.delete({
        where: { id: certified?.id },
      });

      return res
        ?.status(200)
        .json(!!certified ? certifiedDeleted : { message: "certified not found" });
    } catch (err) {
      return res
        ?.status(404)
        .json(
          !!certified
            ? { err, id: id, certified: certified }
            : { message: "certified not found" }
        );
    }
  }
  if (req.method === PUT) {
    try {
      const certifiedUpdate = await prisma.certified.update({
        where: { id: parseInt(id) },
        data: req.body,
      });
      return res?.status(200).json(certifiedUpdate);
    } catch (err) {
      return res?.status(404).json(err);
    }
  }

  return res?.status(404).json({ response: "Metodo no soportado." });
};

export default handler;
