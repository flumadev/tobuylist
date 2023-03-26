import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Prisma } from "@prisma/client"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/client.prisma"

export default async function unlikeList(req, res) {
  const { pid } = req.query
  if (!pid) {
    return res.status(400).json({ message: "Id is required" })
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  try {
    prisma.$connect()

    await prisma.likedList.deleteMany({
      where: {
        userId: session.user.id,
        listId: pid,
      },
    })

    prisma.$disconnect()

    return res.status(200).json({ message: "ok" })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).json({ message: "Internal server error" })
      return
    }
  } finally {
  }
}
