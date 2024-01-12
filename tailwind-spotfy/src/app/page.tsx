import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'><HomeIcon />Home</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'><Search />Search</a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'><Library />Your Library</a>
          </nav>
          <nav className='pt-6 mt-6 border-t border-zink-900 flex flex-col gap-3'> 
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 1</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 2</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 3</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 4</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 5</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 6</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 7</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 8</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 9</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Playlist 10</a>
          </nav>
        </aside>
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
            <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
            <a href="" className='bg-white/5 group rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
              <Image width={104} height={104} src="/matue.jpeg"  alt="capa da playlist"  />
              <strong>Máquina do Tempo</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'><Play /></button>
            </a>
          </div>
          <h2 className='font-semibold text-2xl mt-10'>Feito para Matheus Oliveira</h2>
          <div className='grid grid-cols-8 gap-4 mt-4'>
            <div className='bg-white/5 p-3 rounded'>
              <Image className='w-full' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist"  />
            </div>
            <div className='bg-white/5 p-3 rounded'>
              <Image className='w-full' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist"  />
            </div>
            <div className='bg-white/5 p-3 rounded'>
              <Image className='w-full' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist"  />
            </div>
            <div className='bg-white/5 p-3 rounded'>
              <Image className='w-full' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist"  />
            </div>
            <div className='bg-white/5 p-3 rounded'>
              <Image className='w-full' width={120} height={120} src="/matue.jpeg"  alt="capa da playlist"  />
            </div>
          </div>


        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">Footer</footer>
    </div>
  )
}
