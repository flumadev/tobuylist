import * as React from "react"
import { NavItem } from "../types/nav"

export function MainNav() {

  return (
    <div className="flex items-center justify-center gap-6">
      <h1 className="font-bold text-3xl cursor-pointer dark:">
        Minhas listas
      </h1>
      <h1 className="font-bold text-3xl cursor-pointer dark: opacity-25">
        Listas públicas
      </h1>
    </div>
  )
}
