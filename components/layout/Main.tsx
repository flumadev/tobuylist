import { Sidebar } from "./Sidebar"
import { Topbar } from "./Topbar"
interface LayoutProps {
  children: React.ReactNode
}

export function Main({ children }: LayoutProps) {
  return (
    <>
      <Topbar />
      <main className="min-h-[calc(100svh-65px)] lg:min-h-[calc(100svh-81px)] flex">
        {children}
        <Sidebar />
      </main>
    </>
  )
}
