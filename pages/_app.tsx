import type {AppProps} from "next/app"
import {Inter as FontSans} from "@next/font/google"
import {ThemeProvider} from "next-themes"
import {SessionProvider} from "next-auth/react"

import "@/../styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <style jsx global>{`
          :root {
            --font-sans: ${fontSans.style.fontFamily};
          }

          }`}</style>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}
