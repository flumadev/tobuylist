import Head from "next/head"
import {Main} from "@/components/layout/Main"
import Listcard from "@/components/Listcard";
import {Input} from "@/components/ui/input";
import SearchSelect from "@/components/Search/Select";
import NewList from "@/components/Modals/NewList";


export default function IndexPage() {

  return (
    <Main>
      <Head>
        <title>Next.js</title>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <section className="w-full bg-slate-100 dark:bg-slate-800 p-8 ">
        <div className={"max-w-[1550px] gap-7 flex flex-col"}>
          <div className={"flex w-full justify-between items-end"}>
            <div className={"flex gap-2 items-end"}>
              <div>
                <SearchSelect />
              </div>
                <Input id="email" placeholder="Email" />
            </div>
            <NewList/>
          </div>
          <div className="grid grid-cols-4 gap-6 ">
            {Array(10).fill(0).map((_, i) => {
              return <Listcard key={i}/>
            })}
          </div>
        </div>
      </section>
    </Main>
  )
}
