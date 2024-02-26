import Image from 'next/image';
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';

export function Podcasts(){
    return (
        <div className='grid grid-cols-6 gap-4 mt-4'>
        <a href='' className='group bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/linhas-cruzadas.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Linhas Cruzadas</strong>
          <span className='text-sm text-zinc-400 '>Linhas Cruzadas</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/ciencia-sem-fim.jpeg"  alt="capa da playlist" />
          <strong className='font-semibold'>Ciência Sem Fim</strong>
          <span className='text-sm text-zinc-400 '>Estúdios Flow</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/os-socios.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Os Sócios Podcast</strong>
          <span className='text-sm text-zinc-400 '>Grupo Primo</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/cafe-da-manha.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Café da Manhã</strong>
          <span className='text-sm text-zinc-400 '>Spotfy Studios</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/podpeople.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>PodPeople</strong>
          <span className='text-sm text-zinc-400 '>Dra. Ana Beatriz / <br /> PodPeople</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/ticaracaticast.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>TICARACATICAST</strong>
          <span className='text-sm text-zinc-400 '>TICARACATICAST</span>
        </a>

      </div>
    )
}
