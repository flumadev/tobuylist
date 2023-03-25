import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SidebarContent } from "./Sidebar"
import { Button } from "../ui/button"
import { ThemeToggle } from "./Theme-toggle"

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="px-4 lg:px-6 flex h-16 lg:h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center justify-center gap-4 lg:gap-6">
          <h1 className="font-bold hidden md:block md:text-2xl lg:text-3xl cursor-pointer">
            Minhas listas
          </h1>
          <h1 className="font-bold hidden md:block md:text-2xl lg:text-3xl cursor-pointer dark: opacity-25">
            Listas públicas
          </h1>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="block md:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent position="right" className="w-11/12 sm:w-1/2">
                <div className="flex flex-col gap-2 mt-4">
                  <h1 className="font-bold text-2xl cursor-pointer">
                    Minhas listas
                  </h1>
                  <h1 className="font-bold text-2xl cursor-pointer dark: opacity-25">
                    Listas públicas
                  </h1>
                </div>
                <hr className="opacity-100 border-t-slate-200 dark:border-t-slate-700 my-4 md:my-6" />
                <div className="flex flex-col h-[calc(100svh-155px)] shrink-0">
                  <SidebarContent />
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
