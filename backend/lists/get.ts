import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { Prisma } from "@prisma/client"
import { getServerSession } from "next-auth/next"

import { prisma } from "@/lib/client.prisma"

export async function getList(req, res) {
  const { pid } = req.query

  if (!pid) {
    return res.status(400).json({ message: "Id is required" })
  }

  try {
    prisma.$connect()
    const list = await prisma.list.findUnique({
      where: {
        id: pid,
      },
      include: {
        ListItems: true,
        TagList: true,
        Collaborator: true,
      },
    })

    res.status(200).json(list)
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

export async function getAllLists(req, res) {
  try {
    prisma.$connect()

    const lists = await prisma.list.findMany({
      include: {
        TagList: {
          include: {
            Tag: true,
          },
        },
        Collaborator: {
          include: {
            User: {
              select: {
                id: true,
                name: true,
                image: true,
                totalLists: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    res.status(200).json(lists)
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
