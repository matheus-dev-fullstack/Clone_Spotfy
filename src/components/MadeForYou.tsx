import Image from 'next/image';
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';

export function MadeForYou(){
    return (
        <div className='grid grid-cols-6 gap-4 mt-4'>
        <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-sm' width={140} height={140} src="/this-is-djavan.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>This Is Djanvan</strong>
          <span className='text-sm text-zinc-400 '>This is Djavan. Todos os maiores hits em uma só...</span>
        </a>
        <a href='' className='h-[288px] bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-sm' width={140} height={140} src="/mix-verao2024.jpeg"  alt="capa da playlist" />
          <strong className='font-semibold'>Verão 2024</strong>
          <span className='text-sm text-zinc-400 '>...MORO NUM PAÍS <br /> TROPICAL</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-sm' width={140} height={140} src="/mix-jazz-classics.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Jazz Classics</strong>
          <span className='text-sm text-zinc-400 '>The best tunes in Jazz history. Cover: Wayne Shorter</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-sm' width={140} height={140} src="/novidades.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Radar de Novidades</strong>
          <span className='text-sm text-zinc-400 '>Confira os lançamentos dos artistas que você...</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-sm' width={140} height={140} src="/mix-ano2000.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Mix anos 2000</strong>
          <span className='text-sm text-zinc-400 '>CPM 22, Arlindo Cruz, Paula Sergio e mais</span>
        </a>
        <a href='' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
          <Image className='w-full rounded-sm' width={140} height={140} src="/daily-mix5.jpeg"  alt="capa da playlist"  />
          <strong className='font-semibold'>Daily Mix 1</strong>
          <span className='text-sm text-zinc-400 '>Polypyphia, Steve Vai e outros</span>
        </a>

      </div>
    )
}
