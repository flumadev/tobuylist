import unlikeList from "@/backend/lists/unlike"

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await unlikeList(req, res)
  }

  return res.status(405).json({ message: "Method not allowed" })
}
