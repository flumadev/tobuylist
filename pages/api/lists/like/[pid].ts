import likeList from "@/backend/lists/like"

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await likeList(req, res)
  }

  return res.status(405).json({ message: "Method not allowed" })
}
