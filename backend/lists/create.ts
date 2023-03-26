import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Prisma } from "@prisma/client"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/client.prisma"

export async function createList(req, res) {
  if (req.body === undefined) {
    return res.status(400).json({ message: "No content defined" })
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  if (req.body.name === undefined) {
    return res.status(400).json({ message: "Name is required" })
  }

  try {
    prisma.$connect()

    const createdList = await prisma.list.create({
      data: {
        name: req.body.name,
        userId: session.user.id,
      },
    })

    res.status(200).json({ message: "list created", list: createdList.id })
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
