/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link2Icon, PlusIcon } from '@radix-ui/react-icons'
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import Tag from "@/components/Tag";

{/* TODO */ }
{/* adicionar layout */ }
{/* Refatorar grid */ }
{/* [grid de itens] alterar quantidade por span dps de adicionar o layout */ }

export default function List() {


  const [currentImage, setCurrentImage] = useState(null)
  const [addItemModalIsVisible, setAddItemModalIsVisible] = useState(false)


  const drop = useRef(null)


  useEffect(() => {
    drop?.current?.addEventListener('dragover', handleDragOver);
    drop?.current?.addEventListener('drop', handleDrop);

    return () => {
      drop?.current?.removeEventListener('dragover', handleDragOver);
      drop?.current?.removeEventListener('drop', handleDrop);
    };

  }, [addItemModalIsVisible]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };


  const handleFiles = (files) => {

    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = (e) => {
      setCurrentImage(e.target.result);
    };

  };


  const handleDrop = (e) => {

    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files.length) {
      handleFiles(files[0]);
    }


  };

  return (
    <>
      <div className="p-8">
        <header
          className="flex flex-col gap-4"
        >
          <h2
            className="text-2xl font-bold"
          >
            R$ 25.7500,00
          </h2>

          <h2
            className="text-4xl font-bold"
          >
            Nome da Lista
          </h2>
        </header>

        <section className="collaborators mt-4">
          <p
            className="text-lg font-normal"
          >
            Colaboradores:
          </p>

          <div className="mt-2 flex items-center gap-2">
            {Array.from({ length: 2 }).map((_, i) => (
              <div className=" collaborator-item flex w-min items-center gap-2 rounded-full bg-slate-200 px-2 py-1">
                <Avatar className="h-[20px] w-[20px]">
                  <AvatarImage src="https://noticias.maisesports.com.br/wp-content/uploads/2022/06/LoL-Katarina.jpg" alt="@shadcn" />
                  <AvatarFallback>Avatar</AvatarFallback>
                </Avatar>

                <p>
                  @Paçoca
                </p>

              </div>
            ))}

            <Link2Icon />

          </div>
        </section>

        <section className="tags">

          <h2
            className="text-lg font-normal"
          >
            Tags:
          </h2>

          <div className="tag-list flex items-center gap-2">

            {Array.from({ length: 2 }).map((_, i) => (
              <Tag
                key={i}
                name="Informática"
              />
            ))}

            <PlusIcon
              className="ml-3 cursor-pointer"
            />
          </div>

        </section>

        <section className="list">

          <div className="list-header flex items-center justify-end">


            <Dialog
              onOpenChange={
                (open) => {
                  if (!open) {
                    setCurrentImage(null)
                  }

                  setAddItemModalIsVisible(open)

                }}
            >
              <DialogTrigger asChild>
                <Button
                  className="bg-slate-900 text-slate-50"
                >
                  Adicionar
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle>Adicionar Item</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-4 gap-4  py-4">

                  <div
                    ref={drop}
                    className="col-span-4 flex w-full items-center justify-center"
                  >
                    <label
                      className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">

                        {currentImage ? (
                          <img
                            className="col-span-4 h-[200px] w-[100%] rounded-md  object-contain"
                            src={currentImage} alt="" />
                        ) :
                          (
                            <>
                              <svg aria-hidden="true" className="mb-3 h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Clique para enviar</span> ou arraste e solte</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </>
                          )

                        }



                      </div>
                      <input
                        id="dropzone-file" type="file" accept="image/*"
                        onChange={(e) => {

                          if (e.target.files) {
                            const file = e.target.files[0];
                            const reader = new FileReader();
                            if (file && file.type.match('image.*')) {
                              reader.readAsDataURL(file);
                              reader.onload = () => {
                                setCurrentImage(reader.result)
                              }
                            }

                          }

                        }}
                        className="col-span-4 hidden divide-dashed rounded-md border border-slate-200 p-2 focus:border-slate-800 focus:outline-none"
                      />
                    </label>
                  </div>

                  <input type="text" className="col-span-4 rounded-md border border-slate-200 p-2 focus:border-slate-800 focus:outline-none" />
                  <input type="text" className="col-span-3 rounded-md border border-slate-200 p-2 focus:border-slate-800 focus:outline-none" />
                  <input type="text" className="col-span-1 rounded-md border border-slate-200 p-2 focus:border-slate-800 focus:outline-none" />
                  <input type="text" className="col-span-4 rounded-md border border-slate-200 p-2 focus:border-slate-800 focus:outline-none" />
                  <input type="text" className="col-span-4 rounded-md border border-slate-200 p-2 focus:border-slate-800 focus:outline-none" />

                </div>
                <DialogFooter>
                  <Button type="submit">Adicionar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>


          </div>


          <div className="mt-4 grid grid-cols-12 gap-2">



            {Array.from({ length: 8 }).map((_, i) => (
              <div className="col-span-12 bg-slate-100 p-4 md:col-span-4 xl:col-span-3">
                <div className="flex gap-2">
                  <img
                    className="h-[130px] w-[130px] rounded-sm object-cover"
                    src="https://noticias.maisesports.com.br/wp-content/uploads/2022/06/LoL-Katarina.jpg" alt=""
                  />
                  <div className="info flex  gap-1">
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-normal">Gatsadfs sadfs fodasdfsgasdgs</p>
                      <p className="text-sm font-normal">Amazon</p>
                      <p className="text-sm font-bold">R$ 25.7500,00</p>
                    </div>
                  </div>
                  <div className="more">

                  </div>
                </div>
              </div>
            ))}
          </div>



        </section>


      </div>



    </>
  )
}
