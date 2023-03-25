import React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export const SidebarContent = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4">
        <Avatar className="w-12 md:w-[75px] h-12 md:h-[75px]">
          <AvatarImage src="https://github.com/shadcn.png" alt="Luis Amorim" />
          <AvatarFallback>LA</AvatarFallback>
        </Avatar>
        <h2 className="text-xl md:text-2xl font-bold">Luis Amorim</h2>
      </div>
      <hr className="opacity-100 border-t-slate-200 dark:border-t-slate-700 my-4 md:my-6" />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col pl-3 gap-2 border-l-8 border-t-slate-200 dark:border-t-slate-700">
          <h6 className="text-sm md:text-base">Seguidores</h6>
          <h4 className="text-xl md:text-3xl">13m</h4>
        </div>
        <div className="flex flex-col pl-3 gap-2 border-l-8 border-t-slate-200 dark:border-t-slate-700">
          <h6 className="text-sm md:text-base">Listas</h6>
          <h4 className="text-xl md:text-3xl">132</h4>
        </div>
        <div className="flex flex-col pl-3 gap-2 border-l-8 border-t-slate-200 dark:border-t-slate-700">
          <h6 className="text-sm md:text-base">Montante</h6>
          <h4 className="text-xl md:text-3xl">R$76.542,00</h4>
        </div>
      </div>
      <hr className="opacity-100 border-t-slate-200 dark:border-t-slate-700 my-4 md:my-6" />
      <h2 className="text-lg md:text-2xl mb-4 font-bold">Feed</h2>
      <div className="flex flex-col gap-4 overflow-y-auto">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Luis Amorim"
            />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="border border-slate-400 rounded-lg px-2 py-2 md:py-3">
            <p className="text-xs md:text-sm">
              <span className="font-bold mr-1">RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export function Sidebar() {
  return (
    <div className="hidden sticky top-[65px] lg:top-[81px] h-[calc(100svh-65px)] lg:h-[calc(100svh-81px)] overflow-y-hidden w-[300px] md:flex flex-col h-100 p-6 shrink-0 border-l border-l-slate-200  dark:border-l-slate-700">
      <SidebarContent />
    </div>
  )
}
