import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-24 bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/matue.jpeg" className='rounded' width={56} height={56} alt='Capa do album Máquina do Tempo' />
        <div className="flex flex-col">
          <strong className='font-normal'>Máquina do Tempo</strong>
          <span className='text-zinc-400'>Matuê</span>
        </div>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <div className='flex items-center gap-6 justify-between'>
          <Shuffle size={20} className='text-zinc-200' />
          <SkipBack size={20} className='text-zinc-200' />
          <button className='w-10 h-10 flex pl-0.5 items-center justify-center rounded-full bg-white text-black'>
            <Play className='' />
          </button>
          <SkipForward size={20} className='text-zinc-200' />
          <Repeat size={20} className='text-zinc-200' />
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-zinc-400'>0:31</span>
          <div className='h-1 rounded-full w-96 bg-zinc-600'>
            <div className='h-1 rounded-full bg-zinc-200 w-20'></div>
          </div>
          <span className='text-xs text-zinc-400'>2:14</span>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className='flex items-center gap-2'>
          <Volume size={20} />
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
            <div className='h-1 rounded-full bg-zinc-200 w-16'></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}