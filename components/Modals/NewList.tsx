import {useState} from "react"
import {Button} from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"

export default function NewList() {
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
          <DialogTitle>Nova lista</DialogTitle>

        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Input id="username" placeholder={"Nome"} autoComplete={"off"} className="col-span-3"/>
          <div className="flex gap-4 w-full">

          </div>

        </div>
        <DialogFooter>
          <Button variant={"outline"} onClick={handleCancel}>Cancelar</Button>
          <Button type="submit">Criar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}