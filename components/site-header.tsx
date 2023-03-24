import Link from "next/link"

import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="px-6 flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
