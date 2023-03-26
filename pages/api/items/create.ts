import { Prisma } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"

import { prisma } from "@/lib/client.prisma"

export type BodyType = {
  image?: string
  name: string
  price?: number
  quantity: number
  storeUrl?: string
  storeName?: string
  listId: string
}
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" })
    return
  }

  const body: BodyType = req.body

  if (req.body === undefined) {
    return res.status(400).json({ message: "No content defined" })
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  if (body.name === undefined) {
    return res.status(400).json({ message: "Name is required" })
  }

  if (body.listId === undefined) {
    return res.status(400).json({ message: "List id is required" })
  }

  let storeName = body.storeName
  if (!storeName) {
    if (!body.storeUrl) {
      storeName = ""
    } else {
      storeName = new URL(body.storeUrl).hostname.split(".")[1]
    }
  }

  const price = body.price || 0

  try {
    prisma.$connect()

    const createdList = await prisma.listItem.create({
      data: {
        name: body.name,
        quantity: body.quantity,
        listId: body.listId,
        storeName: storeName,
        price: price,
        storeUrl: body.storeUrl,
      },
    })

    res.status(200).json({ message: "list created", list: createdList.id })
    prisma.$disconnect()

    return
  } catch (e) {
    console.log(e)
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      res.status(500).json({ message: "Internal server error" })
      return
    }
    res.status(500).json({ message: e })
    return
  }
}
