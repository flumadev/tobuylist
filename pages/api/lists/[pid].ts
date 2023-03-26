import { getList } from "@/backend/lists/get"

export default async function handler(req, res) {
  if (req.method === "GET") {
    return await getList(req, res)
  }

  return res.status(405).json({ message: "Method not allowed" })
}
