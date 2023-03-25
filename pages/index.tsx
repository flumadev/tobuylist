import Head from "next/head"
import { Main } from "@/components/layout/Main"
import Listcard from "@/components/Listcard";
export default function IndexPage() {

  return (
    <Main>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full bg-slate-100 dark:bg-slate-800 h-[10000px]">
        <div className="grid grid-cols-4 gap-6">
          {Array(10).fill(0).map((_, i) => {
            return <Listcard key={i}/>
          })}
        </div>
      </section>
    </Main>
  )
}
