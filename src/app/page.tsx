import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';
import Image from 'next/image';
import { Sidebar } from '../components/Sidebar';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-10'>Boa tarde!</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="" className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded-md overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
          </div>
          <h2 className='font-semibold text-2xl mt-10'>Feito para Matheus Oliveira</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <Image className='w-full rounded-sm' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist" />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 '>Polypyphia, Steve Vai e outros</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <Image className='w-full rounded-sm' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 '>Polypyphia, Steve Vai e outros</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <Image className='w-full rounded-sm' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 '>Polypyphia, Steve Vai e outros</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <Image className='w-full rounded-sm' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 '>Polypyphia, Steve Vai e outros</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
              <Image className='w-full rounded-sm' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong className='font-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-400 '>Polypyphia, Steve Vai e outros</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
