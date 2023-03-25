
import {createList} from "@/backend/lists/create";
import {getAllLists} from "@/backend/lists/get";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await createList(req, res)
  }

  if (req.method === "GET") {
    return await getAllLists(req, res)
  }

  return res.status(405).json({ message: "Method not allowed" })
}
