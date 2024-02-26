import Image from 'next/image';
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';

export function Recently(){
    return (
        <div className='grid grid-cols-6 gap-4 mt-4'>
        <a href='' className='group bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/radio-henrique-juliano.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Rádio de Henrique e ...</strong>
          <span className='text-sm text-zinc-400 '>Com Matheus & Kauan, <br /> Zé Neto & Cristiano, ...</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/daily-mix4.jpeg"  alt="capa da playlist" />
          <strong className='font-semibold'>Daily Mix 4</strong>
          <span className='text-sm text-zinc-400 '>Matuê, SAUD, Baco Exu do Blues e mais</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/so-olha.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Só Olha (Ao Vivo)</strong>
          <span className='text-sm text-zinc-400 '>Gaab, Mc Daniel, WIU</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/radio-marilia.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Radio de Marília Men...</strong>
          <span className='text-base text-zinc-400 '>Com Maiara & Maraísa, Naiara Azevedo, ...</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/polyphia.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>This Is Polyphia</strong>
          <span className='text-sm text-zinc-400 '>This Is Polyphia. Todos os maiores hits em ...</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-md' width={140} height={140} src="/acorda-pedrinho.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>ACORDA PEDRINHO</strong>
          <span className='text-sm text-zinc-400 '>De impulse hits</span>
        </a>

      </div>
    )
}
