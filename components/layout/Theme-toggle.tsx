import * as React from "react"
import { useTheme } from "next-themes"

import { Icons } from "../icons"
import { Button } from "../ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
      }}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100" />
      <span className="sr-only">Alterar tema</span>
    </Button>
  )
}
