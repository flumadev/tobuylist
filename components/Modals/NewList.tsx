import { useState } from "react"
import { useRouter } from "next/router"
import { api } from "@/services/api"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function NewList() {
  const [open, setOpen] = useState<boolean>()
  const router = useRouter()

  function handleCancel() {
    setOpen(false)
  }

  function createNewList(e) {
    e.preventDefault()
    api
      .post("/api/lists", { name: e.target[0].value })
      .then((response) => {
        console.log(response)
        router.push(`/lists/${response.data.list}`)
        setOpen(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Nova lista</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={createNewList}>
          <DialogHeader>
            <DialogTitle>Nova lista</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Input
              id="username"
              placeholder={"Nome"}
              autoComplete={"off"}
              className="col-span-3"
              required={true}
            />
          </div>
          <DialogFooter>
            <Button variant={"outline"} onClick={handleCancel} type={"button"}>
              Cancelar
            </Button>
            <Button type="submit">Criar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
