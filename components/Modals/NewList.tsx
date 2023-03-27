import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { api } from "@/services/api"
import { useRouter } from "next/router"
import { useState } from "react"

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
        router.push(`/${response.data.list}`)
        setOpen(false)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (

    <Dialog
      open={open}
      onOpenChange={(open) => setOpen(open)}
    >
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
