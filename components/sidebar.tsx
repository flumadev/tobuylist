import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function Sidebar() {
  return (
    <div className='w-[300px] flex flex-col h-100 p-6 shrink-0 border-l border-l-slate-200  dark:border-l-slate-700'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Luis Amorim</h2>
        <Avatar className='w-[75px] h-[75px]'>
          <AvatarImage src="https://github.com/shadcn.png" alt="Luis Amorim" />
          <AvatarFallback>LA</AvatarFallback>
        </Avatar>
      </div>
      <hr className='opacity-100 border-t-slate-200 dark:border-t-slate-700 my-10' />
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col pl-3 gap-2 border-l-8 border-t-slate-200 dark:border-t-slate-700'>
          <h6 className='text-base'>Seguidores</h6>
          <h4 className='text-3xl'>13m</h4>
        </div>
        <div className='flex flex-col pl-3 gap-2 border-l-8 border-t-slate-200 dark:border-t-slate-700'>
          <h6 className='text-base'>Listas</h6>
          <h4 className='text-3xl'>132</h4>
        </div>
        <div className='flex flex-col pl-3 gap-2 border-l-8 border-t-slate-200 dark:border-t-slate-700'>
          <h6 className='text-base'>Montante</h6>
          <h4 className='text-3xl'>R$76.542,00</h4>
        </div>
      </div>
      <hr className='opacity-100 border-t-slate-200 dark:border-t-slate-700 my-10' />
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>Feed</h2>
        <div className='flex items-center gap-3'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Luis Amorim" />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className='border border-slate-400 rounded-lg px-2 py-3'>
            <p className='text-sm'>
              <span className='font-bold mr-1'>RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="Luis Amorim" />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className='border border-slate-400 rounded-lg px-2 py-3'>
            <p className='text-sm'>
              <span className='font-bold mr-1'>RPD</span>
              criou uma nova lista
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
