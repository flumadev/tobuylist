import Head from "next/head"
import Link from "next/link"
import { api } from "@/services/api"
import { getAPIClient } from "@/services/axios"
import { parseCookies } from "nookies"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { Button, buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  function criarLista() {
    api
      .post("/api/lists", {
        name: "teste",
        tags: ['clfm04gmn0000vkao85bv2c9j', 'clfm04gmn0002vkao9vtqslvm'],
      })
      .then((response) => response)
      .then((data) => console.log(data))
  }

  function criarItem() {
    api
      .post("/api/items/create", {
          name: 'Item pra teste',
        listId: 'clflwvam60001vkfgcgh0q0ub',
        price: 250000,
        storeUrl: 'https://www.amazon.com/,',
        storeName: 'Amazon',
      })
      .then((response) => response)
      .then((data) => console.log(data))
  }

  function buscarLista() {
    api
      .get("/api/lists/clflwvam60001vkfgcgh0q0ub")
      .then((response) => response)
      .then((data) => console.log(data))
  }

  function buscarTodasAsLista() {
    api
      .get("/api/lists")
      .then((response) => response)
      .then((data) => console.log(data))
  }

  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Accessible and customizable components that you can copy and paste
            into your apps. Free. Open Source. And Next.js 13 Ready.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            GitHub
          </Link>
        </div>
        <div>
          <Button onClick={criarLista}>criar lista</Button>
          <Button onClick={criarItem}>criar item na lista</Button>
          <Button onClick={buscarLista}>buscar lista</Button>
          <Button onClick={buscarTodasAsLista}>buscar todas as lista</Button>
        </div>
      </section>
    </Layout>
  )
}
