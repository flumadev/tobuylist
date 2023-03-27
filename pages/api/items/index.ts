import { Prisma } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"

import { prisma } from "@/lib/client.prisma"

export type BodyType = {
  image?: {
    data: string
    mime: string
  }
  name: string
  price?: number
  quantity: number
  storeUrl?: string
  storeName?: string
  listId?: string
  itemId?: string
}
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" })
    return
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  const { itemId, listId, storeName, name, quantity, storeUrl, price, image } =
    req.body

  const data = {
    listId,
    storeName,
    name,
    quantity,
    storeUrl,
    price,
    image: image.data ? `data:${image.mime};base64,${image.data}` : image,
  }

  try {
    prisma.$connect()

    const list = await prisma.list.findUnique({
      where: {
        id: listId,
      },
    })

    if (!list) {
      res.status(400).json({ message: "This list does not exist" })
      return
    }

    const item = await prisma.listItem.upsert({
      where: {
        id: itemId || "",
      },
      update: {
        storeName,
        name,
        quantity,
        storeUrl,
        price,
        image: image.data ? `data:${image.mime};base64,${image.data}` : image,
      },
      create: {
        ...data,
      },
    })
    prisma.$disconnect()
    return res.status(200).json({ message: "item created", item })
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
