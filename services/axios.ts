import axios from "axios"
import { parseCookies } from "nookies"

export function getAPIClient(ctx?: any) {
  const { "nextauth.token": token } = parseCookies(ctx)

  const api = axios.create()

  api.interceptors.request.use((config) => {
    return config
  })

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`
  }

  return api
}
