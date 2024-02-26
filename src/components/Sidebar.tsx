import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize, Maximize2 } from 'lucide-react';
import Image from 'next/image';

export function Sidebar() {
    return(
        <aside className="fixed w-72 h-full bg-zinc-950 p-3 mb-24">
        <div className='flex items-center gap-2 p-2'>
          <div className='w-3 h-3 bg-red-500 rounded-full' />
          <div className='w-3 h-3 bg-yellow-500 rounded-full' />
          <div className='w-3 h-3 bg-green-500 rounded-full' />
        </div>
        <nav className='space-y-5 mt-10 p-2'>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'><HomeIcon />Início</a>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'><Search />Buscar</a>
          <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'><Library />Sua Biblioteca</a>
        </nav>
        <nav className='pt-6 mt-6 border-t border-zink-900 flex flex-col gap-3 px-2'> 
            <a className="flex items-center gap-3">
              <Image src="/musicas-curtidas.png" className='rounded' width={42} height={42} alt='Capa do album Máquina do Tempo' />
              <div className="flex flex-col py-3">
                <span className='font-semibold text-sm'>Músicas Curtidas</span>
                <span className='text-sm text-zinc-400 p-0'>19 músicas</span>
              </div>
            </a>
            <a className="flex items-center gap-3">
              <Image src="/episodios.png" className='rounded' width={42} height={42} alt='Capa do album Máquina do Tempo' />
              <div className="flex flex-col">
                <span className='font-semibold text-sm'>Seus episódios</span>
                <span className='text-sm text-zinc-400'>Episódios sanvos e baixados</span>
              </div>
            </a>
            <a className="flex items-center gap-3">
              <Image src="/cartas-ao-remetente.jpeg" className='rounded' width={42} height={42} alt='Capa do album Máquina do Tempo' />
              <div className="flex flex-col">
                <span className='font-semibold text-sm'>Cartas Ao Remetente</span>
                <span className='text-sm text-zinc-400'>2014 - Rosa de Saron</span>
              </div>
            </a>
            <a className="flex items-center gap-3">
              <Image src="/radio-grao.jpeg" className='rounded' width={42} height={42} alt='Capa do album Máquina do Tempo' />
              <div className="flex flex-col">
                <span className='font-semibold text-sm'>Rádio de Grão de Areia - Ao ...</span>
                <span className='text-sm text-zinc-400'>Playlist - Spotfy</span>
              </div>
            </a>
            <a className="flex items-center gap-3">
              <Image src="/radio-quando-a-saudade.jpeg" className='rounded' width={42} height={42} alt='Capa do album Máquina do Tempo' />
              <div className="flex flex-col">
                <span className='font-semibold text-sm'>Rádio de Quando A Saudade...</span>
                <span className='text-sm text-zinc-400'>Playlist - Spotfy</span>
              </div>
            </a>
        </nav>
      </aside>
    )
}