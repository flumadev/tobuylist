import { useEffect, useState } from "react"
import Head from "next/head"
import { api } from "@/services/api"

import Listcard from "@/components/Listcard"
import NewList from "@/components/Modals/NewList"
import SearchSelect from "@/components/Search/Select"
import { Main } from "@/components/layout/Main"
import { Input } from "@/components/ui/input"

export default function IndexPage() {
  const [lists, setLists] = useState([])

  function getLists() {
    api.get("/api/lists").then((response) => {
      setLists(response.data)
    })
  }

  useEffect(() => {
    getLists()
  }, [])
  return (
    <Main>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full bg-slate-100 dark:bg-slate-800 p-8 ">
        <div className={" gap-7 flex flex-col"}>
          <div className={"flex w-full justify-between items-end"}>
            <div className={"flex gap-2 items-end"}>
              <div>
                <SearchSelect />
              </div>
              <Input id="email" placeholder="Email" />
            </div>
            <NewList />
          </div>
          <div className="grid w-full grid-cols-1 self-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 ">
            {lists.map((list, i) => {
              return <Listcard key={i} data={list} />
            })}
          </div>
        </div>
      </section>
    </Main>
  )
}
