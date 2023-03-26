import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NewItem() {
  const [open, setOpen] = useState<boolean>()

  function handleCancel() {
    setOpen(false)
  }

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Nova lista</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar lista</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Input id="username" placeholder={"Nome"} className="col-span-3" />
          <div className="flex gap-4 w-full">
            <Input id="name" placeholder={"Preço"} className="w-full" />
            <Input id="quantity" placeholder={"Quantidade"} className="w-1/4" />
          </div>
          <Input id="link" placeholder={"Link"} className="col-span-3" />
          <Input
            id="store"
            placeholder={"Nome da loja"}
            className="col-span-3"
          />
        </div>
        <DialogFooter>
          <Button variant={"outline"} onClick={handleCancel}>
            Cancelar
          </Button>
          <Button type="submit">Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
