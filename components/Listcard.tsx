import { useEffect, useState } from "react"
import { api } from "@/services/api"
import { BookmarkFilledIcon, BookmarkIcon } from "@radix-ui/react-icons"
import { Link, Lock } from "lucide-react"

import Tag from "@/components/Tag"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

type ListcardProps = {
  data: {
    totalValue: number
    id: string
    name: string
    userId: string
    likes: number
    Collaborator: any[]
    TagList: any[]
    LikedList: any[]
    _count: {
      LikedList: number
    }
  }
}

type CollaboratorProps = {
  data: Collaborator
}
type Collaborator = {
  canEdit: false
  createdAt: string
  id: string
  listId: string
  updatedAt: string
  userId: string
  User: UserCollaborator
}

type UserCollaborator = {
  id: string
  name: string
  image: string
  totalLists: number
}
function Collaborators(props: CollaboratorProps) {
  const { data } = props
  const { User } = data
  return (
    <HoverCard>
      <HoverCardTrigger className={"cursor-pointer"}>
        <Avatar className={"ml-[-0.5rem] border"}>
          <AvatarImage src={User.image} />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className={"w-min"}>
        <div className="flex justify-between flex-col items-start gap-4">
          <div className={"w-full"}>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/5020412?v=4" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
          </div>
          <div className={"ml-0"}>
            <b>RPD</b>
            <p>@zVictorR</p>
          </div>
          <div className={"flex gap-8"}>
            <div>
              <p>Listas</p>
              <b>123</b>
            </div>
            <div>
              <p>Seguidores</p>
              <b>342</b>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

export default function Listcard(props: ListcardProps) {
  const [liked, setLiked] = useState(false)
  const [likedCount, setLikedCount] = useState(0)
  const { data } = props
  const {
    name,
    Collaborator: collaborators,
    TagList: tags,
    totalValue,
    _count,
    LikedList,
    id,
  } = data

  function handleLikeList() {
    api.post(`/api/lists/${liked ? "unlike" : "like"}/${id}`).then(() => {
      setLiked(!liked)
      if (liked) {
        setLikedCount(likedCount - 1)
      } else {
        setLikedCount(likedCount + 1)
      }
    })
  }

  useEffect(() => {
    if (LikedList.length > 0) {
      setLiked(true)
    }
    setLikedCount(_count.LikedList)
  }, [])

  return (
    <div className="flex flex-col justify-between gap-6 bg-white  p-8 rounded-3xl max-w-[360px] min-h-[360px] w-full h-min dark:bg-slate-900 ">
      <div className={"flex gap-2 "}>
        <span>
          <Lock />
        </span>
        <h1 className="text-2xl font-bold">{name}</h1>
        <span></span>
      </div>
      <h1 className={"text-3xl font-bold"}>
        R$ {new Intl.NumberFormat("pt-BR").format(totalValue / 100)}
      </h1>
      <div className={"flex w-full flex-wrap gap-2"}>
        {tags?.map((tag, i) => (
          <Tag key={i} name={tag?.Tag.name} />
        ))}
      </div>
      <div className={"flex items-center align-middle gap-2"}>
        <div className={"flex ml-3"}>
          {collaborators?.map((collaborator, i) => (
            <Collaborators data={collaborator} key={i} />
          ))}
        </div>
        <Link />
      </div>
      <div className={"flex justify-between"}>
        <p>{likedCount} likes</p>
        <div onClick={() => handleLikeList()}>
          {liked ? (
            <BookmarkFilledIcon width={18} height={24} />
          ) : (
            <BookmarkIcon width={18} height={24} />
          )}
        </div>
      </div>
    </div>
  )
}
