import { authOptions } from 'pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"

export default async function handler(req, res) {
  if(req.method !== 'POST'){
    res.status(405).json({message: 'Method not allowed'})
    return
  }

  const session = await getServerSession(req, res, authOptions)

  res.status(200).json({message: session})
  return
}
