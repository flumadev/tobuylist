import { Prisma } from "@prisma/client"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth/next"
import { prisma } from "@/lib/client.prisma"

export default async function likeList(req, res) {

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const { pid } = req.query
  if (!pid) {
    return res.status(400).json({ message: "Id is required" })
  }

  try {
    prisma.$connect()

    await prisma.likedList.create({
      data: {
        listId: pid,
        userId: session.user.id,
      },
    })

    prisma.$disconnect()

    return res.status(200).json({ message: "ok" })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).json({ message: "Internal server error" })
      return
    }
  }
}
