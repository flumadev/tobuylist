import { Prisma } from "@prisma/client"
import { getServerSession } from "next-auth/next"
import { authOptions } from "pages/api/auth/[...nextauth]"

import { prisma } from "@/lib/client.prisma"
import {createList} from "@/backend/lists/create";
import {getList} from "@/backend/lists/get";

export default async function handler(req, res) {

  if (req.method === "GET") {
      return await getList(req, res)
  }

  return res.status(405).json({ message: "Method not allowed" })
}
