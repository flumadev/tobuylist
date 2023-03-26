import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Prisma } from "@prisma/client"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/client.prisma"

export default async function likeList(req, res) {
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

    //TODO: Check if user already liked list
    //TODO: Like list if not already liked
    //TODO: Dislike list if already liked

    prisma.$disconnect()

    return
  } catch (e) {
    console.log(e)
    return res.status(500).json({ message: e })
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).json({ message: "Internal server error" })
      return
    }
  }
}
