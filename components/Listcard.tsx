import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Bookmark, Link, Lock} from "lucide-react";
import Tag from "@/components/Tag";


export default function Listcard() {
  return (
    <div className="flex flex-col gap-6 bg-white p-8 rounded-3xl max-w-[360px] max-h-[360px] dark:bg-slate-900">
      <div className={"flex gap-2 "}>
        <span>
          <Lock />
        </span>
        <h1 className="text-2xl font-bold">Nome da lista</h1>
        <span></span>
      </div>
      <h1 className={"text-3xl font-bold"}>R$ 25.000,00</h1>
      <div className={"flex w-full flex-wrap gap-2"}>
        {Array(5).fill(0).map((_, i) => {
          return <Tag key={i} name={"computador"} />
        })}
      </div>
      <div className={"flex items-center gap-2"}>
        <div  className={"flex ml-3"}>
          {Array(5).fill(0).map((_, i) => {
            return (
              <Avatar className={"ml-[-1rem]"}>
                <AvatarImage src="https://avatars.githubusercontent.com/u/5020412?v=4"/>
              </Avatar>
            )
          })}
        </div>
        <Link />
      </div>
      <div className={"flex justify-between"}>
        <p>123 likes</p>
        <Bookmark />
      </div>
    </div>
  )
}
