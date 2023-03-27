import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookmarkFilledIcon, BookmarkIcon } from "@radix-ui/react-icons"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { LinkIcon, Lock } from "lucide-react"
import { useEffect, useState } from "react"

import Link from "next/link"
import Tag from "@/components/Tag"
import { api } from "@/services/api"

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
  _count: {
    followers: number
    List: number
  }
}
function Collaborators(props: CollaboratorProps) {
  const { User } = props.data

  return (
    <HoverCard>
      <HoverCardTrigger className={"cursor-pointer"}>
        <Avatar className={"ml-[-0.5rem] border"}>
          <AvatarImage src={User.image} />
          <AvatarFallback>{User.name}</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className={"w-min"}>
        <div className="flex flex-col items-start justify-between gap-4">
          <div className={"w-full"}>
            <Avatar>
              <AvatarImage src={User.image} />
              <AvatarFallback>{User.name}</AvatarFallback>
            </Avatar>
          </div>
          <div className={"ml-0"}>
            <b>{User.name}</b>
          </div>
          <div className={"flex gap-8"}>
            <div>
              <p>Listas</p>
              <b>{User._count.List}</b>
            </div>
            <div>
              <p>Seguidores</p>
              <b>{User._count.followers}</b>
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
    if (LikedList?.length > 0) {
      setLiked(true)
    }
    setLikedCount(_count.LikedList)
  }, [])

  return (
    <div className="flex h-min min-h-[360px] w-full max-w-[360px]  flex-col justify-between gap-6 rounded-3xl bg-white p-8 dark:bg-slate-900 ">
      <Link href={id} className={"flex gap-2 "}>
        <span>
          <Lock />
        </span>
        <h1 className="text-2xl font-bold">{name}</h1>
        <span></span>
      </Link>
      <h1 className={"text-3xl font-bold"}>
        R$ {new Intl.NumberFormat("pt-BR").format(totalValue / 100)}
      </h1>
      <div className={"flex w-full flex-wrap gap-2"}>
        {tags?.map((tag, i) => (
          <Tag key={i} name={tag?.Tag.name} />
        ))}
      </div>
      <div className={"flex items-center gap-2 align-middle"}>
        <div className={"ml-3 flex"}>
          {collaborators?.map((collaborator, i) => (
            <Collaborators data={collaborator} key={i} />
          ))}
        </div>
        <LinkIcon />
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
