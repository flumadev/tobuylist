import Head from "next/head"
import Link from "next/link"
import { Layout } from "@/components/layout"
import {Button} from "@/components/ui/button"


export default function IndexPage() {

  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full bg-slate-100 dark:bg-slate-800">

      </section>
    </Layout>
  )
}
