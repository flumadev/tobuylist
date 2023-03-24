import { SiteHeader } from "./site-header"
import { Sidebar } from "./sidebar"
interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[calc(100svh-81px)] flex">
        {children}
        <Sidebar />
      </main>
    </>
  )
}
